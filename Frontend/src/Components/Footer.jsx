import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import SmartWayLogo from '../assets/logo.png' // Replace with actual logo path

const footerLinks = ['About', 'Services', 'Careers', 'Fleet', 'Blog', 'Contact']

const Footer = () => {
  return (
    <footer className="w-full bg-[#18357b] text-white py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12"
      >
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:underline hover:text-gray-300 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-sm mb-2">2798 Thamesgate Drive, Mississauga, ON</p>
          <p className="text-sm mb-2">Phone: 905-514-1010</p>
          <p className="text-sm">Email: info@transcofreight.com</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
          <img
            src={SmartWayLogo}
            alt="SmartWay Certified"
            className="h-10 w-auto"
          />
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
