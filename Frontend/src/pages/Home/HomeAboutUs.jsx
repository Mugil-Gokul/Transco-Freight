import React from 'react'
import { motion } from 'framer-motion'
import WarehouseImg from '../../assets/Operations.png'

const infoCards = [
  {
    title: 'OUR MISSION',
    description: 'Exceeding customer expectations with reliable service and 24/7 dispatch.',
  },
  {
    title: 'TECHNOLOGY DRIVEN OPERATION',
    description: 'Real-time GPS tracking, AI dash cams, and driver coaching.',
  },
  {
    title: 'COMMITMENT TO SUSTAINABILITY',
    description: 'SmartWay Canada partner with reduced emissions initiatives.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const HomeAboutUs = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-16">
      {/* Banner Section */}
      <div className="relative w-full h-[200px] sm:h-[200px] md:h-[300px] overflow-hidden mb-12 sm:mb-20">
        <motion.img
          src={WarehouseImg}
          alt="About Us Banner"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />

        {/* Overlay Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        >
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold bg-black/60 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-center">
            ABOUT US
          </h2>
        </motion.div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#18357b] text-white p-5 sm:p-6 rounded-md shadow-lg min-h-[220px] sm:min-h-[280px] md:min-h-[350px] flex flex-col"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{card.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed flex-grow">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HomeAboutUs
