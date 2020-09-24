-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 24 Septembre 2020 à 21:26
-- Version du serveur :  5.7.31-0ubuntu0.18.04.1
-- Version de PHP :  7.2.33-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `e-commerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipcode` int(11) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `address`
--

INSERT INTO `address` (`id`, `name`, `surname`, `phone`, `street`, `city`, `zipcode`, `country`, `id_user`) VALUES
(1, 'Test', 'T', '0123456789', '26 rue des peupliers', 'Nimes', 30000, 'France', 4),
(7, 'Admin', 'A', '0123123123', '10 boulevard de Monet', 'Paris', 75004, 'France', 1),
(8, 'Admin', 'A', '0123123123', '56 rue des marroniers', 'Paris', 75004, 'France', 1),
(12, 'Admin', 'A', '0123123123', '4 rue des oliviers', 'Nimes', 30000, 'Martinique', 1),
(16, 'Admin', 'A', '0123123123', '72 rue verte', 'Paris', 75014, 'Danemark', 1),
(24, 'Christelle', 'B', '0123456789', '47 boulevard de Stalingrad', 'Ivry', 94200, 'France', 0),
(29, 'Emy', 'Maine', '0123123123', '8 boulevard de Monet', 'Paris', 75004, 'Italy', 0),
(30, 'Emy', 'Soutenance', '0123123123', '8 boulevard de Monet', 'Paris', 75004, 'France', 0);

-- --------------------------------------------------------

--
-- Structure de la table `bank_details`
--

CREATE TABLE `bank_details` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_number` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `bank_details`
--

INSERT INTO `bank_details` (`id`, `name`, `surname`, `card_number`, `month`, `year`, `id_user`) VALUES
(4, 'Admin', 'A', 12121212, 8, 2023, 1),
(10, 'Admin', 'A', 13121312, 8, 2023, 1),
(11, 'Admin', 'A', 15111511, 11, 2021, 1),
(21, 'Admin', 'A', 14141414, 5, 2025, 1),
(31, 'Epitech', 'Soutenance', 747485743, 12, 2021, 0);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Laptop'),
(2, 'Processors'),
(3, 'Tablets'),
(4, 'Smartphones'),
(5, 'Computer cases'),
(6, 'Monitors'),
(7, 'Accessories');

-- --------------------------------------------------------

--
-- Structure de la table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zone_shipping` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `country`
--

INSERT INTO `country` (`id`, `name`, `zone_shipping`) VALUES
(1, 'France', 'France'),
(2, 'Guadeloupe', 'DOM'),
(3, 'Martinique', 'DOM'),
(4, 'Guyane', 'DOM'),
(5, 'La Réunion', 'DOM'),
(6, 'Mayotte', 'DOM'),
(7, 'Germany', 'Europe'),
(8, 'Austria', 'Europe'),
(9, 'Belgium', 'Europe'),
(10, 'Bulgaria', 'Europe'),
(11, 'Cyprus', 'Europe'),
(12, 'Croatia', 'Europe'),
(13, 'Danemark', 'Europe'),
(14, 'Spain', 'Europe'),
(15, 'Estonia', 'Europe'),
(16, 'Finland', 'Europe'),
(17, 'Greece', 'Europe'),
(18, 'Hungary', 'Europe'),
(19, 'Ireland', 'Europe'),
(20, 'Italy', 'Europe'),
(21, 'Latvia', 'Europe'),
(22, 'Lithuania', 'Europe'),
(23, 'Luxembourg', 'Europe'),
(24, 'Malta', 'Europe'),
(25, 'Poland', 'Europe'),
(26, 'Portugal', 'Europe'),
(27, 'Netherlands', 'Europe'),
(28, 'Czech Republic', 'Europe'),
(29, 'Romania', 'Europe'),
(30, 'Slovaquie', 'Europe'),
(31, 'Slovakia', 'Europe'),
(32, 'Sweden', 'Europe');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20200802174254', '2020-08-02 21:59:46', 282),
('DoctrineMigrations\\Version20200802200137', '2020-08-02 22:03:52', 694),
('DoctrineMigrations\\Version20200829171715', '2020-08-29 19:31:30', 793),
('DoctrineMigrations\\Version20200829215032', '2020-08-30 00:55:12', 713),
('DoctrineMigrations\\Version20200829220817', '2020-08-30 00:55:27', 868),
('DoctrineMigrations\\Version20200829221608', '2020-08-30 00:17:11', 1985),
('DoctrineMigrations\\Version20200829222418', '2020-08-30 00:57:54', 462),
('DoctrineMigrations\\Version20200830010556', '2020-08-30 03:06:22', 2545),
('DoctrineMigrations\\Version20200830105031', '2020-08-30 12:50:48', 584),
('DoctrineMigrations\\Version20200830105319', '2020-08-30 12:53:34', 502),
('DoctrineMigrations\\Version20200830112357', '2020-08-30 13:24:21', 1716);

-- --------------------------------------------------------

--
-- Structure de la table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_products` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:simple_array)',
  `delivery_address` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `cost` decimal(10,2) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `order`
--

INSERT INTO `order` (`id`, `id_user`, `id_products`, `delivery_address`, `date`, `cost`, `status`, `email`, `card`) VALUES
(2, 1, '1,2', 7, '2020-08-30 11:36:06', '479.98', 'In transit', NULL, 4),
(3, 1, '4,9', 16, '2020-08-30 11:49:50', '750.00', 'In transit', NULL, 21),
(9, 0, '4,1,6', 24, '2020-08-30 14:07:25', '711.99', 'pending', 'christelle.b@mail.com', 30),
(12, 1, '4,1', 12, '2020-08-30 14:37:23', '699.99', 'Pending', NULL, 11),
(13, 0, '4,1', 27, '2020-08-30 14:39:05', '699.99', 'Pending', 'emy.maine@mail.com', 33),
(14, 1, '4,1', 8, '2020-08-30 15:57:37', '699.99', 'Pending', NULL, 10),
(15, 0, '4,1', 28, '2020-08-30 15:58:41', '699.99', 'Pending', 'emy.maine@mail.com', 34),
(16, 1, '4,1,3', 7, '2020-08-30 17:21:45', '1365.89', 'Pending', NULL, 4),
(17, 0, '4,1,3', 29, '2020-08-30 18:24:46', '1365.89', 'Pending', 'emy.maine@mail.com', 35),
(19, 1, '4,1', 7, '2020-08-30 22:19:14', '710.99', 'Pending', NULL, 4),
(20, 1, '7,5', 7, '2020-08-30 23:52:27', '130.00', 'Pending', NULL, 10),
(21, 0, '3,4,8,9', 30, '2020-08-31 12:34:31', '3415.90', 'Pending', 'soutenance@gmail.com', 31),
(22, 1, '3,4,8,9', 7, '2020-08-31 12:36:30', '3415.90', 'Pending', NULL, 21);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `product`
--

INSERT INTO `product` (`id`, `id_category`, `price`, `description`, `photo`, `date`, `quantity`, `weight`, `status`, `title`) VALUES
(1, 1, '349.99', 'AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD\r\n15.6 inches Full HD (1920 x 1080) Widescreen LED backlit IPS Display; AMD Radeon Vega 3 Mobile Graphics\r\n1 USB 3.1 Gen 1 Port, 2 USB 2.0 Ports & 1 HDMI Port with HDCP support\r\n802.11ac Wi-Fi; Backlit Keyboard; Up to 7.5 Hours Battery Life\r\nWindows 10 in S mode. Maximum Power Supply Wattage 65 W', 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg', '2020-08-02 00:00:00', 200, 4000, 0, 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver'),
(2, 3, '129.99', 'Minimum bezel; Maximum view: Designed with a minimized bezel, giving you more room to view your favorite content in a slim, comfortable form; The premium metallic finish and lightweight design make it easy to use around the house or on the go\r\nEntertainment ready: An 8.0 inches Display immerses you in content, and dual speakers deliver spacious surround sound\r\nBinge ready Battery: browse, watch or shop for upto 13 hours on a full charge\r\nRoom for everything: Keep your favorite songs, photos or videos, thanks to 32GB of built in memory; Plus expand your storage upto 512GB anytime With a Micro SD card', 'https://images-na.ssl-images-amazon.com/images/I/41UPtXbP4LL._AC_SL1024_.jpg', '2020-08-02 00:00:00', 100, 1000, 0, 'Samsung Galaxy Tab A 8.0\" 32 GB Wifi Android 9.0 Pie Tablet Black (2019) - SM-T290NZKAXAR'),
(3, 2, '665.90', 'Latest 9th Gen Intel Six-Core i5-9400 processor, 2.90GHz with Turbo upto 4.1GHz, 9MB SmartCache\r\n12GB DDR4 Ram for Smooth Multitasking, 128GB SSD ( Boot) + 1TB 7200RPM HDD For Fast Boot up and Storage.\r\nWireless 802.11bgn, Bluetooth 4.0, Intel UHD Graphics 630 Integrated\r\n4 x USB 2.0, 2 x USB 3.1, 1 x HDMI, 1 x VGA, 1 x Headphone/Microphone Combo Jack, 1 x Media Card Reader\r\nWindows 10 Home 64 bit, Wave MaxxAudio Pro, Wired Keyboard and USB Mouse Included.', 'https://images-na.ssl-images-amazon.com/images/I/51-3j66KfaL._AC_SL1000_.jpg', '2020-08-02 00:00:00', 50, 6000, 1, '2019 Newest Dell Inspiron Premium Desktop: Latest 9th gen Intel Six-Core i5-9400, 12GB Ram, 128GB SSD + 1TB HDD Dual Drive, WiFi, Bluetooth, DVDRW, HDMI, VGA, USB Keyboard and Mouse, Windows 10 Home'),
(4, 4, '350.00', 'Introducing the new A Series: the features you’ve been waiting for in your unlocked cell phone. Take crisp pics with the 48MP quad camera. Immerse yourself in a spacious high definition screen, powered by a long-lasting, fast charging battery.\r\nUnlocked by Samsung: Pick more than just your new cell phone. With your unlocked device, choose your preferred carrier, data plan, services, features and apps, and get your phone exactly how you want it.\r\nCrisp. Colorful. Captivating. Dive into edge-to-edge color with an expansive 6. 5” Infinity-O Display featuring a Super AMOLED screen that brings cinematic clarity right to your fingertips.\r\nPro-grade shots in just a snap: From epic landscape shots and dramatic portraits, to macro angles that reveal intricate textures and detail, this impressive quad camera has a lens for whatever inspires you.\r\nSmooth, stable shots: Take remarkably smooth video of fast-moving action in crisp, UHD quality. Its top-notch stability makes photos and videos look super smooth with minimal blur.\r\nSecure with a single touch: Lock and unlock your phone with just a touch, thanks to the the in-display fingerprint sensor. No staring contests with your screen or complicated passcodes required.\r\nStore more, do more: Save all the things that matter with 16GB of built-in memory. If you need more, you can expand storage up to 512GB of storage with a Samsung microSD card (sold separately).', 'https://images-na.ssl-images-amazon.com/images/I/71QZcCFQcAL._AC_SL1500_.jpg', '2020-08-02 00:00:00', 200, 300, 0, 'Samsung Galaxy A51 Factory Unlocked Cell Phone | 128GB of Storage | Long Lasting Battery | Single SIM | GSM or CDMA Compatible | US Version | Black'),
(5, 6, '105.00', '24\" Ultra slim profile\r\nContemporary sleek metallic design\r\nSlim bezel with thin chassis. Power Range (V, A, Hz)- AC-DC Adapter Input 100 – 240 VAC, 50/60 Hz, 1.0A (Max.) Output - 12V DC, 2.5A. Power Consumption (Typical)- 25.4W\r\n2 x HDMI Ports (convertible to DVI).Contrast Ratio:1000 : 1\r\nVESA wall mount ready. HDMI Input Signal Support - 1920 x 1080 @ 75Hz, 1080/60p, 1080/60i, 720p, 480p, 480i, Built-in Speakers - 2 x 2W 8 Ohm\r\nMounting type: VESA Hole Pattern 100mm x 100mm', 'https://images-na.ssl-images-amazon.com/images/I/71qCGPWI8aL._AC_SL1080_.jpg', '2020-08-02 00:00:00', 100, 4000, 1, 'Sceptre E248W-19203R 24\" Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018'),
(6, 7, '12.00', 'Fast charging and data transfer via to USB sync and high purity oxygen free copper core. Ensure the high speed and stability of charging and data sync. 40% increase of the transmission speed.The transfer speed arrives 20M every seconds.\r\nExtra Long Nylon Braided Phone cable, The brand new and enough material provide extra durability and flexibility, Improving the quality and usage experience. It is flexible pull-resistant, more durable than original device cables.\r\nSupport OS12 11 10, Compatible with iPhone iPad. No Error Message pops up.\r\nThe wall charger can automatically recognize your devices and match the optimal charging speed of the attached devices and reducing charging time.\r\nThe charger cable for phone comes with 12 months warranty. If there are quality related issues, Please contact our support team with any questions or concerns about our charger for phone-we are here to help.', 'https://images-na.ssl-images-amazon.com/images/I/51pEr8KvgWL._AC_.jpg', '2020-08-02 00:00:00', 200, 200, 1, 'iPhone Charger YOKERSU Nylon Braided Lightning Cable Fast Charging 2Pack 6FT Data Sync Transfer Cord with Port Plug Wall Charger(ETL Listed)Compatible with iPhone XS Max/XS/XR/X/8/7/6S/6/Plus/SE/iPad'),
(7, 7, '25.00', '【Comfortable Usage Experience】This is RGB USB wired gaming keyboard and mouse combo. Ergonomic design release your hand from fatigue; Professional mechanical feeling bring you cool usage experience no matter for Gaming or Office.\r\n【Cool Visual Effects】Rainbow backlit for keyboard and 7 color breath light for mouse make the computer keyboard and mouse combo cool and beauty, allow you use it in dark,gorgeous but practical\r\n【Enhanced Durability】 Keyboard keys life 5 million click, Mouse keys life 3 million click, 4 DPI (1200/1600/2400/3200 DPI) ,Laser carved characters, non-slip design\r\n【Easy to Install & Widely Used No Driver Needed】Support Windows10,windows 8, Windows 7, Windows Vista, Windows XP. PC Desktop Laptop Computer Pad Google Android TV Box HTPC IPTV Smart TV Mac IOS Raspberry Pi all version63+ etc. Work well for PS4 Game .\r\n【Shop with 100% Confidence】 30 days money-back guarantee for ANY REASON, 12 month WARRANTY for quality issues, professional customer service team, all these promise you a happy purchase. We will be appreciated for contacting us seller first when you meet any question', 'https://images-na.ssl-images-amazon.com/images/I/71IoY%2BCAJlL._AC_SL1500_.jpg', '2020-08-02 00:00:00', 100, 500, 0, 'Mafiti Wired Gaming Keyboard and Mouse Combo RGB Backlit LED Keyboards Mechanical Feel and Breathing Color Mice Compatible with PC Laptop Desktop Computer Windows for Primer Gaming or Office'),
(8, 1, '2000.00', 'Ninth-generation 6-Core Intel Core i7 Processor\r\nStunning 16-inch Retina Display with True Tone technology\r\nTouch Bar and Touch ID\r\nAmd Radeon Pro 5300M Graphics with GDDR6 memory\r\nUltrafast SSD\r\nIntel UHD Graphics 630\r\nSix-speaker system with force-cancelling woofers\r\nFour Thunderbolt 3 (USB-C) ports\r\nUp to 11 hours of battery life\r\n802.11AC Wi-Fi', 'https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg', '2020-08-02 00:00:00', 200, 2000, 0, 'New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray'),
(9, 4, '400.00', 'Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).\r\nThe device does not come with headphones or a SIM card. It does include a charger and charging cable that may be generic, in which case it will be UL or Mfi (Made for iPhone) Certified.\r\nInspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arms length.\r\nSuccessfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.\r\nTested for battery health and guaranteed to have a minimum battery capacity of 80%.', 'https://images-na.ssl-images-amazon.com/images/I/81FyKX6ml6L._AC_SL1500_.jpg', '2020-08-02 00:00:00', 100, 400, 0, 'Apple iPhone XR, 64GB, Black - Fully Unlocked '),
(10, 7, '25.00', 'Output: 20.2V / 4.3A(USB PD), 9V / 3A(USB PD) or 5.2V / 2.4A\r\nCompatible with 2016 Apple Macbook pro 13” (A1706)\r\nFree USB-C Charge Cable Included, With 6.56 ft (2 meters) USB-C to USB-C 3.1 Fast Charge Cable\r\nThis USB-C power adapter is compatible with any USB-C–enabled device\r\n12- months warranty and 30 days money back and friendly customer service', 'https://images-na.ssl-images-amazon.com/images/I/41vRX%2BSOsDL._AC_SL1000_.jpg', '2020-08-02 00:00:00', 100, 300, 1, '61W USB-C Power Adapter Charger, with USB-C to USB-C Charge Cable\r\nRoll over image to zoom in\r\n61W USB-C Power Adapter Charger, with USB-C to USB-C Charge Cable'),
(11, 5, '10.00', 'jnjnqjsnejnqjne', 'kqdnhhdb', '2020-08-31 00:00:00', 5, 5, 0, 'Soutenance2');

-- --------------------------------------------------------

--
-- Structure de la table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `shipping`
--

CREATE TABLE `shipping` (
  `id` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `min_weight` int(11) NOT NULL,
  `max_weight` int(11) NOT NULL,
  `zone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `shipping`
--

INSERT INTO `shipping` (`id`, `cost`, `min_weight`, `max_weight`, `zone`) VALUES
(1, 4, 1, 500, 'France'),
(2, 6, 501, 1000, 'France'),
(3, 8, 1001, 2000, 'France'),
(4, 11, 2001, 5000, 'France'),
(5, 16, 5001, 10000, 'France'),
(6, 26, 10001, 30000, 'France'),
(7, 10, 1, 500, 'DOM'),
(8, 15, 501, 1000, 'DOM'),
(9, 25, 1001, 2000, 'DOM'),
(10, 30, 2001, 5000, 'DOM'),
(11, 40, 5001, 10000, 'DOM'),
(12, 80, 10001, 30000, 'DOM'),
(13, 10, 1, 500, 'Europe'),
(14, 14, 501, 1000, 'Europe'),
(15, 18, 1001, 2000, 'Europe'),
(16, 22, 2001, 5000, 'Europe'),
(17, 35, 5001, 10000, 'Europe'),
(18, 55, 10001, 30000, 'Europe'),
(19, 15, 1, 500, 'World'),
(20, 18, 501, 1000, 'World'),
(21, 21, 1001, 2000, 'World'),
(22, 25, 2001, 5000, 'World'),
(23, 40, 5001, 10000, 'World'),
(24, 60, 10001, 30000, 'World');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'admin@admin', '[]', '03fa98f7bd29623eae676429902e62134bf43870'),
(2, 'emy.maine@mail.com', '[]', 'd1b9dad22c6ed299dcd314567f08173a6dd6dc07'),
(4, 'test@mail.com', '[]', '1f0635e192d53bfd18141453816294426ad825b1'),
(5, 'soutenance@gmail.com', '[]', '42b49637ab22cc221a3529e1f18fee183e34f857');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `bank_details`
--
ALTER TABLE `bank_details`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT pour la table `bank_details`
--
ALTER TABLE `bank_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT pour la table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT pour la table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `shipping`
--
ALTER TABLE `shipping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
