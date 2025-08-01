import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './ReservationTrips.css';


function ReservationTrips({ loggedUser }) {
    const { id } = useParams();  // id wycieczki з URL
    const navigate = useNavigate();

    const [tripData, setTripData] = useState(null);
    const [loadingTrip, setLoadingTrip] = useState(true);

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/wycieczki/${id}`);
                if (!res.ok) throw new Error("Nie znaleziono wycieczki");
                const data = await res.json();
                setTripData(data);
            } catch (err) {
                console.error("Błąd przy ładowaniu wycieczki:", err);
            } finally {
                setLoadingTrip(false);
            }
        };

        fetchTripData();
    }, [id]);


    const [formData, setFormData] = useState({
        kraj: '',
        kod: '',
        miasto: '',
        adres: '',
        liczba_osob: 1,
        waluta: 'EUR',
        suma_calkowita: '',
        numer_karty: '',
        data_waznosci_karty: '',
        cvc: '',
        imie_nazwisko_na_karcie: '',
    });

    useEffect(() => {
        if (tripData) {
            setFormData(prev => ({
                ...prev,
                suma_calkowita: (tripData.cena * prev.liczba_osob).toFixed(2)
            }));
        }
    }, [formData.liczba_osob, tripData]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    if (!loggedUser) {
        return (
            <>
                <Header />
                <div className="rezerwacja-container">
                    <h2 className="rezerwacja-header">Musisz być zalogowany, aby zrobić rezerwację.</h2>
                    <a href="/pages/Login" className="login-button">Zaloguj się</a>
                </div>
                <Footer />
            </>
        );
    }

    if (loadingTrip) return <p>Ładowanie danych wycieczki...</p>;
    if (!tripData) return <p>Nie znaleziono danych wycieczki.</p>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMsg('');

        const dataToSend = {
            id_klienta: loggedUser.id_klienta,
            id_wycieczki: id,
            kraj: formData.kraj,
            kod: formData.kod,
            miasto: formData.miasto,
            adres: formData.adres,
            liczba_osob: Number(formData.liczba_osob),
            waluta: formData.waluta,
            suma_calkowita: parseFloat(formData.suma_calkowita),
            numer_karty: formData.numer_karty,
            data_waznosci_karty: formData.data_waznosci_karty,
            cvc: formData.cvc,
            imie_nazwisko_na_karcie: formData.imie_nazwisko_na_karcie,
        };

        try {
            const res = await fetch('http://localhost:3000/api/rezerwacjaPodrozy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || 'Błąd podczas tworzenia rezerwacji');
            }

            setSuccessMsg('Rezerwacja została pomyślnie dodana!');
            setFormData({
                kraj: '',
                kod: '',
                miasto: '',
                adres: '',
                liczba_osob: 1,
                waluta: 'PLN',
                suma_calkowita: '',
                numer_karty: '',
                data_waznosci_karty: '',
                cvc: '',
                imie_nazwisko_na_karcie: '',
            });

             navigate('/my-trips');

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (isoDate) => {
        return new Date(isoDate).toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <Header />
            <div className="reservation-wrapper">
                <div className="reservation-left">
                    <h2 className="h2">Rezerwacja wycieczki: {tripData.nazwa}</h2>

                    {error && <p className="error-message">{error}</p>}
                    {successMsg && <p className="success-message">{successMsg}</p>}

                    <form onSubmit={handleSubmit} className="reservacja-grid">

                        <fieldset className="passenger-details">
                            <legend>Passenger Details</legend>

                            <label className="label" htmlFor="kraj">
                                Kraj<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="kraj"
                                name="kraj"
                                value={formData.kraj}
                                onChange={handleChange}
                                required
                            />

                            <label className="label" htmlFor="kod">
                                Kod pocztowy<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="kod"
                                name="kod"
                                value={formData.kod}
                                onChange={handleChange}
                                required
                            />

                            <label className="label" htmlFor="miasto">
                                Miasto<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="miasto"
                                name="miasto"
                                value={formData.miasto}
                                onChange={handleChange}
                                required
                            />

                            <label className="label" htmlFor="adres">
                                Adres<span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="adres"
                                name="adres"
                                value={formData.adres}
                                onChange={handleChange}
                                required
                            />

                            <label className="label" htmlFor="liczba_osob">
                                Liczba osób<span className="required">*</span>
                            </label>
                            <input
                                type="number"
                                id="liczba_osob"
                                name="liczba_osob"
                                min="1"
                                value={formData.liczba_osob}
                                onChange={handleChange}
                                required
                            />
                        </fieldset>

                        <fieldset className="payment-details">
                            <legend>Pay Securely</legend>
                            <h3>Debit / Credit Card 💳</h3>

                            <label className="label" htmlFor="cardNumber">Numer karty<span className="required">*</span></label>
                            <div className="card-number-wrapper">
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="numer_karty"
                                    value={formData.numer_karty}
                                    onChange={handleChange}
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>

                            <label className="label" htmlFor="expiryDate">Data ważności<span className="required">*</span></label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="data_waznosci_karty"
                                value={formData.data_waznosci_karty}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                required
                            />

                            <label className="label" htmlFor="securityCode">Kod zabezpieczający (CVC)<span className="required">*</span></label>
                            <input
                                type="text"
                                id="securityCode"
                                name="cvc"
                                value={formData.cvc}
                                onChange={handleChange}
                                placeholder="CVC"
                                required
                            />

                            <label className="label" htmlFor="nameOnCard">Imię i nazwisko na karcie<span className="required">*</span></label>
                            <input
                                type="text"
                                id="nameOnCard"
                                name="imie_nazwisko_na_karcie"
                                value={formData.imie_nazwisko_na_karcie}
                                onChange={handleChange}
                                placeholder="J. Smith"
                                required
                            />
                        </fieldset>

                        <button type="submit" disabled={loading} className="registration-btn">
                            {loading ? 'Trwa zapisywanie...' : 'Zarezerwuj'}
                        </button>
                    </form>
                </div>

                <div className="reservation-right">
                    <h2 className="highlight-box">{tripData.nazwa}</h2>
                    <div className="right-content">
                        <p><strong>Od:</strong> {formatDate(tripData.data_wyjazdu)}</p>
                        <p><strong>Do:</strong> {formatDate(tripData.data_powrotu)}</p>
                        <p><strong>Cena za osobę:</strong> {tripData.cena} {tripData.waluta}</p>
                        <p><strong>Liczba osób:</strong> {formData.liczba_osob}</p>
                        <hr />
                        <h3 className="total-price">
                            Suma: {(tripData.cena * formData.liczba_osob).toFixed(2)} {tripData.waluta}
                        </h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default ReservationTrips;
