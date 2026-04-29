'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const yearOptions = [
  '1st Year', '2nd Year', '3rd Year (Junior Cert)',
  '4th Year (TY)', '5th Year', '6th Year (Leaving Cert)',
  'Primary – 3rd Class', 'Primary – 4th Class', 'Primary – 5th Class', 'Primary – 6th Class',
  'IB Year 1', 'IB Year 2', 'Other',
]

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all text-sm'

export default function AMASection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', year: '', question: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch(`${window.location.origin}/api/ama`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) { setError(data.error || 'Something went wrong. Please try again.'); return }
      setDone(true)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-navy-900 pattern-grid-dark relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-20 h-20 md:w-32 md:h-32 border border-primary-500/10 rounded-3xl rotate-12 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gold-400/30 rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500/20 border border-primary-500/30 mb-5">
            <svg className="w-7 h-7 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Ask Monika <span className="text-gradient-gold">Anything</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base max-w-xl mx-auto">
            Have a question about a subject, exam, or course? Drop it below and Monika will get back to you.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-8 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/25">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">Question sent!</h3>
                <p className="text-gray-400 text-sm max-w-xs">Monika will get back to you as soon as possible.</p>
                <button
                  onClick={() => { setDone(false); setForm({ name: '', email: '', subject: '', year: '', question: '' }) }}
                  className="mt-2 text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors"
                >
                  Ask another question →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Subject + Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={set('subject')}
                      placeholder="e.g. Maths, Biology…"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Year / Class</label>
                    <select
                      value={form.year}
                      onChange={set('year')}
                      required
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-navy-900">Select your year…</option>
                      {yearOptions.map(y => (
                        <option key={y} value={y} className="bg-navy-900">{y}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Question */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wider">Your question for Monika</label>
                  <textarea
                    value={form.question}
                    onChange={set('question')}
                    rows={4}
                    placeholder="Type your question here…"
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3" role="alert">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl font-bold text-white gradient-primary shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 text-sm"
                >
                  {submitting ? 'Sending…' : 'Send My Question'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
