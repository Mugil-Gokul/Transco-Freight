import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  {
    number: 105396,
    label: 'DELIVERED PACKAGES',
    description:
      'Over the years we have managed to successfully deliver packages from their origin till the final destination in the required amount of time.',
  },
  {
    number: 473739,
    label: 'KM PER YEAR',
    description:
      'Every year we travel a certain amount of kilometers to deliver exceptional services to our customers.',
  },
  {
    number: 500279,
    label: 'TONS OF GOODS',
    description:
      'At Mitchell Cotts we strive to keep a clear record of the weight of all the goods that pass through our facilities.',
  },
  {
    number: 5800,
    label: 'SATISFIED CLIENTS',
    description:
      'We work hard to cater to all the different needs of our clients by giving them tailor made solutions to fit their requests.',
  },
]

const NumberAndData = () => {
  return (
    <section className="w-full bg-blue-900 text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-start"
        >
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">
            NUMBERS AND DATES:
          </h2>
          <h3 className="text-2xl md:text-4xl tracking-wider font-semibold">
            BASE FACTS AND FIGURES
          </h3>
        </motion.div>

        {/* Right Side Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-red-600 mb-2">
                <CountUp
                  start={1}
                  end={stat.number}
                  duration={3}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
              <p className="text-md font-semibold uppercase mb-2">{stat.label}</p>
              <p className="text-sm text-gray-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NumberAndData
