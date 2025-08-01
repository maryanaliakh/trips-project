import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/login/Login.jsx';
import ReservationTrips from "./pages/reservationTrips/ReservationTrips.jsx";
import HomePage from './pages/homePage/HomePage.jsx';
import Registration from './pages/registration/Registration.jsx';
import UserReservation from './pages/userReservation/UserReservation.jsx';
import Trips from './pages/trips/Trips.jsx';
import Cities from "./pages/cities/Cities.jsx";
import WycieczkaDetails from './pages/tripsDetails/TripsDetails.jsx';
import CitiesDetails from "./pages/citiesDetails/CitiesDetails.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import './App.css';

function App() {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setLoggedUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = (user) => {
        setLoggedUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    return (
        <BrowserRouter>
            <Routes>
                {/*Główna strona*/}
                <Route path="/" element={<HomePage />} />

                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/create" element={<Registration />} />

                {/* Reserwacje */}
                <Route path="/my-trips" element={<UserReservation loggedUser={loggedUser} />} />
                <Route path="/wyniki" element={<Trips loggedUser={loggedUser} />} />
                <Route path="/reservationTrips/:id" element={<ReservationTrips loggedUser={loggedUser} />} />

                {/* Miasta */}
                <Route path="/miasta" element={<Cities loggedUser={loggedUser} />} />
                <Route path="/miasta/:cityName" element={<CitiesDetails />} />

                <Route path="/wycieczki/:date" element={<WycieczkaDetails />} />
                <Route path="/contacts" element={<Contacts loggedUser={loggedUser} />} />
                <Route path="/aboutus" element={<AboutUs loggedUser={loggedUser} />} />

                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
