import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ReservationForm.css";

const ReservationForm = ({ initialCity = "", initialDate = "" }) => {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [city, setCity] = useState(initialCity);
    const [selectedDate, setSelectedDate] = useState(initialDate);
    const navigate = useNavigate();

    useEffect(() => {
        setCity(initialCity);
    }, [initialCity]);

    useEffect(() => {
        setSelectedDate(initialDate);
    }, [initialDate]);

    const totalPassengers = adults + children;

    return (
        <section className="reservation-section">
            <h2 className="reservation-title">Gotowy, aby zarezerwować?</h2>
            <div className="reservation-form">
                <input
                    type="text"
                    placeholder="Wpisz miejsce docelowe"
                    className="input-field"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <input
                    type="date"
                    className="input-field"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />

                <div
                    className="dropdown"
                    onClick={() => setShowDropdown((prev) => !prev)}
                >
                    <div className="dropdown-label">
                        {totalPassengers} {totalPassengers === 1 ? "pasażer" : "pasażerów"}
                    </div>
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item">
                                Dorośli
                                <div className="counter">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (adults > 1) setAdults(adults - 1);
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{adults}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setAdults(adults + 1);
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="dropdown-item">
                                Dzieci
                                <div className="counter">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (children > 0) setChildren(children - 1);
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{children}</span>
                                    <button
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

                <button
                    className="search-button"
                    onClick={() => {
                        if (city.trim()) {
                            const date = selectedDate || "";
                            navigate(
                                `/wyniki?query=${encodeURIComponent(city.trim())}&date=${date}`
                            );
                        }
                    }}
                >
                    Szukaj
                </button>
            </div>
        </section>
    );
};

export default ReservationForm;
