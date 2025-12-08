import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeroImg from '../../assets/HomeHero.png' 
import CustomButton from '../../Components/CustomButton'

const HomeHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-gray-100"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={HeroImg} 
          alt="Transco Truck on Highway"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-6xl font-bold mb-4"
        >
          Shipping Made Simple — We Deliver.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-white text-lg md:text-xl max-w-2xl mb-6"
        >
          With real-time tracking, a wide range of equipment, and a team of transportation pros, we make your shipping process smooth, efficient, and stress-free from start to finish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CustomButton>
            Get to Know Us
          </CustomButton>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeHero
