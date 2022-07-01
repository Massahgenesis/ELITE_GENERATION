-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 01 Juillet 2022 à 02:09
-- Version du serveur :  10.1.19-MariaDB
-- Version de PHP :  5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `energie-generation`
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
  `area` int(11) NOT NULL,
  `numero_telephone` int(11) NOT NULL,
  `pays` varchar(250) NOT NULL,
  `niveau_etude` varchar(250) NOT NULL,
  `thematique_choisie` varchar(250) NOT NULL,
  `campus_pref` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `formulaire`
--

INSERT INTO `formulaire` (`id_mail`, `nom`, `prenom`, `genre`, `email`, `confirm_mail`, `area`, `numero_telephone`, `pays`, `niveau_etude`, `thematique_choisie`, `campus_pref`) VALUES
(18, 'ezok', 'tbb', 'Homme', 'ezokovichtbb@gmail.com', 'ezokovich14@gmail.com', 233, 98543424, 'Djibouti', 'Bac+3', 'Energie', 'Campus Francophone - LomÃ©');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `formulaire`
--
ALTER TABLE `formulaire`
  ADD PRIMARY KEY (`id_mail`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `formulaire`
--
ALTER TABLE `formulaire`
  MODIFY `id_mail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
