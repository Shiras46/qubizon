import type { EnquiryRecord } from "../db";

export interface GoogleSheetsPayload {
  timestamp: string;
  referenceId: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeframe: string;
  projectName: string;
  websiteUrl: string;
  projectSummary: string;
}

const SERVICE_FORMATTER: Record<string, string> = {
  "web-development": "Website Development",
  seo: "Search Engine Optimization (SEO)",
  "social-media-marketing": "Social Media Marketing",
  "paid-advertising": "Paid Advertising (PPC)",
  "content-marketing": "Content Marketing",
  "multiple-services": "Multiple Disciplines",
  "not-sure": "Not Sure Yet / Consultation",
};

const BUDGET_FORMATTER: Record<string, string> = {
  "under-5k": "Under $5,000",
  "5k-10k": "$5,000 – $10,000",
  "10k-25k": "$10,000 – $25,000",
  "25k-plus": "$25,000+",
  "not-decided": "Not decided yet",
};

const TIMEFRAME_FORMATTER: Record<string, string> = {
  immediate: "Immediately (Within 2–4 weeks)",
  "1-3-months": "Within 1 to 3 months",
  flexible: "Flexible / Planning phase",
};

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

  const formattedService =
    SERVICE_FORMATTER[record.service] || record.service;
  const formattedBudget = record.budget
    ? BUDGET_FORMATTER[record.budget] || record.budget
    : "N/A";
  const formattedTimeframe = record.timeframe
    ? TIMEFRAME_FORMATTER[record.timeframe] || record.timeframe
    : "N/A";

  const payload: GoogleSheetsPayload = {
    timestamp: new Date(record.createdAt).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }),
    referenceId: record.referenceId,
    fullName: record.fullName,
    companyName: record.companyName || "N/A",
    email: record.email,
    phone: record.phone || "N/A",
    service: formattedService,
    budget: formattedBudget,
    timeframe: formattedTimeframe,
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

