import React from 'react'
import HomeHero from './HomeHero'
import HomeToggle from './HomeToggle'
import HomeInsights from './HomeInsights'
import HomeRequest from './HomeRequest'
import HomeAboutUs from './HomeAboutUs'
import ContactUsForm from '../../Components/ContactUsForm'
import RequestAQuote from './RequestAQuote'
import QuoteTitleSection from '../../Components/QuoteTitleSection'

const HomeMain = () => {
  return (
    <>
    <HomeHero/>
    <HomeToggle/>
    <HomeInsights/>
    <HomeRequest/>
    <HomeAboutUs/>
    <QuoteTitleSection/>
    <RequestAQuote/>
    <ContactUsForm/>
    </>
  )
}

export default HomeMain