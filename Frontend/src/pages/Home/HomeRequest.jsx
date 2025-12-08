import React from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../../Components/CustomButton' // Assuming you already have this

const HomeRequest = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8">
          Ready to Ship with Confidence?
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CustomButton>
            Request a Quote
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeRequest
