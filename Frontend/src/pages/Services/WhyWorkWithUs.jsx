import React from 'react'
import { motion } from 'framer-motion'
import {
  FaMapMarkedAlt,
  FaHeadset,
  FaRoute,
  FaDollarSign
} from 'react-icons/fa'

const benefits = [
  {
    icon: FaMapMarkedAlt,
    label: 'Nationwide Coverage'
  },
  {
    icon: FaHeadset,
    label: '24/7 Customer Support'
  },
  {
    icon: FaRoute,
    label: 'Real-Time Tracking'
  },
  {
    icon: FaDollarSign,
    label: 'Competitive Pricing'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
}

const WhyWorkWithUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 relative z-10"
      >
        Why Work With Us?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              className="group bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                <Icon className="text-red-600 text-5xl transition-colors duration-300 group-hover:text-[#18357b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                {benefit.label}
              </h3>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default WhyWorkWithUs
