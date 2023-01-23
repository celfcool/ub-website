import React, { useState } from 'react'
import './GoToTop.css'

function GoToTop() {
    const [active, setActive] = useState('');
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 800) {
            setActive('active')
        } else {
            setActive('')
        }
    })
  return (
    <a href="#top" className={`btn btn-primary go-top ${active}`} data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
    </a>
  )
}

export default GoToTop