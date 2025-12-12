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
      className="bg-[#f9f9f9] py-20 "
      // px-6 md:px-12 lg:px-24
    >
      <div className="text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Careers
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed mb-10"
        >
          Join our team and grow with a forward-thinking, people-focused organization. Explore open roles, contribute your skills, and build your career with us.
        </motion.p>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gray-100 px-8 py-10"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            Looking for open positions?
          </h3>
          <p className="text-base md:text-lg max-w-lg mx-auto text-gray-600 mb-6">
            All our live job openings are now available on our dedicated Job Portal.
          </p>
          <CustomButton>
            Visit Job Portal
          </CustomButton>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default JobInfo
