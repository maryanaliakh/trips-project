import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Search.css';

function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.trim().length === 0) {
            setResults([]);
            return;
        }

        fetch(`http://localhost:3000/api/miasta`)
            .then(res => res.json())
            .then(data => {
                const seen = new Set();
                const filtered = data
                    .filter(item => {
                        const name = item.miasto.toLowerCase();
                        return name.includes(query.toLowerCase());
                    })
                    .filter(item => {
                        const lowerName = item.miasto.toLowerCase();
                        if (!seen.has(lowerName)) {
                            seen.add(lowerName);
                            return true;
                        }
                        return false;
                    })
                    .sort((a, b) => a.miasto.localeCompare(b.miasto));

                setResults(filtered);
            })
            .catch(err => {
                console.error(err);
                setResults([]);
            });
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (results.length > 0) {
            navigate(`/miasta/${results[0].miasto}`);
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Miasto..."
                    className="search-input"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    autoComplete="off"
                />
            </div>

            {results.length > 0 && (
                <ul className="search-results">
                    {results.map(item => (
                        <li
                            key={item.id_miasta}
                            onClick={() => navigate(`/miasta/${item.miasto}`)}
                            className="search-result-item"
                        >
                            {item.miasto}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
}

export default Search;
