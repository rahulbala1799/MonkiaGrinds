'use client'

import { motion } from 'framer-motion'
import SubjectPageLayout from '@/components/SubjectPageLayout'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Theory & Practice',
    description: 'Comprehensive support covering both theoretical concepts and practical exam techniques for all subjects.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Exam Papers',
    description: 'Work through past exam papers with detailed marking scheme analysis to maximise your points.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Concept Explanation',
    description: 'In-depth explanations that ensure a thorough understanding of every topic on the syllabus.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Achieve H1/H2 Grades',
    description: 'Targeted preparation to help students reach the top grades and maximise their CAO points.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Igniting Curiosity',
    description: 'Biology and Chemistry taught with a passion for discovery, fueling innovation and deeper understanding.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Structured Learning',
    description: 'A systematic approach to covering the full syllabus with clear milestones and progress tracking.',
  },
]

const extraContent = (
  <section className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Subject Deep Dive</span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
          Biology & Chemistry
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Igniting Curiosity. Fueling Innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Biology',
            color: 'from-emerald-500 to-teal-600',
            points: ['Adequate support for faster concept understanding', 'Structured learning path through the full syllabus', 'Reach your full academic potential', 'Enhance grades by at least 20%'],
          },
          {
            title: 'Chemistry',
            color: 'from-blue-500 to-indigo-600',
            points: ['Theory and practical exam preparation', 'Detailed concept explanations', 'Practice with real exam questions', 'Improve understanding and confidence'],
          },
        ].map((subject, index) => (
          <motion.div
            key={subject.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${subject.color} rounded-2xl p-8 text-white`}
          >
            <h3 className="font-heading font-bold text-2xl mb-6">{subject.title}</h3>
            <ul className="space-y-3">
              {subject.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default function LeavingCertPage() {
  return (
    <SubjectPageLayout
      heroTitle="Leaving Cert"
      heroSubtitle="Maths, Biology & Chemistry — 4th, 5th & 6th Year"
      heroDescription="Support both theory and practice exams. Boost your grades to achieve H1/H2 with structured learning, detailed concept explanations, and comprehensive exam paper preparation."
      heroBadge="Leaving Cert Preparation"
      subjects={['Maths', 'Biology', 'Chemistry']}
      levels="4th Year, 5th Year, 6th Year"
      goal="Achieve H1 / H2 Grades"
      features={features}
      extraContent={extraContent}
    />
  )
}
