import React from 'react'
import { motion } from 'framer-motion'

const ContactInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Left Column: Get in Touch */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-2">
            Unit 2 – 2798 Thamesgate Drive<br />
            Mississauga, Ontario L4T 4E8
          </p>
          <p className="text-gray-700 mb-2">
            Phone:{' '}
            <a
              href="tel:9055141010"
              className="text-[#18357b] hover:underline inline-block"
            >
              905-514-1010
            </a>
          </p>
          <p className="text-gray-700">
            Email:{' '}
            <a
              href="mailto:info@transcofreight.com"
              className="text-[#18357b] hover:underline inline-block"
            >
              info@transcofreight.com
            </a>
          </p>
        </motion.div>

        {/* Right Column: Safety & Compliance */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Safety & Compliance
          </h3>
          <p className="text-gray-700">
            Email:{' '}
            <a
              href="mailto:safety@transcofreight.com"
              className="text-[#18357b] hover:underline inline-block"
            >
              safety@transcofreight.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactInfo
