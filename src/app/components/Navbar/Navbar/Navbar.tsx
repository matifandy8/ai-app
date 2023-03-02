'use client'

import { useState } from 'react'
import './styles/Navbar.scss'

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false)

    const handleToggleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <header className="navbar">
            <div className="navbar__container">
                <h1>Logo</h1>
                <nav className="navbar__menu">
                    <ul className="navbar__menu-list">
                        <li className="navbar__menu-item">
                            <a href="#">Features</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#">Testimonials</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#">Pricing</a>
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
        </header>
    )
}

export default Navbar
