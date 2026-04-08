'use client'

import { motion } from 'framer-motion'
import SubjectPageLayout from '@/components/SubjectPageLayout'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Detailed Concept Explanation',
    description: 'Complex topics broken down into clear, understandable concepts that build a strong foundation for exams.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Practice Questions',
    description: 'Extensive practice with exam-style questions to build confidence and perfect technique before exams.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '1:1 Personalised Classes',
    description: 'Individual attention tailored to each student\'s learning pace and style for maximum results.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Boost Grades by 20%+',
    description: 'Proven methods that consistently help students improve their grades by at least 20%.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fun & Easy Learning',
    description: 'Subjects taught in an engaging, fun way that makes learning enjoyable and easy to retain.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'CBA Support',
    description: 'Guidance and preparation for Classroom-Based Assessments to achieve top descriptors on the JCPA.',
  },
]

const cbaContent = (
  <section className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">CBA Preparation</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
            Classroom-Based Assessments
          </h2>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
            <p>
              CBA (Classroom-Based Assessments) are mandatory, school-based projects for
              Junior Cycle students in 2nd and 3rd year, designed to showcase learning outside
              of final exams.
            </p>
            <p>
              They focus on skills like research, presentation, and creativity across various
              subjects, resulting in a descriptor (e.g., &ldquo;Above Expectations&rdquo;) on
              the Junior Cycle Profile of Achievement (JCPA).
            </p>
            <p>
              We provide comprehensive support to help students excel in their CBAs, from
              planning and research to presentation skills.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8"
        >
          <h3 className="font-heading font-bold text-xl text-navy-900 mb-6">CBA Key Points</h3>
          <ul className="space-y-4">
            {[
              'Mandatory for 2nd and 3rd year students',
              'Showcases learning beyond final exams',
              'Focuses on research, presentation & creativity',
              'Results in descriptors on the JCPA',
              'Skills applicable across all subjects',
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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
    </div>

    {/* 1st Year Head Start */}
    <div className="max-w-7xl mx-auto mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="bg-white/20 text-sm px-3 py-1 rounded-full">Head Start Programme</span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl mt-4">
              1st Year Head Start
            </h3>
            <p className="text-primary-100 mt-4 leading-relaxed">
              Is your kid now starting 1st Year and wants to ease the pressure of secondary
              school Maths? Our Head Start programme builds confidence and lays strong
              foundations before the school year begins.
            </p>
          </div>
          <div className="space-y-3">
            {['Ease the transition to secondary school', 'Build confidence in Maths early', 'Fun, engaging learning approach', 'Student success is our priority'].map((item, i) => (
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

export default function JuniorCyclePage() {
  return (
    <SubjectPageLayout
      heroTitle="Junior Cycle"
      heroSubtitle="Maths & Science — 1st, 2nd & 3rd Year"
      heroDescription="Achieve Higher Merit and Distinction grades with our structured learning approach. From detailed concept explanations to CBA preparation, we support your child every step of the way."
      heroBadge="Junior Cert Preparation"
      subjects={['Maths', 'Science']}
      levels="1st Year, 2nd Year, 3rd Year"
      goal="Achieve Higher Merit / Distinction Grades"
      features={features}
      extraContent={cbaContent}
    />
  )
}
