import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../../Components/CustomButton'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `Contact Request from ${formData.firstName} ${formData.lastName}`
    const body = `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Title: ${formData.title}
Business Email: ${formData.email}
Phone Number: ${formData.phone}
Company: ${formData.company}
Interest: ${formData.interest}`

    // Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@transcofreight.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    // Open Gmail compose in same browser tab
    window.open(gmailUrl, '_blank')
  }

  const fields = [
    { label: 'First Name', name: 'firstName', required: true },
    { label: 'Last Name', name: 'lastName', required: true },
    { label: 'Title', name: 'title', required: true },
    { label: 'Business Email', name: 'email', required: true },
    { label: 'Phone Number', name: 'phone', required: false },
    { label: 'Company', name: 'company', required: false },
    { label: "I'm interested in solutions for", name: 'interest', required: true },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
        {/* Hyphen-like line */}
        <div className="w-12 sm:w-16 h-1 bg-red-600 mx-auto mb-4" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center"
        >
          GET IN TOUCH
        </motion.h2>

        {/* Form */}
        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
                {field.required && <span className="text-red-600"> *</span>}
              </label>
              <input
                type={field.name === 'email' ? 'email' : 'text'}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full border-b-2 border-black focus:border-red-500 focus:outline-none px-2 py-3 text-gray-800 placeholder:text-gray-400 text-sm sm:text-base"
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            </motion.div>
          ))}

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center pt-6"
          >
            <CustomButton type="submit" className="px-6 sm:px-8 py-3 text-sm sm:text-base">
              SUBMIT
            </CustomButton>
          </motion.div>
        </form>
      </div>
    </motion.section>
  )
}

export default ContactForm
