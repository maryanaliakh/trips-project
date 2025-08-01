import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './Cities.css';

function Cities() {
    const [miasta, setMiasta] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/miasta')
            .then(res => {
                if (!res.ok) throw new Error('Błąd sieci');
                return res.json();
            })
            .then(data => {
                const uniqueMiasta = data.filter(
                    (item, index, self) =>
                        index === self.findIndex(t => t.miasto === item.miasto)
                );
                setMiasta(uniqueMiasta);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Ładowanie...</p>;
    if (error) return <p>Błąd: {error}</p>;

    return (
        <>
            <Header />
            <div className="miasta-container">
                <h2>Lista podróży</h2>
                <ul>
                    {miasta.map(item => (
                        <li key={item.id_miasta}>
                            <Link to={`/miasta/${item.miasto}`}>
                                <strong>{item.miasto}</strong> — {item.opis || 'Brak opisu'}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default Cities;
