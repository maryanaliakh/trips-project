import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Trips() {
    const [searchParams, setSearchParams] = useSearchParams();

    const queryParam = searchParams.get("query") || "";
    const dateParam = searchParams.get("date") || "";

    const [city, setCity] = useState(queryParam);
    const [date, setDate] = useState(dateParam);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const [results, setResults] = useState([]);
    const [expandedTripId, setExpandedTripId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedTripId((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        if (queryParam) {
            fetch(
                `http://localhost:3000/api/wycieczki?query=${encodeURIComponent(
                    queryParam
                )}&date=${dateParam}`
            )
                .then((res) => res.json())
                .then((data) => {
                    const combined = [];
                    if (data.bestMatch) combined.push(data.bestMatch);
                    if (Array.isArray(data.others)) combined.push(...data.others);
                    setResults(combined);
                })
                .catch((err) => console.error("Błąd ładowania wyników:", err));
        } else {
            setResults([]);
        }
    }, [queryParam, dateParam]);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const d = new Date(dateString);
        return d.toISOString().split("T")[0];
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            setSearchParams({
                query: city.trim(),
                date: date,
            });
            setExpandedTripId(null);
            setShowDropdown(false);
        }
    };

    const totalPassengers = adults + children;

    const mainResult = results.length > 0 ? results[0] : null;
    const otherDates = results.slice(1);

    return (
        <>
            <Header />


                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-item">
                        Home
                    </Link>{" "}
                    &gt; <span className="breadcrumb-item active">Search</span>
                </div>

                <section className="booking-section">
                    <form className="booking-form" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Wpisz miejsce docelowe"
                            className="booking-input"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            type="date"
                            className="booking-input"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <div
                            className="booking-dropdown"
                            onClick={() => setShowDropdown((prev) => !prev)}
                        >
                            <div className="booking-dropdown-label">
                                {totalPassengers} {totalPassengers === 1 ? "pasażer" : "pasażerów"}
                            </div>
                            {showDropdown && (
                                <div className="booking-dropdown-menu">
                                    <div className="booking-dropdown-item">
                                        Dorośli
                                        <div className="booking-counter">
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (adults > 1) setAdults(adults - 1);
                                                }}
                                            >
                                                -
                                            </button>
                                            <span>{adults}</span>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setAdults(adults + 1);
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="booking-dropdown-item">
                                        Dzieci
                                        <div className="booking-counter">
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (children > 0) setChildren(children - 1);
                                                }}
                                            >
                                                -
                                            </button>
                                            <span>{children}</span>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setChildren(children + 1);
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button type="submit" className="booking-search-button">Szukaj</button>
                    </form>
                </section>
            <div className="wyniki-container">
                <h2 className="results-title">
                    Znaleziono {results.length} wynik{results.length === 1 ? "" : "ów"} dla: „
                    {queryParam}” {dateParam && `w okolicach ${dateParam}`}
                </h2>

                {mainResult ? (
                    <>
                        <div className="main-result">
                            <h3 style={{marginBottom: "40px", marginTop: "30px"}}>🎯 Najlepsze dopasowanie:</h3>
                            <div className="wynik-card" key={mainResult.id_wycieczki}>
                                <h3>{mainResult.nazwa}</h3>
                                <p>{mainResult.opis}</p>
                                <p>
                                    <strong>{formatDate(mainResult.data_wyjazdu)}</strong> —{" "}
                                    {formatDate(mainResult.data_powrotu)}
                                </p>
                                <p>
                                    {mainResult.cena} {mainResult.waluta}
                                </p>
                                <button
                                    style={{ marginTop: 'auto', width: '100px', marginBottom: '20px'  }}
                                    className="login-button"
                                    onClick={() => toggleExpand(mainResult.id_wycieczki)}
                                >
                                    {expandedTripId === mainResult.id_wycieczki ? "Ukryj ⬆" : "Więcej ⬇"}
                                </button>
                                {expandedTripId === mainResult.id_wycieczki && <ExpandedTrip trip={mainResult} />}
                                <Link to={`/reservationTrips/${mainResult.id_wycieczki}`} className="city-button" style={{ marginTop: 'auto', width: '200px' }}>
                                    Zarezerwować
                                </Link>
                            </div>
                        </div>

                        {otherDates.length > 0 && (
                            <div className="other-dates">
                                <h3 style={{marginBottom: "40px", marginTop: "30px"}}>📅 Inne dostępne daty:</h3>
                                <div className="other-dates-list">
                                    {otherDates.map((w) => (
                                        <div className="wynik-card" key={w.id_wycieczki}>
                                            <h3>{w.nazwa}</h3>
                                            <p>{w.opis}</p>
                                            <p>
                                                <strong>{formatDate(w.data_wyjazdu)}</strong> —{" "}
                                                {formatDate(w.data_powrotu)}
                                            </p>
                                            <p>
                                                {w.cena} {w.waluta}
                                            </p>
                                            <button
                                                style={{ marginTop: 'auto', width: '100px', marginBottom: '20px' }}
                                                className="login-button"
                                                onClick={() => toggleExpand(w.id_wycieczki)}
                                            >
                                                {expandedTripId === w.id_wycieczki ? "Ukryj ⬆" : "Więcej ⬇"}
                                            </button>
                                            {expandedTripId === w.id_wycieczki && <ExpandedTrip trip={w} />}

                                            <Link to={`/reservationTrips/${mainResult.id_wycieczki}`} className="city-button" style={{ marginTop: 'auto', width: '200px' }}>
                                                Zarezerwować
                                            </Link>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p>Brak wyników dla tej frazy.</p>
                )}
            </div>
            <Footer />
        </>
    );
}

function ExpandedTrip({ trip }) {
    const [extraData, setExtraData] = useState(null);

    useEffect(() => {
        const fetchExtra = async () => {
            try {
                const [bus, guide, departureCity] = await Promise.all([
                    fetch(`http://localhost:3000/api/autobusy/${trip.id_autobusu}`).then((r) =>
                        r.json()
                    ),
                    fetch(`http://localhost:3000/api/przewodnicy/${trip.id_przewodnika}`).then(
                        (r) => r.json()
                    ),
                    fetch(
                        `http://localhost:3000/api/miasta-wyjazdu/${trip.id_miasta_wyjazdu}`
                    ).then((r) => r.json()),
                ]);
                setExtraData({ bus, guide, departureCity });
            } catch (error) {
                console.error("Błąd podczas ładowania dodatkowych danych:", error);
            }
        };

        fetchExtra();
    }, [trip]);

    if (!extraData) return <p>Ładowanie...</p>;

    return (
        <div style={{textAlign: "left"}} className="trip-details">
            <h4 style={{marginTop: '40px'}}>🚌 Autobus:</h4>
            <p>
                <strong>
                    {extraData.bus.marka} {extraData.bus.model}
                </strong>
            </p>
            <p>Liczba miejsc: {extraData.bus.liczba_miejsc}</p>
            <p>Numer rejestracyjny: {extraData.bus.numer_rejestracyjny}</p>

            <h4 style={{marginTop: '40px'}}>📍 Miejsce wyjazdu:</h4>
            <p>
                {extraData.departureCity.miasto}, {extraData.departureCity.wojewodztwo}
            </p>
            <p>{extraData.departureCity.adres_zbiorki}</p>

            <h4 style={{marginTop: '40px'}}>🧑‍🏫 Przewodnik:</h4>
            <p>
                {extraData.guide.imie} {extraData.guide.nazwisko}
            </p>
            <p>Email: {extraData.guide.email}</p>
            <p>Telefon: {extraData.guide.telefon}</p>
            <p>Języki: {extraData.guide.jezyki}</p>
            <p>Doświadczenie: {extraData.guide.doswiadczenie_lat} lat</p>

        </div>
    );
}

export default Trips;
