'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import AMASection from '@/components/AMASection'
import ContactCTA from '@/components/ContactCTA'

const programmes = [
  {
    title: 'Primary Class',
    levels: '5th & 6th Class',
    subjects: ['Maths'],
    description: 'A stepping stone to secondary school. Build strong foundations with fun, engaging learning.',
    href: '/primary-class',
    color: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/25',
  },
  {
    title: 'Junior Cycle',
    levels: '1st, 2nd & 3rd Year',
    subjects: ['Maths', 'Science'],
    description: 'Achieve Higher Merit and Distinction grades with structured learning and CBA support.',
    href: '/junior-cycle',
    color: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-500/25',
  },
  {
    title: 'Leaving Cert',
    levels: '4th, 5th & 6th Year',
    subjects: ['Maths', 'Biology', 'Chemistry'],
    description: 'Boost your grades to achieve H1/H2. Theory, practice exams, and exam paper preparation.',
    href: '/leaving-cert',
    color: 'from-purple-500 to-violet-600',
    shadow: 'shadow-purple-500/25',
  },
  {
    title: 'IB Programme',
    levels: 'International Baccalaureate',
    subjects: ['Maths', 'Science'],
    description: 'Specialised support for IB students with concept-driven learning and exam preparation.',
    href: '/ib',
    color: 'from-orange-500 to-red-500',
    shadow: 'shadow-orange-500/25',
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
        title="Monika Grinds Academy"
        subtitle="Maths & Science Grinds — Irish Curriculum"
        description="Success of student is our priority. Expert 1:1 grinds for Primary, Junior Cycle, Leaving Cert and IB students. Boost your grades by at least 20% with personalised attention and structured learning."
        badge="Enrolling Now for All Levels"
        ctaText="Get Started"
        ctaHref="/contact"
      />

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl sm:text-5xl bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-gray-500 mt-2 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
                Academic Excellence Through Personalised Learning
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
                { icon: '📐', title: 'Detailed Concepts', text: 'Clear explanations that make complex topics simple' },
                { icon: '📝', title: 'Practice Questions', text: 'Extensive exam-style practice for confidence' },
                { icon: '🎯', title: 'Exam Papers', text: 'Work through real past papers for exam readiness' },
                { icon: '⭐', title: '1:1 Attention', text: 'Personalised classes focused on your needs' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-heading font-semibold text-sm text-navy-900">{item.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Programmes</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
              Explore Our Programmes
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
                  <div className={`bg-gradient-to-br ${prog.color} rounded-2xl p-6 md:p-8 text-white shadow-lg ${prog.shadow} card-hover`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-xl md:text-2xl">{prog.title}</h3>
                        <p className="text-white/80 text-sm mt-1">{prog.levels}</p>
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
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hindi Classes */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Also Available</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
              Hindi Classes
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              We also offer Hindi language classes for both children and adults.
              Whether you&apos;re a beginner or looking to improve your fluency, get in touch!
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 gradient-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all duration-300"
            >
              Enquire About Hindi Classes
            </Link>
          </motion.div>
        </div>
      </section>

      <ReviewsSection />
      <ContactCTA />
      <AMASection />
    </>
  )
}
