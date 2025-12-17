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
    title: 'Nationwide Reach',
    stat: 'Many States',
    description: 'Reliable coverage across major trade lanes and metro hubs.'
  },
  {
    icon: FaHeadset,
    title: 'Always Available',
    stat: '24/7',
    description: 'Dedicated support teams monitoring shipments round the clock.'
  },
  {
    icon: FaRoute,
    title: 'Live Visibility',
    stat: 'Real-Time',
    description: 'GPS tracking with proactive alerts and route optimization.'
  },
  {
    icon: FaDollarSign,
    title: 'Cost Efficient',
    stat: 'Optimized',
    description: 'Data-driven pricing that reduces logistics overhead.'
  }
]

const WhyWorkWithUs = () => {
  return (
    <section className="relative py-24 px-4 sm:px-8 md:px-20 bg-white overflow-hidden">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-20"
      >
        <p className="uppercase tracking-widest text-sm text-red-600 mb-4">
          Our Advantage
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Why Work With Us
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {benefits.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center px-6"
            >
              {/* Connector line */}
              {index !== benefits.length + 1 && (
                <span className="hidden md:block absolute top-12 right-0 w-full h-[2px] bg-gray-200" />
              )}

              {/* Icon */}
              <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-[#18357b] text-white flex items-center justify-center text-3xl shadow-lg mb-6">
                <Icon />
              </div>

              {/* Stat */}
              <p className="text-red-600 font-semibold tracking-wide mb-1">
                {item.stat}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default WhyWorkWithUs
