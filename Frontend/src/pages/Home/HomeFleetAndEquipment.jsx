import React from 'react'
import { motion } from 'framer-motion'
import Sprinter from '../../assets/Truck1.jpg'
import StraightTruck from '../../assets/Truck1.jpg'
import Trailer53 from '../../assets/Truck1.jpg'
import Specialty from '../../assets/Truck1.jpg'

// import React from 'react'
// import { motion } from 'framer-motion'
// import Sprinter from '../../assets/sprinter.png'
// import StraightTruck from '../../assets/straight-truck.png'
// import Trailer53 from '../../assets/trailer-53.png'
// import Specialty from '../../assets/specialty-equipment.png'

const fleetData = [
  {
    title: 'Sprinter Van',
    description: 'Capacity: 1–4 pallets',
    image: Sprinter,
  },
  {
    title: 'Straight Truck',
    description: 'Capacity: 12–14 pallets',
    image: StraightTruck,
  },
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
    <section className="w-full bg-white px-6 md:px-12 py-24">
      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-black uppercase mb-16 text-center"
      >
        Fleet and Equipment
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
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
              className="w-full h-[300px] object-cover mb-6 shadow-md"
            />

            {/* Card content */}
            <div className="bg-white border-t-2 border-red-600 rounded-md px-4 py-6 text-center shadow-sm w-full">
              <h3 className="text-lg font-bold text-[#18357b] uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HomeFleetAndEquipment
