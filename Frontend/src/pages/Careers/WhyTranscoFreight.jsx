import React from "react";
import { motion } from "framer-motion";

const WhyTranscoFreight = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Hyphen-like line */}
        <div className="w-16 h-1 bg-red-600 mx-auto mb-4" />

        <h2 className="text-4xl md:text-5xl font-bold uppercase text-blue-900 mb-4">
          Why Transco Freight
        </h2>
        <h3 className="text-sm md:text-md tracking-widest font-semibold text-gray-800 mb-10">
          People-centered logistics for business that shape the world.
        </h3>
        <p className="text-md md:text-lg max-w-lg mx-auto text-gray-600 leading-relaxed">
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
