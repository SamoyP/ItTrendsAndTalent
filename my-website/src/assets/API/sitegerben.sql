-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 10 mrt 2018 om 12:18
-- Serverversie: 10.1.28-MariaDB
-- PHP-versie: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sitegerben`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `contents`
--

CREATE TABLE `contents` (
  `content_id` int(10) NOT NULL,
  `title` varchar(250) NOT NULL,
  `content` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `contents`
--

INSERT INTO `contents` (`content_id`, `title`, `content`) VALUES
(1, 'Title 1', 'Content 1'),
(2, 'Title 2', 'Content 2'),
(3, 'Title 3', 'Content 3'),
(4, 'Welkom bij Nifobo', 'Content 4\ntest'),
(5, 'Title 5', 'Content 5'),
(6, 'Foto\'s', 'Hier kan u enkele foto\'s vinden van onze vorige werken!'),
(7, 'Title 7', 'Content 7'),
(8, 'Title 8', 'Content 8'),
(9, 'Title 9', 'Content 9'),
(10, 'Title 10', 'Content 10');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `login`
--

CREATE TABLE `login` (
  `username` varchar(100) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `login`
--

INSERT INTO `login` (`username`, `password`) VALUES
('admin', 'password');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `contents`
--
ALTER TABLE `contents`
  ADD PRIMARY KEY (`content_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `contents`
--
ALTER TABLE `contents`
  MODIFY `content_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
