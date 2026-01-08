import React from "react";
import { motion } from "framer-motion";

const highlights = ["Reliability", "Safety", "Precision", "Expertise"];

const AboutTeam = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-[#0d1a3d] overflow-hidden">
      {/* Background accent stripe */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 via-red-600 to-blue-500 opacity-30" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative inline-block"
        >
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-blue-500 bg-clip-text text-transparent">
            A Seasoned Leadership Team
          </span>
          <br />
          with a Long-Standing History of Success
        </motion.h2>

        {/* Animated paragraph blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed"
        >
          <motion.p
            whileHover={{ scale: 1.02, textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            Transco’s leadership team brings decades of hands-on experience in transportation and logistics. With a deep understanding of the industry’s demands, they’ve built a reputation for <span className="text-red-400 font-semibold">reliability</span>, <span className="text-blue-400 font-semibold">safety</span>, and operational excellence.
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.02, textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            The team remains firmly committed to delivering shipments on time, backed by proactive planning, real-time tracking, and a <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent font-semibold">customer-focused approach</span> that ensures every load is handled with care and precision.
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.02, textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            They continuously implement innovative solutions and operational efficiencies that benefit our customers, company, and the environment.
          </motion.p>
        </motion.div>

        {/* Highlights / badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-6"
        >
          {highlights.map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 border border-white/20 rounded-full text-white text-sm md:text-base font-medium cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      {/* Background accent stripe */}
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-red-500 via-red-600 to-blue-500 opacity-30" />
    </section>
  );
};

export default AboutTeam;
