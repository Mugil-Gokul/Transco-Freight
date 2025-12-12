import React from 'react'
import { motion } from 'framer-motion'
import CustomButton from '../../Components/CustomButton'

const ContactForm = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-2xl mx-auto">
        {/* Hyphen-like line */}
        <div className="w-16 h-1 bg-red-600 mx-auto mb-4" />
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
        >
          GET IN TOUCH
        </motion.h2>

        {/* Form */}
        <form className="space-y-8">
          {[
            { label: 'First Name', required: true },
            { label: 'Last Name', required: true },
            { label: 'Title', required: true },
            { label: 'Business Email', required: true },
            { label: 'Phone Number', required: false },
            { label: 'Company', required: false },
            { label: "I'm interested in solutions for", required: true },
          ].map((field, index) => (
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
                type="text"
                required={field.required}
                className="w-full border-b-2 border-solid border-black focus:border-red-500 focus:outline-none px-1 py-2 text-gray-800 placeholder:text-gray-400"
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
            className="flex justify-center pt-4"
          >
            {/* <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-red-700 transition"
            >
              SUBMIT
            </motion.button> */}
            <CustomButton>
            SUBMIT
            </CustomButton>
          </motion.div>
        </form>
      </div>
    </motion.section>
  )
}

export default ContactForm
