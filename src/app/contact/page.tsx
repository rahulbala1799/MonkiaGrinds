'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const examOptions = [
  'Junior Cert',
  'Leaving Cert',
  'Primary (Drumcondra)',
  'IB',
  'Other',
]

const subjectOptions = [
  'Maths (Higher)',
  'Maths (Ordinary)',
  'Biology',
  'Chemistry',
  'Science',
  'French (Higher)',
  'French (Ordinary)',
  'Spanish (Higher)',
  'Spanish (Ordinary)',
  'Accountancy',
]

const hearAboutOptions = [
  'Online',
  'Facebook',
  'SchoolDays.ie',
  'Poster',
  'Leaflet',
  'Word of Mouth',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    address: '',
    phoneNumber: '',
    email: '',
    studentName: '',
    exam: '',
    school: '',
    subjects: [] as string[],
    otherSubjects: '',
    hearAbout: [] as string[],
    hearAboutOther: '',
    paymentMethod: false,
  })
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In production, this would send to a form handler like Formspree
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading font-bold text-3xl text-navy-900">Thank You!</h2>
          <p className="text-gray-500 mt-4">
            Your enquiry has been received. Monika will get back to you as soon as possible.
          </p>
          <a
            href="/"
            className="inline-block mt-8 gradient-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark pointer-events-none" />
        <div className="absolute top-20 right-10 w-24 h-24 border border-white/10 rounded-3xl rotate-12 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-5xl sm:text-6xl text-white"
          >
            Contact <span className="text-gradient-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-200 mt-4 text-lg"
          >
            Ready to get started? Fill in the form below and Monika will be in touch.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            <a
              href="tel:0852401266"
              className="flex items-center gap-4 bg-primary-50 rounded-2xl p-5 hover:bg-primary-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Call Us</p>
                <p className="font-semibold text-navy-900">085 240 1266</p>
              </div>
            </a>
            <a
              href="mailto:monikagrinds@gmail.com"
              className="flex items-center gap-4 bg-primary-50 rounded-2xl p-5 hover:bg-primary-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Email</p>
                <p className="font-semibold text-navy-900 text-sm">monikagrinds@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-primary-50 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Availability</p>
                <p className="font-semibold text-navy-900">Mon - Sat</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100"
          >
            <h2 className="font-heading font-bold text-2xl text-navy-900 mb-8">Enquiry Form</h2>

            {/* Parent & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Parent Name</label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                  placeholder="Enter parent name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                  placeholder="Enter address"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            {/* Student Name & Exam */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name</label>
                <input
                  type="text"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                  placeholder="Enter student name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Which exam are you taking? <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.exam}
                  onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                >
                  <option value="">Select option</option>
                  {examOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* School */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                What Secondary School do you attend?
              </label>
              <input
                type="text"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                placeholder="Enter school name"
              />
            </div>

            {/* Subjects */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What Subject are you taking?
              </label>
              <div className="flex flex-wrap gap-2">
                {subjectOptions.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => handleSubjectToggle(subject)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      formData.subjects.includes(subject)
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {/* Other Subjects */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Other Subjects</label>
              <input
                type="text"
                value={formData.otherSubjects}
                onChange={(e) => setFormData({ ...formData, otherSubjects: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                placeholder="Add other subjects"
              />
            </div>

            {/* How did you hear about us */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Where did you hear about Monika Grinds?
              </label>
              <div className="flex flex-wrap gap-2">
                {hearAboutOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleHearAboutToggle(option)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      formData.hearAbout.includes(option)
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={formData.hearAboutOther}
                onChange={(e) => setFormData({ ...formData, hearAboutOther: e.target.value })}
                className="w-full mt-3 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                placeholder="Other (please comment)"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Payment Method <span className="text-red-500">*</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.paymentMethod}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-gray-600">Via website</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full gradient-primary text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Submit Enquiry
            </button>
          </motion.form>
        </div>
      </section>
    </>
  )
}
