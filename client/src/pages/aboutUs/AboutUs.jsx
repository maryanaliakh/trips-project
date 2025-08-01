import React, { useEffect } from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './AboutUs.css';

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className="onas-container">
                <header className="onas-header">
                    <h1>ZWIEDZAJ ŚWIAT <span>z Wanderlust</span></h1>
                    <p className="onas-subtitle">Światła, kamera, przygоdа...</p>
                </header>

                <section className="onas-intro">
                    <p>
                        Witamy w naszym świecie odkryć! Pomagamy podróżnikom odkrywać piękne miejsca z łatwością, pasją i niezapomnianymi doświadczeniami.
                        Nasz zespół jest tutaj, aby wspierać Twoją podróż, od planowania po wspomnienia.
                    </p>
                </section>

                <section className="onas-features">
                    <div className="feature">
                        <h2>Activities</h2>
                        <p>Odkryj spersonalizowane trasy podróży zaprojektowane przez lokalnych ekspertów.</p>
                    </div>

                    <div className="feature">
                        <h2>Support</h2>
                        <p>Niezawodne wskazówki na każdym etapie podróży.</p>
                    </div>

                    <div className="feature">
                        <h2>Guidance</h2>
                        <p>Dostarczamy sprawdzone informacje, które pomogą Ci odkrywać świat na własnych zasadach.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
