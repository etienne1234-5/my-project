-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2026 at 01:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `megas`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(400) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`) VALUES
(1, 'delvoyvs', 'ineza@gmail.com', '$2b$10$4RioeZAPXa3Ds/tW.HiQWeCSRw7c5cFSaGWyL/9mW6Z'),
(2, 'ineza yves delvo', 'inezayvesdelvo@gmail.com', '$2b$10$vDntPef9Og9d7sDeTng4fOMrVJ0X2nOA.YrfKxZdcaf'),
(3, 'robert', 'robert@gmail.com', '$2b$10$aLqyRy5rCplo7hyFQyIMaONqdYwpGG4rhvAYGpYO6Zk'),
(4, 'shalifu', 'shalifu@gmail.com', '$2b$10$WCjmqz3dJIiCzUG0Edf2guDsvt8X83bLUtmKKskuHhS'),
(5, 'shalifu', 'shalif@gmail.com', '$2b$10$4qo1wioDQU9rANmZYp39WupDa3CqkgrdO6KNxkK0yI0'),
(6, 'shalifu', 'sharrif@gmail.com', '$2b$10$jA7evF.4.iX6yEhTEKvnjOp8Qj1ptRL5o5b/R/oXFYE'),
(7, 'alice', 'alice@gmail.com', '$2b$10$5dOvLS97Oyd/g27vx8TN1udSmVhTAlHr2CwTo.aiESK'),
(8, 'dervaux', 'dervaux@gmail.com', '$2b$10$lLvhugyOf9Yuwh27Cy6ub.IU1AZ42LQY4wgc4uICX6G'),
(9, 'audi', 'audi@gmail.com', '$2b$10$Pzr0UgqQZR7zYF/BC.0MT.Ap.rr/yeweahH4T.s25HR'),
(10, 'iva', 'iva@gmail.com', '$2b$10$PbP.iczbc6LgYqNnTUwkJOKQmc/u6JGxIaheZU6vTwj'),
(11, 'der', 'der@gmail.com', '$2b$10$NX.w7hGvseEgbwbKHo0JMe1j2Ihh5kSkdpApIE4ozsh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
