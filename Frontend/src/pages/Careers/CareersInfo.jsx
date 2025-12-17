import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Fast-track Your Career Growth',
    description:
      'We provide our employees with the skills, training, support, and the opportunities they need to succeed.',
  },
  {
    title: 'Diversity & Inclusion',
    description:
      'We are committed to building an encouraging and inclusive work environment where people of all talents and backgrounds thrive and succeed.',
  },
  {
    title: 'Opportunities for Impact',
    description:
      'We value the contribution made by the local communities to our work and the natural environments. We commit ourselves to serving them in their growth and sustainability.',
  },
]

const CareersInfo = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 sm:px-6 md:px-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-xl mb-8 sm:mb-10 md:mb-12"
      >
        Empowering our people for success
      </motion.h2>

      {/* Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group bg-gray-100 rounded-xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Title changes color when card is hovered */}
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#18357b] group-hover:text-red-600 transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CareersInfo
