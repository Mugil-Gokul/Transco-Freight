import React from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { FaBoxOpen, FaRoute, FaTruck, FaSmile } from "react-icons/fa"

const stats = [
  {
    number: 105396,
    label: "DELIVERIES",
    description:
      "Successfully delivered packages from origin to destination on time.",
    icon: FaBoxOpen,
    color: "from-red-500 to-pink-500",
  },
  {
    number: 473739,
    label: "MILES PER YEAR",
    description:
      "Traveling thousands of kilometers annually to serve our customers.",
    icon: FaRoute,
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: 500279,
    label: "TONS OF GOODS",
    description:
      "Tracking weight of goods passing through our facilities with precision.",
    icon: FaTruck,
    color: "from-green-400 to-lime-400",
  },
  {
    number: 5800,
    label: "SATISFIED CLIENTS",
    description:
      "Tailor-made solutions to meet every client’s unique logistics needs.",
    icon: FaSmile,
    color: "from-yellow-400 to-orange-400",
  },
]

const NumberAndData = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-b from-[#0d1a3d] to-[#18357b] overflow-hidden">
      {/* Background soft shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 left-0 w-80 h-80 rounded-full bg-red-500/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-yellow-400/20 blur-3xl"
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Numbers That Speak
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We believe in transparency, accountability, and delivering measurable results.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-tr ${stat.color} text-white text-2xl shadow-lg`}
              >
                <Icon />
              </div>

              {/* Count */}
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={3}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                {/* Glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/10 blur-xl rounded-xl mix-blend-overlay" />
              </h3>

              <p className="text-sm md:text-base font-semibold uppercase text-gray-300 mb-2">
                {stat.label}
              </p>

              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default NumberAndData
