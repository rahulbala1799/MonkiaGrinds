'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import { featuredReviews } from '@/data/reviews'
import AMASection from '@/components/AMASection'
import ContactCTA from '@/components/ContactCTA'

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Unsure Which Subjects to Choose?',
    description: 'Get expert guidance on subject selection based on your strengths, interests, and career goals.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Higher or Ordinary Level?',
    description: 'Honest, personalised advice on which level is right for you to maximise your potential.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'CAO Points Strategy',
    description: 'Plan your subject choices strategically to reach the CAO points you need for your dream course.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Study Planning',
    description: 'Create an effective study plan that balances all your subjects and maximises your results.',
  },
]

export default function CounsellingPage() {
  return (
    <>
      <HeroSection
        title="Academic Counselling"
        subtitle="Maths & Science — Course Guidance"
        description="Parent or student — still confused or undecided which course to pick up? Book a session with Monika for personalised academic guidance and support."
        badge="Free Consultation Available"
        ctaText="Book a Session"
        ctaHref="/contact"
      />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">How We Can Help</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
              Still Confused or Undecided?
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Making the right academic choices can be overwhelming. Whether you&apos;re a parent
              or a student, Monika is here to guide you through the process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 card-hover border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy-900 mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Session CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
            <div className="relative">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl">Book a Session</h2>
              <p className="text-primary-100 mt-4 text-lg max-w-xl mx-auto">
                Get personalised academic counselling to make the right decisions for your
                future. No obligation, just honest guidance.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:0852401266"
                  className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Call: 085 240 1266
                </a>
                <a
                  href="mailto:monikagrinds@gmail.com"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ReviewsSection reviews={featuredReviews} />
      <AMASection />
    </>
  )
}
