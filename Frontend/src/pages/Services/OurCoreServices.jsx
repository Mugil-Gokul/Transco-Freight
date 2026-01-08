import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTruckPickup,
  FaTruckMoving,
  FaTrailer,
  FaWarehouse,
  FaHandshake,
  FaBoxes,
} from "react-icons/fa";

const services = [
  {
    icon: FaTrailer,
    title: "LTL Freight Service",
    shortDesc: "Cost-effective freight for smaller shipments.",
    details:
      "Transco offers reliable Less-Than-Truckload (LTL) freight solutions designed to meet the needs of businesses across Mississauga, the GTA, and throughout Ontario. Whether you're shipping a few pallets or smaller consolidated loads, our team ensures your freight moves efficiently and cost-effectively. With access to a wide network of regional and national carriers, we provide competitive rates and flexible transit options. Our logistics experts handle the coordination, so you don’t have to compare carriers or juggle multiple platforms. We simplify the process—giving you more time to focus on your business.",
  },
  {
    icon: FaTruckMoving,
    title: "Truckload Freight Service",
    shortDesc: "Full-capacity shipping for larger loads.",
    details:
      "For larger shipments that require full truck capacity, Transco’s Truckload Freight Service delivers dependable transportation across Ontario and beyond. From industrial goods to retail inventory, our truckload service is ideal for businesses that need consistent, secure, and scalable shipping solutions. Based in Mississauga, we’re positioned to serve key commercial hubs quickly and efficiently.",
  },
  {
    icon: FaTruckPickup,
    title: "Expedited Freight Service",
    shortDesc: "Time-critical deliveries without compromise.",
    details:
      "When timing is critical, Transco’s Expedited Freight Service ensures your shipment arrives when you need it—whether it’s across the street or across the country. We specialize in urgent deliveries of critical parts, equipment, and supplies, from a single pallet to a full truckload. Our team provides day-specific and time-sensitive delivery options, including weekend and holiday service. With real-time tracking and proactive communication, you’ll always know where your freight is and when it will arrive.",
  },
  {
    icon: FaHandshake,
    title: "Dedicated Freight Service",
    shortDesc: "Flexible, long-term freight solutions.",
    details:
      "Need a truck for a few hours or a long-term solution? Transco’s Dedicated Freight Service offers flexible options—hourly, daily, weekly, or monthly—to meet your operational needs. Our fleet is professional, well-maintained, and ready to represent your business with reliability and care. We act as an extension of your team, helping you streamline your supply chain, reduce costs, and improve delivery performance. Whether you're managing seasonal demand or long-term distribution, we’ll design a strategy that fits your business.",
  },
  {
    icon: FaBoxes,
    title: "Logistics as a Service",
    shortDesc: "End-to-end supply chain management.",
    details:
      "Transco’s Logistics as a Service (LaaS) model brings together technology, expertise, and flexibility to streamline your supply chain from end to end. Operating from Mississauga, we offer scalable logistics solutions that optimize transportation, distribution, and fulfillment—whether you're serving the GTA or shipping across Canada. Our LaaS platform provides real-time visibility, cost-effective planning, and a customer-first approach. We tailor each solution to your business needs, allowing you to focus on growth while we handle the complexities of logistics. From small businesses to enterprise-level operations, Transco delivers agile, reliable, and efficient logistics support.",
  },
  {
    icon: FaWarehouse,
    title: "Brokerage Services",
    shortDesc: "Connecting shippers with trusted carriers.",
    details:
      "As a trusted third-party logistics provider, Transco specializes in freight brokerage services that connect shippers with the right carriers—quickly and efficiently. Our experienced team leverages deep industry knowledge and advanced technology to ensure your freight moves on time and within budget. Whether you're shipping within Mississauga, across the GTA, or nationwide, we simplify transportation management by handling the coordination, compliance, and communication. With Transco as your logistics partner, you gain access to a dependable network and a team committed to your success.",
  },
];

const OurCoreServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#18357b] py-10 px-6 md:px-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-3xl md:text-5xl font-bold text-center text-white mb-20"
      >
        Our Core Services
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={`relative rounded-[28px] cursor-pointer overflow-hidden
            bg-white/5 backdrop-blur-xl border border-white/10
              transition-all duration-300
              ${isActive ? "h-auto" : "md:h-[270px]"}`}
            >
              {/* Spotlight glow */}
              <div
                className={`absolute inset-0 transition-opacity duration-300
                ${isActive ? "opacity-100" : "opacity-0"}
                bg-[radial-gradient(circle_at_30%_20%,rgba(255,80,80,0.25),transparent_60%)]`}
              />

              {/* Main content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div
                    className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center
                    bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg"
                  >
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-300">{service.shortDesc}</p>

                  <div className="mt-4 text-xs text-gray-400 md:hidden">
                    Tap to open
                  </div>
                </div>
              </div>

              {/* Reveal panel */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 z-20 flex flex-col
                    bg-gradient-to-br from-[#0c1436]/95 to-[#060b20]/95
                    text-sm text-gray-200"
                  >
                    <div className="p-4 md:overflow-hidden overflow-auto">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="leading-relaxed">{service.details}</p>
                    </div>

                    {/* Mobile close helper */}
                    <div className="p-4 border-t border-white/10 text-center md:hidden">
                      <span className="text-xs text-gray-400">
                        {isActive ? "Tap to close" : "Tap to open"}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurCoreServices;
