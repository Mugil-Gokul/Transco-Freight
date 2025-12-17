import React from 'react'
import { motion } from 'framer-motion'
import {
  FaFileAlt,
  FaTruckLoading,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa'

const steps = [
  {
    icon: FaFileAlt,
    title: 'Request a Quote',
    description: 'Get a personalized estimate tailored to your delivery needs.'
  },
  {
    icon: FaTruckLoading,
    title: 'Schedule Pickup',
    description: 'Choose a convenient time and location for pickup.'
  },
  {
    icon: FaShieldAlt,
    title: 'Safe Transportation',
    description: 'Your goods are handled with care and tracked securely.'
  },
  {
    icon: FaClock,
    title: 'On-time Delivery',
    description: 'We ensure timely arrival, every time.'
  }
]

const HowItWorks = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-20"
      >
        How It Works
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line always visible */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200" />

        {steps.map((step, index) => {
          const Icon = step.icon
          const isLeft = index % 2 === 0
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 flex w-full ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  isLeft ? 'pr-6 md:pr-8 text-right' : 'pl-6 md:pl-8 text-left'
                }`}
              >
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <Icon className="text-red-600 text-3xl sm:text-4xl md:text-5xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorks
