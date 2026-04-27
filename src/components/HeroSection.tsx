'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  highlightedTitle?: string
  subtitle: string
  description: string
  ctaText?: string
  ctaHref?: string
  badge?: string
  theme?: 'default' | 'jc' | 'lc' | 'ps' | 'ib'
}

const themeConfig = {
  default: {
    gradient: 'gradient-hero',
    blob1: 'bg-primary-500/20',
    blob2: 'bg-primary-400/10',
    blob3: 'bg-primary-500/5',
    subtitleColor: 'text-primary-200',
    badgeDot: 'bg-green-400',
    ctaGradient: 'gradient-primary',
    ctaShadow: 'shadow-primary-500/25 hover:shadow-primary-500/40',
  },
  jc: {
    gradient: 'gradient-hero-jc',
    blob1: 'bg-blue-500/20',
    blob2: 'bg-blue-400/15',
    blob3: 'bg-blue-500/5',
    subtitleColor: 'text-blue-200',
    badgeDot: 'bg-blue-400',
    ctaGradient: 'bg-gradient-to-r from-jc-500 to-jc-700',
    ctaShadow: 'shadow-jc-500/25 hover:shadow-jc-500/40',
  },
  lc: {
    gradient: 'gradient-hero-lc',
    blob1: 'bg-purple-500/20',
    blob2: 'bg-purple-400/15',
    blob3: 'bg-purple-500/5',
    subtitleColor: 'text-purple-200',
    badgeDot: 'bg-purple-400',
    ctaGradient: 'bg-gradient-to-r from-lc-500 to-lc-700',
    ctaShadow: 'shadow-lc-500/25 hover:shadow-lc-500/40',
  },
  ps: {
    gradient: 'gradient-hero-ps',
    blob1: 'bg-emerald-500/20',
    blob2: 'bg-emerald-400/15',
    blob3: 'bg-emerald-500/5',
    subtitleColor: 'text-emerald-200',
    badgeDot: 'bg-emerald-400',
    ctaGradient: 'bg-gradient-to-r from-ps-500 to-ps-700',
    ctaShadow: 'shadow-ps-500/25 hover:shadow-ps-500/40',
  },
  ib: {
    gradient: 'gradient-hero-ib',
    blob1: 'bg-orange-500/20',
    blob2: 'bg-orange-400/15',
    blob3: 'bg-orange-500/5',
    subtitleColor: 'text-orange-200',
    badgeDot: 'bg-orange-400',
    ctaGradient: 'bg-gradient-to-r from-ib-500 to-ib-700',
    ctaShadow: 'shadow-ib-500/25 hover:shadow-ib-500/40',
  },
}

export default function HeroSection({
  title,
  highlightedTitle,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  badge,
  theme = 'default',
}: HeroSectionProps) {
  const t = themeConfig[theme]

  return (
    <section className={`relative min-h-[90vh] flex items-center ${t.gradient} overflow-hidden`}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pattern-grid-dark pointer-events-none" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 ${t.blob1} rounded-full blur-3xl`} />
        <div className={`absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-48 h-48 md:w-96 md:h-96 ${t.blob2} rounded-full blur-3xl`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[600px] md:h-[600px] ${t.blob3} rounded-full blur-3xl`} />
        {/* Accent corner shapes */}
        <div className="absolute top-20 right-10 md:right-20 w-24 h-24 md:w-40 md:h-40 border border-white/10 rounded-3xl rotate-12" />
        <div className="absolute bottom-32 right-20 md:right-40 w-16 h-16 md:w-24 md:h-24 border border-white/5 rounded-2xl -rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold-400/40 rounded-full" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-gold-400/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className={`w-2 h-2 ${t.badgeDot} rounded-full animate-pulse`} />
              <span className="text-sm text-white/90 font-medium">{badge}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight"
          >
            {title}
            {highlightedTitle && (
              <span className="text-gradient-gold block sm:inline"> {highlightedTitle}</span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-5 text-xl sm:text-2xl ${t.subtitleColor} font-heading font-semibold`}
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-gray-300/90 leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Link
              href={ctaHref}
              className={`${t.ctaGradient} text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl ${t.ctaShadow} transition-all duration-300 hover:-translate-y-0.5`}
            >
              {ctaText}
            </Link>
            <Link
              href="tel:0852401266"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Call: 085 240 1266
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
