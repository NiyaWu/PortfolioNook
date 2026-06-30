# Chat logging + interview email — setup (one-time, ~10 min)

The portfolio chat can:
1. Log every visitor question to a Google Sheet (for you to review and optimize).
2. Email you (twmniya@gmail.com) when someone leaves their contact / requests an interview.

Both are handled by ONE Google Apps Script. No Resend, no extra service.

## Steps

1. Create a new Google Sheet (sheets.new). Name it e.g. "Portfolio Chat".
2. In the Sheet: **Extensions → Apps Script**.
3. Delete the placeholder code, paste the script below, and Save (💾).
4. **Deploy → New deployment**:
   - Click the gear ⚙ → **Web app**.
   - Description: anything (e.g. "chat logger").
   - **Execute as: Me**
   - **Who has access: Anyone**
   - Click **Deploy**. Authorize when prompted (it's your own script; "Advanced → Go to … (unsafe)" is normal for personal scripts).
5. Copy the **Web app URL** (ends in `/exec`).
6. Put it in `.env.local` (and later in Vercel's env vars):
   ```
   SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
   ```
7. Restart the dev server. Done. The "Questions" and "Interviews" tabs are created automatically on first use.

> Note: logging/email only fire when `SHEET_WEBHOOK_URL` is set. Without it, the chat still works; it just doesn't log.

## The Apps Script (paste this)

```javascript
// Portfolio chat logger + interview notifier.
var NOTIFY_EMAIL = 'twmniya@gmail.com';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === 'interview') {
      var s = sheetWithHeaders_(ss, 'Interviews', ['Time', 'Email', 'Message']);
      s.appendRow([new Date(), data.email || '', data.message || '']);
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        'Portfolio: someone wants to connect with you',
        'Email: ' + (data.email || '') + '\n\nMessage:\n' + (data.message || '')
      );
    } else {
      var q = sheetWithHeaders_(ss, 'Questions', ['Time', 'Question', 'Language']);
      q.appendRow([new Date(), data.question || '', data.locale || '']);
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function sheetWithHeaders_(ss, name, headers) {
  var s = ss.getSheetByName(name);
  if (!s) { s = ss.insertSheet(name); s.appendRow(headers); }
  return s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```
