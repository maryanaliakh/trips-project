import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './login.css';

function Login({ onLogin }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        haslo: ''
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(res => res.json().then(data => {
                if (!res.ok) {
                    throw new Error(data.error || "Błąd logowania.");
                }
                setMessage("Logowanie powiodło się!");
                onLogin(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }))
            .catch(err => {
                setError("Błąd: " + err.message);
            });
    };

    return (
        <>
            <Header />
            <div className="login-container">
                <div className="login-left">
                    <div className="right-content">
                        <h2>Witamy ponownie,</h2>
                        <p>Zaloguj się na swoje konto.</p>
                    </div>

                    {message && <div className="success-message">{message}</div>}
                    {error && <div className="error-message">{error}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <label style={{marginRight: '400px'}}>Email <span className="required">*</span></label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label style={{marginRight: '400px'}}>Hasło <span className="required">*</span></label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="haslo"
                            value={formData.haslo}
                            onChange={handleChange}
                            required
                        />

                        <div className="show-password">
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label htmlFor="showPassword">Pokaż hasło</label>
                        </div>

                        <div className="login-actions">
                            <button type="submit" className="login-btn">Zaloguj się</button>
                        </div>
                    </form>
                </div>

                <div className="login-right">
                    <div className="right-content">
                        <h2>Nowi klienci</h2>
                        <p>Utworzenie konta ma wiele zalet: szybsze dokonywanie płatności, możliwość zapisania więcej niż jednego adresu i wiele innych.</p>
                    </div>
                    <div className="signup-footer">
                        <a href='/create' className="signup-btn">Stwórz konto</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
