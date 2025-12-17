import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TruckImg1 from '../../assets/Truck1.jpg'
import TruckImg2 from '../../assets/Truck2.jpg'

const slideVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

const HomeToggle = () => {
  const [activeTab, setActiveTab] = useState('technology')

  const tabs = {
    technology: {
      title: 'Efficient Freight, Every Mile Matters',
      description:
        'Transco combines a versatile fleet with intelligent logistics to deliver freight solutions that fit your schedule and budget. Every shipment is handled with care, precision, and a commitment to performance.',
      image: TruckImg1,
    },
    logistics: {
      title: 'Your Reliable Freight Partner',
      description:
        'Transco is an asset-based transportation provider headquartered in Mississauga, Ontario. We offer competitive pricing and dependable service for both regional and cross-border shipments.',
      image: TruckImg2,
    },
  }

  const current = tabs[activeTab]

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Toggle Tabs */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-inner flex-wrap gap-2 sm:gap-0">
          <button
            onClick={() => setActiveTab('logistics')}
            className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              activeTab === 'logistics'
                ? 'bg-[#18357b] text-white shadow-md'
                : 'text-gray-700 hover:text-[#18357b]'
            }`}
          >
            Logistics Network
          </button>
          <button
            onClick={() => setActiveTab('technology')}
            className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
              activeTab === 'technology'
                ? 'bg-[#18357b] text-white shadow-md'
                : 'text-gray-700 hover:text-[#18357b]'
            }`}
          >
            Technology Platform
          </button>
        </div>
      </div>

      {/* Slide Transition Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center"
        >
          {/* Text */}
          <div>
            <h2 className="text-red-600 text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              {current.title}
            </h2>
            <p className="text-[#18357b] text-base sm:text-lg leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-auto rounded-md shadow-md object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default HomeToggle
