import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Cpu, Leaf } from 'lucide-react'
import WarehouseImg from '../../assets/Operations.png'

const infoCards = [
  {
    title: 'OUR MISSION',
    description:
      'Exceeding customer expectations with reliable service, transparency, and 24/7 dispatch operations.',
    icon: Truck,
  },
  {
    title: 'TECHNOLOGY DRIVEN',
    description:
      'Real-time GPS tracking, AI dash cams, predictive analytics, and continuous driver coaching.',
    icon: Cpu,
  },
  {
    title: 'SUSTAINABILITY',
    description:
      'Proud SmartWay Canada partner with eco-optimized routes and reduced emissions initiatives.',
    icon: Leaf,
  },
]

const HomeAboutUs = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-16">
      {/* ===== Banner Section (UNCHANGED) ===== */}
      <div className="relative w-full h-[200px] sm:h-[200px] md:h-[300px] overflow-hidden mb-16">
        <motion.img
          src={WarehouseImg}
          alt="About Us Banner"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold bg-black/60 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-center">
            ABOUT US
          </h2>
        </motion.div>
      </div>

      {/* ===== Premium Info Cards ===== */}
      <div className="relative px-4 sm:px-8 md:px-14 max-w-7xl mx-auto">
        {/* Background Accent */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#18357b]/10 via-transparent to-[#18357b]/10 blur-3xl" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2c52b2] to-[#0e1f4d]"
              >
                <div className="relative h-full rounded-2xl bg-white/90 backdrop-blur-md p-7 shadow-xl overflow-hidden">
                  {/* Top Accent Line */}
                  <span className="absolute top-0 left-0 h-1 w-0 bg-[#18357b] transition-all duration-500 group-hover:w-full" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#18357b]/10 flex items-center justify-center mb-6 group-hover:bg-[#18357b] transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#18357b] group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#18357b] mb-3 tracking-wide">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {card.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#18357b]/5 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeAboutUs
