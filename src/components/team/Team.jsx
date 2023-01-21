import React from 'react'
import './Team.css'
import member1 from'../../assets/images/team-member-1.png'
import member2 from'../../assets/images/team-member-2.png'
import member3 from'../../assets/images/team-member-3.png'
import member4 from'../../assets/images/team-member-4.png'
import member5 from'../../assets/images/team-member-5.png'
import member6 from'../../assets/images/team-member-6.png'
import member7 from'../../assets/images/team-member-7.png'
import member8 from'../../assets/images/team-member-8.png'
import member9 from'../../assets/images/team-member-9.png'
import member10 from'../../assets/images/team-member-10.png'
import member11 from'../../assets/images/team-member-11.png'

function Team() {
  return (
    <section class="team" id="team">
        <div class="container">

        <h2 class="h2 section-title">Active Team Members</h2>

        <ul class="team-list">

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member1} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member2} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member3} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member4} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member5} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member6} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member7} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member8} alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member9}  alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member10}  alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

            <li>
            <a href="#" class="team-member">
                <figure>
                <img src={member11}  alt="Team member image" />
                </figure>

                <ion-icon name="link-outline"></ion-icon>
            </a>
            </li>

        </ul>

        <button class="btn btn-primary">view all members</button>

        </div>
    </section>
  )
}

export default Team