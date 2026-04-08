'use client'

import { motion } from 'framer-motion'
import HeroSection from './HeroSection'
import ReviewsSection from './ReviewsSection'
import AMASection from './AMASection'
import ContactCTA from './ContactCTA'
import FeatureCard from './FeatureCard'
import type { Review } from '@/data/reviews'

interface SubjectInfo {
  icon: React.ReactNode
  title: string
  description: string
}

interface SubjectPageLayoutProps {
  heroTitle: string
  heroHighlight?: string
  heroSubtitle: string
  heroDescription: string
  heroBadge?: string
  heroTheme?: 'default' | 'jc' | 'lc' | 'ps' | 'ib'
  accentColor?: string
  subjects: string[]
  levels?: string
  goal?: string
  features: SubjectInfo[]
  extraContent?: React.ReactNode
  reviews: Review[]
}

const accentStyles: Record<string, { label: string; subjectBg: string; subjectText: string; subjectBorder: string; goalBg: string; goalText: string }> = {
  primary: { label: 'text-primary-500', subjectBg: 'bg-primary-50', subjectText: 'text-primary-700', subjectBorder: 'border-primary-100', goalBg: 'bg-primary-50', goalText: 'text-primary-700' },
  jc: { label: 'text-jc-600', subjectBg: 'bg-jc-50', subjectText: 'text-jc-700', subjectBorder: 'border-jc-100', goalBg: 'bg-jc-50', goalText: 'text-jc-700' },
  lc: { label: 'text-lc-600', subjectBg: 'bg-lc-50', subjectText: 'text-lc-700', subjectBorder: 'border-lc-100', goalBg: 'bg-lc-50', goalText: 'text-lc-700' },
  ps: { label: 'text-ps-600', subjectBg: 'bg-ps-50', subjectText: 'text-ps-700', subjectBorder: 'border-ps-100', goalBg: 'bg-ps-50', goalText: 'text-ps-700' },
  ib: { label: 'text-ib-600', subjectBg: 'bg-ib-50', subjectText: 'text-ib-700', subjectBorder: 'border-ib-100', goalBg: 'bg-ib-50', goalText: 'text-ib-700' },
}

export default function SubjectPageLayout({
  heroTitle,
  heroHighlight,
  heroSubtitle,
  heroDescription,
  heroBadge,
  heroTheme = 'default',
  accentColor = 'primary',
  subjects,
  levels,
  goal,
  features,
  extraContent,
  reviews,
}: SubjectPageLayoutProps) {
  const a = accentStyles[accentColor] || accentStyles.primary

  return (
    <>
      <HeroSection
        title={heroTitle}
        highlightedTitle={heroHighlight}
        subtitle={heroSubtitle}
        description={heroDescription}
        badge={heroBadge}
        ctaText="Book a Class"
        ctaHref="/contact"
        theme={heroTheme}
      />

      {/* Subjects & Levels Overview */}
      <section className="section-padding bg-white pattern-dots relative">
        {/* Accent shape */}
        <div className="absolute top-10 right-10 w-20 h-20 md:w-32 md:h-32 border-2 border-gray-100 rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-12 h-12 md:w-20 md:h-20 border-2 border-gray-100 rounded-2xl rotate-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className={`${a.label} font-bold text-sm uppercase tracking-wider`}>What We Offer</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-2 text-navy-900">
                Subjects Covered
              </h2>
              {levels && <p className="text-gray-500 mt-2 text-lg">{levels}</p>}
              {goal && (
                <div className={`mt-4 inline-flex items-center gap-2 ${a.goalBg} ${a.goalText} px-4 py-2 rounded-full text-sm font-bold`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {goal}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className={`${a.subjectBg} ${a.subjectText} px-6 py-4 rounded-2xl font-heading font-bold text-lg border ${a.subjectBorder}`}
                >
                  {subject}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50 pattern-grid relative overflow-hidden">
        {/* Decorative accent blob */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className={`${a.label} font-bold text-sm uppercase tracking-wider`}>Why Choose Us</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-2 text-navy-900">
              How We Help You <span className="text-gradient">Succeed</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                accentColor={accentColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extra Content */}
      {extraContent}

      <ReviewsSection reviews={reviews} />
      <ContactCTA />
      <AMASection />
    </>
  )
}
