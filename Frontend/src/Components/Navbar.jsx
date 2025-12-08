import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const navLinks = ["About", "Services", "Careers", "Fleet", "Blog", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for staggered animations
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <header className="w-full bg-white overflow-hidden">
      {/* ⭐ TRUE STICKY WRAPPER */}
      <div className="fixed z-50 bg-white shadow-md w-full">
        {/* TOP NAV BAR */}
        <div className="max-w-7xl mx-auto px-12 py-3 grid grid-cols-3 items-center">
          {/* LEFT LOGO SPACE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-14 flex items-center"
          >
            <motion.img
              src={Logo}
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: scrolled ? 1 : 0, scale: 0.55 }}
              transition={{ duration: 0.6 }}
              className="h-full w-auto object-contain"
            />
          </motion.div>

          {/* NAV LINKS */}
          <nav className="flex justify-center space-x-6 text-[#18357b] font-medium">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, color: "#1D4ED8" }}
                className="hover:text-blue-700"
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* RIGHT CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700"
            >
              Request a Quote
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ----------------------------------------------- */}
      {/* BOTTOM SECTION (Moves behind but no layout shift) */}
      {/* ----------------------------------------------- */}
      <div className="relative z-10 bg-white pt-[80px] border-b">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -40 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 gap-6 items-center"
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
            className="h-32 w-auto object-contain"
          />

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-l p-10 border-gray-300"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              TRANSCO FREIGHT
            </h2>
            <p className="text-gray-600 leading-relaxed">
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
