import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SmartWayLogo from '../assets/logo.png' 

const footerLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Careers', path: '/careers' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Blog', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
]

const Footer = () => {
  return (
    <footer className="w-full bg-[#18357b] text-white py-12 px-6 sm:px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
      >
        {/* Quick Links */}
        <nav>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block text-sm sm:text-base hover:text-red-500 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Contact</h3>
          <p className="text-sm sm:text-base mb-2">2798 Thamesgate Drive, Mississauga, ON</p>
          <p className="text-sm sm:text-base mb-2">Phone: 905-514-1010</p>
          <p className="text-sm sm:text-base">Email: info@transcofreight.com</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a
              // href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300 text-lg sm:text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              // href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300 text-lg sm:text-xl"
            >
              <FaInstagram />
            </a>
            <a
              // href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300 text-lg sm:text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <img
            src={SmartWayLogo}
            alt="SmartWay Certified"
            className="h-8 sm:h-10 w-auto mx-auto md:mx-0"
          />
        </div>
      </motion.div>

      {/* Bottom bar for mobile */}
      <div className="mt-10 text-center text-xs sm:text-sm text-gray-300">
        © {new Date().getFullYear()} Mugil Technologies Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
