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
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-10 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20"
      >
        How It Works
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
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
              className={`relative mb-16 flex items-center justify-${isLeft ? 'start' : 'end'} w-full`}
            >
              <div className={`w-full md:w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <Icon className="text-red-600 text-4xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
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
