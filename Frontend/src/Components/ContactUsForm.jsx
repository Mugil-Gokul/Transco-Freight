import React, { useState } from 'react'
import { motion } from 'framer-motion'
import BannerImg from '../assets/ContactImg.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`

    // Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@transcofreight.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    // Open Gmail compose in same browser tab
    window.open(gmailUrl, '_blank')
  }

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
          onSubmit={handleSubmit}
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="123-456-7890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18357b]"
              placeholder="Your message..."
              required
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
            <p className="text-sm text-gray-700 mt-2">Email: info@transcofreight.com</p>
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
