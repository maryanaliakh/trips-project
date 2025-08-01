import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/LOGO.png";
import loginIcon from "../../assets/image/person.png";
import './Header.css';

function Header() {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="header__title">
                <a href="/wycieczki/my-app/public">WANDERLUST</a>
            </h1>
            <nav className="header__nav">
                <a href="/" className="header__link--bold">GŁÓWNA</a>
                <a href="/miasta" className="header__link--bold">PODRÓŻY</a>
                <a href="/contacts" className="header__link--bold">KONTAKT</a>

                {!user ? (
                    <a href="/login" className="login-button">
                        <img src={loginIcon} alt="login" className="login-icon" />
                        Zaloguj się
                    </a>
                ) : (
                    <div className="user-menu">
                        <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <img src={loginIcon} alt="user" className="login-icon" />
                            <span>{user.imie}</span>
                            <span className="arrow">▼</span>
                        </div>
                        <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                            <a href="/my-trips">Moje rezerwacje</a>
                            <button onClick={handleLogout}>Wyloguj się</button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
