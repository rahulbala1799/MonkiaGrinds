'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 pattern-dots-light pointer-events-none" />

          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />

          {/* Accent shapes */}
          <div className="absolute top-8 left-8 w-16 h-16 border border-white/10 rounded-2xl rotate-12 pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-20 h-20 border border-white/10 rounded-full pointer-events-none" />

          <div className="relative">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
              Ready to <span className="text-gradient-gold">Boost</span> Your Grades?
            </h2>
            <p className="text-primary-100 mt-5 text-lg max-w-2xl mx-auto">
              Join Monika Grinds Academy and experience personalised 1:1 learning that delivers results.
              Boost your grades by at least 20%.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Class Today
              </Link>
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
  )
}
