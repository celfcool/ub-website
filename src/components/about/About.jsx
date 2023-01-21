import React from 'react'
import './About.css'
import AboutImg from'../../assets/images/about-img.png'
import Char1 from'../../assets/images/character-1.png'
import Char2 from'../../assets/images/character-2.png'
import Char3 from'../../assets/images/character-3.png'


function About() {
  return (
    <>
        <section className="about" id="about">
            <div className="container">
                <figure className="about-banner">

                    <img src={AboutImg} alt="M shape" className="about-img" />

                    <img src={Char1} alt="Game character" className="character character-1" />

                    <img src={Char2} alt="Game character" className="character character-2" />

                    <img src={Char3} alt="Game character" className="character character-3" />

                </figure>

                <div className="about-content">

                    <p className="about-subtitle">Find team member</p>

                    <h2 className="about-title">Experience just for gamers <strong>offer</strong> </h2>

                    <p className="about-text">
                        Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum
                        viverra felis nunc
                        et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
                    </p>

                    <p className="about-bottom-text">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>

                        <span>Will sharpen your brain and focus</span>
                    </p>

                </div>
            
            </div>
        </section>
    </>
  )
}

export default About