import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/image/LOGO.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img className="logoFooter" src={logo} alt="Wanderlust logo" />
                    <p className="header__title_footer">WANDERLUST</p>
                    <p className="footer-description">
                        Twoja przygoda zaczyna się tutaj. Oferujemy niezapomniane podróże do najpiękniejszych miejsc w Europie i nie tylko.
                    </p>
                </div>
                <div className="footer-middle">
                    <h3>Linki</h3>
                    <ul>
                        <li><Link to="/">Strona główna</Link></li>
                        <li><Link to="/aboutUs">O nas</Link></li>
                        <li>Regulamin</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Kontakt</h3>
                    <p>Email: <a href="mailto:info@wycieczki.pl">info@wycieczki.pl</a></p>
                    <p>Tel: <a href="tel:+48123456789">+48 123 456 789</a></p>
                    <p>ul. Podróżnicza 12, Warszawa</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} WANDERLUST. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
}

export default Footer;
