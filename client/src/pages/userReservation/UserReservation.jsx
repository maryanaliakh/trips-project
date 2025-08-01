import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './UserReservation.css';

function UserReservation() {
    const [rezerwacje, setRezerwacje] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.id_klienta) {
            fetch(`http://localhost:3000/api/rezerwacje?userId=${user.id_klienta}`)
                .then(res => res.json())
                .then(data => {
                    setRezerwacje(data);
                })
                .catch(err => {
                    console.error("Błąd ładowania rezerwacji:", err);
                });
        }
    }, []);

    const formatDate = (isoDate) => {
        return new Date(isoDate).toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <Header/>
            <div className="rezerwacje-container">
                <h2>Moje rezerwacje</h2>
                {rezerwacje.length === 0 ? (
                    <p>Brak rezerwacji.</p>
                ) : (
                    <ul className="rezerwacje-list">
                        {rezerwacje.map((rez, index) => (
                            <li key={index} className="rezerwacja-card">
                                <h3>{rez.wycieczka}</h3>
                                <p><strong>Data wyjazdu:</strong> {formatDate(rez.data_wyjazdu)}</p>
                                <p><strong>Data powrotu:</strong> {formatDate(rez.data_powrotu)}</p>
                                <p><strong>Liczba osób:</strong> {rez.liczba_osob}</p>
                                <p><strong>Suma:</strong> {rez.suma_calkowita} {rez.waluta}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Footer/>
            </>
    );
}

export default UserReservation;
