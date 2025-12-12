import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  'Transco Delivered On Time And Exceeded Expectations.',
  'Reliable service with professional drivers and clean equipment.',
  'Excellent communication and fast turnaround on urgent shipments.',
  'Transco made our logistics seamless and stress-free.',
]

const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const HomeTestimonial = () => {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      next()
    }, 5000)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <section className="w-full bg-white px-6 md:px-12 py-24">
      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-black uppercase mb-32 text-center"
      >
        Testimonials
      </motion.h2>

      {/* Quote Section */}
      <div className="relative mx-auto text-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-[#18357b] rounded-full p-3"
        >
          <FaChevronLeft />
        </button>

        {/* Animated Quote */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-medium text-gray-800 px-6"
          >
            “{testimonials[index]}”
          </motion.p>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-[#18357b] rounded-full p-3"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-40 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#18357b]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HomeTestimonial
