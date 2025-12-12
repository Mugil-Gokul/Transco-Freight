import React from 'react'
import { motion } from 'framer-motion'
import WarehouseImg from '../../assets/Operations.png' // Replace with actual image path

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
    <section className="w-full bg-white py-10">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] overflow-hidden mb-20">
        {/* Banner Image */}
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
          className="absolute top-0 left-0 w-full h-full flex items-start justify-center pt-12"
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold bg-black/60 px-8 py-4 rounded-md">
            ABOUT US
          </h2>
        </motion.div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#18357b] text-white p-6 rounded-md shadow-lg h-[350px]"
          >
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HomeAboutUs
