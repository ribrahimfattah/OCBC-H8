-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2021 at 08:53 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_final_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `aspnetroleclaims`
--

CREATE TABLE `aspnetroleclaims` (
  `Id` int(11) NOT NULL,
  `RoleId` varchar(255) NOT NULL,
  `ClaimType` longtext DEFAULT NULL,
  `ClaimValue` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aspnetroles`
--

CREATE TABLE `aspnetroles` (
  `Id` varchar(255) NOT NULL,
  `Name` varchar(256) DEFAULT NULL,
  `NormalizedName` varchar(256) DEFAULT NULL,
  `ConcurrencyStamp` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aspnetuserclaims`
--

CREATE TABLE `aspnetuserclaims` (
  `Id` int(11) NOT NULL,
  `UserId` varchar(255) NOT NULL,
  `ClaimType` longtext DEFAULT NULL,
  `ClaimValue` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aspnetuserlogins`
--

CREATE TABLE `aspnetuserlogins` (
  `LoginProvider` varchar(128) NOT NULL,
  `ProviderKey` varchar(128) NOT NULL,
  `ProviderDisplayName` longtext DEFAULT NULL,
  `UserId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aspnetuserroles`
--

CREATE TABLE `aspnetuserroles` (
  `UserId` varchar(255) NOT NULL,
  `RoleId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `aspnetusers`
--

CREATE TABLE `aspnetusers` (
  `Id` varchar(255) NOT NULL,
  `UserName` varchar(256) DEFAULT NULL,
  `NormalizedUserName` varchar(256) DEFAULT NULL,
  `Email` varchar(256) DEFAULT NULL,
  `NormalizedEmail` varchar(256) DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext DEFAULT NULL,
  `SecurityStamp` longtext DEFAULT NULL,
  `ConcurrencyStamp` longtext DEFAULT NULL,
  `PhoneNumber` longtext DEFAULT NULL,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime(6) DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aspnetusers`
--

INSERT INTO `aspnetusers` (`Id`, `UserName`, `NormalizedUserName`, `Email`, `NormalizedEmail`, `EmailConfirmed`, `PasswordHash`, `SecurityStamp`, `ConcurrencyStamp`, `PhoneNumber`, `PhoneNumberConfirmed`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`) VALUES
('3af6004b-112c-480c-9f97-2ba8f29322f3', 'ibra', 'IBRA', 'ibra@example.com', 'IBRA@EXAMPLE.COM', 0, 'AQAAAAEAACcQAAAAEFZ/UIoGmUCZ61rfxh9UMoUeGHfxoJ6URrhiJtL20GlPf9++h9cjXiG4CPF2yn3Qgg==', '6NXDH3FUACE3B5L6R2LHSU4MIIHBRWE7', '76ee487c-b11b-45e9-89c4-a98dd53ccf2f', NULL, 0, 0, NULL, 1, 0),
('405c657a-a5e3-404b-a8cc-5b14c86e8b59', 'test', 'TEST', 'test@email.com', 'TEST@EMAIL.COM', 0, 'AQAAAAEAACcQAAAAEPg9FCd1Qr6b9SmwVnQfBo0NYWGNIGNr7l3aelEIYA/WIF48UuE7gNJPrMsI35ZXGw==', 'HTTVECOWUDQWH5YULJYZUXKGZCRFTYSR', 'a3f49f18-0a2f-442f-8c79-cf2209e59a07', NULL, 0, 0, NULL, 1, 0),
('efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'final', 'FINAL', 'final@email.com', 'FINAL@EMAIL.COM', 0, 'AQAAAAEAACcQAAAAEEca1TiPuyXyhTm5hPv5swydbXX9L1kEt/bw5jCOuoprBC6oMj8SQzcz7vcQdifXDw==', 'EL67MD5SUPEHTXCK4PJZWX6C2ZQRMMIM', '0708ac64-6a05-4f6f-a955-9a73d4c3bc7f', NULL, 0, 0, NULL, 1, 0),
('fe79f673-e376-4f7a-b8f9-fd63f19e02d2', 'tes', 'TES', 'tes@example.com', 'TES@EXAMPLE.COM', 0, 'AQAAAAEAACcQAAAAEMXeV+m2JRZ3J7eZ2RgODnCCn0KMGOzom3Q6iyMGrzBxg40PTKxI5BnDVZ3yK3eHIA==', 'BNRVCQHMR7C4QZE2BKRKCY3H64IWX2Q4', 'c8b1db5f-3053-451c-9910-aad9a6340c7d', NULL, 0, 0, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `aspnetusertokens`
--

CREATE TABLE `aspnetusertokens` (
  `UserId` varchar(255) NOT NULL,
  `LoginProvider` varchar(128) NOT NULL,
  `Name` varchar(128) NOT NULL,
  `Value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `PaymentDataId` int(11) NOT NULL,
  `CardOwnerName` longtext DEFAULT NULL,
  `CardNumber` longtext DEFAULT NULL,
  `ExpirationDate` datetime(6) NOT NULL,
  `SecurityCode` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`PaymentDataId`, `CardOwnerName`, `CardNumber`, `ExpirationDate`, `SecurityCode`) VALUES
(1, 'Faiz', '8889462135', '2021-10-21 10:59:10.480000', '556414'),
(2, 'Ibrahim', '6656491346', '2021-10-21 10:53:43.778000', '464515'),
(3, 'Aruum', '8845679765', '2021-10-21 10:53:43.778000', '555425'),
(5, 'Fattah', '45687523476', '2021-10-21 10:53:43.778000', '555421'),
(7, 'Fela', '8845679765', '2021-10-21 10:53:43.778000', '555425');

-- --------------------------------------------------------

--
-- Table structure for table `refreshtokens`
--

CREATE TABLE `refreshtokens` (
  `id` int(11) NOT NULL,
  `UserId` varchar(255) DEFAULT NULL,
  `Token` longtext DEFAULT NULL,
  `JwtId` longtext DEFAULT NULL,
  `IsUsed` tinyint(1) NOT NULL,
  `IsRevorked` tinyint(1) NOT NULL,
  `AddedDate` datetime(6) NOT NULL,
  `ExpiryDate` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `refreshtokens`
--

INSERT INTO `refreshtokens` (`id`, `UserId`, `Token`, `JwtId`, `IsUsed`, `IsRevorked`, `AddedDate`, `ExpiryDate`) VALUES
(1, '3af6004b-112c-480c-9f97-2ba8f29322f3', '1FA6084YAL4YJ97CZ519KTUIVC58L9O6X2Q738a840e-16f2-46c4-96fe-bfd5179006ec', '18b8b786-9f84-40a3-805f-066685bdd9f0', 0, 0, '2021-10-21 13:51:45.537261', '2022-04-21 13:51:45.537336'),
(2, '3af6004b-112c-480c-9f97-2ba8f29322f3', 'Q4VDN7ZYNREIJPYB7C9L1MRJPLBI732OCNJdd49a6e1-9b6d-47f6-834c-3de2033d8b4d', '7a675170-e377-43f1-bdb3-39c43ecde6f9', 0, 0, '2021-10-21 13:53:06.015311', '2022-04-21 13:53:06.015406'),
(3, 'fe79f673-e376-4f7a-b8f9-fd63f19e02d2', 'WF136JNG7P4B9FZ2FHPQUCSXH3SQLDN3YX162c7d158-d3dc-4039-9f46-56ccece12407', 'e70407b9-979e-47cb-b048-ae47e59322ba', 0, 0, '2021-10-21 13:59:13.120704', '2022-04-21 13:59:13.120778'),
(4, 'fe79f673-e376-4f7a-b8f9-fd63f19e02d2', 'ZCFHYS2ZUJ8GLVAF58F807ZADKZ7UKH0F29ef2be378-6de2-4724-afa0-abf8ad12b77c', 'c935f4e0-1baa-4a4b-aa2c-148c206b9c93', 0, 0, '2021-10-21 14:02:17.037864', '2022-04-21 14:02:17.037916'),
(5, '405c657a-a5e3-404b-a8cc-5b14c86e8b59', '10FNENIJ74JPQKTQU294C54RPW5Q04KUN5H2ec310f6-3bc8-4436-bbca-db7e2e977391', '21b91daf-5889-4279-8fe9-91a6a24a9627', 0, 0, '2021-10-21 18:22:30.751981', '2022-04-21 18:22:30.752039'),
(6, '405c657a-a5e3-404b-a8cc-5b14c86e8b59', 'CFSTMCS83559ET9YO7HAHCKA2WVKI6HY3JD2cb6c4e7-0563-4fdd-aece-e217c507c77e', '5c3e18f4-86e8-416a-9070-03a4ffd95bd0', 0, 0, '2021-10-21 18:24:52.582233', '2022-04-21 18:24:52.582234'),
(7, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'PSUZD3FG95IE86CS4DDFM21HKH2B7BG7DOEad836be0-8cd3-491c-8b25-df0884c5c608', 'f0f15494-cb30-4f4e-9712-343d3d0a4eee', 0, 0, '2021-10-21 18:28:14.556196', '2022-04-21 18:28:14.556198'),
(8, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', '0NYQE74N1RVTRUKONED8VS1P00ZNQT60ZJVd68bc7f5-889e-463a-a0db-91abd554ee7f', '65b3be4d-40bb-4b08-b607-30d5dfd22862', 0, 0, '2021-10-21 18:29:33.959422', '2022-04-21 18:29:33.959422');

-- --------------------------------------------------------

--
-- Table structure for table `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20211021105203_Initial Migrations', '5.0.11'),
('20211021131250_Added refresh tokens table', '5.0.11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`);

--
-- Indexes for table `aspnetroles`
--
ALTER TABLE `aspnetroles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RoleNameIndex` (`NormalizedName`);

--
-- Indexes for table `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetUserClaims_UserId` (`UserId`);

--
-- Indexes for table `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  ADD KEY `IX_AspNetUserLogins_UserId` (`UserId`);

--
-- Indexes for table `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD PRIMARY KEY (`UserId`,`RoleId`),
  ADD KEY `IX_AspNetUserRoles_RoleId` (`RoleId`);

--
-- Indexes for table `aspnetusers`
--
ALTER TABLE `aspnetusers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  ADD KEY `EmailIndex` (`NormalizedEmail`);

--
-- Indexes for table `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD PRIMARY KEY (`UserId`,`LoginProvider`,`Name`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`PaymentDataId`);

--
-- Indexes for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IX_RefreshTokens_UserId` (`UserId`);

--
-- Indexes for table `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `PaymentDataId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Constraints for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  ADD CONSTRAINT `FK_RefreshTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
