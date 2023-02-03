import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';
//import AboutImg from'../../assets/images/about-img.png'
import AboutImg from'../../assets/images/ub-logo-full.png'
/*
import Char1 from'../../assets/images/character-1.png'
import Char2 from'../../assets/images/char-bison.png'
import Char3 from'../../assets/images/character-3.png'
*/

function About() {
  return (
    <>
        <section className="about" id="about">
            <div className="container">
                <figure className="about-banner">

                    <img src={AboutImg} alt="M shape" className="about-img" />

                    {/*
                        <img src={Char1} alt="Game character" className="character character-1" />

                        <img src={Char2} alt="Game character" className="character character-2" />

                        <img src={Char3} alt="Game character" className="character character-3" />

                    */}
                    

                </figure>

                <div className="about-content">

                    <p className="about-subtitle">About us</p>

                    <h2 className="about-title">UB <strong>team</strong> </h2>

                    <p className="about-text">
                    UB Team is a competitive gaming team that specializes in fighting video game titles. With a talented roster of players and a drive to succeed, UB is a force to be reckoned with in the esports world. Their passion for gaming and commitment to excellence has made them a top-tier team, always striving to improve and dominate the competition.
                    </p>

                    
                        <p className="about-bottom-text">
                            <Link to="/about">
                                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                            </Link>
                            <span>More info about our team</span>
                        </p>

                </div>
            
            </div>
        </section>
    </>
  )
}

export default About