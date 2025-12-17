import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";
import CustomButton from "./CustomButton";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "Fleet", path: "/fleet" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const handleScroll = () => {
    const section = document.getElementById('request-form')
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="w-full bg-white overflow-hidden">
      {/* Sticky Header */}
      <div className="fixed z-50 bg-white shadow-md w-full">
        {/* Mobile = flex, Desktop = 3-column grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center md:grid md:grid-cols-3">
          {/* LEFT LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-12 flex items-center"
          >
            <Link to="/">
              <motion.img
                src={Logo}
                alt="Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: scrolled ? 1 : 0, scale: 0.55 }}
                transition={{ duration: 0.6 }}
                className="h-full w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* NAV LINKS (Desktop center column) */}
          <nav className="hidden md:flex justify-center space-x-6 text-[#18357b] font-medium">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={link.path}
                  className="relative group transition-colors duration-200"
                >
                  <span className="group-hover:text-red-600">{link.name}</span>
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* RIGHT CTA (Desktop right column) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="hidden md:flex justify-end"
          >
            <CustomButton onClick={handleScroll}>
              Request a Quote
            </CustomButton>
          </motion.div>

          {/* MOBILE MENU BUTTON (right aligned when flex) */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiX className="w-7 h-7 text-gray-800" />
              ) : (
                <HiMenu className="w-7 h-7 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block text-[#18357b] font-medium hover:text-red-600 text-center md:text-none"
              >
                {link.name}
              </Link>
            ))}
            <CustomButton className=" flex items-center mx-auto" onClick={handleScroll}>
              Request a Quote
            </CustomButton>
          </motion.div>
        )}
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-10 bg-white pt-[80px] border-b">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -40 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Big Logo */}
          <motion.img
            src={Logo}
            alt="Big Logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              scale: scrolled ? 0.7 : 1,
              y: scrolled ? -80 : 0,
              opacity: scrolled ? 0 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="h-20 sm:h-24 md:h-32 w-auto object-contain mx-auto md:mx-0"
          />

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-t md:border-l md:border-t-0 px-4 sm:px-6 py-6 md:p-10 border-gray-300 text-center md:text-left"
          >
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              TRANSCO FREIGHT
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Transco combines a versatile fleet with intelligent logistics to
              deliver freight solutions that fit your schedule and budget. Every
              shipment is handled with care, precision, and a commitment to
              performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
