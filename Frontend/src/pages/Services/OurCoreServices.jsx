import React from 'react'
import { motion } from 'framer-motion'
import {
  FaTruckPickup,
  FaTruckMoving,
  FaTrailer,
  FaWarehouse,
  FaHandshake,
  FaBoxes
} from 'react-icons/fa'

const services = [
  {
    icon: FaTruckPickup,
    title: 'Sprinter Vans',
    description: '1–4 pallets, agile for city deliveries.'
  },
  {
    icon: FaTruckMoving,
    title: 'Straight Trucks',
    description: '20′–26′ trucks, versatile freight handling.'
  },
  {
    icon: FaTrailer,
    title: '58′ Trailers',
    description: 'LTL, TL, Expedited, Dedicated services.'
  },
  {
    icon: FaBoxes,
    title: 'Logistics as a Service',
    description: 'End-to-end supply chain solutions.'
  },
  {
    icon: FaHandshake,
    title: 'Brokerage Services',
    description: 'Connecting shippers to carriers.'
  },
  {
    icon: FaWarehouse,
    title: 'Warehouse & Distribution',
    description: 'Secure storage & last mile delivery.'
  }
]

const OurCoreServices = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
      >
        Our Core Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Icon className="text-red-600 text-5xl mb-4 transition-colors duration-300 group-hover:text-[#18357b]" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default OurCoreServices
