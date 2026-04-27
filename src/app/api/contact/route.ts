import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

export const runtime = 'nodejs'

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

type MailConfig =
  | { ok: true; to: string; user: string; transporter: Transporter }
  | { ok: false; error: string }

function getMailConfig(): MailConfig {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_PASS
  const to = process.env.CONTACT_TO || user
  if (!user?.trim() || !to?.trim() || !pass) {
    return {
      ok: false,
      error:
        'Email is not configured. Set GMAIL_USER, GMAIL_PASS (Gmail App Password), and optionally CONTACT_TO. See .env.example.',
    }
  }
  const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })
  return { ok: true, to, user, transporter }
}

export async function POST(request: Request) {
  const mail = getMailConfig()
  if (!mail.ok) {
    return NextResponse.json({ error: mail.error }, { status: 503 })
  }
  const { to, user, transporter } = mail

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const p = body as Record<string, unknown>

  if (!isNonEmptyString(p.parentName, 200) || !isNonEmptyString(p.phoneNumber, 50)) {
    return NextResponse.json({ error: 'Parent name and phone number are required.' }, { status: 400 })
  }

  if (!isNonEmptyString(p.email, 200) || !emailRe.test(p.email.trim())) {
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

  try {
    await transporter.sendMail({
      from: `MGA website <${user}>`,
      to,
      replyTo: payload.email,
      subject: `New enquiry from ${payload.parentName}`,
      text,
      html,
    })
  } catch (err) {
    console.error('Contact form email error:', err)
    return NextResponse.json({ error: 'Could not send your message. Please try again or email us directly.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
