import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/header/Header.css";
import "../../index.css";

import downArrow from "../../assets/image/down-arrow.png";
import about from "../../assets/image/about.webp";
import barcelona from "../../assets/image/barcelona.webp";
import inverness from "../../assets/image/inverness.webp";
import cambridge from "../../assets/image/cambridge.webp";
import arrowIcon from "../../assets/image/down-chevron.png";
import regulations from "../../assets/image/protected.png";
import advice from "../../assets/image/advice.png";
import destination from "../../assets/image/destination.png";
import destCity from "../../assets/image/destCard.png";

import Footer from "../../components/footer/Footer.jsx";
import ReservationForm from "../../components/reservationForm/ReservationForm.jsx";
import Header from "../../components/header/Header.jsx";
import Search from "../../components/search/Search.jsx";

function HomePage() {
    const [data, setData] = useState([]);
    const [showTerms, setShowTerms] = useState(false);
    const navigate = useNavigate();

    const toggleTerms = () => {
        setShowTerms(!showTerms);
    };

    useEffect(() => {
        fetch("http://localhost:3000/api/miasta")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Error fetching note: " + err));
    }, []);

    const scrollToContent = () => {
        const element = document.getElementById("about-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const images = [
        {
            id_miasta: 119,
            url: cambridge,
        },
        {
            id_miasta: 118,
            url: inverness,
        },
        {
            id_miasta: 5,
            url: barcelona,
        },
    ];

    return (
        <>
            <Header />
            <div className="banner-background">
                <div className="banner-content">
                    <h2 className="banner-content__title">ZWIEDZAJ ŚWIAT</h2>
                    <h2 className="banner-content__subtitle">z Wanderlust</h2>

                    <div className="search-form">
                    <Search />
                    </div>
                </div>

                <button
                    className="scroll-down-btn"
                    onClick={scrollToContent}
                    aria-label="Scroll down"
                >
                    <img src={downArrow} alt="Scroll down" />
                </button>
            </div>

            <section className="about-section" id="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Swiatła, kamera, przygoda...</h2>
                        <p>
                            Witamy w naszym swiecie odkryć! Pomagamy podróznikom odkrywać piękne miejsca z
                            łatwoscia, pasją i niezapomnianymi doswiadczeniami.
                        </p>
                        <p>Nasza zespół jest tutaj, aby wspierać Twoja podróż, od planowania po wspomnienia.</p>
                    </div>
                    <div className="about-image">
                        <img src={about} alt="About us" />
                    </div>
                </div>
            </section>

            <h2 className="cities-title">Najpopularniejsze Miasta</h2>
            <section className="cities-section">
                <div className="cities-inner">
                    <div className="city-cards">
                        {data
                            .filter(
                                (item) =>
                                    item.id_miasta === 119 ||
                                    item.id_miasta === 118 ||
                                    item.id_miasta === 5
                            )
                            .map((item) => {
                                const imageObj = images.find((img) => img.id_miasta === item.id_miasta);
                                return (
                                    <div className="city-card" key={item.id_miasta}>
                                        <div className="city-image-wrapper">
                                            <img
                                                src={imageObj?.url || "placeholder.jpg"}
                                                alt={item.miasto}
                                                className="city-image"
                                            />
                                            <div className="city-icon">
                                                <img src={destCity} alt={item.miasto} />
                                                <span className="city-tooltip">{item.miasto}</span>
                                            </div>
                                        </div>
                                        <div className="city-info">
                                            <p className="city-description">{item.opis}</p>
                                            <button
                                                className="city-button"
                                                onClick={() =>
                                                    navigate(`/miasta/${encodeURIComponent(item.miasto)}`)
                                                }
                                            >
                                                Więcej
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>

            <section className="info-section">
                <div className="info-container">
                    <h2 className="info-title">Dlaczego wybrać nas?</h2>
                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon">
                                <img src={destination} alt="Activities" />
                            </div>
                            <p className="info-description">
                                Odkryj spersonalizowane trasy podróży zaprojektowane przez lokalnych ekspertów.
                            </p>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <img src={advice} alt="Support" />
                            </div>
                            <p className="info-description">Niezawodne wskazówki na każdym etapie podróży.</p>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <img src={regulations} alt="Guidance" />
                            </div>
                            <p className="info-description">
                                Dostarczamy sprawdzone informacje, które pomogą Ci odkrywać świat na własnych
                                zasadach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="terms-container">
                <button className="terms-toggle" onClick={toggleTerms}>
                    <span className="terms-title">*Terms and conditions</span>
                    <img
                        src={arrowIcon}
                        alt="Toggle arrow"
                        className={`terms-arrow ${showTerms ? "open" : ""}`}
                    />
                </button>

                {showTerms && (
                    <div className="terms-content">
                        <h3>
                            <strong>Ostatnia aktualizacja: 03.06.2025</strong>
                        </h3>

                        <p>
                            <em>
                                Witamy na naszej stronie internetowej. Przed skorzystaniem z naszych usług prosimy
                                o dokładne zapoznanie się z niniejszym Regulaminem. Korzystając z serwisu zgadzasz się
                                na te warunki.
                            </em>
                        </p>
                        <p>
                            <strong>*Postanowienia ogólne</strong>
                        </p>
                        <p>
                            <em>
                                Niniejsze warunki regulują korzystanie z naszej witryny internetowej i usług. Jeżeli
                                nie zgadzasz się z którymkolwiek z warunków, prosimy nie korzystać z serwisu.
                            </em>
                        </p>

                        <p>
                            <strong>*Usługi</strong>
                        </p>
                        <p>
                            <em>
                                Dostarczamy informacji o destynacjach turystycznych i rezerwacjach podróży.
                                Zastrzegamy sobie prawo do zmiany, aktualizacji lub zaprzestania świadczenia dowolnej
                                usługi bez wcześniejszego powiadomienia.
                            </em>
                        </p>

                        <p>
                            <strong>*Rezerwacja i płatność</strong>
                        </p>
                        <p>
                            <em>Wszystkie rezerwacje mają charakter tymczasowy do momentu potwierdzenia.</em>
                        </p>
                        <p>
                            <strong>Ponosisz odpowiedzialność za prawidłowość podanych danych.</strong>
                        </p>
                        <p>
                            <strong>Płatność dokonywana jest zgodnie z wybraną taryfą.</strong>
                        </p>

                        <p>
                            <strong>*Anulowanie i zwrot pieniędzy</strong>
                        </p>
                        <p>
                            <em>Warunki anulowania zależą od konkretnej podróży.</em>
                        </p>
                        <p>
                            <em>W przypadku odwołania rezerwacji przez klienta mogą zostać naliczone kary.</em>
                        </p>

                        <p>
                            <strong>*Odpowiedzialność</strong>
                        </p>
                        <p>
                            <em>
                                Nie ponosimy odpowiedzialności za opóźnienia, odwołania lub inne nieprzewidziane
                                okoliczności pozostające poza naszą kontrolą.
                            </em>
                        </p>

                        <p>
                            <strong>Poufność</strong>
                        </p>
                        <p>
                            <em>
                                Twoje dane osobowe przetwarzane są zgodnie z naszą <strong>Polityką prywatności</strong>.
                            </em>
                        </p>
                    </div>
                )}
            </div>

            <ReservationForm />
            <Footer />
        </>
    );
}

export default HomePage;
