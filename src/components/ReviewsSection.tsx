'use client'

import { motion } from 'framer-motion'
import type { Review } from '@/data/reviews'

interface ReviewsSectionProps {
  reviews: Review[]
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  // Filter out reviews with empty text
  const displayReviews = reviews.filter((r) => r.text.length > 0)

  if (displayReviews.length === 0) return null

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mt-2 text-navy-900">
            Reviews & Testimonials
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            See what our students and parents have to say about their experience with Monika Grinds Academy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayReviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-navy-900">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
