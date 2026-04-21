'use client'

import SubjectPageLayout from '@/components/SubjectPageLayout'
import { ibReviews } from '@/data/reviews'

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'International Curriculum',
    description: 'Specialised support designed specifically for the International Baccalaureate programme requirements.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Concept-Driven Learning',
    description: 'Deep understanding of core concepts that builds the critical thinking skills IB demands.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Exam Preparation',
    description: 'Thorough preparation with practice papers, past exam questions, and marking scheme analysis.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Personal Attention',
    description: 'Individualised classes that adapt to your specific IB syllabus and assessment requirements.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Boost Your Grades',
    description: 'Proven strategies and methods to improve your IB scores and reach your academic potential.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Scheduling',
    description: 'Classes scheduled around your IB timetable to ensure minimal disruption to your studies.',
  },
]

export default function IBPage() {
  return (
    <SubjectPageLayout
      heroTitle="IB"
      heroHighlight="Programme"
      heroSubtitle="Maths & Science — International Baccalaureate"
      heroDescription="Specialised support for IB students with concept-driven learning, exam preparation, and personalised classes tailored to the IB curriculum."
      heroBadge="IB Preparation"
      heroTheme="ib"
      accentColor="ib"
      subjects={['Maths', 'Science']}
      levels="International Baccalaureate"
      goal="Achieve Top IB Scores"
      features={features}
      reviews={ibReviews}
    />
  )
}
