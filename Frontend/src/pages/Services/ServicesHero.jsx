import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../../assets/HomeHero.png' // Adjust path as needed
import CustomButton from '../../Components/CustomButton'

const ServicesHero = () => {
  return (
    <div className="relative w-full h-[80vh] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="TRANSCO Truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight"
        >
          Reliable Transportation & Logistics Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-xl max-w-xl"
        >
          From city deliveries to nationwide freight, we handle it all.
        </motion.p>
        <CustomButton className='mt-8'>
          Request a Quote
        </CustomButton>
      </div>
    </div>
  )
}

export default ServicesHero
