import React from 'react'
import SectionWrapper from '../../components/section-wrapper/SectionWrapper'
import About from '../../components/about/About'

export const AboutPage = () => {
  return (
    <SectionWrapper>
        <About 
          content={ `
            UB Team is a highly competitive and skilled gaming organization that focuses primarily on fighting video game titles. They are comprised of a talented roster of players who are dedicated to their craft and exhibit a strong drive to succeed. The team's passion for gaming, combined with their commitment to excellence, has made them a formidable force in the world of esports.

            The team's players are highly skilled and possess a wealth of knowledge and experience when it comes to fighting games. They are constantly pushing the boundaries of what is possible and strive to improve their skills and strategies with each passing day. This relentless pursuit of excellence has earned UB Team a reputation as one of the top-tier teams in the esports community.
            
            In addition to their technical skills, the members of UB Team also share a deep-seated love for gaming. They are passionate about the games they play and take great pride in their ability to perform at the highest level. This passion drives them to constantly strive for improvement and dominance over their competition.
            
            Whether they are participating in online tournaments, live events, or simply practicing against one another, UB Team is always looking for ways to improve their game. They are constantly seeking out new strategies and tactics to help them stay ahead of the curve, and they are never satisfied with their current level of performance. This relentless drive for success has made UB Team one of the most respected and feared teams in the esports world.
            
            In conclusion, UB Team is a true powerhouse in the world of competitive gaming. Their talented roster of players, combined with their passion for gaming and commitment to excellence, has made them a force to be reckoned with in the world of esports. Whether you are a fan of fighting games or simply admire the drive and dedication of competitive gamers, UB Team is a team that you will definitely want to keep your eye on.
          `}
        />
    </SectionWrapper>
  )
}
