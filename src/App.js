import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import SectionWrapper from './components/section-wrapper/SectionWrapper'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Team from './components/team/Team'
import Footer from './components/footer/Footer'
import GoToTop from './components/go-to-top/GoToTop'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionWrapper>
        <About />
        <Gallery />
        <Team />
      </SectionWrapper>
      <Footer />
      <GoToTop />
    </>
  )
}

export default App