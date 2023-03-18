'use client'

import { useState } from 'react'
import './styles/Navbar.scss'

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false)

    const handleToggleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <h1>DevCoachAI</h1>
                <nav className="navbar__menu">
                    <ul className="navbar__menu-list">
                        <li className="navbar__menu-item">
                            <a href="#features">Features</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#pricing">Pricing</a>
                        </li>
                    </ul>
                </nav>
                <div
                    className={`navbar__hamburger ${
                        isActive ? 'is-active' : ''
                    }`}
                    onClick={handleToggleClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
