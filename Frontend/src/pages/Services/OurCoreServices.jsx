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
  // {
  //   icon: FaTruckPickup,
  //   title: 'Sprinter Vans',
  //   description: '1–4 pallets, agile for city deliveries.'
  // },
  // {
  //   icon: FaTruckMoving,
  //   title: 'Straight Trucks',
  //   description: '20′–26′ trucks, versatile freight handling.'
  // },
  {
    icon: FaTrailer,
    title: '53′ Trailers',
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
    <section className="relative bg-gradient-to-br from-[#18357b] via-[#1f4ba0] to-[#0d1a3d] py-16 px-6 md:px-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-3xl md:text-5xl font-bold text-center text-white mb-12 tracking-wide"
      >
        Our Core Services
      </motion.h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-red-500 to-pink-600 text-white mb-6 group-hover:scale-110 transform transition-transform duration-300">
                <Icon className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {service.description}
              </p>

              {/* Animated underline */}
              <span className="absolute bottom-4 left-8 w-0 h-[2px] bg-red-500 group-hover:w-24 transition-all duration-500"></span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default OurCoreServices
