import React from "react";
import { motion } from "framer-motion";
import aboutHeroImage from "../../assets/AboutHeroImg.png"; // adjust path
import CustomButton from "../../Components/CustomButton";

const AboutHero = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
        {/* Background Image */}
        <img
          src={aboutHeroImage}
          alt="Transco logistics meeting"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

        {/* Overlay Content - bottom left */}
        <div className="relative z-10 h-full flex items-end px-4 sm:px-6 md:px-20 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            {/* ABOUT US */}
            <p className="text-lg sm:text-2xl md:text-4xl font-bold uppercase tracking-wide underline underline-offset-4 mb-16 sm:mb-24 md:mb-40">
              ABOUT US
            </p>

            {/* WHO WE ARE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Who We Are
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
              Transco combines a versatile fleet with intelligent logistics to
              deliver freight solutions that fit your schedule and budget. Every
              shipment is handled with care, precision, and a commitment to
              performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#18357b] text-white py-10 sm:py-12 px-4 sm:px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold text-red-600 text-sm sm:text-base">
              CALL CENTER
            </p>
            <p className="text-xs sm:text-sm">Give us a free call</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-semibold text-red-600 text-sm sm:text-base">
              WORKING HOURS
            </p>
            <p className="text-xs sm:text-sm">Mon–Sat: 9AM–6PM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-semibold text-red-600 text-sm sm:text-base">
              OUR LOCATION
            </p>
            <p className="text-xs sm:text-sm">Mississauga, ON</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <CustomButton>CONTACT US</CustomButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
