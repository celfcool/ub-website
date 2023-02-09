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
        <About 
          withImg={true}
          content='UB Team is a competitive gaming team that specializes in fighting video game titles. With a talented roster of players and a drive to succeed, UB is a force to be reckoned with in the esports world. Their passion for gaming and commitment to excellence has made them a top-tier team, always striving to improve and dominate the competition.'
        />
        <Gallery />
      </SectionWrapper>
    </>
  )
}
