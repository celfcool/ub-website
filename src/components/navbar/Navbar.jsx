import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from'../../assets/images/ub-logo.svg';

function Navbar() {
  return (
    <>
        <header className="header">

            <div className="overlay" data-overlay></div>

            <div className="container">

                <Link to="/" className="logo">
                    <img src={logo} alt="GameX logo" />
                </Link>
                
                <button className="nav-open-btn" data-nav-open-btn>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <nav className="navbar" data-nav>

                    <div className="navbar-top">

                        <Link to="/" className="logo">
                            <img src={logo} alt="GameX logo" />
                        </Link>

                        <button className="nav-close-btn" data-nav-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                    </div>

                    <ul className="navbar-list">

                        <li>
                            <Link to="/" className="navbar-link">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="navbar-link">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="navbar-link">
                                Tournaments
                            </Link>
                        </li>

                        <li>
                            <Link to="/team" className="navbar-link">
                                Team
                            </Link>
                        </li>

                        <li>
                            <Link to="/" className="navbar-link">
                                Contact
                            </Link>
                        </li>

                    </ul>

                    <ul className="nav-social-list">

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="social-link">
                        <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </li>

                    </ul>

                </nav>

            </div>

        </header>
    </>
  )
}

export default Navbar