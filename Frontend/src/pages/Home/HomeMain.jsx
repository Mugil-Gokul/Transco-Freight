import React, { useEffect } from "react";
import HomeHero from "./HomeHero";
import HomeToggle from "./HomeToggle";
import HomeInsights from "./HomeInsights";
import HomeRequest from "./HomeRequest";
import HomeAboutUs from "./HomeAboutUs";
import ContactUsForm from "../../Components/ContactUsForm";
import RequestAQuote from "./RequestAQuote";
import HomeServices from "./HomeServices";
import HomeCareers from "./HomeCareers";
import HomeFleetAndEquipment from "./HomeFleetAndEquipment";
import HomeTestimonial from "./HomeTestimonial";
import HomeBlogAndNews from "./HomeBlogAndNews";
import { useLocation } from "react-router-dom";

const HomeMain = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      <HomeHero />
      <HomeToggle />
      <HomeInsights />
      <HomeRequest />
      <HomeAboutUs />
      <HomeServices />
      {/* <HomeCareers /> */}
      <HomeFleetAndEquipment />
      <HomeTestimonial />
      {/* <HomeBlogAndNews /> */}
      {/* <section id="request-form">
        <RequestAQuote />
      </section> */}
      <ContactUsForm />
    </>
  );
};

export default HomeMain;
