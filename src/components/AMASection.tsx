'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AMASection() {
  return (
    <section className="section-padding bg-navy-900 pattern-grid-dark relative overflow-hidden">
      {/* Decorative accent shapes */}
      <div className="absolute top-10 right-10 w-24 h-24 md:w-40 md:h-40 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-16 h-16 md:w-28 md:h-28 border border-primary-500/10 rounded-3xl rotate-12 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gold-400/30 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-500/20 border border-primary-500/30 mb-6">
            <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            AMA — Ask Monika <span className="text-gradient-gold">Anything</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Have questions about courses, subjects, exam preparation, or how grinds work?
            Don&apos;t hesitate to reach out. Monika is happy to help!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="gradient-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Send a Message
            </Link>
            <a
              href="tel:0852401266"
              className="bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Call: 085 240 1266
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
