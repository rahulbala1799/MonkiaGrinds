'use client'

import { motion } from 'framer-motion'
import HeroSection from './HeroSection'
import ReviewsSection from './ReviewsSection'
import AMASection from './AMASection'
import ContactCTA from './ContactCTA'
import FeatureCard from './FeatureCard'

interface SubjectInfo {
  icon: React.ReactNode
  title: string
  description: string
}

interface SubjectPageLayoutProps {
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  heroBadge?: string
  subjects: string[]
  levels?: string
  goal?: string
  features: SubjectInfo[]
  extraContent?: React.ReactNode
}

export default function SubjectPageLayout({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroBadge,
  subjects,
  levels,
  goal,
  features,
  extraContent,
}: SubjectPageLayoutProps) {
  return (
    <>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        badge={heroBadge}
        ctaText="Book a Class"
        ctaHref="/contact"
      />

      {/* Subjects & Levels Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">Subjects Covered</h2>
              {levels && <p className="text-gray-500 mt-2">{levels}</p>}
              {goal && (
                <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
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
                  className="bg-primary-50 text-primary-700 px-6 py-4 rounded-2xl font-heading font-semibold text-lg border border-primary-100"
                >
                  {subject}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
              How We Help You Succeed
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extra Content */}
      {extraContent}

      <ReviewsSection />
      <ContactCTA />
      <AMASection />
    </>
  )
}
