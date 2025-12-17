import React from "react";
import { motion } from "framer-motion";

const WhyTranscoFreight = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Hyphen-like line */}
        <div className="w-12 sm:w-16 h-1 bg-red-600 mx-auto mb-3 sm:mb-4" />

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-blue-900 mb-3 sm:mb-4">
          Why Transco Freight
        </h2>
        <h3 className="text-xs sm:text-sm md:text-base tracking-widest font-semibold text-gray-800 mb-6 sm:mb-8 md:mb-10">
          People-centered logistics for business that shape the world.
        </h3>
        <p className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg mx-auto text-gray-600 leading-relaxed px-2 sm:px-0">
          Transco combines a versatile fleet with intelligent logistics to
          deliver freight solutions that fit your schedule and budget. Every
          shipment is handled with care, precision, and a commitment to
          performance.
        </p>
      </motion.div>
    </section>
  );
};

export default WhyTranscoFreight;
