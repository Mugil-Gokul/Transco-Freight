import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const QuoteTitleSection = () => {
  return (
    <section className="relative w-full h-[300px] flex items-center justify-center bg-white overflow-hidden">
      {/* Background Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute text-[120px] md:text-[120px] font-extrabold text-gray-300 uppercase tracking-tight select-none"
      >
        REQUEST A QUOTE
      </motion.h2>

      {/* Foreground Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center pt-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase">
          REQUEST A QUOTE
        </h2>
        <div className="mt-4 flex justify-center">
          <FaChevronDown className="text-black text-xl animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default QuoteTitleSection
