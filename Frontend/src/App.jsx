import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AboutMain from './pages/About/AboutMain'
import BlogMain from './pages/Blogs/BlogMain'
import CareersMain from './pages/Careers/CareersMain'
import ContactMain from './pages/ContactUs/ContactMain'
import FleetMain from './pages/Fleet/FleetMain'
import HomeMain from './pages/Home/HomeMain'
import ServiceMain from './pages/Services/ServiceMain'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/careers" element={<CareersMain />} />
        <Route path="/blogs" element={<BlogMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/fleet" element={<FleetMain />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
