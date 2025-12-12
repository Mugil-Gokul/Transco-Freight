import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ContactMain from './pages/ContactUs/ContactMain'
import HomeMain from './pages/Home/HomeMain'

function App() {

  return (
    <>
      <Navbar/>
      <HomeMain/>
      {/* <ContactMain/> */}
      <Footer/>
    </>
  )
}

export default App
