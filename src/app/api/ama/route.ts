import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

export const runtime = 'nodejs'

function log(event: string, data?: Record<string, string | number | boolean | undefined>) {
  console.log(`[ama] ${event}`, JSON.stringify({ tag: 'ama', event, ...data, at: new Date().toISOString() }))
}
function logErr(event: string, data?: Record<string, string | number | boolean | undefined>) {
  console.error(`[ama] ${event}`, JSON.stringify({ tag: 'ama', event, ...data, at: new Date().toISOString() }))
}

type MailConfig =
  | { ok: true; to: string; user: string; transporter: Transporter }
  | { ok: false; error: string }

function cleanSecret(v: string | undefined): string {
  if (!v) return ''
  return v.trim().replace(/^['"]|['"]$/g, '').replace(/\s/g, '')
}

function getMailConfig(): MailConfig {
  const user = process.env.GMAIL_USER?.trim()
  const pass = cleanSecret(process.env.GMAIL_PASS)
  const to = process.env.CONTACT_TO || user
  if (!user || !pass || !to) {
    return { ok: false, error: 'Email not configured on server.' }
  }
  const transporter: Transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })
  return { ok: true, to, user, transporter }
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX = 2000

export async function POST(request: Request) {
  log('request_in')

  const mail = getMailConfig()
  if (!mail.ok) {
    logErr('mail_config_missing')
    return NextResponse.json({ error: mail.error }, { status: 503 })
  }
  const { to, user, transporter } = mail

  let body: unknown
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const p = body as Record<string, unknown>

  const name    = typeof p.name    === 'string' ? p.name.trim().slice(0, 200)    : ''
  const email   = typeof p.email   === 'string' ? p.email.trim().slice(0, 200)   : ''
  const subject = typeof p.subject === 'string' ? p.subject.trim().slice(0, 200) : ''
  const year    = typeof p.year    === 'string' ? p.year.trim().slice(0, 100)    : ''
  const question = typeof p.question === 'string' ? p.question.trim().slice(0, MAX) : ''

  if (!name)                              return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  if (!email || !emailRe.test(email))     return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  if (!subject)                           return NextResponse.json({ error: 'Subject is required.' }, { status: 400 })
  if (!year)                              return NextResponse.json({ error: 'Year is required.' }, { status: 400 })
  if (!question)                          return NextResponse.json({ error: 'Question is required.' }, { status: 400 })

  const text = [
    'New AMA question — Monika Grinds Academy',
    '',
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Subject:  ${subject}`,
    `Year:     ${year}`,
    '',
    'Question:',
    question,
  ].join('\n')

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px">
      <h2 style="margin:0 0 16px;font-size:20px;color:#1e1b4b">New AMA Question</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 12px;background:#f8f8ff;font-weight:600;width:100px;border-radius:4px">Name</td><td style="padding:8px 12px">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f0ff;font-weight:600;border-radius:4px">Email</td><td style="padding:8px 12px">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f8f8ff;font-weight:600;border-radius:4px">Subject</td><td style="padding:8px 12px">${escapeHtml(subject)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f0f0ff;font-weight:600;border-radius:4px">Year</td><td style="padding:8px 12px">${escapeHtml(year)}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#f8f8ff;border-left:4px solid #6366f1;border-radius:4px;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(question)}</div>
    </div>`

  log('smtp_send_start', { to })
  try {
    const info = await transporter.sendMail({
      from: `MGA website <${user}>`,
      to,
      replyTo: email,
      subject: `AMA: ${subject} — ${name}`,
      text,
      html,
    })
    log('smtp_send_ok', { messageId: info.messageId ?? '' })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    logErr('smtp_send_fail', { error: message.slice(0, 500) })
    return NextResponse.json({ error: 'Could not send your question. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
