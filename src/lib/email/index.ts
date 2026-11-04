import type { EnquiryRecord, EnquiryRepository } from "../db";

export interface EmailDispatchResult {
  success: boolean;
  provider: string;
  messageId?: string;
  error?: string;
  errorCategory?: string;
}

/**
 * Escapes HTML characters to prevent email-injection or rendering attacks.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Classifies error message into a safe audit category without exposing internal data or secrets.
 */
export function categorizeEmailError(errorStr: string): string {
  const lower = errorStr.toLowerCase();
  if (lower.includes("timeout") || lower.includes("abort") || lower.includes("etimedout") || lower.includes("econnrefused")) {
    return "network_timeout";
  }
  if (lower.includes("api_key") || lower.includes("unauthorized") || lower.includes("forbidden") || lower.includes("401") || lower.includes("403")) {
    return "provider_auth";
  }
  if (lower.includes("rate") || lower.includes("429")) {
    return "rate_limit";
  }
  if (lower.includes("recipient") || lower.includes("syntax") || lower.includes("mailbox")) {
    return "invalid_recipient";
  }
  return "provider_error";
}

/**
 * Calculates exponential backoff retry time.
 * Attempt 1: +5 minutes
 * Attempt 2: +30 minutes
 * Attempt 3+: Terminal failure (null)
 */
export function calculateNextRetry(attemptNumber: number): string | null {
  if (attemptNumber >= 3) {
    return null; // Terminal failure, stop automated retries
  }
  const now = Date.now();
  if (attemptNumber === 1) {
    return new Date(now + 5 * 60 * 1000).toISOString(); // 5 min
  }
  if (attemptNumber === 2) {
    return new Date(now + 30 * 60 * 1000).toISOString(); // 30 min
  }
  return null;
}

/**
 * Dispatches an internal notification email to info@qubizon.com.
 * Executes ONLY after database persistence has completed.
 */
export async function sendEnquiryNotification(
  enquiry: EnquiryRecord
): Promise<EmailDispatchResult> {
  const provider = (process.env.EMAIL_PROVIDER || "mock").toLowerCase();
  const recipient = process.env.EMAIL_TO || "info@qubizon.com";
  const sender = process.env.EMAIL_FROM || "Qubizon Notifications <noreply@qubizon.com>";

  const subject = `[New Enquiry - ${escapeHtml(enquiry.service)}] Ref: ${enquiry.referenceId} - ${escapeHtml(enquiry.fullName)}`;

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0F172A; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E2E8F0; border-radius: 8px; }
    .header { background-color: #00488E; color: #FFFFFF; padding: 16px 20px; border-radius: 6px; }
    .header h2 { margin: 0; font-size: 18px; }
    .badge { display: inline-block; background-color: #FFBE0B; color: #0B132B; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; margin-top: 8px; }
    .field-group { margin: 16px 0; padding-bottom: 16px; border-bottom: 1px solid #F1F5F9; }
    .label { font-size: 12px; text-transform: uppercase; color: #64748B; font-weight: 600; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0F172A; }
    .summary-box { background-color: #F8FAFC; border-left: 4px solid #00488E; padding: 12px 16px; border-radius: 4px; margin-top: 8px; font-size: 14px; white-space: pre-wrap; }
    .footer { font-size: 12px; color: #94A3B8; margin-top: 24px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Qubizon Digital Solutions — Client Enquiry</h2>
      <span class="badge">Reference: ${escapeHtml(enquiry.referenceId)}</span>
    </div>

    <div class="field-group">
      <div class="label">Discipline / Service Requested</div>
      <div class="value"><strong>${escapeHtml(enquiry.service)}</strong></div>
    </div>

    ${enquiry.projectName ? `
    <div class="field-group">
      <div class="label">Project / Brand Name</div>
      <div class="value">${escapeHtml(enquiry.projectName)}</div>
    </div>` : ""}

    ${enquiry.websiteUrl ? `
    <div class="field-group">
      <div class="label">Existing Website</div>
      <div class="value"><a href="${escapeHtml(enquiry.websiteUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(enquiry.websiteUrl)}</a></div>
    </div>` : ""}

    <div class="field-group">
      <div class="label">Project Summary & Requirements</div>
      <div class="summary-box">${escapeHtml(enquiry.projectSummary)}</div>
    </div>

    <div class="field-group">
      <div class="label">Contact Name</div>
      <div class="value">${escapeHtml(enquiry.fullName)}</div>
    </div>

    <div class="field-group">
      <div class="label">Business Email</div>
      <div class="value"><a href="mailto:${escapeHtml(enquiry.email)}">${escapeHtml(enquiry.email)}</a> (Reply-To configured)</div>
    </div>

    ${enquiry.phone ? `
    <div class="field-group">
      <div class="label">Phone Number</div>
      <div class="value">${escapeHtml(enquiry.phone)}</div>
    </div>` : ""}

    ${enquiry.companyName ? `
    <div class="field-group">
      <div class="label">Company / Organization</div>
      <div class="value">${escapeHtml(enquiry.companyName)}</div>
    </div>` : ""}

    <div class="field-group">
      <div class="label">Budget & Target Timeframe</div>
      <div class="value">Budget: ${escapeHtml(enquiry.budget || "Not specified")} | Timeframe: ${escapeHtml(enquiry.timeframe || "Not specified")}</div>
    </div>

    <div class="footer">
      Received on ${escapeHtml(enquiry.createdAt)} • Privacy Acknowledged • Internal System Record ${escapeHtml(enquiry.id)}
    </div>
  </div>
</body>
</html>
  `;

  // Mock Provider (Default for development & automated tests)
  if (provider === "mock") {
    return {
      success: true,
      provider: "mock",
      messageId: `mock-${Date.now()}-${enquiry.referenceId}`,
    };
  }

  // Resend Transactional Provider via native fetch
  if (provider === "resend") {
    if (!process.env.EMAIL_API_KEY || process.env.EMAIL_API_KEY.trim().length === 0) {
      const err = "EMAIL_API_KEY environment variable is not configured for Resend provider.";
      return {
        success: false,
        provider: "resend",
        error: err,
        errorCategory: categorizeEmailError(err),
      };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: enquiry.email,
          subject,
          html: htmlBody,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errorText = await res.text();
        const err = `Resend API error (${res.status}): ${errorText.slice(0, 100)}`;
        return {
          success: false,
          provider: "resend",
          error: err,
          errorCategory: categorizeEmailError(err),
        };
      }

      const data = await res.json();
      return {
        success: true,
        provider: "resend",
        messageId: data.id,
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        provider: "resend",
        error: errorMsg,
        errorCategory: categorizeEmailError(errorMsg),
      };
    }
  }

  // Default fallback if unsupported provider is set
  const unsupportedErr = `Unsupported email provider: '${provider}'. Configured options are 'mock' or 'resend'.`;
  return {
    success: false,
    provider,
    error: unsupportedErr,
    errorCategory: "provider_error",
  };
}

/**
 * Durable Outbox Processing Worker.
 * Safely processes pending and failed email notifications with bounded retries and exponential backoff.
 */
export async function processOutboxQueue(
  repo: EnquiryRepository,
  batchSize: number = 20
): Promise<{ processed: number; succeeded: number; failed: number }> {
  const pending = await repo.getPendingNotifications(batchSize);
  let succeeded = 0;
  let failed = 0;

  for (const enquiry of pending) {
    try {
      const result = await sendEnquiryNotification(enquiry);
      if (result.success) {
        await repo.updateNotificationStatus(enquiry.id, "sent");
        succeeded += 1;
      } else {
        const nextAttemptCount = enquiry.notificationAttempts + 1;
        const nextRetry = calculateNextRetry(nextAttemptCount);
        const category = result.errorCategory || categorizeEmailError(result.error || "Unknown error");

        await repo.updateNotificationStatus(
          enquiry.id,
          "failed",
          result.error,
          category,
          nextRetry || undefined
        );
        failed += 1;
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      const nextAttemptCount = enquiry.notificationAttempts + 1;
      const nextRetry = calculateNextRetry(nextAttemptCount);
      const category = categorizeEmailError(errorMsg);

      await repo.updateNotificationStatus(
        enquiry.id,
        "failed",
        errorMsg,
        category,
        nextRetry || undefined
      );
      failed += 1;
    }
  }

  return { processed: pending.length, succeeded, failed };
}
