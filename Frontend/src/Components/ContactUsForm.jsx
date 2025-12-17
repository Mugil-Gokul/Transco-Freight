import React from 'react'
import { motion } from 'framer-motion'
import BannerImg from '../assets/ContactImg.png' 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const ContactUsForm = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      {/* Banner Section */}
      <div className="relative w-full h-40 sm:h-52 md:h-[200px] overflow-hidden mb-12 sm:mb-16 md:mb-20">
        <motion.img
          src={BannerImg}
          alt="Contact Banner"
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
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold bg-black/60 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md tracking-wider text-center">
            CONTACT US
          </h2>
        </motion.div>
      </div>

      {/* Form + Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Contact Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 sm:space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="123-456-7890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-5 sm:px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition w-full sm:w-auto"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 sm:space-y-8"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#18357b] mb-2">Get in Touch</h3>
            <p className="text-sm text-gray-700">
              Unit 2 – 2798 Thamesgate Drive<br />
              Mississauga, Ontario L4T 4E8
            </p>
            <p className="text-sm text-gray-700 mt-2">Phone: 905-514-1010</p>
            <p className="text-sm text-gray-700">Email: info@transcofreight.com</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#18357b] mb-2">Safety & Compliance</h3>
            <p className="text-sm text-gray-700">Email: safety@transcofreight.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUsForm
