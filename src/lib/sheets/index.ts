import type { EnquiryRecord } from "../db";

export interface GoogleSheetsPayload {
  timestamp: string;
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeframe: string;
  projectName: string;
  websiteUrl: string;
  projectSummary: string;
}

/**
 * Appends a verified client lead directly to a connected Google Sheet
 * via a deployed Google Apps Script Webhook.
 */
export async function appendLeadToGoogleSheet(
  record: EnquiryRecord
): Promise<{ success: boolean; error?: string }> {
  const webhookUrl =
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
    process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl || !webhookUrl.trim()) {
    return { success: false, error: "GOOGLE_SHEETS_WEBHOOK_URL is not configured" };
  }

  const payload: GoogleSheetsPayload = {
    timestamp: new Date(record.createdAt).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }),
    referenceId: record.referenceId,
    fullName: record.fullName,
    email: record.email,
    phone: record.phone || "N/A",
    service: record.service,
    budget: record.budget || "N/A",
    timeframe: record.timeframe || "N/A",
    projectName: record.projectName || "N/A",
    websiteUrl: record.websiteUrl || "N/A",
    projectSummary: record.projectSummary,
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(webhookUrl.trim(), {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      return {
        success: false,
        error: `Google Sheets webhook returned HTTP ${response.status}: ${errorText}`,
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[Google Sheets Sync Error]", errorMsg);
    return { success: false, error: errorMsg };
  }
}

