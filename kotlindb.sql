-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Agu 2023 pada 15.00
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kotlindb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `nik` bigint(16) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telp` varchar(13) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `employee`
--

INSERT INTO `employee` (`id`, `name`, `nik`, `address`, `telp`, `email`, `password`) VALUES
(2, 'Hisam Bagas', 3276001, 'Jl. Dahlia, no.12, RT.22', '08512212', 'hisam@gmail.com', '$2a$10$pPNSNxxv7X5sIE5vPQ8W5eiMqv4HBkSzo6sD/IHRW0hoUweDFFvJe'),
(13, 'Tiara', 12213331, 'Jl. Kemerdekaan, No.12', '08912312123', 'tiara@gmail.com', '$2a$10$JS0ONF.sAtlHcwIXWu9edOY7RvU.UJU7UOkwWQc51tCxpjvkuG2R6'),
(16, 'Derry', 3276001122, 'Jl. Perintis Kemerdekaan, No.12', '0853456721', 'derry121@gmail.com', '$2a$10$TYgi/rHyrCe7JKVaxL80ZOxfaUeTziU2CvXOuM.8uS6TrAoFokiUi'),
(19, 'Sari', 212131312, 'Jl. Ki Hajar Dewantara, No.11', '085611277311', 'sari@gmail.com', '$2a$10$GQrqP7RG3g3eomvr59yDK.j.3JRNrkfpj91L3bh8DJIC5nA/G5T.W'),
(22, 'admin', 123456789, 'Jl. Telekomunikasi, No.01', '087211222', 'admin@gmail.com', '$2a$10$jK757/nFIrAV35mPxN533.5ip1Pboezg7i5TfR0QTX9Ix7yeHWj8e');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
