/**
 * QUBIZON DIGITAL SOLUTIONS — GOOGLE APPS SCRIPT WEBHOOK FOR LEADS
 * 
 * ==============================================================================
 * STEP-BY-STEP SETUP GUIDE (Takes under 2 minutes)
 * ==============================================================================
 * 
 * 1. Open Google Sheets (https://sheets.google.com) and create a new spreadsheet.
 *    Name it: "Qubizon Leads"
 * 
 * 2. In the top row (Row 1), add these column headers:
 *    A1: Timestamp
 *    B1: Reference ID
 *    C1: Full Name
 *    D1: Email
 *    E1: Phone
 *    F1: Service
 *    G1: Budget
 *    H1: Timeframe
 *    I1: Project Name
 *    J1: Website URL
 *    K1: Project Summary
 * 
 * 3. In the top menu, click:
 *    Extensions > Apps Script
 * 
 * 4. Delete any code in the editor, paste this entire file, and click Save (Floppy icon or Ctrl+S).
 * 
 * 5. Click the blue "Deploy" button (top right) > "New deployment".
 *    - Click the gear icon next to "Select type" and choose "Web app".
 *    - Description: "Qubizon Website Leads"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone"  <-- (VERY IMPORTANT: allows website server to post leads)
 *    - Click "Deploy".
 *    - Click "Authorize access" and allow permissions.
 * 
 * 6. Copy the generated "Web app URL" (starts with: https://script.google.com/macros/s/.../exec).
 * 
 * 7. On your server (/var/www/qubizon/.env.local), add:
 *    GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_COPIED_URL/exec"
 *    ALLOW_MOCK_DB="true"
 * 
 * ==============================================================================
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Auto-create bold headers if sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Reference ID",
        "Full Name",
        "Email",
        "Phone",
        "Service",
        "Budget",
        "Timeframe",
        "Project Name",
        "Website URL",
        "Project Summary"
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#00488E").setFontColor("#FFFFFF");
    }

    // Append the new lead as a clean row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.referenceId || "N/A",
      data.fullName || "N/A",
      data.email || "N/A",
      data.phone || "N/A",
      data.service || "N/A",
      data.budget || "N/A",
      data.timeframe || "N/A",
      data.projectName || "N/A",
      data.websiteUrl || "N/A",
      data.projectSummary || "N/A"
    ]);

    // Keep columns formatted cleanly
    sheet.autoResizeColumns(1, 11);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Lead saved to Google Sheet" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// For quick manual browser verification
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "Qubizon Google Sheets Lead Webhook is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}

