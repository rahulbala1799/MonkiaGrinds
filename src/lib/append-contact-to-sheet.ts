/**
 * Optional: append each enquiry to Google Sheets using a service account.
 * Share the spreadsheet with the service account email (Editor). Enable Google Sheets API in GCP.
 */

/** Vercel / paste sometimes appends a literal \\n or newline to the email — Google then returns invalid_grant. */
function cleanServiceAccountEmail(raw: string | undefined): string {
  if (!raw) return ''
  return raw.trim().replace(/(?:\\n|\r|\n)+$/g, '')
}

export function isGoogleSheetConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEET_ID?.trim() &&
      cleanServiceAccountEmail(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.trim()
  )
}

type RowContext = {
  examLine: string
  subjectsLine: string
  hearLine: string
}

export type ContactFields = {
  parentName: string
  address: string
  phoneNumber: string
  email: string
  studentName: string
  exam: string
  examOther: string
  school: string
  subjects: string[]
  otherSubjects: string
  hearAbout: string[]
  hearAboutOther: string
  message: string
}

/** Best-effort append. Throws on API errors (caller should catch). */
export async function appendContactToGoogleSheet(
  payload: ContactFields,
  lines: RowContext
): Promise<void> {
  if (!isGoogleSheetConfigured()) return

  const { google } = await import('googleapis')
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(/\\n/g, '\n').trim()
  const clientEmail = cleanServiceAccountEmail(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  // Pass GoogleAuth directly — getClient() return type is not accepted by sheets().auth in strict builds.
  const sheets = google.sheets({ version: 'v4', auth })
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!.trim()
  const range = process.env.GOOGLE_SHEET_RANGE?.trim() || 'Sheet1!A:K'

  const row = [
    new Date().toISOString(),
    payload.parentName,
    payload.email,
    payload.phoneNumber,
    payload.address,
    payload.studentName,
    payload.school,
    lines.examLine,
    lines.subjectsLine,
    lines.hearLine,
    payload.message,
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] },
  })
}
