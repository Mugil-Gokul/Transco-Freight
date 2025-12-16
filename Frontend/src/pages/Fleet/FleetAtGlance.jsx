import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTruckPickup,
  FaTruckMoving,
  FaTrailer,
  FaCogs
} from 'react-icons/fa'

const fleet = [
  {
    id: 'sprinter',
    icon: FaTruckPickup,
    title: 'Sprinter Vans',
    capacity: '1–4 pallets',
    details: 'Best for city deliveries. Compact, agile, and efficient for urban logistics.'
  },
  {
    id: 'straight',
    icon: FaTruckMoving,
    title: 'Straight Trucks',
    capacity: '12–14 pallets',
    details: 'Versatile for mid-sized loads. Ideal for regional freight and flexible routing.'
  },
  {
    id: 'trailer',
    icon: FaTrailer,
    title: '53′ Trailers',
    capacity: 'Full truckload',
    details: 'Perfect for long-haul and bulk shipments. Reliable for nationwide coverage.'
  },
  {
    id: 'specialty',
    icon: FaCogs,
    title: 'Specialty Equipment',
    capacity: 'Liftgates, climate control',
    details: 'Custom configurations for sensitive cargo. Includes temperature control and hydraulic lifts.'
  }
]

const FleetAtGlance = () => {
  const [activeId, setActiveId] = useState(null)
  const detailsRef = useRef(null)

  const handleLearnMore = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  // Scroll into view when activeId changes
  useEffect(() => {
    if (activeId && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeId])

  const activeTruck = fleet.find((truck) => truck.id === activeId)

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
      >
        Fleet at a Glance
      </motion.h2>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {fleet.map((vehicle, index) => {
          const Icon = vehicle.icon
          return (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 p-20 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center"
            >
              {/* Icon on the left */}
              <Icon className="text-red-600 text-8xl mr-4 flex-shrink-0" />
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {vehicle.title}
                </h3>
                <p className="text-gray-600 mb-2">{vehicle.capacity}</p>
                <button
                  onClick={() => handleLearnMore(vehicle.id)}
                  className="text-red-600 font-medium hover:underline hover:text-[#18357b]"
                >
                  {activeId === vehicle.id ? 'Hide Details' : 'Learn More'}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Expanded details section below grid */}
      <AnimatePresence>
        {activeTruck && (
          <motion.div
            ref={detailsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-gray-100 p-8 rounded-xl shadow-md max-w-4xl mx-auto flex items-center justify-between"
          >
            {/* Text on the left */}
            <div className="text-left max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {activeTruck.title}
              </h3>
              <p className="text-gray-700 mb-6">{activeTruck.details}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow">
                Book Now
              </button>
            </div>

            {/* Icon on the right */}
            <div className="ml-8">
              <activeTruck.icon className="text-red-600 text-9xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FleetAtGlance
