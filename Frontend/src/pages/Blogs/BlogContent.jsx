import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const articles = [
  {
    title: 'Navigating Regulatory Challenges in Developing Industrial Infrastructure in India',
    date: '20-January-2025',
    image: '/images/compliance.jpg', // Replace with actual image path
    link: '#',
  },
  {
    title: 'The Future of Last-Mile Logistics',
    date: '05-June-2025',
    image: '/images/drone-delivery.jpg', // Replace with actual image path
    link: '#',
  },
  {
    title: 'Navigating Regulatory Challenges in Developing Industrial Infrastructure in India',
    date: '20-January-2025',
    image: '/images/compliance.jpg',
    link: '#',
  },
  {
    title: 'The Future of Last-Mile Logistics',
    date: '05-June-2025',
    image: '/images/drone-delivery.jpg',
    link: '#',
  },
]

const BlogContent = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Supply Chain & Warehousing
        </motion.h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                <a
                  href={article.link}
                  className="inline-block bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-red-700 transition"
                >
                  READ MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center items-center space-x-2"
        >
          {/* Left Arrow */}
          <button className="flex items-center justify-center w-9 h-9 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
            <FaArrowLeft className="text-sm" />
          </button>

          {/* Page Numbers */}
          <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium">
            1
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition">
            2
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition">
            3
          </span>

          {/* Right Arrow */}
          <button className="flex items-center justify-center w-9 h-9 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
            <FaArrowRight className="text-sm" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogContent
