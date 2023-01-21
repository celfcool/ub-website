import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import SectionWrapper from './components/section-wrapper/SectionWrapper'
import About from './components/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <Footer />
      
    </>
  )
}

export default App