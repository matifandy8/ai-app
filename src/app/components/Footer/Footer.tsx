import React from 'react'
import './styles/Footer.scss'

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <nav className="footer__menu">
                    <ul className="footer__menu-list">
                        <li className="footer__menu-item">
                            <a href="#features">Features</a>
                        </li>
                        <li className="footer__menu-item">
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li className="footer__menu-item">
                            <a href="#pricing">Pricing</a>
                        </li>
                    </ul>
                </nav>
                <p className="footer__text">Copyright © 2023</p>
            </div>
        </footer>
    )
}

export default Footer
