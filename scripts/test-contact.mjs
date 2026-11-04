// Automated Security, Reliability & Validation Test Suite for Qubizon Contact System
// Run with: node --experimental-strip-types scripts/test-contact.mjs

import assert from "node:assert";

// Imports
const { validateContactSubmission, sanitizeString } = await import("../src/lib/validation/contactSchema.ts");
const { checkRateLimit, hashIpAddress, resetRateLimitForTesting, extractClientIp } = await import("../src/lib/security/rateLimiter.ts");
const {
  saveEnquiry,
  getEnquiryById,
  updateNotificationStatus,
  getRepository,
  MockEnquiryRepository,
  MariaDbEnquiryRepository,
  calculateDedupWindowKey,
  ConfigurationError,
} = await import("../src/lib/db/index.ts");
const {
  sendEnquiryNotification,
  escapeHtml,
  categorizeEmailError,
  calculateNextRetry,
  processOutboxQueue,
} = await import("../src/lib/email/index.ts");

console.log("\n🧪 STARTING QUBIZON BACKEND RELIABILITY & SECURITY TEST SUITE\n");

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ [PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ [FAIL] ${name}:`, err.message);
  }
}

async function runAsyncTest(name, fn) {
  totalTests++;
  try {
    await fn();
    console.log(`  ✓ [PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ [FAIL] ${name}:`, err.message);
  }
}

// -----------------------------------------------------------------------------
// TEST SUITE 1: INPUT VALIDATION & SANITIZATION
// -----------------------------------------------------------------------------
console.log("--- Test Suite 1: Input Validation & Sanitization ---");

runTest("Valid payload passes validation", () => {
  const payload = {
    service: "web-development",
    projectSummary: "We need a complete Next.js App Router redesign with high performance.",
    fullName: "Alex Mercer",
    email: "alex@example.com",
    privacyAcknowledged: true,
  };
  const result = validateContactSubmission(payload);
  assert.strictEqual(result.isValid, true);
  if (result.isValid) {
    assert.strictEqual(result.data.email, "alex@example.com");
    assert.strictEqual(result.data.service, "web-development");
  }
});

runTest("Missing required fields are rejected", () => {
  const result = validateContactSubmission({});
  assert.strictEqual(result.isValid, false);
  if (!result.isValid) {
    assert(result.errors.service, "service should be required");
    assert(result.errors.projectSummary, "projectSummary should be required");
    assert(result.errors.fullName, "fullName should be required");
    assert(result.errors.email, "email should be required");
    assert(result.errors.privacyAcknowledged, "privacyAcknowledged should be required");
  }
});

runTest("Invalid email syntax is rejected (e.g. missing @, consecutive dots, invalid TLD)", () => {
  const invalidEmails = ["notanemail", "test@", "@domain.com", "test@domain", "test..test@domain.com"];
  for (const email of invalidEmails) {
    const result = validateContactSubmission({
      service: "seo",
      projectSummary: "Valid summary with sufficient character count.",
      fullName: "Test User",
      email,
      privacyAcknowledged: true,
    });
    assert.strictEqual(result.isValid, false, `Expected ${email} to be rejected`);
    if (!result.isValid) {
      assert(result.errors.email, `Expected email error for ${email}`);
    }
  }
});

runTest("Invalid enum values for service, budget, and timeframe are rejected", () => {
  const result = validateContactSubmission({
    service: "invalid-service-name",
    budget: "million-dollars",
    timeframe: "yesterday",
    projectSummary: "Valid summary with sufficient character count.",
    fullName: "Test User",
    email: "user@example.com",
    privacyAcknowledged: true,
  });
  assert.strictEqual(result.isValid, false);
  if (!result.isValid) {
    assert(result.errors.service);
    assert(result.errors.budget);
    assert(result.errors.timeframe);
  }
});

runTest("Unexpected / unallowed fields are strictly rejected", () => {
  const result = validateContactSubmission({
    service: "web-development",
    projectSummary: "Valid summary with sufficient character count.",
    fullName: "Test User",
    email: "user@example.com",
    privacyAcknowledged: true,
    isAdmin: true, // Malicious injection
    role: "superadmin",
  });
  assert.strictEqual(result.isValid, false);
});

runTest("Honeypot field triggers automated submission detection", () => {
  const result = validateContactSubmission({
    service: "web-development",
    projectSummary: "Valid summary with sufficient character count.",
    fullName: "Bot User",
    email: "bot@example.com",
    privacyAcknowledged: true,
    website_confirm: "http://spam-link.ru", // Bot filled honeypot
  });
  assert.strictEqual(result.isValid, false);
  if (!result.isValid) {
    assert.strictEqual(result.errors._root, "Automated submission detected.");
  }
});

runTest("Null bytes and control characters are sanitized", () => {
  const dirty = "Hello\x00World\x1F!";
  const clean = sanitizeString(dirty);
  assert.strictEqual(clean, "HelloWorld!");
});

// -----------------------------------------------------------------------------
// TEST SUITE 2: ABUSE PROTECTION, RATE LIMITING & PROXY HEADERS
// -----------------------------------------------------------------------------
console.log("\n--- Test Suite 2: Abuse Protection, Rate Limiting & Proxy Headers ---");

runTest("IP addresses are hashed with one-way SHA-256", () => {
  const ip1 = "192.168.1.100";
  const hash1 = hashIpAddress(ip1);
  const hash2 = hashIpAddress(ip1);
  assert.strictEqual(hash1, hash2, "Same IP should produce identical hash");
  assert.strictEqual(hash1.length, 64, "SHA-256 hex string should be 64 characters");
  assert.notStrictEqual(hash1, ip1, "Hash must never equal raw IP");
});

await runAsyncTest("Rate limiting allows up to limit and blocks on threshold", async () => {
  const testHash = "test-client-hash-12345";
  resetRateLimitForTesting(testHash);

  // Default limit is 5 requests per hour
  for (let i = 1; i <= 5; i++) {
    const res = await checkRateLimit(testHash);
    assert.strictEqual(res.isAllowed, true, `Request ${i} should be allowed`);
  }

  // 6th request must be blocked
  const blockedRes = await checkRateLimit(testHash);
  assert.strictEqual(blockedRes.isAllowed, false, "6th request should be blocked by rate limiter");
  assert.strictEqual(blockedRes.remaining, 0);
  assert(blockedRes.resetSeconds > 0);
});

runTest("Authoritative edge proxy headers are prioritized over x-forwarded-for", () => {
  const headers = new Headers();
  headers.set("cf-connecting-ip", "203.0.113.195");
  headers.set("x-real-ip", "198.51.100.12");
  headers.set("x-forwarded-for", "192.0.2.1, 10.0.0.1");

  const ip = extractClientIp(headers);
  assert.strictEqual(ip, "203.0.113.195", "cf-connecting-ip should take highest precedence");

  // Fallback to x-real-ip if cf-connecting-ip absent
  const headers2 = new Headers();
  headers2.set("x-real-ip", "198.51.100.12");
  headers2.set("x-forwarded-for", "192.0.2.1");
  assert.strictEqual(extractClientIp(headers2), "198.51.100.12");
});

// -----------------------------------------------------------------------------
// TEST SUITE 3: DATABASE PERSISTENCE, STABLE REFS & PRODUCTION MODE GUARDS
// -----------------------------------------------------------------------------
console.log("\n--- Test Suite 3: Database Persistence, Stable Refs & Production Guards ---");

await runAsyncTest("Enquiry is persisted with server-generated UUID & Reference ID", async () => {
  const payload = {
    service: "seo",
    projectSummary: "Audit our organic search architecture and Schema.org modeling.",
    fullName: "Taylor Reed",
    email: "taylor@reed-tech.io",
    privacyAcknowledged: true,
  };
  const saveRes = await saveEnquiry(payload, "hash-taylor");
  assert.strictEqual(saveRes.success, true);
  assert(saveRes.referenceId.startsWith("QUB-"), "Reference ID should start with QUB-");
  assert(saveRes.id.length > 20, "ID should be a valid UUID");

  const record = await getEnquiryById(saveRes.id);
  assert(record !== null);
  assert.strictEqual(record.fullName, "Taylor Reed");
  assert.strictEqual(record.notificationStatus, "pending");
  assert.strictEqual(record.processingStatus, "new");
});

await runAsyncTest("Duplicate submissions return STABLE existing Reference ID", async () => {
  const payload = {
    service: "paid-advertising",
    projectSummary: "Immediate identical request sent twice due to network double-click.",
    fullName: "DoubleClick User",
    email: "stable-ref@example.com",
    privacyAcknowledged: true,
  };

  const first = await saveEnquiry(payload, "hash-stable");
  assert.strictEqual(first.success, true);
  assert(!first.isDuplicate);

  // Second identical submission within 5-minute window
  const second = await saveEnquiry(payload, "hash-stable");
  assert.strictEqual(second.success, true);
  assert.strictEqual(second.isDuplicate, true, "Second submission should be flagged as duplicate");
  assert.strictEqual(second.referenceId, first.referenceId, "Reference ID MUST remain stable for duplicate");
});

runTest("Production mode fails safely if DATABASE_URL is missing and mock is disallowed", () => {
  const prevEnv = process.env.NODE_ENV;
  const prevMock = process.env.ALLOW_MOCK_DB;
  const prevUrl = process.env.DATABASE_URL;

  try {
    process.env.NODE_ENV = "production";
    process.env.ALLOW_MOCK_DB = "false";
    delete process.env.DATABASE_URL;

    assert.throws(
      () => {
        getRepository();
      },
      (err) => {
        assert(err instanceof ConfigurationError);
        assert(err.message.includes("DATABASE_URL is not configured"));
        return true;
      },
      "Should throw ConfigurationError in production when DATABASE_URL is missing"
    );
  } finally {
    process.env.NODE_ENV = prevEnv;
    if (prevMock) process.env.ALLOW_MOCK_DB = prevMock;
    if (prevUrl) process.env.DATABASE_URL = prevUrl;
  }
});

// -----------------------------------------------------------------------------
// TEST SUITE 4: RECOVERABLE OUTBOX, BACKOFF & ERROR CATEGORIZATION
// -----------------------------------------------------------------------------
console.log("\n--- Test Suite 4: Recoverable Outbox, Backoff & Error Categorization ---");

runTest("HTML characters in user input are safely escaped in emails", () => {
  const maliciousInput = '<script>alert("xss")</script> & "quotes" \'apostrophe\'';
  const escaped = escapeHtml(maliciousInput);
  assert(!escaped.includes("<script>"), "HTML script tag must be escaped");
  assert(escaped.includes("&lt;script&gt;"));
  assert(escaped.includes("&quot;quotes&quot;"));
});

runTest("Email errors are categorized into safe audit categories without leaking PII", () => {
  assert.strictEqual(categorizeEmailError("ETIMEDOUT connection refused"), "network_timeout");
  assert.strictEqual(categorizeEmailError("401 Unauthorized invalid api_key"), "provider_auth");
  assert.strictEqual(categorizeEmailError("429 Too Many Requests rate limit exceeded"), "rate_limit");
  assert.strictEqual(categorizeEmailError("550 Invalid mailbox recipient"), "invalid_recipient");
  assert.strictEqual(categorizeEmailError("Generic service unavailable"), "provider_error");
});

runTest("Exponential backoff calculates bounded retry timestamps", () => {
  const retry1 = calculateNextRetry(1);
  assert(retry1 !== null);
  const diff1 = new Date(retry1).getTime() - Date.now();
  assert(diff1 > 4 * 60 * 1000 && diff1 <= 5 * 60 * 1000, "Attempt 1 should retry in ~5 minutes");

  const retry2 = calculateNextRetry(2);
  assert(retry2 !== null);
  const diff2 = new Date(retry2).getTime() - Date.now();
  assert(diff2 > 29 * 60 * 1000 && diff2 <= 30 * 60 * 1000, "Attempt 2 should retry in ~30 minutes");

  const retry3 = calculateNextRetry(3);
  assert.strictEqual(retry3, null, "Attempt 3+ should be terminal failure (no automated retry)");
});

await runAsyncTest("Outbox processing queue dispatches eligible pending enquiries", async () => {
  const mockRepo = MockEnquiryRepository.getInstance();
  mockRepo.clearForTesting();

  // Save 2 mock enquiries
  await mockRepo.save(
    {
      service: "web-development",
      projectSummary: "Outbox worker test enquiry 1.",
      fullName: "Outbox User 1",
      email: "outbox1@example.com",
      privacyAcknowledged: true,
    },
    "hash-outbox-1"
  );

  await mockRepo.save(
    {
      service: "seo",
      projectSummary: "Outbox worker test enquiry 2.",
      fullName: "Outbox User 2",
      email: "outbox2@example.com",
      privacyAcknowledged: true,
    },
    "hash-outbox-2"
  );

  // Run outbox processor in mock mode
  const res = await processOutboxQueue(mockRepo, 10);
  assert.strictEqual(res.processed, 2);
  assert.strictEqual(res.succeeded, 2);
  assert.strictEqual(res.failed, 0);

  // Running again should process 0 (already marked 'sent')
  const resSecondRun = await processOutboxQueue(mockRepo, 10);
  assert.strictEqual(resSecondRun.processed, 0, "Sent notifications must not be processed again");
});

await runAsyncTest("Resend provider without API key explicitly fails instead of silent mock", async () => {
  const originalProvider = process.env.EMAIL_PROVIDER;
  const originalKey = process.env.EMAIL_API_KEY;
  try {
    process.env.EMAIL_PROVIDER = "resend";
    delete process.env.EMAIL_API_KEY;

    const mockRecord = {
      id: "test-resend-fail",
      referenceId: "QUB-FAIL-0001",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      service: "web-development",
      projectSummary: "Test summary for missing API key.",
      fullName: "Key Test User",
      email: "keytest@example.com",
      privacyAcknowledged: true,
      privacyAcknowledgedAt: new Date().toISOString(),
      notificationStatus: "pending",
      notificationAttempts: 0,
      processingStatus: "new",
      clientIpHash: "hash-key-test",
    };

    const res = await sendEnquiryNotification(mockRecord);
    assert.strictEqual(res.success, false, "Should fail when EMAIL_API_KEY is missing");
    assert(res.error.includes("EMAIL_API_KEY"));
  } finally {
    process.env.EMAIL_PROVIDER = originalProvider;
    if (originalKey) process.env.EMAIL_API_KEY = originalKey;
  }
});

// -----------------------------------------------------------------------------
// TEST SUITE 5: MARIADB 10.4.32 PERSISTENCE ARCHITECTURE & SAFETY
// -----------------------------------------------------------------------------
console.log("--- Test Suite 5: MariaDB 10.4.32 Architecture & Production Safety ---");

runTest("MariaDbEnquiryRepository exposes valid parameterized SQL with '?' placeholders", () => {
  const sql = MariaDbEnquiryRepository.SQL;
  assert(sql.insertEnquiry.includes("VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', 0, 'new')"));
  assert(sql.findDuplicateByWindow.includes("WHERE dedup_window_key = ?"));
  assert(sql.findDuplicateByRecent.includes("INTERVAL ? SECOND"));
  assert(sql.updateNotificationStatus.includes("notification_last_attempt = NOW(6)"));
  assert(sql.getPendingNotifications.includes("notification_status = 'pending'"));
});

runTest("calculateDedupWindowKey generates deterministic SHA-256 hash for identical email, summary, and window", () => {
  const email = "client@example.com";
  const summary = "Full redesign of our web platform";
  const key1 = calculateDedupWindowKey(email, summary, 300);
  const key2 = calculateDedupWindowKey("CLIENT@example.com ", summary, 300);
  assert.strictEqual(key1.length, 64, "Key must be 64-character SHA-256 hex string");
  assert.strictEqual(key1, key2, "Window key must be case-insensitive for email");
});

runTest("calculateDedupWindowKey differs across different project summaries", () => {
  const email = "client@example.com";
  const key1 = calculateDedupWindowKey(email, "Summary A", 300);
  const key2 = calculateDedupWindowKey(email, "Summary B", 300);
  assert.notStrictEqual(key1, key2, "Different summaries must generate distinct window keys");
});

runTest("getRepository() returns MariaDbEnquiryRepository when DB_ENGINE='mariadb' or DB_HOST='127.0.0.1'", () => {
  const origEngine = process.env.DB_ENGINE;
  const origHost = process.env.DB_HOST;
  const origUrl = process.env.DATABASE_URL;
  try {
    delete process.env.DATABASE_URL;
    process.env.DB_ENGINE = "mariadb";
    process.env.DB_HOST = "127.0.0.1";
    const repo = getRepository();
    assert(repo instanceof MariaDbEnquiryRepository, "Should return MariaDbEnquiryRepository instance");
    assert.strictEqual(repo.config.host, "127.0.0.1");
    assert.strictEqual(repo.config.database, "qubizon");
  } finally {
    if (origEngine) process.env.DB_ENGINE = origEngine; else delete process.env.DB_ENGINE;
    if (origHost) process.env.DB_HOST = origHost; else delete process.env.DB_HOST;
    if (origUrl) process.env.DATABASE_URL = origUrl; else delete process.env.DATABASE_URL;
  }
});

await runAsyncTest("MariaDbEnquiryRepository throws ConfigurationError when driver 'mysql2' is absent", async () => {
  const repo = new MariaDbEnquiryRepository({ host: "127.0.0.1", database: "qubizon" });
  await assert.rejects(
    async () => {
      await repo.save(
        {
          service: "web-development",
          projectSummary: "Test summary for MariaDB driver check.",
          fullName: "MariaDB Test User",
          email: "mariadb@example.com",
          privacyAcknowledged: true,
        },
        "test-hash-mariadb"
      );
    },
    (err) => {
      assert(err instanceof ConfigurationError);
      assert(err.message.includes("mysql2"));
      return true;
    }
  );
});

runTest("Production mode safely fails when neither MariaDB nor PostgreSQL is configured and ALLOW_MOCK_DB is false", () => {
  const origEnv = process.env.NODE_ENV;
  const origUrl = process.env.DATABASE_URL;
  const origEngine = process.env.DB_ENGINE;
  const origHost = process.env.DB_HOST;
  const origMock = process.env.ALLOW_MOCK_DB;
  try {
    process.env.NODE_ENV = "production";
    process.env.ALLOW_MOCK_DB = "false";
    delete process.env.DATABASE_URL;
    delete process.env.DB_ENGINE;
    delete process.env.DB_HOST;

    assert.throws(
      () => {
        getRepository();
      },
      (err) => {
        assert(err instanceof ConfigurationError);
        assert(err.message.includes("neither MariaDB nor PostgreSQL is configured"));
        return true;
      }
    );
  } finally {
    process.env.NODE_ENV = origEnv;
    if (origUrl) process.env.DATABASE_URL = origUrl; else delete process.env.DATABASE_URL;
    if (origEngine) process.env.DB_ENGINE = origEngine; else delete process.env.DB_ENGINE;
    if (origHost) process.env.DB_HOST = origHost; else delete process.env.DB_HOST;
    if (origMock) process.env.ALLOW_MOCK_DB = origMock; else delete process.env.ALLOW_MOCK_DB;
  }
});

// --- Test Suite 6: Google Sheets Direct Integration ---
console.log("\n--- Test Suite 6: Google Sheets Direct Integration ---");

runTest("getRepository() returns repository without error when DB_ENGINE='sheets'", () => {
  const origEngine = process.env.DB_ENGINE;
  const origUrl = process.env.DATABASE_URL;
  const origEnv = process.env.NODE_ENV;
  try {
    process.env.NODE_ENV = "production";
    delete process.env.DATABASE_URL;
    process.env.DB_ENGINE = "sheets";
    const repo = getRepository();
    assert(repo, "Should return repository instance when DB_ENGINE='sheets'");
  } finally {
    process.env.NODE_ENV = origEnv;
    if (origEngine) process.env.DB_ENGINE = origEngine; else delete process.env.DB_ENGINE;
    if (origUrl) process.env.DATABASE_URL = origUrl; else delete process.env.DATABASE_URL;
  }
});

runTest("getRepository() returns repository without error when GOOGLE_SHEETS_WEBHOOK_URL is set", () => {
  const origUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const origDbUrl = process.env.DATABASE_URL;
  const origEnv = process.env.NODE_ENV;
  try {
    process.env.NODE_ENV = "production";
    delete process.env.DATABASE_URL;
    delete process.env.DB_ENGINE;
    process.env.GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/test/exec";
    const repo = getRepository();
    assert(repo, "Should return repository instance when GOOGLE_SHEETS_WEBHOOK_URL is configured");
  } finally {
    process.env.NODE_ENV = origEnv;
    if (origUrl) process.env.GOOGLE_SHEETS_WEBHOOK_URL = origUrl; else delete process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (origDbUrl) process.env.DATABASE_URL = origDbUrl; else delete process.env.DATABASE_URL;
  }
});

console.log(`\n=============================================================`);
console.log(`TEST SUITE RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
console.log(`=============================================================\n`);

if (passedTests !== totalTests) {
  process.exit(1);
}
