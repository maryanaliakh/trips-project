import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import '../login/login.css'
import logo from "../../assets/image/LOGO.png";

function Registration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        imie: "",
        nazwisko: "",
        telefon: "",
        email: "",
        haslo: "",
        zgoda: false
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const isValidPassword = (password) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");


        if (!formData.zgoda) {
            setError("Musisz wyrazić zgodę, aby kontynuować.");
            return;
        }


        if (!isValidPassword(formData.haslo)) {
            setError("Hasło musi mieć min. 8 znaków, zawierać małe i wielkie litery oraz cyfrę.");
            return;
        }

        fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((response) =>
                response.json().then((data) => {
                    if (!response.ok) {
                        throw new Error(data.error || "Registration failed.");
                    }
                    setMessage("Rejestracja powiodła się poprawnie!");
                    setFormData({
                        imie: "",
                        nazwisko: "",
                        telefon: "",
                        email: "",
                        haslo: "",
                        zgoda: false
                    });
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                })
            )
            .catch((error) => {
                setError("Błąd: " + error.message);
            });
    };

    return (
        <>
            <Header />
            <div className="registration-wrapper">
                <div className="registration-left">
                    <h2 className="h2">Rejestracja</h2>

                    {message && <div className="success-message">{message}</div>}
                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit} className="registration-form">
                        <label>Imię<span className="required">*</span></label>
                        <input type="text" name="imie" value={formData.imie} required onChange={handleChange} />

                        <label>Nazwisko<span className="required">*</span></label>
                        <input type="text" name="nazwisko" value={formData.nazwisko} required onChange={handleChange} />

                        <label>Numer telefonu<span className="required">*</span></label>
                        <input type="tel" name="telefon" value={formData.telefon} required onChange={handleChange} />

                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                name="zgoda"
                                checked={formData.zgoda}
                                onChange={handleChange}
                            />
                            Wyrażam zgodę na przechowywanie moich danych i otrzymywanie komunikatów marketingowych zgodnie z polityką prywatności.
                        </label>

                        <label style={{paddingRight: '300px'}}>Email<span className="required">*</span></label>
                        <input name="email" type="email" value={formData.email} required onChange={handleChange} />

                        <label>Hasło<span className="required">*</span></label>
                        <input name="haslo" type="password" value={formData.haslo} required onChange={handleChange} />

                        <button type="submit">Zarejestrować się</button>
                    </form>
                </div>

                <div className="registration-right">
                    <div className="register-right-content">
                        <div className="logo-registr">
                            <img className="logo2" src={logo} alt="Logo" />
                            <h1>WANDERLUST</h1>
                        </div>
                        <h2 className="h2">Stwórz konto</h2>
                        <p>
                            Utworzenie konta ma wiele zalet: szybsze dokonywanie płatności, możliwość zapisania więcej niż jednego adresu i wiele innych.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Registration;
