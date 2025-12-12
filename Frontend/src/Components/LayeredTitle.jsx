import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const LayeredTitle = ({
  title = 'REQUEST A QUOTE',
  backgroundOpacity = 0.5,
  showChevron = true,
  sectionHeight = '200px',
}) => {
  return (
    <section
      className={`relative w-full flex items-center justify-center overflow-hidden`}
      style={{ height: sectionHeight }}
    >
      {/* Background Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: backgroundOpacity }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[120px] font-extrabold text-gray-300 uppercase tracking-tight select-none"
      >
        {title}
      </motion.h2>

      {/* Foreground Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase">
          {title}
        </h2>
        {/* {showChevron && (
          <div className="mt-4 flex justify-center">
            <FaChevronDown className="text-black text-xl animate-bounce" />
          </div>
        )} */}
      </motion.div>
    </section>
  )
}

export default LayeredTitle
