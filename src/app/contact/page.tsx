'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

// Stepper config
const steps = [
  { id: 1, title: 'Your Details', icon: 'user' },
  { id: 2, title: 'Student Info', icon: 'student' },
  { id: 3, title: 'Subjects', icon: 'book' },
  { id: 4, title: 'Final Step', icon: 'check' },
]

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
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
    setSubmitted(true)
  }

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 4))
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1))

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gray-50">
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

  return (
    <>
      {/* Header */}
      <section className="gradient-hero pt-28 pb-20 px-4 relative overflow-hidden">
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
        <div className="max-w-2xl mx-auto">
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

      {/* Multi-step Form */}
      <section className="px-4 py-10 md:py-16 bg-gray-50 pattern-dots">
        <div className="max-w-2xl mx-auto">
          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mb-8 px-2"
          >
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      currentStep >= step.id
                        ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                        : 'bg-white border-2 border-gray-200 text-gray-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  <span className={`text-[11px] mt-1.5 font-semibold hidden sm:block ${currentStep >= step.id ? 'text-primary-600' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 rounded-full transition-colors duration-300 ${currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </motion.div>

          {/* Form Card */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              {/* Step 1: Parent Details */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="font-heading font-extrabold text-xl text-navy-900 mb-1">Your Details</h2>
                  <p className="text-gray-400 text-sm mb-6">Tell us about yourself so we can get in touch.</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Parent Name</label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="085 XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Address</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="Dublin, Ireland"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Student Info */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="font-heading font-extrabold text-xl text-navy-900 mb-1">Student Info</h2>
                  <p className="text-gray-400 text-sm mb-6">Tell us about the student and their school.</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Student Name</label>
                      <input
                        type="text"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="Student's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">
                        Which exam are you preparing for? <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {examOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, exam: opt })}
                            className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                              formData.exam === opt
                                ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                                : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-primary-300 hover:bg-primary-50'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">School Name</label>
                      <input
                        type="text"
                        value={formData.school}
                        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="What school do they attend?"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Subjects */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="font-heading font-extrabold text-xl text-navy-900 mb-1">Choose Subjects</h2>
                  <p className="text-gray-400 text-sm mb-6">Select all subjects you need grinds for.</p>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Subjects</label>
                      <div className="grid grid-cols-2 gap-2">
                        {subjectOptions.map((subject) => (
                          <button
                            key={subject}
                            type="button"
                            onClick={() => handleSubjectToggle(subject)}
                            className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 text-left ${
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
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Other Subjects</label>
                      <input
                        type="text"
                        value={formData.otherSubjects}
                        onChange={(e) => setFormData({ ...formData, otherSubjects: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="Any subjects not listed above"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Final */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="font-heading font-extrabold text-xl text-navy-900 mb-1">Almost Done</h2>
                  <p className="text-gray-400 text-sm mb-6">Just a couple more things and you&apos;re all set.</p>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">How did you find us?</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {hearAboutOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleHearAboutToggle(option)}
                            className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                              formData.hearAbout.includes(option)
                                ? 'gradient-primary text-white shadow-lg shadow-primary-500/25'
                                : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-primary-300 hover:bg-primary-50'
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
                        className="w-full mt-3 px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all bg-gray-50 text-navy-900 placeholder:text-gray-300"
                        placeholder="Other (please specify)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Payment</label>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: !formData.paymentMethod })}
                        className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                          formData.paymentMethod
                            ? 'bg-primary-50 border-2 border-primary-500 text-primary-700'
                            : 'bg-gray-50 border border-gray-200 text-gray-600 hover:border-primary-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${formData.paymentMethod ? 'bg-primary-500' : 'border-2 border-gray-300'}`}>
                          {formData.paymentMethod && (
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        Pay via website
                      </button>
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <h3 className="font-bold text-sm text-navy-900 mb-3">Summary</h3>
                      <div className="space-y-2 text-sm">
                        {formData.parentName && (
                          <div className="flex justify-between">
                            <span className="text-gray-400">Parent</span>
                            <span className="font-semibold text-navy-900">{formData.parentName}</span>
                          </div>
                        )}
                        {formData.studentName && (
                          <div className="flex justify-between">
                            <span className="text-gray-400">Student</span>
                            <span className="font-semibold text-navy-900">{formData.studentName}</span>
                          </div>
                        )}
                        {formData.exam && (
                          <div className="flex justify-between">
                            <span className="text-gray-400">Exam</span>
                            <span className="font-semibold text-navy-900">{formData.exam}</span>
                          </div>
                        )}
                        {formData.subjects.length > 0 && (
                          <div className="flex justify-between gap-4">
                            <span className="text-gray-400 flex-shrink-0">Subjects</span>
                            <span className="font-semibold text-navy-900 text-right">{formData.subjects.join(', ')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex gap-3">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-3.5 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 py-3.5 rounded-2xl font-bold text-white gradient-primary shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-2xl font-bold text-white gradient-primary shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  Submit Enquiry
                </button>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </>
  )
}
