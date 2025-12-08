import React from 'react'
import { motion } from 'framer-motion'
import TrackingImg from '../../assets/FullFreight.png'
import FleetImg from '../../assets/Multiple.png'
import CommunicationImg from '../../assets/Sunset.png'

const insights = [
  { title: 'REAL-TIME TRACKING', caption: '', image: TrackingImg },
  { title: 'VERSATILE FLEET', caption: 'From vans to trailers, we handle all load sizes.', image: FleetImg },
  { title: 'PRO ACTIVE COMMUNICATION', caption: '', image: CommunicationImg },
]

const HomeInsights = () => {
  return (
    <section className="w-full bg-white py-16 ">
      {/* Big black heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 tracking-tight">
        INSIGHTS
      </h2>

      {/* Tight rectangular stack */}
      <div className="grid md:grid-cols-3 gap-0">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Title always visible below image */}
            <div className="bg-white py-4 text-center border border-gray-200">
              <h3 className="text-lg font-bold text-[#18357b]">{item.title}</h3>
            </div>

            {/* Hover overlay driven by group-hover (reliable) */}
            <div
              className="pointer-events-none absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/80 flex items-center justify-center text-center px-4"
            >
              {item.caption && (
                <p className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150 text-white text-lg leading-relaxed">
                  {item.caption}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HomeInsights
