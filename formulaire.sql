-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 28 juin 2022 à 12:42
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `energy-generation`
--

-- --------------------------------------------------------

--
-- Structure de la table `formulaire`
--

CREATE TABLE `formulaire` (
  `id_mail` int(11) NOT NULL,
  `nom` varchar(15) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `genre` varchar(10) NOT NULL,
  `email` varchar(150) NOT NULL,
  `confirm_mail` varchar(150) NOT NULL,
  `numero_telephone` int(8) NOT NULL,
  `pays` varchar(10) NOT NULL,
  `niveau_etude` varchar(15) NOT NULL,
  `thematique_choisie` varchar(150) NOT NULL,
  `campus_preféré` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `formulaire`
--

INSERT INTO `formulaire` (`id_mail`, `nom`, `prenom`, `genre`, `email`, `confirm_mail`, `numero_telephone`, `pays`, `niveau_etude`, `thematique_choisie`, `campus_preféré`) VALUES
(1, 'djamila', 'sandrine', 'ma', 'srj@gmail.com', '+228', 91699946, '', '', '', ''),
(2, 'sandrine', 'djamila', 'ma', 'srj@gmail.com', '+228', 91699946, '', '', '', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `formulaire`
--
ALTER TABLE `formulaire`
  ADD PRIMARY KEY (`id_mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `formulaire`
--
ALTER TABLE `formulaire`
  MODIFY `id_mail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
