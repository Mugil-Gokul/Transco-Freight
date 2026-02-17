import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Multiple.png";
import CustomButton from "../../Components/CustomButton";
import { Link, useNavigate } from "react-router-dom";

const FleetHero = () => {
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    navigate("/#request-form");
  };

  return (
    <div className="relative w-full h-[80vh] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Transco Truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-3xl leading-tight"
        >
          Fleets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl max-w-xl"
        >
          From cargo Vans to 53' Trailers, we have the right vehicle for every
          shipment.
        </motion.p>
        {/* <CustomButton onClick={handleRequestQuote} className="mt-8">
          Request a Quote
        </CustomButton> */}
        <CustomButton className="mt-8">
          <Link to="/contact">Request a Quote</Link>
        </CustomButton>
      </div>
    </div>
  );
};

export default FleetHero;
