import React from 'react'
import HomeHero from './HomeHero'
import HomeToggle from './HomeToggle'
import HomeInsights from './HomeInsights'
import HomeRequest from './HomeRequest'
import HomeAboutUs from './HomeAboutUs'
import ContactUsForm from '../../Components/ContactUsForm'
import RequestAQuote from './RequestAQuote'
import HomeServices from './HomeServices'
import HomeCareers from './HomeCareers'
import HomeFleetAndEquipment from './HomeFleetAndEquipment'
import HomeTestimonial from './HomeTestimonial'
import HomeBlogAndNews from './HomeBlogAndNews'

const HomeMain = () => {
  return (
    <>
    <HomeHero/>
    <HomeToggle/>
    <HomeInsights/>
    <HomeRequest/>
    <HomeAboutUs/>
    <HomeServices/>
    <HomeCareers/>
    <HomeFleetAndEquipment/>
    <HomeTestimonial/>
    <HomeBlogAndNews/>

    <RequestAQuote/>
    <ContactUsForm/>
    </>
  )
}

export default HomeMain