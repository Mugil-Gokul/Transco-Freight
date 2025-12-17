import React from 'react'
import { motion } from 'framer-motion'

const LayeredTitle = ({
  title = 'REQUEST A QUOTE',
  backgroundOpacity = 0.5,
  sectionHeight = '200px',
}) => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: sectionHeight }}
    >
      {/* Background Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: backgroundOpacity }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center text-center 
                   text-[70px] sm:text-[70px] md:text-[120px] 
                   font-extrabold text-gray-300 uppercase tracking-tight select-none leading-none"
      >
        {title}
      </motion.h2>

      {/* Foreground Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-black uppercase">
          {title}
        </h2>
      </motion.div>
    </section>
  )
}

export default LayeredTitle
