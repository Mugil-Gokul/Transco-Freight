// components/CustomButton.jsx
import React from 'react'
import { motion } from 'framer-motion'

const CustomButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default CustomButton
