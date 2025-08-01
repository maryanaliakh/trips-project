-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 01, 2025 at 07:16 PM
-- Server version: 8.0.40
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wycieczki_autobusowe`
--

-- --------------------------------------------------------

--
-- Table structure for table `administratorzy`
--

CREATE TABLE `administratorzy` (
  `id_admina` int NOT NULL,
  `login` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `haslo_hash` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imie` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nazwisko` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `administratorzy`
--

INSERT INTO `administratorzy` (`id_admina`, `login`, `haslo_hash`, `imie`, `nazwisko`, `email`) VALUES
(1, 'admin1', 'HASHED_PASSWORD_HERE', 'Oleksandra', 'Kreiman', 'sasha.krejman@gmail.com'),
(2, 'admin2', 'HASHED_PASSWORD_HERE', 'Mariana', 'Liakh', 'liakhmar@gmail.com'),
(3, 'admin3', 'HASHED_PASSWORD_HERE', 'Valeria', 'Korolko', 'aval89060@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `autobusy`
--

CREATE TABLE `autobusy` (
  `id_autobusu` int NOT NULL,
  `marka` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `model` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `liczba_miejsc` int DEFAULT NULL,
  `numer_rejestracyjny` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `rok_produkcji` int DEFAULT NULL,
  `klimatyzacja` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autobusy`
--

INSERT INTO `autobusy` (`id_autobusu`, `marka`, `model`, `liczba_miejsc`, `numer_rejestracyjny`, `rok_produkcji`, `klimatyzacja`) VALUES
(1, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(2, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(3, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(4, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(5, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1),
(6, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(7, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(8, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(9, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(10, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1),
(11, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(12, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(13, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(14, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(15, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1),
(16, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(17, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(18, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(19, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(20, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1),
(21, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(22, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(23, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(24, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(25, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1),
(26, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(27, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(28, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(29, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(30, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1),
(31, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(32, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(33, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(34, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(35, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1),
(36, 'Mercedes', 'Tourismo', 50, 'KR 1234A', 2019, 1),
(37, 'Setra', 'S 515 HD', 2021, '56', 0, 1),
(38, 'MAN', 'Lions Coach', 49, 'PO 4321C', 2018, 1),
(39, 'Volvo', '9700', 53, 'GD 8765D', 2020, 1),
(40, 'Scania', 'Irizar i6', 52, 'LU 2468E', 2017, 1);

-- --------------------------------------------------------

--
-- Table structure for table `klienci`
--

CREATE TABLE `klienci` (
  `id_klienta` int NOT NULL,
  `imie` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nazwisko` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `telefon` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `data_dolaczenia` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `haslo` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `klienci`
--

INSERT INTO `klienci` (`id_klienta`, `imie`, `nazwisko`, `email`, `telefon`, `data_dolaczenia`, `haslo`) VALUES
(1, 'Tomasz', 'Lis', 't.lis@example.com', '600700800', '2025-05-22 15:33:05', NULL),
(2, 'Anna', 'Nowak', 'anna.nowak@gmail.com', '502123456', '2025-05-22 15:33:05', NULL),
(3, 'Kamil', 'Kowalski', 'kamil.kowalski@example.com', '503987654', '2025-05-22 15:33:05', NULL),
(4, 'Julia', 'Wiśniewska', 'julia.wisniewska@onet.pl', '501555321', '2025-05-22 15:33:05', NULL),
(5, 'Michał', 'Zieliński', 'm.zielinski@interia.pl', '504666789', '2025-05-22 15:33:05', NULL),
(6, 'Agnieszka', 'Kaczmarek', 'ag.kaczmarek@mail.pl', '506777888', '2025-05-22 15:33:05', NULL),
(7, 'Tomasz', 'Wójcik', 'tomasz.wojcik@wp.pl', '500333222', '2025-05-22 15:33:05', NULL),
(8, 'Karolina', 'Mazur', 'karolina.mazur@gmail.com', '507888999', '2025-05-22 15:33:05', NULL),
(9, 'Paweł', 'Lewandowski', 'pawel.lew@gmail.com', '508444111', '2025-05-22 15:33:05', NULL),
(10, 'Tomasz', 'Lis', 't.lis@example.com', '600700800', '2025-05-22 15:38:23', NULL),
(11, 'Anna', 'Nowak', 'anna.nowak@gmail.com', '502123456', '2025-05-22 15:38:23', NULL),
(12, 'Kamil', 'Kowalski', 'kamil.kowalski@example.com', '503987654', '2025-05-22 15:38:23', NULL),
(13, 'Julia', 'Wiśniewska', 'julia.wisniewska@onet.pl', '501555321', '2025-05-22 15:38:23', NULL),
(14, 'Michał', 'Zieliński', 'm.zielinski@interia.pl', '504666789', '2025-05-22 15:38:23', NULL),
(15, 'Agnieszka', 'Kaczmarek', 'ag.kaczmarek@mail.pl', '506777888', '2025-05-22 15:38:23', NULL),
(16, 'Tomasz', 'Wójcik', 'tomasz.wojcik@wp.pl', '500333222', '2025-05-22 15:38:23', NULL),
(17, 'Karolina', 'Mazur', 'karolina.mazur@gmail.com', '507888999', '2025-05-22 15:38:23', NULL),
(18, 'Paweł', 'Lewandowski', 'pawel.lew@gmail.com', '508444111', '2025-05-22 15:38:23', NULL),
(19, 'Tomasz', 'Lis', 't.lis@example.com', '600700800', '2025-05-22 15:48:38', NULL),
(20, 'Anna', 'Nowak', 'anna.nowak@gmail.com', '502123456', '2025-05-22 15:48:38', NULL),
(21, 'Kamil', 'Kowalski', 'kamil.kowalski@example.com', '503987654', '2025-05-22 15:48:38', NULL),
(22, 'Julia', 'Wiśniewska', 'julia.wisniewska@onet.pl', '501555321', '2025-05-22 15:48:38', NULL),
(23, 'Michał', 'Zieliński', 'm.zielinski@interia.pl', '504666789', '2025-05-22 15:48:38', NULL),
(24, 'Agnieszka', 'Kaczmarek', 'ag.kaczmarek@mail.pl', '506777888', '2025-05-22 15:48:38', NULL),
(25, 'Tomasz', 'Wójcik', 'tomasz.wojcik@wp.pl', '500333222', '2025-05-22 15:48:38', NULL),
(26, 'Karolina', 'Mazur', 'karolina.mazur@gmail.com', '507888999', '2025-05-22 15:48:38', NULL),
(27, 'Paweł', 'Lewandowski', 'pawel.lew@gmail.com', '508444111', '2025-05-22 15:48:38', NULL),
(28, 'Tomasz', 'Lis', 't.lis@example.com', '600700800', '2025-05-22 15:48:58', NULL),
(29, 'Anna', 'Nowak', 'anna.nowak@gmail.com', '502123456', '2025-05-22 15:48:58', NULL),
(30, 'Kamil', 'Kowalski', 'kamil.kowalski@example.com', '503987654', '2025-05-22 15:48:58', NULL),
(31, 'Julia', 'Wiśniewska', 'julia.wisniewska@onet.pl', '501555321', '2025-05-22 15:48:58', NULL),
(32, 'Michał', 'Zieliński', 'm.zielinski@interia.pl', '504666789', '2025-05-22 15:48:58', NULL),
(33, 'Agnieszka', 'Kaczmarek', 'ag.kaczmarek@mail.pl', '506777888', '2025-05-22 15:48:58', NULL),
(34, 'Tomasz', 'Wójcik', 'tomasz.wojcik@wp.pl', '500333222', '2025-05-22 15:48:58', NULL),
(35, 'Karolina', 'Mazur', 'karolina.mazur@gmail.com', '507888999', '2025-05-22 15:48:58', NULL),
(36, 'Paweł', 'Lewandowski', 'pawel.lew@gmail.com', '508444111', '2025-05-22 15:48:58', NULL),
(37, 'mar', 'lia', 'marlia@gmail.com', '537086013', '2025-06-05 09:43:19', '$2b$10$ZWkMrKDI4gb1eoWPEZ5jr.WKE9arzQ8OO9num8grdNY6Pb75NvsjC'),
(38, 'Mariana', 'Liakh', 'marlia@gmail.com', '134555445', '2025-06-05 09:48:43', '$2b$10$jOnow6/EwY.5UtyTbes2H.Anq1v9ZDmlUtfy2/WQZ.aMPVU5HoEuK'),
(39, 'Mariana', 'Liakh', 'liakhmar@gmail.com', '123123123', '2025-06-05 10:32:08', '$2b$10$RiGpVeu6n2RFGe5dk6RhHerWNr3DH0AsiLfBFbnr346rRs/jcd6rm'),
(40, 'Mariana', 'Liakh', 'liakhmar@gmail.com', '537086013', '2025-06-05 10:46:09', '$2b$10$4iakzi112Ckblbh86eYzwes1Jq8O0nmXZJzJ0LvwKDsR3H1ySbC4S'),
(41, 'cvzv', 'tdfrfr', 'marlia@gmail.com', '3422', '2025-06-05 14:08:25', '$2b$10$LdFwNCcOUatm.cz/8aKrjOw/HjNqEMHYc32xQn0QkAIfjOxX8qwva'),
(42, 'Diana', 'Patola', 'kdkjdke@kdcflw', '537086013', '2025-06-09 13:28:59', '$2b$10$JGlLTeiqQDBn1a2pfjLwhuQq0qQuWzYcdykfzgxhiSZuKXDpefKhe');

-- --------------------------------------------------------

--
-- Table structure for table `miasta_docelowe`
--

CREATE TABLE `miasta_docelowe` (
  `id_miasta` int NOT NULL,
  `miasto` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `kraj` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `opis` text COLLATE utf8mb4_general_ci,
  `atrakcje` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `miasta_docelowe`
--

INSERT INTO `miasta_docelowe` (`id_miasta`, `miasto`, `kraj`, `opis`, `atrakcje`) VALUES
(1, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(2, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(3, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(4, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(5, 'Barselona', 'Hiszpania', 'Z widokiem na Morze Śródziemne i słynąca z Gaudiego i innych architektur secesyjnych, Barcelona jest jednym z najmodniejszych miast Europy.', 'Odpoczynek nad morzem'),
(6, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(7, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(8, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(9, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(10, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(11, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(12, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(13, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(14, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(15, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(16, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(17, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(18, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(19, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(20, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(21, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(22, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(23, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(24, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(25, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(26, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(27, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(28, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(29, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(30, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(31, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(32, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(33, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(34, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(35, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(36, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(37, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(38, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(39, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(40, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(41, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(42, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(43, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(44, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(45, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(46, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(47, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(48, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(49, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(50, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(51, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(52, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(53, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(54, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(55, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(56, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(57, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(58, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(59, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(60, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(61, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(62, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(63, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(64, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(65, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(66, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(67, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(68, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(69, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(70, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(71, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(72, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(73, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(74, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(75, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(76, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(77, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(78, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(79, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(80, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(81, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(82, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(83, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(84, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(85, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(86, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(87, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(88, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(89, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(90, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(91, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(92, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(93, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(94, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(95, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(96, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(97, 'Lizbona', 'Portugalia', 'Stolica i największe miasto Portugalii', ''),
(98, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(99, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(100, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(101, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(102, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(103, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(104, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(105, 'Praga', 'Czechy', 'Stolica Czech z piękną starówką', 'Most Karola, Zamek Praski'),
(106, 'Wiedeń', 'Austria', 'Kulturalna stolica Europy', 'Opera Wiedeńska, Schönbrunn'),
(107, 'Paryż', 'Francja', 'Stolica miłości', 'Luwr i sesja zdjęciowa'),
(108, 'Normandia', 'Francja', 'Kraina historyczna Francji', ' Skalista wyspa pływow w zatoce Mont Saint-Michel'),
(109, 'Barselona', 'Hiszpania', 'Słoneczna stolica', 'Odpoczynek nad morzem'),
(111, 'Sintra', 'Portugalia', 'Urocze  górskie miasteczko w Portugalii', ' Pałac Pena '),
(112, 'Cascais', 'Portugalia', 'Piękne miasteczko na wybrzeżu Portugalii', 'Jednodniowa wycieczka'),
(113, 'Luksor', 'Egipt', 'Największy na świecie muzeum na wolnym powietrzu', 'Muzeum Luksorskie, Dolina Królów'),
(114, 'Kair', 'Egipt', ' Stolica i najludniejsze miasto Egiptu', 'Stary Kair,Cytadela Kairska ,Wielkie Muzeum Egipskie'),
(115, 'Giza', 'Egipt', 'Miejsce jednych z najbardziej imponujących budowli starożytności', 'Spacer'),
(116, 'Hurghada', 'Egipt', 'Wspaniała, słoneczna pogoda przez cały rok', 'Odpoczynek nad morzem'),
(117, 'Tenryfa', 'Hiszpania', 'Największa wyspa archipelagu Wysp Kanaryjskich', 'Wakacje na wyspie'),
(118, 'Inverness', 'Hichlands', 'Tygiel dziedzictwa i kultury, najbardziej wysunięte na północ miasto Wielkiej Brytanii.', 'Muzeum i Galeria Sztuki'),
(119, 'Cambridge', 'Anglia Wschodnia', 'Miasto Cambridge jest kolebką historii, architektury i innowacji.', 'Muzeum i galeria Sztuki, poznaj Rynek, wstrząśnij na kursie mistrzowskim ginu');

-- --------------------------------------------------------

--
-- Table structure for table `miasta_wyjazdu`
--

CREATE TABLE `miasta_wyjazdu` (
  `id_miasta_wyjazdu` int NOT NULL,
  `miasto` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `wojewodztwo` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `adres_zbiorki` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `miasta_wyjazdu`
--

INSERT INTO `miasta_wyjazdu` (`id_miasta_wyjazdu`, `miasto`, `wojewodztwo`, `adres_zbiorki`) VALUES
(1, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(2, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(3, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(4, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(5, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha '),
(6, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(7, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(8, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(9, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(10, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha '),
(11, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(12, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(13, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(14, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(15, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha '),
(16, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(17, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(18, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(19, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(20, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha '),
(21, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(22, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(23, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(24, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(25, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha '),
(26, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(27, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(28, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(29, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(30, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha '),
(31, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(32, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(33, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(34, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(35, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha '),
(36, 'Warszawa', 'mazowieckie', 'Dworzec Zachodni, Aleje Jerozolimskie 144'),
(37, 'Kraków', 'małopolskie', 'Parking pod Tauron Areną'),
(38, 'Poznań', 'wielkopoloskie', 'Dworzec autobusowy w Poznaniu, ul. Stanisława Matyi 2'),
(39, 'Gdańsk', 'pomorskie', 'Dworzec Autobusowy w Gdańsku ul. 3 Maja'),
(40, 'Wrocław', 'dolnośląskie', 'Dworzec Wrocław, ulica Sucha ');

-- --------------------------------------------------------

--
-- Table structure for table `przewodnicy`
--

CREATE TABLE `przewodnicy` (
  `id_przewodnika` int NOT NULL,
  `imie` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nazwisko` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jezyki` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `telefon` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `doswiadczenie_lat` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `przewodnicy`
--

INSERT INTO `przewodnicy` (`id_przewodnika`, `imie`, `nazwisko`, `jezyki`, `telefon`, `email`, `doswiadczenie_lat`) VALUES
(1, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(2, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(3, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(4, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8),
(5, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(6, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(7, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(8, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8),
(9, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(10, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(11, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(12, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8),
(13, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(14, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(15, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(16, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8),
(17, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(18, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(19, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(20, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8),
(21, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(22, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(23, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(24, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8),
(25, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(26, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(27, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(28, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8),
(29, 'Magdalena', 'Lis', 'polski, angielski, włoski', '501123456', 'magdalena.lis@tours.com', 7),
(30, 'Tomasz', 'Wrona', 'polski, niemiecki', '502234567', 'tomasz.wrona@tours.com', 10),
(31, 'Katarzyna', 'Bąk', 'polski, francuski, hiszpański', '503345678', 'katarzyna.bak@tours.com', 5),
(32, 'Rafał', 'Maj', 'polski, angielski, ukraiński', '504456789', 'rafal.maj@tours.com', 8);

-- --------------------------------------------------------

--
-- Table structure for table `rezerwacje`
--

CREATE TABLE `rezerwacje` (
  `id_rezerwacji` int NOT NULL,
  `id_klienta` int DEFAULT NULL,
  `id_wycieczki` int DEFAULT NULL,
  `kraj` text COLLATE utf8mb4_general_ci,
  `kod` text COLLATE utf8mb4_general_ci,
  `miasto` text COLLATE utf8mb4_general_ci,
  `adres` text COLLATE utf8mb4_general_ci,
  `liczba_osob` int DEFAULT '1',
  `data_rezerwacji` datetime DEFAULT CURRENT_TIMESTAMP,
  `waluta` varchar(10) COLLATE utf8mb4_general_ci DEFAULT 'EUR',
  `suma_calkowita` decimal(10,2) DEFAULT NULL,
  `numer_karty` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `data_waznosci_karty` varchar(7) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cvc` char(3) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imie_nazwisko_na_karcie` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rezerwacje`
--

INSERT INTO `rezerwacje` (`id_rezerwacji`, `id_klienta`, `id_wycieczki`, `kraj`, `kod`, `miasto`, `adres`, `liczba_osob`, `data_rezerwacji`, `waluta`, `suma_calkowita`, `numer_karty`, `data_waznosci_karty`, `cvc`, `imie_nazwisko_na_karcie`) VALUES
(1, 1, 1, NULL, NULL, NULL, NULL, 2, '2025-06-01 00:00:00', 'EUR', 1720.00, NULL, NULL, NULL, NULL),
(2, 7, 6, NULL, NULL, NULL, NULL, 3, '2025-04-04 00:00:00', 'EUR', 4200.00, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2025-06-09 12:49:23', 'EUR', NULL, NULL, NULL, NULL, NULL),
(4, 39, 18, 'Poland', '61-868', 'Poznań', '32 ul.Garbary', 1, '2025-06-09 14:48:45', 'PLN', NULL, '1111111111111111', '20/12', '123', 'Mariana Liakh'),
(5, 39, 18, 'Poland', '61-868', 'Poznań', '32 ul.Garbary', 2, '2025-06-09 14:54:31', 'EUR', 2740.00, '1111111111111111', '20/12', '123', 'Mariana Liakh'),
(6, 39, 18, 'Poland', '61-868', 'Poznań', '32 ul.Garbary', 5, '2025-06-09 14:57:34', 'EUR', 6850.00, '1111111111111111', '20/12', '123', 'Mariana Liakh'),
(7, 42, 15, 'Poland', '61-868', 'Poznań', '32 ul.Garbary', 1, '2025-06-09 15:30:11', 'EUR', 1500.00, '1111111111111111', '20/12', '123', 'Diana Patola');

-- --------------------------------------------------------

--
-- Table structure for table `wycieczki`
--

CREATE TABLE `wycieczki` (
  `id_wycieczki` int NOT NULL,
  `nazwa` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `opis` text COLLATE utf8mb4_general_ci,
  `data_wyjazdu` date DEFAULT NULL,
  `data_powrotu` date DEFAULT NULL,
  `liczba_dni` int DEFAULT NULL,
  `liczba_miejsc` int DEFAULT '50',
  `cena` decimal(10,2) DEFAULT NULL,
  `waluta` varchar(10) COLLATE utf8mb4_general_ci DEFAULT 'PLN',
  `id_miasta_wyjazdu` int DEFAULT NULL,
  `dystans_km` int DEFAULT NULL,
  `id_autobusu` int DEFAULT NULL,
  `id_przewodnika` int DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wycieczki`
--

INSERT INTO `wycieczki` (`id_wycieczki`, `nazwa`, `opis`, `data_wyjazdu`, `data_powrotu`, `liczba_dni`, `liczba_miejsc`, `cena`, `waluta`, `id_miasta_wyjazdu`, `dystans_km`, `id_autobusu`, `id_przewodnika`, `photo`) VALUES
(1, 'Weekendowa Praga + Wiedeń', 'Intensywna i kulturalna wycieczka do dwóch europejskich stolic.', '2025-07-04', '2025-07-07', 4, 50, 860.00, 'EUR', 1, 1400, 3, 2, NULL),
(2, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-10-15', '2025-10-18', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(3, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2025-09-13', '2025-09-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(4, 'Barselona Sea Vibe ', 'Odpoczynek nad morzem w Barselonie', '2025-09-08', '2025-09-13', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(5, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2025-10-14', '2025-10-18', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(6, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2025-11-10', '2025-11-16', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(7, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2025-12-21', '2025-12-26', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(8, 'Weekendowa Praga + Wiedeń', 'Intensywna i kulturalna wycieczka do dwóch europejskich stolic.', '2025-08-04', '2025-08-07', 4, 50, 860.00, 'EUR', 1, 1400, 3, 2, NULL),
(9, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-08-12', '2025-08-16', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(10, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2025-10-13', '2025-10-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(11, 'Barselona Sea Vibe ', 'Odpoczynek nad morzem w Barselonie', '2025-08-08', '2025-08-13', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(12, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2026-05-14', '2026-05-18', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(13, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2026-01-20', '2026-01-26', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(14, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2025-07-14', '2025-07-19', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(15, 'Do Invernessu na 5 dni', 'Od starożytnych legend po sztukę nowoczesną, zabytki i wakacje pełne przygód, Inverness jest znane jako „Stolica Highlands”. Tygiel dziedzictwa i kultury, najbardziej wysunięte na północ miasto Wielkiej Brytanii jest domem dla licznych muzeów i gorzelni i stanowi doskonałą bazę wypadową do zwiedzania Highlands. Mając Loch Ness u progu, spróbuj polować na potwory w jego mętnych wodach lub poszukaj sportów ekstremalnych w otaczających górach. Epicka trasa turystyczna North Coast 500 również zaczyna się i kończy tutaj, dzięki czemu Inverness jest bramą do wszystkiego, co ma do zaoferowania północna Szkocja.', '2025-07-04', '2025-07-07', 4, 50, 1500.00, 'EUR', 1, 2100, 3, 2, NULL),
(16, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-11-20', '2025-11-24', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(17, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2026-09-13', '2026-09-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(18, 'Cambridge historia w sercu', 'Stwórz trwałe wspomnienia, zwiedzając to idylliczne miasto. Zanurz się w gwarze i zamieszaniu jego ciągle zmieniających się straganów targowych, kup smaczne międzynarodowe jedzenie uliczne i wejdź na kościół St Mary’s, aby podziwiać panoramę miasta i okolicę.', '2025-09-08', '2025-09-13', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(19, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2026-06-10', '2026-06-14', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(20, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2026-02-13', '2026-02-19', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(21, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2026-06-21', '2026-06-26', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(22, 'Weekendowa Praga + Wiedeń', 'Intensywna i kulturalna wycieczka do dwóch europejskich stolic.', '2025-07-10', '2025-07-13', 4, 50, 860.00, 'EUR', 1, 1400, 3, 2, NULL),
(23, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-09-04', '2025-09-08', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(24, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2026-04-13', '2026-04-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(25, 'Barselona Sea Vibe ', 'Odpoczynek nad morzem w Barselonie', '2026-08-01', '2026-08-06', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(26, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2025-10-14', '2025-10-18', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(27, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2025-11-10', '2025-11-16', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(28, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2025-12-21', '2025-12-26', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(29, 'Weekendowa Praga + Wiedeń', 'Intensywna i kulturalna wycieczka do dwóch europejskich stolic.', '2025-07-04', '2025-07-07', 4, 50, 860.00, 'EUR', 1, 1400, 3, 2, NULL),
(30, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-08-20', '2025-09-24', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(31, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2025-09-13', '2025-09-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(32, 'Barselona Sea Vibe ', 'Odpoczynek nad morzem w Barselonie', '2025-09-08', '2025-09-13', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(33, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2025-10-14', '2025-10-18', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(34, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2025-11-10', '2025-11-16', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(35, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2025-12-21', '2025-12-26', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(36, 'Weekendowa Praga + Wiedeń', 'Intensywna i kulturalna wycieczka do dwóch europejskich stolic.', '2025-07-04', '2025-07-07', 4, 50, 860.00, 'EUR', 1, 1400, 3, 2, NULL),
(37, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-06-20', '2025-06-24', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(38, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2025-09-13', '2025-09-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(39, 'Barselona Sea Vibe ', 'Odpoczynek nad morzem w Barselonie', '2025-09-08', '2025-09-13', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(40, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2025-10-14', '2025-10-18', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(41, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2025-11-10', '2025-11-16', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(42, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2025-12-21', '2025-12-26', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(43, 'Weekendowa Praga + Wiedeń', 'Intensywna i kulturalna wycieczka do dwóch europejskich stolic.', '2025-07-04', '2025-07-07', 4, 50, 860.00, 'EUR', 1, 1400, 3, 2, NULL),
(44, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-06-07', '2025-06-11', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(45, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2025-09-13', '2025-09-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(46, 'Barselona Sea Vibe ', 'Odpoczynek nad morzem w Barselonie', '2025-09-08', '2025-09-13', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(47, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2025-10-14', '2025-10-18', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(48, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2025-11-10', '2025-11-16', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(49, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2025-12-21', '2025-12-26', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(50, 'Weekendowa Praga + Wiedeń', 'Intensywna i kulturalna wycieczka do dwóch europejskich stolic.', '2025-07-04', '2025-07-07', 4, 50, 860.00, 'EUR', 1, 1400, 3, 2, NULL),
(51, '4 dni w Paryżu', 'Wycieczka po stolice miłości i sesja zdjęciowa', '2025-09-07', '2025-09-11', 5, 50, 1150.00, 'EUR', 3, 1287, 1, 1, NULL),
(52, 'Weekend w Paryż + Normandia', 'Wycieczka po Paryżu i Normandii', '2025-09-13', '2025-09-17', 5, 50, 1300.00, 'EUR', 5, 1600, 5, 4, NULL),
(53, 'Barselona Sea Vibe ', 'Odpoczynek nad morzem w Barselonie', '2025-09-08', '2025-09-13', 6, 50, 1370.00, 'EUR', 2, 2248, 2, 1, NULL),
(54, 'Weekendowa Portugalia', 'Wycieczka po miastach Portugalii', '2025-10-14', '2025-10-18', 5, 50, 950.00, 'EUR', 1, 3186, 4, 3, NULL),
(55, 'Tydzień w Egipcie', 'Ogpoczynek w Egipcie ', '2025-11-10', '2025-11-16', 7, 50, 1400.00, 'EUR', 2, 2744, 3, 3, NULL),
(56, 'Teneryfa BIG TRIP', 'Weekend na wyspie w Hiszpanii', '2025-12-21', '2025-12-26', 6, 50, 1500.00, 'EUR', 1, 4802, 5, 2, NULL),
(57, 'Inveress', 'A melting pot of heritage and culture, Britain’s most northerly city makes a great base for exploring the Highlands.', '2025-08-12', '2025-08-17', 5, 50, 1100.00, 'PLN', 39, 2100, 21, 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wycieczki_miasta`
--

CREATE TABLE `wycieczki_miasta` (
  `id_wycieczki` int NOT NULL,
  `id_miasta` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wycieczki_miasta`
--

INSERT INTO `wycieczki_miasta` (`id_wycieczki`, `id_miasta`) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 3),
(3, 4),
(4, 5),
(5, 6),
(5, 7),
(5, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(7, 13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administratorzy`
--
ALTER TABLE `administratorzy`
  ADD PRIMARY KEY (`id_admina`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Indexes for table `autobusy`
--
ALTER TABLE `autobusy`
  ADD PRIMARY KEY (`id_autobusu`);

--
-- Indexes for table `klienci`
--
ALTER TABLE `klienci`
  ADD PRIMARY KEY (`id_klienta`);

--
-- Indexes for table `miasta_docelowe`
--
ALTER TABLE `miasta_docelowe`
  ADD PRIMARY KEY (`id_miasta`);

--
-- Indexes for table `miasta_wyjazdu`
--
ALTER TABLE `miasta_wyjazdu`
  ADD PRIMARY KEY (`id_miasta_wyjazdu`);

--
-- Indexes for table `przewodnicy`
--
ALTER TABLE `przewodnicy`
  ADD PRIMARY KEY (`id_przewodnika`);

--
-- Indexes for table `rezerwacje`
--
ALTER TABLE `rezerwacje`
  ADD PRIMARY KEY (`id_rezerwacji`),
  ADD KEY `id_klienta` (`id_klienta`),
  ADD KEY `id_wycieczki` (`id_wycieczki`);

--
-- Indexes for table `wycieczki`
--
ALTER TABLE `wycieczki`
  ADD PRIMARY KEY (`id_wycieczki`),
  ADD KEY `id_autobusu` (`id_autobusu`),
  ADD KEY `id_przewodnika` (`id_przewodnika`),
  ADD KEY `id_miasta_wyjazdu` (`id_miasta_wyjazdu`);

--
-- Indexes for table `wycieczki_miasta`
--
ALTER TABLE `wycieczki_miasta`
  ADD PRIMARY KEY (`id_wycieczki`,`id_miasta`),
  ADD KEY `id_miasta` (`id_miasta`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administratorzy`
--
ALTER TABLE `administratorzy`
  MODIFY `id_admina` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `autobusy`
--
ALTER TABLE `autobusy`
  MODIFY `id_autobusu` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `klienci`
--
ALTER TABLE `klienci`
  MODIFY `id_klienta` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `miasta_docelowe`
--
ALTER TABLE `miasta_docelowe`
  MODIFY `id_miasta` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `miasta_wyjazdu`
--
ALTER TABLE `miasta_wyjazdu`
  MODIFY `id_miasta_wyjazdu` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `przewodnicy`
--
ALTER TABLE `przewodnicy`
  MODIFY `id_przewodnika` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `rezerwacje`
--
ALTER TABLE `rezerwacje`
  MODIFY `id_rezerwacji` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wycieczki`
--
ALTER TABLE `wycieczki`
  MODIFY `id_wycieczki` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rezerwacje`
--
ALTER TABLE `rezerwacje`
  ADD CONSTRAINT `rezerwacje_ibfk_1` FOREIGN KEY (`id_klienta`) REFERENCES `klienci` (`id_klienta`),
  ADD CONSTRAINT `rezerwacje_ibfk_2` FOREIGN KEY (`id_wycieczki`) REFERENCES `wycieczki` (`id_wycieczki`);

--
-- Constraints for table `wycieczki`
--
ALTER TABLE `wycieczki`
  ADD CONSTRAINT `wycieczki_ibfk_1` FOREIGN KEY (`id_autobusu`) REFERENCES `autobusy` (`id_autobusu`),
  ADD CONSTRAINT `wycieczki_ibfk_2` FOREIGN KEY (`id_przewodnika`) REFERENCES `przewodnicy` (`id_przewodnika`),
  ADD CONSTRAINT `wycieczki_ibfk_3` FOREIGN KEY (`id_miasta_wyjazdu`) REFERENCES `miasta_wyjazdu` (`id_miasta_wyjazdu`);

--
-- Constraints for table `wycieczki_miasta`
--
ALTER TABLE `wycieczki_miasta`
  ADD CONSTRAINT `wycieczki_miasta_ibfk_1` FOREIGN KEY (`id_wycieczki`) REFERENCES `wycieczki` (`id_wycieczki`),
  ADD CONSTRAINT `wycieczki_miasta_ibfk_2` FOREIGN KEY (`id_miasta`) REFERENCES `miasta_docelowe` (`id_miasta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
