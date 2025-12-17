import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const ContactMain = () => {
  return (
    <main className="relative w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <div className="relative z-0">
        <ContactHero />
      </div>

      {/* Form Section Overlapping Hero */}
      <div className="relative z-10 -mt-40 md:-mt-40 lg:-mt-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl py-12 px-6 md:px-10 lg:px-16">
          <ContactForm />
        </div>
      </div>

      <div>
        <ContactInfo/>
      </div>
    </main>
  )
}

export default ContactMain
