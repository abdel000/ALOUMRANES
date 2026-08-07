function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var p = e.parameter;

  sheet.appendRow([
    new Date(),
    p.name || "",
    p.phone || "",
    p.email || "",
    p.student_level || "",
    p.current_grade || "",
    p.school_year || "",
    p.request_type || "",
    p.message || "",
    p.consent || "",
    p.source || "",
    p.utm_source || "",
    p.utm_medium || "",
    p.utm_campaign || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
