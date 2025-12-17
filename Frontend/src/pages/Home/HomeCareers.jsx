import React from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../../Components/CustomButton'
import LayeredTitle from '../../Components/LayeredTitle'

const HomeCareers = () => {
  return (
    <section className="w-full">
      {/* Title Section */}
      <LayeredTitle title="CAREERS" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto text-center bg-gray-100 py-12 sm:py-16 md:py-20 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 sm:mb-8 leading-snug">
          Drive for Us — Explore Opportunities with Transco Freight
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <CustomButton className="sm:w-auto">
            Open Positions (TruckRight)
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeCareers
