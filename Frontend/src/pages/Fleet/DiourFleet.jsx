import React from 'react'
import { motion } from 'framer-motion'

const fleetData = [
  // {
  //   vehicle: 'Sprinter Van',
  //   capacity: '1–4 pallets',
  //   bestUse: 'Best for',
  //   features: 'Edge-competure',
  // },
  // {
  //   vehicle: 'Straight Truck',
  //   capacity: '12–14 pallets',
  //   bestUse: 'Regional deliveries',
  //   features: 'Eco-friendly',
  // },
  {
    vehicle: '53’ Trailer',
    capacity: 'Full truckload',
    bestUse: 'Long-haul, LTL, TL',
    features: 'Safety-first drivers',
  },
  {
    vehicle: 'Specialty Equipment',
    capacity: 'Temperature–sensitive goods, heavy loads',
    bestUse: 'Temperature–sensitive goods, heavy loads',
    features: 'Saft ented permites',
  },
]

const DiourFleet = () => {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12"
      >
        The Diour Fleet
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="overflow-x-auto"
      >
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden text-sm sm:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold">Vehicle</th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold">Capacity</th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold">Best Use</th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold">Specialty Features</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {fleetData.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="border-t border-gray-200"
              >
                <td className="px-3 sm:px-6 py-3 sm:py-4">{item.vehicle}</td>
                <td className="px-3 sm:px-6 py-3 sm:py-4">{item.capacity}</td>
                <td className="px-3 sm:px-6 py-3 sm:py-4">{item.bestUse}</td>
                <td className="px-3 sm:px-6 py-3 sm:py-4">{item.features}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  )
}

export default DiourFleet
