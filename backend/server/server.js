import express from "express"
import mysql from "mysql2"
import cors from "cors";
import bcrypt from 'bcrypt';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'wycieczki_autobusowe'
})

db.connect(function(err) {
    if (err) {
        return console.error('Brak połączenia z MySQL: ', err.message);
    }
    console.log('Połączono z bazą danych');
})


app.get('/api/miasta', function(req, res) {
    const sql = "SELECT * FROM miasta_docelowe";
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Błąd bazy danych');
        }
        res.json(results);
    });
});

app.post('/api/register', async (req, res) => {
    const { imie, nazwisko, telefon, email, haslo } = req.body;
    if (!imie || !nazwisko || !telefon || !email || !haslo) {
        return res.status(400).json({ error: "Wszystkie pola są wymagane." });
    }

    if (haslo.length < 8) {
        return res.status(400).json({ error: "Hasło musi mieć 8 znaków." });
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!strongPasswordRegex.test(haslo)) {
        return res.status(400).json({ error: "Hasło musi miec duże i małe litery." });
    }

    const hashedPassword = await bcrypt.hash(haslo, 10);

    const sql = `
        INSERT INTO klienci (imie, nazwisko, email, telefon, data_dolaczenia, haslo)
        VALUES (?, ?, ?, ?, NOW(), ?)
    `;

    db.query(sql, [imie, nazwisko, email, telefon, hashedPassword], (err) => {
        if (err) {
            console.error("DB insert error:", err);
            return res.status(500).json({ error: "Błąd bazy danych" });
        }
        res.status(200).json({ message: "Użytkownik zarejestrował się pomyślnie" });
    });
});

app.post('/api/login', async (req, res) => {
    const { email, haslo } = req.body;

    if (!email || !haslo) {
        return res.status(400).json({ error: "Wszystkie pola są wymagane." });
    }

    try {
        const [rows] = await db.promise().query("SELECT * FROM klienci WHERE email = ?", [email]);

        if (rows.length === 0) {
            return res.status(401).json({ error: "Nieprawidłowy email lub hasło." });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(haslo, user.haslo);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Nieprawidłowy email lub hasło." });
        }

        res.json({
            message: "Zalogowano pomyślnie!",
            user: {
                id_klienta: user.id_klienta,
                imie: user.imie,
                nazwisko: user.nazwisko,
                email: user.email
            }
        });

    } catch (err) {
        console.error("Błąd logowania:", err);
        res.status(500).json({ error: "Wewnętrzny błąd serwera." });
    }
});

app.get('/api/rezerwacje', (req, res) => {
    const userId = req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: "Brakuje identyfikatora użytkownika." });
    }

    const sql = `
        SELECT r.*, w.nazwa AS wycieczka, w.data_wyjazdu, w.data_powrotu, w.cena, w.waluta
        FROM rezerwacje r
        JOIN wycieczki w ON r.id_wycieczki = w.id_wycieczki
        WHERE r.id_klienta = ?
        ORDER BY r.data_rezerwacji DESC
    `;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error("Błąd zapytania do bazy:", err);
            return res.status(500).json({ error: "Błąd serwera" });
        }

        res.json(results);
    });
});

app.get('/api/wycieczki/by-name-and-date', (req, res) => {
    const { name, date } = req.query;

    if (!name || !date) {
        return res.status(400).json({ error: "Wymagane parametry 'name' i 'date'." });
    }

    const sql = `
        SELECT w.id_wycieczki, w.nazwa, w.opis, w.data_wyjazdu, w.data_powrotu, w.cena, w.waluta,
               m.id_miasta, m.miasto, m.kraj
        FROM wycieczki w
        LEFT JOIN wycieczki_miasta wm ON w.id_wycieczki = wm.id_wycieczki
        LEFT JOIN miasta_docelowe m ON wm.id_miasta = m.id_miasta
        WHERE LOWER(w.nazwa) LIKE LOWER(?) AND w.data_wyjazdu = ?
        ORDER BY w.id_wycieczki
    `;

    const namePattern = `%${name}%`;

    db.query(sql, [namePattern, date], (err, results) => {
        if (err) {
            console.error("Błąd przy wyszukiwaniu wycieczek:", err);
            return res.status(500).json({ error: "Błąd serwera" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Nie znaleziono wycieczek." });
        }

        const wycieczkiMap = new Map();

        results.forEach(row => {
            if (!wycieczkiMap.has(row.id_wycieczki)) {
                wycieczkiMap.set(row.id_wycieczki, {
                    id_wycieczki: row.id_wycieczki,
                    nazwa: row.nazwa,
                    opis: row.opis,
                    data_wyjazdu: row.data_wyjazdu,
                    data_powrotu: row.data_powrotu,
                    cena: row.cena,
                    waluta: row.waluta,
                    miasta: []
                });
            }

            if (row.id_miasta) {
                wycieczkiMap.get(row.id_wycieczki).miasta.push({
                    id_miasta: row.id_miasta,
                    miasto: row.miasto,
                    kraj: row.kraj
                });
            }
        });

        res.json(Array.from(wycieczkiMap.values()));
    });
});

app.get('/api/wycieczki', (req, res) => {
    const search = req.query.query || '';
    const dateInput = req.query.date;

    if (!search.trim()) return res.json({ bestMatch: null, others: [] });

    let sql = `
        SELECT *,
               CASE
                   WHEN ? IS NOT NULL THEN ABS(DATEDIFF(data_wyjazdu, ?))
                   ELSE NULL
                   END AS date_diff
        FROM wycieczki
        WHERE LOWER(nazwa) LIKE LOWER(?) OR LOWER(opis) LIKE LOWER(?)
    `;

    if (dateInput) {
        sql += ` ORDER BY date_diff ASC, data_wyjazdu ASC`;
    } else {
        sql += ` ORDER BY data_wyjazdu ASC`;
    }

    const like = `%${search.toLowerCase()}%`;
    const params = dateInput ? [dateInput, dateInput, like, like] : [null, null, like, like];

    db.query(sql, params, (err, results) => {
        if (err) {
            console.error("Błąd wyszukiwania:", err);
            return res.status(500).json({ error: "Błąd serwera" });
        }

        const bestMatch = results[0] || null;
        const others = results.slice(1);

        res.json({ bestMatch, others });
    });
});

app.get('/api/autobusy/:id', (req, res) => {
    const sql = 'SELECT * FROM autobusy WHERE id_autobusu = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Błąd serwera przy pobieraniu autobusu.' });
        if (result.length === 0) return res.status(404).json({ error: 'Nie znaleziono autobusu.' });
        res.json(result[0]);
    });
});

app.get('/api/przewodnicy/:id', (req, res) => {
    const sql = 'SELECT * FROM przewodnicy WHERE id_przewodnika = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Błąd serwera przy pobieraniu przewodnika.' });
        if (result.length === 0) return res.status(404).json({ error: 'Nie znaleziono przewodnika.' });
        res.json(result[0]);
    });
});

app.get('/api/miasta-wyjazdu/:id', (req, res) => {
    const sql = 'SELECT * FROM miasta_wyjazdu WHERE id_miasta_wyjazdu = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Błąd serwera przy pobieraniu miasta wyjazdu.' });
        if (result.length === 0) return res.status(404).json({ error: 'Nie znaleziono miasta wyjazdu.' });
        res.json(result[0]);
    });
});

app.get('/api/wycieczki/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM wycieczki WHERE id_wycieczki = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Błąd przy pobieraniu wycieczki:", err);
            return res.status(500).json({ error: "Błąd serwera" });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: "Nie znaleziono wycieczki" });
        }

        res.json(result[0]);
    });
});

app.post('/api/rezerwacjaPodrozy', (req, res) => {
    const {
        id_klienta,
        id_wycieczki,
        kraj,
        kod,
        miasto,
        adres,
        liczba_osob,
        waluta,
        suma_calkowita,
        numer_karty,
        data_waznosci_karty,
        cvc,
        imie_nazwisko_na_karcie
    } = req.body;

    const sql = `
        INSERT INTO rezerwacje
        (id_klienta, id_wycieczki, kraj, kod, miasto, adres, liczba_osob, waluta, suma_calkowita,
         numer_karty, data_waznosci_karty, cvc, imie_nazwisko_na_karcie, data_rezerwacji)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    db.query(sql, [
        id_klienta, id_wycieczki, kraj, kod, miasto, adres, liczba_osob, waluta, suma_calkowita,
        numer_karty, data_waznosci_karty, cvc, imie_nazwisko_na_karcie
    ], (err) => {
        if (err) {
            console.error("Błąd przy zapisie rezerwacji:", err);
            return res.status(500).send('Błąd bazy danych');
        }
        res.status(201).send('Rezerwacja zapisana!');
    });
});

app.get('/api/miastazwycieczkami', function(req, res) {
    const sql = `
        SELECT DISTINCT m.id_miasta, m.miasto, m.kraj
        FROM miasta_docelowe m
        JOIN wycieczki_miasta wm ON m.id_miasta = wm.id_miasta
        JOIN wycieczki w ON wm.id_wycieczki = w.id_wycieczki
    `;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Błąd zapytania:", err);
            return res.status(500).send('Błąd serwera');
        }
        res.json(results);
    });
});


app.get('/api/wycieczki/by-date/:date', (req, res) => {
    const date = req.params.date;

    const sql = `
        SELECT w.id_wycieczki, w.nazwa, w.opis, w.data_wyjazdu, w.data_powrotu, w.cena, w.waluta,
               m.id_miasta, m.miasto, m.kraj
        FROM wycieczki w
        LEFT JOIN wycieczki_miasta wm ON w.id_wycieczki = wm.id_wycieczki
        LEFT JOIN miasta_docelowe m ON wm.id_miasta = m.id_miasta
        WHERE w.data_wyjazdu = ?
        ORDER BY w.id_wycieczki;
    `;

    db.query(sql, [date], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Błąd serwera" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Nie znaleziono wycieczek na podaną datę." });
        }

        const wycieczkiMap = new Map();

        results.forEach(row => {
            if (!wycieczkiMap.has(row.id_wycieczki)) {
                wycieczkiMap.set(row.id_wycieczki, {
                    id_wycieczki: row.id_wycieczki,
                    nazwa: row.nazwa,
                    opis: row.opis,
                    data_wyjazdu: row.data_wyjazdu,
                    data_powrotu: row.data_powrotu,
                    cena: row.cena,
                    waluta: row.waluta,
                    miasta: []
                });
            }
            if (row.id_miasta) {
                wycieczkiMap.get(row.id_wycieczki).miasta.push({
                    id_miasta: row.id_miasta,
                    miasto: row.miasto,
                    kraj: row.kraj
                });
            }
        });

        res.json(Array.from(wycieczkiMap.values()));
    });
});


app.listen(PORT, () => {
    console.log("Serwer działa na porcie", PORT);
});
