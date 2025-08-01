import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import './Contacts.css';

function Contacts() {
    return (
        <>
            <Header />
            <div className="contacts">
                <h1>Kontakt</h1>
                <p>Email: <a href="mailto:info@wycieczki.pl">info@wycieczki.pl</a></p>
                <p>Tel: <a href="tel:+48123456789">+48 123 456 789</a></p>
                <p>ul. Podróżnicza 12, Warszawa</p>

                <div className="map-container">
                    <iframe
                        title="Wanderlust Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.9279791180466!2d21.008360815823626!3d52.22967597978764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf93c005a35%3A0xcbbc6733c4420c6b!2sul.%20Podróżnicza%2012%2C%20Warszawa!5e0!3m2!1sen!2spl!4v1686763239361!5m2!1sen!2spl"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contacts;
