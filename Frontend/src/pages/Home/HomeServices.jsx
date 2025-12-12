import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Sprinter from "../../assets/FullFreight.png";

const services = [
  {
    title: "SPRINTER VANS",
    description: "1–4 pallets, agile for city deliveries.",
    image: Sprinter,
  },
  {
    title: "STRAIGHT TRUCKS",
    description: "20–26' trucks",
    image: "/images/straight-truck.jpg",
  },
  {
    title: "BOX TRUCKS",
    description: "Ideal for medium loads and regional transport.",
    image: "/images/box-truck.jpg",
  },
  {
    title: "FLATBED TRUCKS",
    description: "Perfect for oversized or irregular cargo.",
    image: "/images/flatbed-truck.jpg",
  },
];

const HomeServices = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll =
        direction === "left"
          ? scrollLeft - clientWidth / 2 // move one card at a time
          : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-10">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-12 text-center">
        Our Services
      </h2>

      {/* Scrollable Row */}
      <div className="relative bg-[#18357b] px-6 py-14">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-6 left-6 text-red-500 bg-white p-2 rounded-full cursor-pointer z-10"
        >
          <FaArrowLeft className="text-2xl hover:scale-110 transition-transform" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-6 right-6 text-red-500 bg-white p-2 rounded-full cursor-pointer z-10"
        >
          <FaArrowRight className="text-2xl hover:scale-110 transition-transform" />
        </button>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollRef}
          className="flex gap-14 overflow-x-auto scroll-smooth no-scrollbar py-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden min-w-[300px] md:min-w-[700px]"
            >
              {/* Image Left */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-[300px] object-cover"
              />
              {/* Details Right */}
              <div className="flex flex-col justify-center p-6 md:w-1/2 ">
                <h3 className="text-lg md:text-xl font-bold text-[#18357b] uppercase mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
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
