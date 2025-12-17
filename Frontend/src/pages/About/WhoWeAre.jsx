import React, { useState } from "react";
import visionImage from "../../assets/Truck1.jpg";
import missionImage from "../../assets/Truck2.jpg";
import { IoIosArrowDown } from "react-icons/io";

const WhoWeAre = () => {
  const [visionOpen, setVisionOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center py-10 sm:py-16 md:py-20">
        Who We Are
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* VISION */}
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] text-white">
          <img
            src={visionImage}
            alt="Vision"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />

          <div className="relative z-10 h-full px-4 sm:px-6 md:pl-16 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Vision</h3>

            <div
              className="overflow-hidden transition-all duration-500"
              style={{
                maxHeight: visionOpen ? "200px" : "0px",
                opacity: visionOpen ? 1 : 0,
                marginTop: visionOpen ? "10px" : "0px",
              }}
            >
              <p className="text-sm sm:text-base md:text-lg max-w-md">
                We envision a future where logistics is seamless, sustainable,
                and empowering for every business.
              </p>
            </div>

            <div
              onClick={() => setVisionOpen(!visionOpen)}
              className="mt-4 sm:mt-6 cursor-pointer w-fit transition-transform duration-300"
              style={{
                transform: visionOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <IoIosArrowDown className="text-2xl sm:text-3xl" />
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] text-white">
          <img
            src={missionImage}
            alt="Mission"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />

          <div className="relative z-10 h-full px-4 sm:px-6 md:pl-16 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Mission</h3>

            <div
              className="overflow-hidden transition-all duration-500"
              style={{
                maxHeight: missionOpen ? "200px" : "0px",
                opacity: missionOpen ? 1 : 0,
                marginTop: missionOpen ? "10px" : "0px",
              }}
            >
              <p className="text-sm sm:text-base md:text-lg max-w-md">
                We strive to deliver excellence through teamwork, innovation,
                and a commitment to every shipment's success.
              </p>
            </div>

            <div
              onClick={() => setMissionOpen(!missionOpen)}
              className="mt-4 sm:mt-6 cursor-pointer w-fit transition-transform duration-300"
              style={{
                transform: missionOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <IoIosArrowDown className="text-2xl sm:text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
