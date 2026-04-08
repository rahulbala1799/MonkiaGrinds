'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AMASection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 mb-6">
            <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-900">
            AMA — Ask Monika Anything
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Have questions about courses, subjects, exam preparation, or how grinds work?
            Don&apos;t hesitate to reach out. Monika is happy to help!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="gradient-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Send a Message
            </Link>
            <a
              href="tel:0852401266"
              className="bg-gray-100 text-navy-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Call: 085 240 1266
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
