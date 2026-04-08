'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import AMASection from '@/components/AMASection'
import ContactCTA from '@/components/ContactCTA'
import { featuredReviews } from '@/data/reviews'

const programmes = [
  {
    title: 'Primary Class',
    levels: '5th & 6th Class',
    subjects: ['Maths'],
    description: 'A stepping stone to secondary school. Build strong foundations with fun, engaging learning.',
    href: '/primary-class',
    color: 'from-ps-500 to-ps-700',
    shadow: 'shadow-ps-500/25',
    borderColor: 'border-ps-500',
  },
  {
    title: 'Junior Cycle',
    levels: '1st, 2nd & 3rd Year',
    subjects: ['Maths', 'Science'],
    description: 'Achieve Higher Merit and Distinction grades with structured learning and CBA support.',
    href: '/junior-cycle',
    color: 'from-jc-500 to-jc-700',
    shadow: 'shadow-jc-500/25',
    borderColor: 'border-jc-500',
  },
  {
    title: 'Leaving Cert',
    levels: '4th, 5th & 6th Year',
    subjects: ['Maths', 'Biology', 'Chemistry'],
    description: 'Boost your grades to achieve H1/H2. Theory, practice exams, and exam paper preparation.',
    href: '/leaving-cert',
    color: 'from-lc-500 to-lc-700',
    shadow: 'shadow-lc-500/25',
    borderColor: 'border-lc-500',
  },
  {
    title: 'IB Programme',
    levels: 'International Baccalaureate',
    subjects: ['Maths', 'Science'],
    description: 'Specialised support for IB students with concept-driven learning and exam preparation.',
    href: '/ib',
    color: 'from-ib-500 to-ib-700',
    shadow: 'shadow-ib-500/25',
    borderColor: 'border-ib-500',
  },
]

const stats = [
  { value: '20%+', label: 'Grade Improvement' },
  { value: '1:1', label: 'Personal Classes' },
  { value: '5+', label: 'Subjects Offered' },
  { value: '100%', label: 'Dedication' },
]

export default function Home() {
  return (
    <>
      <HeroSection
        title="Monika Grinds"
        highlightedTitle="Academy"
        subtitle="Maths & Science Grinds — Irish Curriculum"
        description="Success of student is our priority. Expert 1:1 grinds for Primary, Junior Cycle, Leaving Cert and IB students. Boost your grades by at least 20% with personalised attention and structured learning."
        badge="Enrolling Now for All Levels"
        ctaText="Get Started"
        ctaHref="/contact"
      />

      {/* Stats Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Accent shapes */}
        <div className="absolute top-6 left-10 w-16 h-16 border-2 border-primary-100 rounded-full pointer-events-none" />
        <div className="absolute bottom-6 right-10 w-10 h-10 border-2 border-gold-400/20 rounded-lg rotate-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50/50 border border-gray-100"
              >
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient">
                  {stat.value}
                </div>
                <p className="text-gray-500 mt-2 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50 pattern-dots relative overflow-hidden">
        {/* Accent blob */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-2 text-navy-900">
                Academic Excellence Through <span className="text-gradient">Personalised Learning</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Monika Grinds Academy, we believe every student can achieve academic excellence with
                  the right support and guidance. Our approach combines detailed concept explanations with
                  hands-on practice to ensure deep understanding.
                </p>
                <p>
                  Whether your child is starting primary school, preparing for the Junior Cert, or
                  aiming for top Leaving Cert grades, we provide structured 1:1 classes tailored to
                  their individual learning needs.
                </p>
                <p>
                  Subjects are taught in a fun way for easy learning, always with the student&apos;s
                  success in mind. Our proven methods help students boost their grades by at least 20%.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: 'Detailed Concepts', text: 'Clear explanations that make complex topics simple', color: 'border-l-jc-500 bg-jc-50/50' },
                { title: 'Practice Questions', text: 'Extensive exam-style practice for confidence', color: 'border-l-lc-500 bg-lc-50/50' },
                { title: 'Exam Papers', text: 'Work through real past papers for exam readiness', color: 'border-l-ps-500 bg-ps-50/50' },
                { title: '1:1 Attention', text: 'Personalised classes focused on your needs', color: 'border-l-ib-500 bg-ib-50/50' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-2xl p-5 shadow-sm border border-gray-100 border-l-4 ${item.color}`}
                >
                  <h3 className="font-heading font-bold text-sm text-navy-900">{item.title}</h3>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="section-padding bg-white pattern-grid relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-gray-100 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">Our Programmes</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-2 text-navy-900">
              Explore Our <span className="text-gradient">Programmes</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              From primary school to Leaving Cert and IB, we offer comprehensive support across all levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programmes.map((prog, index) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={prog.href} className="block group">
                  <div className={`bg-gradient-to-br ${prog.color} rounded-2xl p-6 md:p-8 text-white shadow-lg ${prog.shadow} card-hover relative overflow-hidden`}>
                    {/* Card pattern */}
                    <div className="absolute inset-0 pattern-dots-light pointer-events-none" />
                    {/* Card accent shape */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-white/10 rounded-full pointer-events-none" />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-heading font-extrabold text-xl md:text-2xl">{prog.title}</h3>
                          <p className="text-white/80 text-sm mt-1 font-medium">{prog.levels}</p>
                        </div>
                        <svg
                          className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <p className="text-white/90 text-sm mb-4">{prog.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {prog.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hindi Classes */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-gray-200 rounded-2xl rotate-12 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">Also Available</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mt-2 text-navy-900">
              Hindi <span className="text-gradient">Classes</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              We also offer Hindi language classes for both children and adults.
              Whether you&apos;re a beginner or looking to improve your fluency, get in touch!
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 gradient-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all duration-300"
            >
              Enquire About Hindi Classes
            </Link>
          </motion.div>
        </div>
      </section>

      <ReviewsSection reviews={featuredReviews} />
      <ContactCTA />
      <AMASection />
    </>
  )
}
