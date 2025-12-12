import React from 'react'
import { motion } from 'framer-motion'
import contactBg from '../../assets/HomeHero.png' // Replace with your actual image path

const ContactMain = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* CONTACT Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center"
      >
        <div className="bg-white bg-opacity-10 border border-white border-opacity-30 backdrop-blur-md rounded-lg py-6 px-4">
          <p className="text-white text-4xl font-bold tracking-wider opacity-30">CONTACT</p>
        </div>

        {/* Floating Form Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white rounded-lg shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">GET IN TOUCH</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Email *</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div className="md:col-span-2 text-center mt-4">
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactMain
