import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container">

          <h1 className="h1 hero-title">ub team</h1>

          <p className="hero-subtitle">Victory is our only option</p>

        </div>
      </section>
    </>
    /*
     <>
      <section className="hero" id="hero">
        <div className="container">

          <p className="hero-subtitle">The Season 8</p>

          <h1 className="h1 hero-title">UB</h1>

          <div className="btn-group">

            <button className="btn btn-primary">
              <span>Watch live</span>

              <ion-icon name="play-circle"></ion-icon>
            </button>

            <button className="btn btn-link">Dream making</button>

          </div>

        </div>
      </section>
    </>
    */
  )
}

export default Hero
