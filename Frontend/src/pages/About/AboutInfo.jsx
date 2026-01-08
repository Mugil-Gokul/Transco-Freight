import React from "react"
import { motion } from "framer-motion"
import { FaSatelliteDish, FaLeaf } from "react-icons/fa"

const AboutInfo = () => {
  return (
    <section className="w-full bg-[#f8f9fc] py-20 px-6 md:px-16">
      
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#0d1a3d] mb-4">
          Operational Excellence
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Technology, safety, and sustainability working together to deliver
          dependable logistics solutions.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Technology */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
        >
          {/* Accent */}
          <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-red-600" />

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center">
              <FaSatelliteDish className="text-xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0d1a3d]">
              Technology-Driven Operations
            </h3>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            At Transco, innovation is at the heart of our operations. We leverage
            advanced fleet management technology to provide real-time GPS tracking,
            vehicle diagnostics, and driver behavior insights. This allows us to
            optimize routes, reduce fuel consumption, and ensure timely deliveries.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            AI-powered dash cams and driver recognition tools help foster a culture
            of safety by offering live coaching and rewarding safe driving habits—
            making our roads safer and our team more engaged.
          </p>
        </motion.div>

        {/* Sustainability */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
        >
          {/* Accent */}
          <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-[#18357b]" />

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#18357b] text-white flex items-center justify-center">
              <FaLeaf className="text-xl" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#0d1a3d]">
              Commitment to Sustainability
            </h3>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Transco is proud to be a SmartWay Canada partner—a voluntary program
            led by Natural Resources Canada that promotes fuel-efficient freight
            transportation. Through SmartWay, we benchmark environmental
            performance and track fuel usage to reduce emissions.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            These initiatives align with our responsibility to operate sustainably
            and contribute to a cleaner, healthier future for communities across
            Canada.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutInfo
