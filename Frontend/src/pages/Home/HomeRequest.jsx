import React from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../../Components/CustomButton'

const HomeRequest = () => {

  const handleScroll = () => {
    const section = document.getElementById('request-form')
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-6 sm:mb-8 leading-snug">
          Ready to Ship with Confidence?
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <CustomButton onClick={handleScroll}>
            Request a Quote
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeRequest
