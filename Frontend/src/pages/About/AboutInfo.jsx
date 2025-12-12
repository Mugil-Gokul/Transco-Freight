import React from 'react'
import { motion } from 'framer-motion'

const AboutInfo = () => {
  return (
    <section className="w-full h-[300px] grid grid-cols-1 md:grid-cols-2 tracking-wider border-y overflow-hidden">
      {/* Left Block - Technology */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-red-600 text-white flex flex-col justify-center items-center px-6 md:px-12 py-16"
      >
        <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">
          Technology Driven Operation
        </h3>
        <p className="text-sm md:text-xl max-w-[250px] mx-auto text-center leading-relaxed">
          Real-time GPS tracking, AI dash cams, and driver coaching.
        </p>
      </motion.div>

      {/* Right Block - Sustainability */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#18357b] text-white flex flex-col justify-center items-center px-6 md:px-12 py-16"
      >
        <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">
          Commitment to Sustainability
        </h3>
        <p className="text-sm md:text-xl max-w-[250px] mx-auto text-center leading-relaxed">
          SmartWay Canada Partner with reduced emissions initiatives.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutInfo
