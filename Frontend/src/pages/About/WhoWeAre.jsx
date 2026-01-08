import React from "react"
import { motion } from "framer-motion"
import missionImage from "../../assets/Truck2.jpg"
import {
  FaHandshake,
  FaClock,
  FaLeaf
} from "react-icons/fa"

const highlights = [
  {
    icon: FaHandshake,
    title: "Customer Commitment",
    desc: "Building long-term partnerships based on trust, reliability, and performance."
  },
  {
    icon: FaClock,
    title: "24/7 Dispatch Support",
    desc: "Round-the-clock communication ensuring fast response and on-time delivery."
  },
  {
    icon: FaLeaf,
    title: "Continuous Improvement",
    desc: "Exploring smarter, more sustainable logistics solutions for the future."
  }
]

const WhoWeAre = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={missionImage}
        alt="Our Mission"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wider uppercase
            bg-red-500/20 text-red-400 rounded-full">
            Our Mission
          </span>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Driving Reliability,<br />
            Building Lasting Partnerships
          </h2>

          <div className="space-y-5 text-gray-200 text-sm md:text-base leading-relaxed max-w-xl">
            <p>
              Transco is built on a foundation of exceeding customer expectations. We are dedicated to providing exceptional service, nurturing strong relationships within our team, and consistently fulfilling our commitments. Our top priority is to establish long-term partnerships with our clients, built on trust, reliability, and outstanding performance.
            </p>

            <p>
              We take pride in our dedication to on-time delivery, supported by our 24/7 dispatch team that ensures seamless communication and rapid response to customer needs. This around-the-clock availability allows us to maintain high service standards and adapt quickly to changing demands.
            </p>

            <p>
              Transco also continuously explores new opportunities and operational efficiencies that benefit our customers, our company, and the environment.
            </p>
          </div>
        </motion.div>

        {/* Right Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl
                bg-white/10 backdrop-blur-md border border-white/15
                text-white shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center
                  rounded-xl bg-red-500/90 text-white">
                  <Icon className="text-xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhoWeAre
