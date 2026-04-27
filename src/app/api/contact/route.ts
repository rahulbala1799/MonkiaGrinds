import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'
import { appendContactToGoogleSheet, isGoogleSheetConfigured } from '@/lib/append-contact-to-sheet'

export const runtime = 'nodejs'

/** Vercel runtime logs: grep for `[contact]` in your project’s Serverless Function logs. */
function log(event: string, data?: Record<string, string | number | boolean | undefined>) {
  const line = { tag: 'contact', event, ...data, at: new Date().toISOString() }
  console.log(`[contact] ${event}`, JSON.stringify(line))
}
function logErr(event: string, data?: Record<string, string | number | boolean | undefined>) {
  const line = { tag: 'contact', event, ...data, at: new Date().toISOString() }
  console.error(`[contact] ${event}`, JSON.stringify(line))
}

export type ContactFormPayload = {
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

const MAX_FIELD = 4000
const MAX_ARRAY_ITEMS = 20

function isNonEmptyString(v: unknown, max: number): v is string {
  return typeof v === 'string' && v.trim().length > 0 && v.length <= max
}

function isStringArray(v: unknown, maxItems: number, maxItemLen: number): v is string[] {
  if (!Array.isArray(v) || v.length > maxItems) return false
  return v.every((x) => typeof x === 'string' && x.length <= maxItemLen)
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Open `GET /api/contact` on the live site to confirm this deployment includes the route and mail env (no secrets). */
export async function GET() {
  const user = Boolean(process.env.GMAIL_USER?.trim())
  const pass = Boolean(cleanSecret(process.env.GMAIL_PASS))
  return NextResponse.json(
    {
      contactApi: true,
      method: 'Use POST to submit the form; this GET is for deployment checks only.',
      mailEnvPresent: user && pass,
      sheetEnvPresent: isGoogleSheetConfigured(),
    },
    { status: 200 }
  )
}

type MailConfig =
  | { ok: true; to: string; user: string; transporter: Transporter }
  | { ok: false; error: string }

/** Strip common copy-paste issues from Vercel (quotes, newlines) and App Password spacing. */
function cleanSecret(v: string | undefined): string {
  if (!v) return ''
  return v
    .trim()
    .replace(/^['"]|['"]$/g, '')
    .replace(/\s/g, '')
}

/**
 * Inbox for enquiries. If CONTACT_TO is not set, we still send to the same account but use a
 * `user+tag@` address on Gmail/Workspace so the message is more likely to appear in Inbox than
 * when from and to are identical (Gmail often leaves “mail to self” in Sent only).
 */
function resolveInboxTo(user: string, contactTo: string | undefined): string {
  if (contactTo?.trim()) return contactTo.trim()
  const localEnd = user.lastIndexOf('@')
  if (localEnd <= 0) return user
  const local = user.slice(0, localEnd)
  const domain = user.slice(localEnd + 1).toLowerCase()
  // Plus-addressing: same mailbox, but avoids Gmail hiding "from me → to me" in Inbox.
  if (domain === 'gmail.com' || domain === 'googlemail.com') {
    return `${local}+website@${user.slice(localEnd + 1)}`
  }
  return user
}

function getMailConfig(): MailConfig {
  const user = process.env.GMAIL_USER?.trim()
  const pass = cleanSecret(process.env.GMAIL_PASS)
  if (!user || !pass) {
    return {
      ok: false,
      error:
        'Email is not configured. Set GMAIL_USER, GMAIL_PASS (Gmail App Password), and optionally CONTACT_TO. See .env.example.',
    }
  }
  const to = resolveInboxTo(user, process.env.CONTACT_TO)
  const transporter: Transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })
  return { ok: true, to, user, transporter }
}

export async function POST(request: Request) {
  const reqId = request.headers.get('x-vercel-id') ?? request.headers.get('x-request-id') ?? undefined
  log('request_in', { path: '/api/contact', reqId })

  const mail = getMailConfig()
  if (!mail.ok) {
    logErr('mail_config_missing', { detail: 'Set GMAIL_USER and GMAIL_PASS for Production in Vercel.' })
    return NextResponse.json({ error: mail.error }, { status: 503 })
  }
  const { to, user, transporter } = mail

  let body: unknown
  try {
    body = await request.json()
  } catch {
    logErr('reject_bad_json', {})
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    logErr('reject_invalid_body', {})
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const p = body as Record<string, unknown>

  if (!isNonEmptyString(p.parentName, 200) || !isNonEmptyString(p.phoneNumber, 50)) {
    logErr('reject_validation', { reason: 'parent_name_or_phone' })
    return NextResponse.json({ error: 'Parent name and phone number are required.' }, { status: 400 })
  }

  if (!isNonEmptyString(p.email, 200) || !emailRe.test(p.email.trim())) {
    logErr('reject_validation', { reason: 'email' })
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  const payload: ContactFormPayload = {
    parentName: p.parentName.trim(),
    address: typeof p.address === 'string' ? p.address.slice(0, MAX_FIELD) : '',
    phoneNumber: p.phoneNumber.trim().slice(0, 50),
    email: p.email.trim().slice(0, 200),
    studentName: typeof p.studentName === 'string' ? p.studentName.slice(0, 200) : '',
    exam: typeof p.exam === 'string' ? p.exam.slice(0, 200) : '',
    examOther: typeof p.examOther === 'string' ? p.examOther.slice(0, MAX_FIELD) : '',
    school: typeof p.school === 'string' ? p.school.slice(0, 200) : '',
    subjects: isStringArray(p.subjects, MAX_ARRAY_ITEMS, 200) ? p.subjects : [],
    otherSubjects: typeof p.otherSubjects === 'string' ? p.otherSubjects.slice(0, MAX_FIELD) : '',
    hearAbout: isStringArray(p.hearAbout, MAX_ARRAY_ITEMS, 200) ? p.hearAbout : [],
    hearAboutOther: typeof p.hearAboutOther === 'string' ? p.hearAboutOther.slice(0, MAX_FIELD) : '',
    message: typeof p.message === 'string' ? p.message.slice(0, MAX_FIELD) : '',
  }

  const examLine =
    payload.exam === 'Other' && payload.examOther
      ? `${payload.exam} — ${payload.examOther}`
      : payload.exam || '—'
  const subjectsLine =
    payload.subjects.length > 0
      ? payload.subjects
          .map((s) => (s === 'Other' && payload.otherSubjects ? `Other: ${payload.otherSubjects}` : s))
          .join(', ')
      : '—'
  const hearLine =
    payload.hearAbout.length > 0
      ? payload.hearAbout
          .map((h) => (h === 'Other' && payload.hearAboutOther ? `Other: ${payload.hearAboutOther}` : h))
          .join(', ')
      : '—'

  const text = [
    'New website enquiry — Monika Grinds Academy',
    '',
    'Your details',
    `  Parent / guardian: ${payload.parentName}`,
    `  Email: ${payload.email}`,
    `  Phone: ${payload.phoneNumber}`,
    `  Address: ${payload.address || '—'}`,
    '',
    'Student',
    `  Name: ${payload.studentName || '—'}`,
    `  School: ${payload.school || '—'}`,
    `  Level: ${examLine}`,
    `  Subjects: ${subjectsLine}`,
    '',
    'How they found us',
    `  ${hearLine}`,
    '',
    'Message',
    `  ${payload.message || '—'}`,
  ].join('\n')

  const html = `<pre style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(
    text
  )}</pre>`

  log('smtp_send_start', {
    from: user,
    to,
    subjectPreview: `enquiry from ${payload.parentName.slice(0, 40)}`,
  })

  try {
    const info = await transporter.sendMail({
      from: `MGA website <${user}>`,
      to,
      replyTo: payload.email,
      subject: `New enquiry from ${payload.parentName}`,
      text,
      html,
    })
    log('smtp_send_ok', {
      messageId: info.messageId ?? 'unknown',
      response: String(info.response ?? '').slice(0, 200),
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    const stack = err instanceof Error ? err.stack?.slice(0, 500) : undefined
    const code =
      typeof err === 'object' && err !== null && 'code' in err ? String((err as { code?: string }).code) : ''
    const isBadCreds =
      code === 'EAUTH' || message.includes('535') || message.includes('BadCredentials')
    if (isBadCreds) {
      logErr('smtp_hint_bad_credentials', {
        hint: 'Gmail rejected login. GMAIL_USER must match the Google account. GMAIL_PASS must be a 16-char App Password (not your normal password). Re-save in Vercel Production and redeploy.',
      })
    }
    logErr('smtp_send_fail', { error: message, code: code || undefined, stack })
    return NextResponse.json({ error: 'Could not send your message. Please try again or email us directly.' }, { status: 502 })
  }

  if (isGoogleSheetConfigured()) {
    try {
      await appendContactToGoogleSheet(payload, { examLine, subjectsLine, hearLine })
      log('sheet_append_ok', {})
    } catch (sheetErr: unknown) {
      const msg = sheetErr instanceof Error ? sheetErr.message : String(sheetErr)
      logErr('sheet_append_fail', { error: msg.slice(0, 500) })
    }
  } else {
    log('sheet_append_skip', { reason: 'not_configured' })
  }

  log('request_done_ok', { reqId: reqId ?? '' })
  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
