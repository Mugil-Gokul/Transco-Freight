import React from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../../Components/CustomButton'

const JobInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#f9f9f9] py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-20"
    >
      <div className="text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Careers
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm sm:text-base md:text-xl max-w-xl sm:max-w-2xl mx-auto text-gray-700 leading-relaxed mb-6 sm:mb-10 px-2 sm:px-0"
        >
          Join our team and grow with a forward-thinking, people-focused organization. Explore open roles, contribute your skills, and build your career with us.
        </motion.p>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gray-100 px-5 sm:px-8 py-8 sm:py-10 rounded-lg shadow-md mx-auto"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
            Looking for open positions?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6">
            All our live job openings are now available on our dedicated Job Portal.
          </p>
          <CustomButton className="sm:w-auto">
            <a href="https://transco.truckright.ca/careers" target="_blank" rel="noopener noreferrer">Visit Job Portal</a>
          </CustomButton>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default JobInfo
