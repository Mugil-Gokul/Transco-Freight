import React from 'react'
import ContactImg from "../../assets/ContactImg.png"
import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden mb-20 md:rounded-b-[150px]">
        {/* Banner Image */}
        <motion.img
          src={ContactImg}
          alt="Contact Us Banner"
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
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold bg-black/60 px-8 py-4 rounded-md uppercase">
            Contact US
          </h2>
        </motion.div>
      </div>
  )
}

export default ContactHero