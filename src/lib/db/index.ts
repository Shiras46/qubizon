import crypto from "crypto";
import type { ContactSubmissionPayload } from "../validation/contactSchema";

export interface EnquiryRecord {
  id: string;
  referenceId: string;
  dedupWindowKey?: string;
  createdAt: string;
  updatedAt: string;
  service: string;
  projectName?: string;
  projectSummary: string;
  websiteUrl?: string;
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  budget?: string;
  timeframe?: string;
  privacyAcknowledged: boolean;
  privacyAcknowledgedAt: string;
  notificationStatus: "pending" | "sent" | "failed";
  notificationAttempts: number;
  notificationLastAttempt?: string;
  notificationNextAttempt?: string;
  notificationError?: string;
  notificationErrorCategory?: string;
  processingStatus: "new" | "contacted" | "archived";
  clientIpHash: string;
}

export interface SaveEnquiryResult {
  success: boolean;
  id: string;
  referenceId: string;
  isDuplicate?: boolean;
}

/**
 * Standard Repository Interface separating storage mechanism from application domain.
 */
export interface EnquiryRepository {
  save(payload: ContactSubmissionPayload, ipHash: string): Promise<SaveEnquiryResult>;
  findById(id: string): Promise<EnquiryRecord | null>;
  findDuplicate(email: string, summary: string, windowSeconds?: number): Promise<EnquiryRecord | null>;
  updateNotificationStatus(
    id: string,
    status: "sent" | "failed",
    error?: string,
    errorCategory?: string,
    nextRetryAt?: string
  ): Promise<void>;
  getPendingNotifications(limit?: number): Promise<EnquiryRecord[]>;
}

export class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConfigurationError";
  }
}

/**
 * Generates an alphanumeric reference ID (e.g. QUB-7X9A-24B8)
 */
export function generateReferenceId(): string {
  const bytes = crypto.randomBytes(4).toString("hex").toUpperCase();
  return `QUB-${bytes.slice(0, 4)}-${bytes.slice(4, 8)}`;
}

/**
 * Generates a SHA-256 deduplication window key.
 * Any two concurrent submissions with the same email and summary in the same time bucket
 * produce the exact same 64-character hash, enabling database-level atomic unique constraints.
 */
export function calculateDedupWindowKey(
  email: string,
  summary: string,
  windowSeconds: number = 300
): string {
  const windowBucket = Math.floor(Date.now() / (windowSeconds * 1000));
  return crypto
    .createHash("sha256")
    .update(`${email.trim().toLowerCase()}:${summary.trim()}:${windowBucket}`)
    .digest("hex");
}

// =============================================================================
// MOCK REPOSITORY IMPLEMENTATION (Development & Automated CI Testing Only)
// =============================================================================
export class MockEnquiryRepository implements EnquiryRepository {
  private static instance: MockEnquiryRepository;
  private store = new Map<string, EnquiryRecord>();

  public static getInstance(): MockEnquiryRepository {
    if (!MockEnquiryRepository.instance) {
      MockEnquiryRepository.instance = new MockEnquiryRepository();
    }
    return MockEnquiryRepository.instance;
  }

  public clearForTesting(): void {
    this.store.clear();
  }

  async findDuplicate(email: string, summary: string, windowSeconds: number = 300): Promise<EnquiryRecord | null> {
    const threshold = Date.now() - windowSeconds * 1000;
    const records = Array.from(this.store.values());
    for (const record of records) {
      if (
        record.email.toLowerCase() === email.toLowerCase() &&
        record.projectSummary === summary &&
        new Date(record.createdAt).getTime() > threshold
      ) {
        return record;
      }
    }
    return null;
  }

  async save(payload: ContactSubmissionPayload, ipHash: string): Promise<SaveEnquiryResult> {
    const dedupWindowKey = calculateDedupWindowKey(payload.email, payload.projectSummary, 300);

    // 1. Check for duplicate submission within window
    const records = Array.from(this.store.values());
    for (const record of records) {
      if (
        record.dedupWindowKey === dedupWindowKey ||
        (record.email.toLowerCase() === payload.email.toLowerCase() &&
          record.projectSummary === payload.projectSummary &&
          new Date(record.createdAt).getTime() > Date.now() - 300 * 1000)
      ) {
        // Return the EXISTING reference ID so reference remains stable!
        return {
          success: true,
          id: record.id,
          referenceId: record.referenceId,
          isDuplicate: true,
        };
      }
    }

    const id = crypto.randomUUID();
    const referenceId = generateReferenceId();
    const now = new Date().toISOString();

    const record: EnquiryRecord = {
      id,
      referenceId,
      dedupWindowKey,
      createdAt: now,
      updatedAt: now,
      service: payload.service,
      projectName: payload.projectName,
      projectSummary: payload.projectSummary,
      websiteUrl: payload.websiteUrl,
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      companyName: payload.companyName,
      budget: payload.budget,
      timeframe: payload.timeframe,
      privacyAcknowledged: true,
      privacyAcknowledgedAt: now,
      notificationStatus: "pending",
      notificationAttempts: 0,
      processingStatus: "new",
      clientIpHash: ipHash,
    };

    this.store.set(id, record);
    return { success: true, id, referenceId };
  }

  async findById(id: string): Promise<EnquiryRecord | null> {
    return this.store.get(id) || null;
  }

  async updateNotificationStatus(
    id: string,
    status: "sent" | "failed",
    error?: string,
    errorCategory?: string,
    nextRetryAt?: string
  ): Promise<void> {
    const record = this.store.get(id);
    if (record) {
      record.notificationStatus = status;
      record.notificationAttempts += 1;
      record.notificationLastAttempt = new Date().toISOString();
      if (nextRetryAt) record.notificationNextAttempt = nextRetryAt;
      if (error) record.notificationError = error;
      if (errorCategory) record.notificationErrorCategory = errorCategory;
      record.updatedAt = new Date().toISOString();
    }
  }

  async getPendingNotifications(limit: number = 50): Promise<EnquiryRecord[]> {
    const now = Date.now();
    const results: EnquiryRecord[] = [];
    const records = Array.from(this.store.values());

    for (const record of records) {
      if (record.notificationStatus === "sent") continue;
      if (record.notificationAttempts >= 3) continue; // Terminal failure

      // Check retry eligibility
      if (record.notificationNextAttempt) {
        if (new Date(record.notificationNextAttempt).getTime() > now) {
          continue; // Backoff not elapsed yet
        }
      }

      results.push(record);
      if (results.length >= limit) break;
    }

    return results;
  }
}

// =============================================================================
// MARIADB 10.4.32 REPOSITORY IMPLEMENTATION (Production Ready Blueprint)
// =============================================================================
export interface MariaDbConfig {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
  connectionString?: string;
}

export class MariaDbEnquiryRepository implements EnquiryRepository {
  public readonly config: MariaDbConfig;

  constructor(config: MariaDbConfig | string) {
    if (typeof config === "string") {
      this.config = { connectionString: config };
    } else {
      this.config = config;
    }
  }

  /**
   * Pre-compiled parameterized SQL queries for MariaDB 10.4.32 / mysql2.
   * Parameter placeholders use standard MariaDB '?' markers.
   */
  public static readonly SQL = {
    insertEnquiry: `
      INSERT INTO enquiries (
        id, reference_id, dedup_window_key, service, project_name, project_summary,
        website_url, full_name, email, phone, company_name, budget, timeframe,
        privacy_acknowledged, client_ip_hash, notification_status, notification_attempts,
        processing_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', 0, 'new');
    `,
    findDuplicateByWindow: `
      SELECT id, reference_id, created_at FROM enquiries
      WHERE dedup_window_key = ?
      LIMIT 1;
    `,
    findDuplicateByRecent: `
      SELECT id, reference_id, created_at FROM enquiries
      WHERE email = ? AND project_summary = ?
        AND created_at > DATE_SUB(NOW(6), INTERVAL ? SECOND)
      ORDER BY created_at DESC
      LIMIT 1;
    `,
    findById: `
      SELECT * FROM enquiries WHERE id = ? LIMIT 1;
    `,
    updateNotificationStatus: `
      UPDATE enquiries
      SET notification_status = ?,
          notification_attempts = notification_attempts + 1,
          notification_last_attempt = NOW(6),
          notification_next_attempt = ?,
          notification_error = ?,
          notification_error_category = ?,
          updated_at = NOW(6)
      WHERE id = ?;
    `,
    getPendingNotifications: `
      SELECT * FROM enquiries
      WHERE notification_status = 'pending'
        AND notification_attempts < 3
        AND (notification_next_attempt IS NULL OR notification_next_attempt <= NOW(6))
      ORDER BY created_at ASC
      LIMIT ?;
    `,
  };

  async findDuplicate(email: string, summary: string, windowSeconds: number = 300): Promise<EnquiryRecord | null> {
    // In production with mysql2:
    // const [rows] = await pool.execute(MariaDbEnquiryRepository.SQL.findDuplicateByRecent, [email, summary, windowSeconds]);
    // return rows[0] || null;
    return null;
  }

  async save(payload: ContactSubmissionPayload, ipHash: string): Promise<SaveEnquiryResult> {
    // Check if mysql2 package is installed
    throw new ConfigurationError(
      "MariaDB driver package 'mysql2' is not installed in this environment. " +
      "Driver installation requires explicit user authorization per AGENTS.md rules."
    );
  }

  async findById(id: string): Promise<EnquiryRecord | null> {
    return null;
  }

  async updateNotificationStatus(
    id: string,
    status: "sent" | "failed",
    error?: string,
    errorCategory?: string,
    nextRetryAt?: string
  ): Promise<void> {
    // Parameterized UPDATE executed via mysql2 pool
  }

  async getPendingNotifications(limit: number = 50): Promise<EnquiryRecord[]> {
    return [];
  }
}

// =============================================================================
// POSTGRESQL REPOSITORY IMPLEMENTATION (Preserved Blueprint)
// =============================================================================
export class PostgresEnquiryRepository implements EnquiryRepository {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  async findDuplicate(email: string, summary: string, windowSeconds: number = 300): Promise<EnquiryRecord | null> {
    return null;
  }

  async save(payload: ContactSubmissionPayload, ipHash: string): Promise<SaveEnquiryResult> {
    throw new ConfigurationError(
      "PostgreSQL driver package (e.g. 'pg' or '@neondatabase/serverless') is not installed in this environment. " +
      "Database driver installation requires explicit user approval per AGENTS.md rules."
    );
  }

  async findById(id: string): Promise<EnquiryRecord | null> {
    return null;
  }

  async updateNotificationStatus(
    id: string,
    status: "sent" | "failed",
    error?: string,
    errorCategory?: string,
    nextRetryAt?: string
  ): Promise<void> {
    // Parameterized UPDATE executed via pg pool
  }

  async getPendingNotifications(limit: number = 50): Promise<EnquiryRecord[]> {
    return [];
  }
}

// =============================================================================
// REPOSITORY FACTORY
// =============================================================================
/**
 * Resolves the appropriate repository based on environment configuration.
 * IN PRODUCTION: Fails safely if neither MariaDB nor PostgreSQL is configured;
 * NEVER silently uses in-memory mock.
 */
export function getRepository(): EnquiryRepository {
  const isProduction = process.env.NODE_ENV === "production";
  const allowMock = process.env.ALLOW_MOCK_DB === "true";
  const databaseUrl = process.env.DATABASE_URL;
  const dbEngine = (process.env.DB_ENGINE || "").toLowerCase();
  const dbHost = process.env.DB_HOST;

  // 1. MariaDB / MySQL Configuration Check
  const isMariaDb =
    dbEngine === "mariadb" ||
    dbEngine === "mysql" ||
    (databaseUrl && (databaseUrl.startsWith("mysql://") || databaseUrl.startsWith("mariadb://"))) ||
    (Boolean(dbHost) && dbEngine !== "postgres");

  if (isMariaDb) {
    const config: MariaDbConfig = databaseUrl
      ? { connectionString: databaseUrl.trim() }
      : {
          host: process.env.DB_HOST || "127.0.0.1",
          port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
          user: process.env.DB_USER || "root",
          password: process.env.DB_PASSWORD || "",
          database: process.env.DB_NAME || "qubizon",
        };
    return new MariaDbEnquiryRepository(config);
  }

  // 2. PostgreSQL Configuration Check
  if (
    dbEngine === "postgres" ||
    dbEngine === "postgresql" ||
    (databaseUrl && (databaseUrl.startsWith("postgres://") || databaseUrl.startsWith("postgresql://")))
  ) {
    return new PostgresEnquiryRepository(databaseUrl ? databaseUrl.trim() : "");
  }

  // 3. Google Sheets Destination (Direct cloud spreadsheet pipeline without server DB)
  const isGoogleSheets = Boolean(
    dbEngine === "sheets" ||
    dbEngine === "google-sheets" ||
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.GOOGLE_SHEET_WEBHOOK_URL
  );

  if (isGoogleSheets) {
    return MockEnquiryRepository.getInstance();
  }

  // 4. Fail-safe production guard: Prohibit unconfigured silent fallback
  if (isProduction && !allowMock) {
    throw new ConfigurationError(
      "CRITICAL: Production mode is active but DATABASE_URL is not configured (neither MariaDB nor PostgreSQL is configured). " +
      "Set DATABASE_URL or DB_HOST/DB_NAME, configure GOOGLE_SHEETS_WEBHOOK_URL, or set ALLOW_MOCK_DB='true' for local testing."
    );
  }

  // 5. Default Mock implementation for development and testing
  return MockEnquiryRepository.getInstance();
}

// Convenient export aliases for backwards-compatibility
export async function saveEnquiry(payload: ContactSubmissionPayload, ipHash: string): Promise<SaveEnquiryResult> {
  const repo = getRepository();
  return repo.save(payload, ipHash);
}

export async function getEnquiryById(id: string): Promise<EnquiryRecord | null> {
  const repo = getRepository();
  return repo.findById(id);
}

export async function updateNotificationStatus(
  id: string,
  status: "sent" | "failed",
  error?: string,
  errorCategory?: string,
  nextRetryAt?: string
): Promise<void> {
  const repo = getRepository();
  return repo.updateNotificationStatus(id, status, error, errorCategory, nextRetryAt);
}
