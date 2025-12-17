import React from 'react'
import { motion } from 'framer-motion'
import Sprinter from '../../assets/SprinterVans.png'
import StraightTruck from '../../assets/FullFreight.png'
import Trailer53 from '../../assets/Truck1.jpg'
import Specialty from '../../assets/Operations.png'

const fleetData = [
  // {
  //   title: 'Sprinter Van',
  //   description: 'Capacity: 1–4 pallets',
  //   image: Sprinter,
  // },
  // {
  //   title: 'Straight Truck',
  //   description: 'Capacity: 12–14 pallets',
  //   image: StraightTruck,
  // },
  {
    title: '53’ Trailer',
    description: 'Full truckload capabilities',
    image: Trailer53,
  },
  {
    title: 'Specialty Equipment',
    description: 'Liftgates, climate control',
    image: Specialty,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const HomeFleetAndEquipment = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-black uppercase mb-8 sm:mb-12 md:mb-16 text-center leading-snug"
      >
        Fleet and Equipment
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
        {fleetData.map((item, index) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Image above card */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-4 sm:mb-6 shadow-md rounded-md"
            />

            {/* Card content */}
            <div className="bg-white border-t-2 border-red-600 rounded-md px-4 py-4 sm:py-6 text-center shadow-sm w-full">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#18357b] uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HomeFleetAndEquipment
