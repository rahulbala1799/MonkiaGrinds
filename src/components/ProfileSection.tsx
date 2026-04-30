'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const whyChooseMe = [
  'Doctorate in Education',
  'Clear, structured & patient teaching',
  'Proven student success',
]

function GoldCheckIcon() {
  return (
    <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function ProfileSection() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section className="section-padding bg-[#f3f2ef] relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative px-0 sm:px-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <span className="text-primary-600 font-semibold text-xs uppercase tracking-[0.2em]">Profile</span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mt-2 text-navy-900">
            Meet your <span className="text-gradient">tutor</span>
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="h-1.5 bg-gradient-to-r from-gold-400 via-primary-500 to-gold-400" />

          <div className="p-6 sm:p-10 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-start">
              {/* Circular portrait — LinkedIn-style */}
              <div className="flex flex-col items-center lg:items-start shrink-0">
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-[0_8px_30px_rgba(12,10,29,0.12)] ring-[3px] ring-gold-400/45 ring-offset-4 ring-offset-white">
                  {!photoFailed ? (
                    <Image
                      src="/profile.jpeg"
                      alt="Dr Monika Gandhi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 208px, 208px"
                      priority={false}
                      onError={() => setPhotoFailed(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-primary-800 text-center p-4">
                      <span className="font-heading font-bold text-5xl text-white tracking-tight">MG</span>
                      <span className="text-white/70 text-[11px] mt-3 leading-tight">Add portrait: public/profile.jpeg</span>
                    </div>
                  )}
                </div>
                <div className="mt-5 text-center lg:text-left max-w-[16rem] mx-auto lg:mx-0">
                  <p className="font-heading font-bold text-xl text-navy-900 leading-snug">Dr Monika Gandhi</p>
                  <p className="text-gray-600 text-sm mt-1 leading-snug">
                    Founder &amp; lead tutor · Monika Grinds Academy
                  </p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    Maths, Science &amp; Biology · Irish and IB curriculum · personalised grinds
                  </p>
                </div>
              </div>

              {/* Headlines + bio */}
              <div className="flex-1 min-w-0 text-center lg:text-left border-t border-gray-100 lg:border-t-0 lg:border-l lg:pl-10 pt-8 lg:pt-0">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-navy-900 tracking-tight">
                  Why Choose Me:
                </h3>
                <ul className="mt-4 space-y-3 w-fit mx-auto lg:mx-0 text-left">
                  {whyChooseMe.map((line) => (
                    <li key={line} className="flex gap-3 text-gray-800 text-[15px] sm:text-base leading-snug">
                      <GoldCheckIcon />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-4 text-gray-600 text-[15px] sm:text-base leading-relaxed border-t border-gray-100 pt-8 max-w-2xl mx-auto lg:mx-0">
                  <p>
                    Contact us today if you want to give your child the support and direction they need to truly succeed
                    in their studies. Enrol with a highly qualified tutor who holds a Ph.D. and has over 20 years of
                    teaching experience across a range of subjects and levels.
                  </p>
                  <p>
                    For the past three and a half years, we have been working exclusively with students in Ireland,
                    teaching in line with the Irish and IB curriculum and tailoring lessons to suit Irish and IB exam patterns and
                    expectations.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center lg:items-stretch justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex w-full sm:w-auto justify-center items-center gradient-primary text-white px-7 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 max-w-xs lg:max-w-none"
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/counselling"
                    className="inline-flex w-full sm:w-auto justify-center items-center border border-gray-300 text-navy-800 px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors max-w-xs lg:max-w-none"
                  >
                    Academic counselling
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
