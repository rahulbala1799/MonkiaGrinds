'use client'

import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index?: number
  accentColor?: string
}

export default function FeatureCard({ icon, title, description, index = 0, accentColor = 'primary' }: FeatureCardProps) {
  const borderColors: Record<string, string> = {
    primary: 'border-l-primary-500',
    jc: 'border-l-jc-500',
    lc: 'border-l-lc-500',
    ps: 'border-l-ps-500',
    ib: 'border-l-ib-500',
  }

  const iconBgColors: Record<string, string> = {
    primary: 'bg-primary-50 group-hover:bg-primary-100',
    jc: 'bg-jc-50 group-hover:bg-jc-100',
    lc: 'bg-lc-50 group-hover:bg-lc-100',
    ps: 'bg-ps-50 group-hover:bg-ps-100',
    ib: 'bg-ib-50 group-hover:bg-ib-100',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 border-l-4 ${borderColors[accentColor] || borderColors.primary} card-hover group`}
    >
      <div className={`w-12 h-12 rounded-xl ${iconBgColors[accentColor] || iconBgColors.primary} flex items-center justify-center mb-4 transition-colors`}>
        {icon}
      </div>
      <h3 className="font-heading font-bold text-lg text-navy-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
