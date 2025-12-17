import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Sprinter from "../../assets/SprinterVans.png";
import StraightTrucks from "../../assets/FullFreight.png";
import BoxTruck from "../../assets/BoxTruck.png";
import FlatBedTruck from "../../assets/Truck2.jpg";

const services = [
  {
    title: "SPRINTER VANS",
    description: "1–4 pallets, agile for city deliveries.",
    image: Sprinter,
  },
  {
    title: "STRAIGHT TRUCKS",
    description: "20–26' trucks",
    image: StraightTrucks,
  },
  {
    title: "BOX TRUCKS",
    description: "Ideal for medium loads and regional transport.",
    image: BoxTruck,
  },
  {
    title: "FLATBED TRUCKS",
    description: "Perfect for oversized or irregular cargo.",
    image: FlatBedTruck,
  },
];

const HomeServices = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll =
        direction === "left"
          ? scrollLeft - clientWidth / 1.2 // smoother step on mobile
          : scrollLeft + clientWidth / 1.2;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-10 sm:py-16">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black uppercase mb-8 sm:mb-12 text-center px-4">
        Our Services
      </h2>

      {/* Scrollable Row */}
      <div className="relative bg-[#18357b] px-4 sm:px-6 py-10 sm:py-14">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-4 sm:top-6 left-4 sm:left-6 text-red-500 bg-white p-2 sm:p-3 rounded-full cursor-pointer z-10 shadow-md"
        >
          <FaArrowLeft className="text-lg sm:text-2xl hover:scale-110 transition-transform" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-red-500 bg-white p-2 sm:p-3 rounded-full cursor-pointer z-10 shadow-md"
        >
          <FaArrowRight className="text-lg sm:text-2xl hover:scale-110 transition-transform" />
        </button>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 sm:gap-10 overflow-x-auto scroll-smooth no-scrollbar py-6 sm:py-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden min-w-[260px] sm:min-w-[320px] md:min-w-[700px]"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] object-cover"
              />
              {/* Details */}
              <div className="flex flex-col justify-center p-4 sm:p-6 md:w-1/2">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#18357b] uppercase mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
