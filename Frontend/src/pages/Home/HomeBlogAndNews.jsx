import React from 'react'
import { motion } from 'framer-motion'
import { FaRegCalendarAlt } from 'react-icons/fa'

// Replace with your actual image paths
import Article1 from '../../assets/Truck1.jpg'
import Article2 from '../../assets/Truck2.jpg'

const articles = [
  {
    category: 'Supply Chain & Warehousing',
    title: 'Navigating Regulatory Challenges in Developing Industrial Infrastructure in India',
    date: '20 June 2025',
    image: Article1,
  },
  {
    category: 'Supply Chain & Warehousing',
    title: 'The Future of Last-Mile Logistics',
    date: '05 June 2025',
    image: Article2,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const HomeBlogAndNews = () => {
  return (
    <section className="w-full bg-white px-6 md:px-12 py-10">
      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-black uppercase mb-16 text-center"
      >
        Blog & News
      </motion.h2>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            {/* Background Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
              <p className="text-sm uppercase text-gray-200 mb-2">
                {article.category}
              </p>
              <h3 className="text-lg md:text-xl font-semibold leading-snug mb-2">
                {article.title}
              </h3>
              <div className="flex items-center text-sm text-gray-300 mb-4">
                <FaRegCalendarAlt className="mr-2" />
                {article.date}
              </div>
              <button className="text-sm font-semibold text-white underline hover:text-red-500 transition">
                READ MORE
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HomeBlogAndNews
