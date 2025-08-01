import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ReservationForm from '../../components/reservationForm/ReservationForm.jsx';
import './TripsDetails.css';

function TripsDetails() {
    const { date } = useParams();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const name = queryParams.get("name");

    const [wycieczki, setWycieczki] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        setError(null);

        fetch(`http://localhost:3000/api/wycieczki/by-date/${date}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Nie znaleziono wycieczek na datę ${date}`);
                }
                return res.json();
            })
            .then(data => {
                const filtered = name
                    ? data.filter(w => w.nazwa === decodeURIComponent(name))
                    : data;

                setWycieczki(filtered);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [date, name]);

    if (loading) return <p>Ładowanie szczegółów wycieczek...</p>;
    if (error) return <p style={{ color: 'red' }}>Błąd: {error}</p>;

    return (
        <>
            <Header />
            <div className="wycieczki-details">
                <h2>
                    Wycieczki na dzień {date}
                    {name && ` - ${decodeURIComponent(name)}`}
                </h2>

                {wycieczki.length === 0 ? (
                    <p>Brak wycieczek spełniających kryteria.</p>
                ) : (
                    wycieczki.map(wycieczka => (
                        <div key={wycieczka.id_wycieczki} className="wycieczka-card">
                            <h3>{wycieczka.nazwa}</h3>
                            <p><strong>Opis:</strong> {wycieczka.opis || 'Brak opisu'}</p>
                            <p><strong>Data wyjazdu:</strong> {new Date(wycieczka.data_wyjazdu).toLocaleDateString()}</p>
                            <p><strong>Data powrotu:</strong> {new Date(wycieczka.data_powrotu).toLocaleDateString()}</p>
                            <p><strong>Cena:</strong> {wycieczka.cena} {wycieczka.waluta}</p>
                        </div>
                    ))
                )}

                <Link style={{marginBottom: '50px'}} className="search-button" to={`/miasta/${encodeURIComponent(wycieczki[0]?.miasta?.[0]?.miasto || '')}`}>
                    ← Powrót do szczegółów miasta
                </Link>

                <ReservationForm
                    initialCity={decodeURIComponent(name || '')}
                    initialDate={date}
                />
            </div>
            <Footer />
        </>
    );
}

export default TripsDetails;
