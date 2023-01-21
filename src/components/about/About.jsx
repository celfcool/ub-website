import React from 'react'
import './About.css'
import AboutImg from'../../assets/images/about-img.png'
import Char1 from'../../assets/images/character-1.png'
import Char2 from'../../assets/images/character-2.png'
import Char3 from'../../assets/images/character-3.png'


function About() {
  return (
    <>
        <section class="about" id="about">
            <div class="container">
                <figure class="about-banner">

                    <img src={AboutImg} alt="M shape" class="about-img" />

                    <img src={Char1} alt="Game character" class="character character-1" />

                    <img src={Char2} alt="Game character" class="character character-2" />

                    <img src={Char3} alt="Game character" class="character character-3" />

                </figure>

                <div class="about-content">

                    <p class="about-subtitle">Find team member</p>

                    <h2 class="about-title">Experience just for gamers <strong>offer</strong> </h2>

                    <p class="about-text">
                        Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum
                        viverra felis nunc
                        et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
                    </p>

                    <p class="about-bottom-text">
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