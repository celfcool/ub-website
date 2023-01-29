import React from 'react'
import Hero from '../../components/hero/Hero'
import SectionWrapper from '../../components/section-wrapper/SectionWrapper'
import About from '../../components/about/About'
import Gallery from '../../components/gallery/Gallery'

export const Home = () => {
  return (
    <>
      <Hero />
      <SectionWrapper>
        <About />
        <Gallery />
      </SectionWrapper>
    </>
  )
}
