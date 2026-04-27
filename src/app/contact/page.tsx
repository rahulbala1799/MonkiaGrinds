'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const examOptions = [
  'Primary (Drumcondra)',
  'Junior Cert',
  'Leaving Cert',
  'IB',
  'Other',
]

const subjectOptions = [
  'Maths',
  'Science',
  'Biology',
  'Chemistry',
  'Other',
]

const hearAboutOptions = [
  'Online',
  'Facebook',
  'SchoolDays.ie',
  'Poster',
  'Leaflet',
  'Word of Mouth',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    address: '',
    phoneNumber: '',
    email: '',
    studentName: '',
    exam: '',
    examOther: '',
    school: '',
    subjects: [] as string[],
    otherSubjects: '',
    hearAbout: [] as string[],
    hearAboutOther: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }))
  }

  const handleHearAboutToggle = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      hearAbout: prev.hearAbout.includes(option)
        ? prev.hearAbout.filter((o) => o !== option)
        : [...prev.hearAbout, option],
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    setSubmitting(true)
    try {
      const res = await fetch(`${window.location.origin}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-navy-900">Thank You!</h2>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            Your enquiry has been received. Monika will get back to you as soon as possible.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 gradient-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary-500/25"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  const showExamOther = formData.exam === 'Other'
  const showSubjectOther = formData.subjects.includes('Other')
  const showHearAboutOther = formData.hearAbout.includes('Other')

  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-10 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark pointer-events-none" />
        <div className="absolute top-20 right-10 w-24 h-24 border border-white/10 rounded-3xl rotate-12 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-5xl sm:text-6xl text-white"
          >
            Get in <span className="text-gradient-gold">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-200 mt-4 text-lg max-w-md mx-auto"
          >
            Fill in the form below and Monika will be in touch to discuss your child&apos;s needs.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative -mt-10 px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <a
              href="tel:0852401266"
              className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Call</p>
                <p className="font-bold text-navy-900 text-sm">085 240 1266</p>
              </div>
            </a>
            <a
              href="mailto:monikagrinds@gmail.com"
              className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Email</p>
                <p className="font-bold text-navy-900 text-sm truncate">monikagrinds@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Hours</p>
                <p className="font-bold text-navy-900 text-sm">Mon – Sat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Single-section Form */}
      <section className="px-4 py-10 md:py-16 bg-gray-50 pattern-dots">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6 sm:p-10 space-y-10">
              {/* Your Details */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/25">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-lg text-navy-900">Your Details</h2>
                    <p className="text-gray-400 text-xs">So we can get in touch with you.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Parent Name</label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                      placeholder="John Smith"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                      placeholder="085 XXX XXXX"
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                      placeholder="Dublin, Ireland"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Student Info */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/25">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-lg text-navy-900">Student Info</h2>
                    <p className="text-gray-400 text-xs">Tell us about the student and their level.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Student Name</label>
                    <input
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                      placeholder="Student's full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">School Name</label>
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                      placeholder="What school do they attend?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">Which level?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {examOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, exam: opt })}
                        className={`px-3 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                          formData.exam === opt
                            ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                            : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-primary-300 hover:bg-primary-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {showExamOther && (
                    <input
                      type="text"
                      value={formData.examOther}
                      onChange={(e) => setFormData({ ...formData, examOther: e.target.value })}
                      className="w-full mt-3 px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                      placeholder="Please specify the level"
                    />
                  )}
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Subjects */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/25">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-lg text-navy-900">Subjects</h2>
                    <p className="text-gray-400 text-xs">Select all subjects you need grinds for.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {subjectOptions.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => handleSubjectToggle(subject)}
                      className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                        formData.subjects.includes(subject)
                          ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                          : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-primary-300 hover:bg-primary-50'
                      }`}
                    >
                      {formData.subjects.includes(subject) && (
                        <svg className="w-4 h-4 inline mr-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {subject}
                    </button>
                  ))}
                </div>
                {showSubjectOther && (
                  <input
                    type="text"
                    value={formData.otherSubjects}
                    onChange={(e) => setFormData({ ...formData, otherSubjects: e.target.value })}
                    className="w-full mt-3 px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                    placeholder="Please specify other subject(s)"
                  />
                )}
              </div>

              <div className="border-t border-gray-100" />

              {/* Message + Hear About */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/25">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-lg text-navy-900">A Few More Details</h2>
                    <p className="text-gray-400 text-xs">Anything else we should know?</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Message (Optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300 resize-none"
                      placeholder="Any specific goals, challenges, or preferences..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">How did you find us?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {hearAboutOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleHearAboutToggle(option)}
                          className={`px-3 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                            formData.hearAbout.includes(option)
                              ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                              : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-primary-300 hover:bg-primary-50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {showHearAboutOther && (
                      <input
                        type="text"
                        value={formData.hearAboutOther}
                        onChange={(e) => setFormData({ ...formData, hearAboutOther: e.target.value })}
                        className="w-full mt-3 px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="Please specify"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="px-6 sm:px-10 pb-6 sm:pb-10">
              {submitError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl px-4 py-3 mb-4" role="alert">
                  {submitError}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl font-bold text-white gradient-primary shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all hover:-translate-y-0.5 text-base disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? 'Sending…' : 'Submit Enquiry'}
              </button>
              <p className="text-center text-gray-400 text-xs mt-4">
                Monika will get back to you as soon as possible.
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  )
}
