import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import AboutMain from './pages/About/AboutMain'
import BlogMain from './pages/Blogs/BlogMain'
import CareersMain from './pages/Careers/CareersMain'
import ContactMain from './pages/ContactUs/ContactMain'
import HomeMain from './pages/Home/HomeMain'

function App() {

  return (
    <>
      <Navbar/>
      {/* <HomeMain/> */}
      {/* <AboutMain/> */}
      {/* <CareersMain/> */}
      {/* <BlogMain/> */}
      <ContactMain/>
      <Footer/>
    </>
  )
}

export default App
