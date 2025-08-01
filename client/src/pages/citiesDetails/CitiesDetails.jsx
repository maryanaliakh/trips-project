import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './CitiesDetails.css';
import { addOneDay } from '../../dateUtils.js';

import Praga from '../../assets/image/Praga.jpg';
import Wieden from '../../assets/image/Wieden.jpg';
import Paryrz from '../../assets/image/Paryrz.jpg';
import Normandia from '../../assets/image/Normandia.jpg';
import Barselona from '../../assets/image/Barselona.jpg';
import Lizbona from '../../assets/image/Lizbona.jpg';
import Sintra from '../../assets/image/Sintra.jpg';
import Cascais from '../../assets/image/Cascais.jpg';
import Luksor from '../../assets/image/Luksor.jpg';
import Kair from '../../assets/image/Kair.jpg';
import Giza from '../../assets/image/Giza.jpg';
import Hurghada from '../../assets/image/Hurghada.jpg';
import Tenryfa from '../../assets/image/Tenryfa.jpg';
import Inverness from '../../assets/image/Inverness.jpg';
import Cambridge from '../../assets/image/Cambridge.jpg';

const images = {
    'Praga': Praga,
    'Wiedeń': Wieden,
    'Paryż': Paryrz,
    'Normandia': Normandia,
    'Barselona': Barselona,
    'Lizbona': Lizbona,
    'Sintra': Sintra,
    'Cascais': Cascais,
    'Luksor': Luksor,
    'Kair': Kair,
    'Giza': Giza,
    'Hurghada': Hurghada,
    'Tenryfa': Tenryfa,
    'Inverness': Inverness,
    'Cambridge': Cambridge,
};

function CitiesDetails() {
    const { cityName } = useParams();
    const [miasto, setMiasto] = useState(null);
    const [wycieczki, setWycieczki] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cityName]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/miasta`)
            .then(res => {
                if (!res.ok) throw new Error('Błąd pobierania danych miasta');
                return res.json();
            })
            .then(data => {
                const found = data.find(item => item.miasto === cityName);
                if (found) {
                    setMiasto(found);
                } else {
                    setError('Nie znaleziono miasta');
                }
            })
            .catch(err => setError(err.message));
    }, [cityName]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/wycieczki?query=${encodeURIComponent(cityName)}`)
            .then(res => {
                if (!res.ok) throw new Error('Błąd pobierania wycieczek');
                return res.json();
            })
            .then(data => {
                const allTrips = [
                    ...(data.bestMatch ? [data.bestMatch] : []),
                    ...(data.others || []),
                ];

                const grouped = allTrips.reduce((acc, trip) => {
                    const nazwa = trip.nazwa;
                    const dataWyjazduObj = new Date(trip.data_wyjazdu);
                    const dataWyjazdu = dataWyjazduObj.toLocaleDateString();
                    const dataPowrotu = new Date(trip.data_powrotu).toLocaleDateString();
                    const zakres = `${dataWyjazdu} - ${dataPowrotu}`;

                    const dataWyjazduISO = dataWyjazduObj.toISOString().split('T')[0];

                    if (!acc[nazwa]) {
                        acc[nazwa] = [];
                    }

                    const alreadyExists = acc[nazwa].some(item => item.range === zakres);
                    if (!alreadyExists) {
                        acc[nazwa].push({
                            range: zakres,
                            dataWyjazdu: addOneDay(dataWyjazduISO)
                        });
                    }

                    return acc;
                }, {});

                setWycieczki(grouped);
            })
            .catch(err => console.error(err));
    }, [cityName]);

    if (error) return <p style={{ color: 'red' }}>Błąd: {error}</p>;
    if (!miasto) return <p>Ładowanie...</p>;

    const image = images[miasto.miasto];

    return (
        <>
            <Header />
            <div className="miasto-details">
                <h2 className="h2">{miasto.miasto} ({miasto.kraj})</h2>

                {image ? (
                    <img
                        src={image}
                        alt={`Widok miasta ${miasto.miasto}`}
                        className="img"
                    />
                ) : (
                    <p>Brak zdjęcia dla miasta {miasto.miasto}</p>
                )}

                <p><strong>Opis:</strong> {miasto.opis || 'Brak opisu'}</p>
                <p><strong>Atrakcje:</strong> {miasto.atrakcje || 'Brak informacji'}</p>

                {Object.keys(wycieczki).length > 0 && (
                    <div style={{marginBottom: "50px"}} className="wycieczki-section">
                        <h3 className="h3">Dostępne wycieczki:</h3>
                        <ul>
                            {Object.entries(wycieczki).map(([nazwa, daty]) => (
                                <li key={nazwa}>
                                    <strong>{nazwa}</strong>
                                    <ul className="daty-lista">
                                        {daty.map((wycieczka, i) => (
                                            <li key={i}>
                                                <Link to={`/wycieczki/${encodeURIComponent(wycieczka.dataWyjazdu)}?name=${encodeURIComponent(nazwa)}`}>
                                                    {wycieczka.range}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <Link className="city-button" to="/miasta">← Powrót do listy</Link>
            </div>
            <Footer />
        </>
    );
}

export default CitiesDetails;
