'use client'

import { motion } from 'framer-motion'
import SubjectPageLayout from '@/components/SubjectPageLayout'
import { primaryReviews } from '@/data/reviews'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Stepping Stone to Secondary',
    description: 'Build a solid foundation in Maths and Science that prepares students for the transition to secondary school.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Drumcondra Exam Prep',
    description: 'Targeted preparation for Drumcondra standardised tests to ensure the best possible STen scores.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fun & Easy Learning',
    description: 'Maths taught in an engaging, enjoyable way that helps children develop a love for the subject.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Concept Explanation',
    description: 'Clear, age-appropriate explanations that build understanding from the ground up.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Personal Attention',
    description: 'Every child gets individual attention tailored to their unique learning style and pace.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Boost Grades',
    description: 'Proven methods that build confidence and improve academic performance across all areas.',
  },
]

const drumcondraContent = (
  <section className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Exam Preparation</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
            Drumcondra Exam Preparation
          </h2>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
            <p>
              Drumcondra tests are curriculum-based standardised assessments developed by the
              Educational Research Centre (ERC) in Ireland, used in primary and post-primary
              schools to measure pupil achievement in English Reading, Maths, and Irish.
            </p>
            <p>
              Conducted mostly in May/June, they provide STen scores (1&ndash;10) comparing
              student performance against national norms. Strong Drumcondra results can play
              an important role in placement and streaming at secondary school level.
            </p>
            <p>
              Our preparation programme ensures students are fully confident and ready to
              perform their best on test day.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8"
        >
          <h3 className="font-heading font-bold text-xl text-navy-900 mb-6">What We Cover</h3>
          <ul className="space-y-4">
            {[
              'Maths problem-solving and reasoning skills',
              'Practice with Drumcondra-style questions',
              'Time management and exam technique',
              'Building confidence for test day',
              'STen score improvement strategies',
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* 6th Class Head Start */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-white/20 text-sm px-3 py-1 rounded-full">Head Start Programme</span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl mt-4">
              6th Class Head Start
            </h3>
            <p className="text-emerald-100 mt-4 leading-relaxed">
              Is your kid in 6th class and wants to ease the pressure of secondary school
              Maths? Our Head Start programme builds a strong foundation so they hit the
              ground running in 1st Year.
            </p>
          </div>
          <div className="space-y-3">
            {['Prepare for secondary school Maths', 'Build confidence and reduce anxiety', 'Cover key topics ahead of time', 'Taught with student success in mind'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default function PrimaryClassPage() {
  return (
    <SubjectPageLayout
      heroTitle="Primary"
      heroHighlight="Class"
      heroSubtitle="Maths & Science — 5th & 6th Class"
      heroDescription="A stepping stone to secondary school. Build strong foundations with fun, engaging learning and targeted Drumcondra exam preparation."
      heroBadge="Primary School Grinds"
      heroTheme="ps"
      accentColor="ps"
      subjects={['Maths', 'Science']}
      levels="5th Class, 6th Class"
      goal="Build Strong Foundations for Secondary School"
      features={features}
      extraContent={drumcondraContent}
      reviews={primaryReviews}
    />
  )
}
