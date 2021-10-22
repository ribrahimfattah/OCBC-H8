-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2021 at 05:56 PM
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
('1f4b1ff4-2e61-49f6-92ba-c4459a7a98b9', 'qwe', 'QWE', 'qwee@example.com', 'QWEE@EXAMPLE.COM', 0, 'AQAAAAEAACcQAAAAEBYDNlaMa2fLcpzi+Mu+Xs06pJBy02eu+E/+USnj+SDLXzLxYKcdX2d525Ma27K2Bg==', 'K4H7MFTSRS2HMJ5PPTOE74MDEPODWS5B', 'ba8a7baa-f552-497b-9692-5bbbb625e797', NULL, 0, 0, NULL, 1, 0),
('3af6004b-112c-480c-9f97-2ba8f29322f3', 'ibra', 'IBRA', 'ibra@example.com', 'IBRA@EXAMPLE.COM', 0, 'AQAAAAEAACcQAAAAEFZ/UIoGmUCZ61rfxh9UMoUeGHfxoJ6URrhiJtL20GlPf9++h9cjXiG4CPF2yn3Qgg==', '6NXDH3FUACE3B5L6R2LHSU4MIIHBRWE7', '76ee487c-b11b-45e9-89c4-a98dd53ccf2f', NULL, 0, 0, NULL, 1, 0),
('3de1a4da-4852-4f8b-b342-e95c91b3193a', 'Cek', 'CEK', 'cek@example.com', 'CEK@EXAMPLE.COM', 0, 'AQAAAAEAACcQAAAAEL0fAKrk0ig5wvye7sYD9FVWzIXRw/Bm85cmxUReQDWq1JQM3WLncHR8cVtHT7FUgg==', 'WGBXFUK2YLWWOOAV2TELQPIZGUV6Q63Y', '1e837a02-a287-48de-816b-b52206666f9c', NULL, 0, 0, NULL, 1, 0),
('405c657a-a5e3-404b-a8cc-5b14c86e8b59', 'test', 'TEST', 'test@email.com', 'TEST@EMAIL.COM', 0, 'AQAAAAEAACcQAAAAEPg9FCd1Qr6b9SmwVnQfBo0NYWGNIGNr7l3aelEIYA/WIF48UuE7gNJPrMsI35ZXGw==', 'HTTVECOWUDQWH5YULJYZUXKGZCRFTYSR', 'a3f49f18-0a2f-442f-8c79-cf2209e59a07', NULL, 0, 0, NULL, 1, 0),
('53639828-4245-4345-973e-3099a4ed97d7', 'Cekkk', 'CEKKK', 'cek@example', 'CEK@EXAMPLE', 0, 'AQAAAAEAACcQAAAAEMm57D3larxKnLlPbb2Ojc2wvgJHTbYspkY8JRfYM+TK+bsPRb76SBhHTPyZUGIB2w==', 'JU4POCV5AAQ32W2VMZY4ZUXSJ2DHHRBX', 'd9fd1400-7971-4083-815e-c1ba35803b8c', NULL, 0, 0, NULL, 1, 0),
('ca9a3d88-631e-455e-ae13-9e8a1b4e8ef2', 'oke', 'OKE', 'oke@example.com', 'OKE@EXAMPLE.COM', 0, 'AQAAAAEAACcQAAAAELy/e6+uZkRT7Mucz9BHxTnlcthpFY2l8pgwmQmxeIgNWUpMjlTbPWNM3copK9yXjQ==', 'XYSMFALWYOUHTDOVQRDW7JKD7JFZ7VLI', 'db2c8a5e-3361-41e0-816d-f9651aae5c3d', NULL, 0, 0, NULL, 1, 0),
('e6f6e36c-5b07-45ee-a2e2-1c88af55cba1', 'Sukses', 'SUKSES', 'sukses@example.com', 'SUKSES@EXAMPLE.COM', 0, 'AQAAAAEAACcQAAAAEBPCzFf+AJ4bm2WQ2n7SX+CF/OKkG3Op3L+XDp/1xe6oqgiwxcS8m3hMCBuS0aGRFg==', 'EVYVYFPHZUC277COHUL2NZ6PUOJGQDX3', '2703661a-0004-4dec-ad80-d9dcc58a8c8f', NULL, 0, 0, NULL, 1, 0),
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
(10, 'John update', '7774145213', '2021-10-21 10:53:43.778000', '333362');

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
(8, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', '0NYQE74N1RVTRUKONED8VS1P00ZNQT60ZJVd68bc7f5-889e-463a-a0db-91abd554ee7f', '65b3be4d-40bb-4b08-b607-30d5dfd22862', 0, 0, '2021-10-21 18:29:33.959422', '2022-04-21 18:29:33.959422'),
(9, 'ca9a3d88-631e-455e-ae13-9e8a1b4e8ef2', '9VOQ6YUDMH68XS4W6N9A95C0HECTUKL9XMI7bf02571-0a17-4048-bad6-5ceaf9c0d799', 'bcee4c80-0d4e-4886-bb1b-e72b3d406276', 0, 0, '2021-10-22 01:56:13.136858', '2022-04-22 01:56:13.136935'),
(10, 'ca9a3d88-631e-455e-ae13-9e8a1b4e8ef2', '0EWBUL0JQA0PP2V9P1A215KVLSK5NO0WW9Y2a8939fd-7a4a-451b-92c1-a1c119ba6a1f', 'd2162273-682b-4c07-9b8a-893af1801b85', 0, 0, '2021-10-22 01:56:31.216530', '2022-04-22 01:56:31.216531'),
(11, 'ca9a3d88-631e-455e-ae13-9e8a1b4e8ef2', '5RDUL1U1KGBGMHNWF7BOHEU65BZ57BKD9DW40a07506-75e4-43ac-9668-97b26c952f6f', '86c0931d-bc1f-4bd9-bfd7-9c94b22f1a31', 0, 0, '2021-10-22 02:25:56.079989', '2022-04-22 02:25:56.080161'),
(12, '3de1a4da-4852-4f8b-b342-e95c91b3193a', '9HFT4FNUWIYZP501Y5U30EP6SHCHU494BFTc476315e-96c1-40b3-b2e3-8930b75a9db2', 'c7e7e66c-c091-4f0b-8667-27ef328ad350', 0, 0, '2021-10-22 03:34:32.001290', '2022-04-22 03:34:32.001466'),
(13, '53639828-4245-4345-973e-3099a4ed97d7', 'AJ6BV77L8WS8CO93EKEVBG1AFFVNRPHJ16218bdfade-7631-43d8-8564-8c7efaf4a813', 'f155504d-b0de-4221-a124-22a6faa3c5a8', 0, 0, '2021-10-22 03:34:49.913506', '2022-04-22 03:34:49.913508'),
(14, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'VJUWK6BODE0K9IG20SB30ZFRVANVZAMII7Xba6b2763-617d-427b-a780-50afd02312c5', 'b3f91d75-fea7-42b7-8fdd-3051312f7fb8', 0, 0, '2021-10-22 03:57:27.867269', '2022-04-22 03:57:27.914248'),
(15, '1f4b1ff4-2e61-49f6-92ba-c4459a7a98b9', 'SF02QJADY1F9KUTA2DTGALUWJOIP8AT2AJT6d96af81-2ee8-4a61-8921-a963b55f880a', '64216ed0-ef8b-4030-be41-c5946cd3f3b5', 0, 0, '2021-10-22 06:11:45.698536', '2022-04-22 06:11:45.698649'),
(16, '1f4b1ff4-2e61-49f6-92ba-c4459a7a98b9', 'B0823L96WJZW83H47V0EJK1UZ5P0BMDOS7Y14cb8934-ae47-4248-992e-70cc2ac9cf42', '0c34d2a5-a553-4223-a3e6-6d1ee8645063', 0, 0, '2021-10-22 06:12:58.129669', '2022-04-22 06:12:58.129669'),
(17, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'TMT3BCRTVLSXQ8MWQDRERPQ2TVJ8QEYZ4YI29399f65-29a6-4851-883d-c1a8f76d7967', 'd41f6676-4dc2-4445-bd24-6b3a723bf980', 0, 0, '2021-10-22 07:02:43.132305', '2022-04-22 07:02:43.132376'),
(18, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'GJ7THY5JZH3VR8JIMFZ6BOSDH011RPNX9PCb4572403-6663-4d3b-a788-9e124d58c089', 'd8238902-2433-43a4-846e-195645d81cf8', 0, 0, '2021-10-22 07:07:49.458193', '2022-04-22 07:07:49.458299'),
(19, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'NJ9PT3WVWVYTKLHBBOLVMCQ0JM4DJYD5PCOaca3a4a8-93bf-4f1d-8b27-9ef5c44f50d3', '8006d8b0-1134-47ea-b7ef-032cdef26ab2', 0, 0, '2021-10-22 07:16:22.522651', '2022-04-22 07:16:22.522828'),
(20, 'e6f6e36c-5b07-45ee-a2e2-1c88af55cba1', 'X4Z6MAYFC7BFI2KSPCRTCQRE6PLA3UCECVMd3f64c77-94c0-40d5-9968-f9f27c9bcfa8', '433063f5-6fa4-4f8b-bcb5-bb00baec6d82', 0, 0, '2021-10-22 07:37:24.167860', '2022-04-22 07:37:24.167922'),
(21, 'e6f6e36c-5b07-45ee-a2e2-1c88af55cba1', 'KMCPQK09XNY3LPIHO5ZX5GDEU8LQRIIBXTF8cd0c7d3-9364-4045-a1f8-7bf3707d7c8f', '18803b47-3d5d-46a8-8c38-e75142806d64', 0, 0, '2021-10-22 07:37:55.138486', '2022-04-22 07:37:55.138488'),
(22, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'H9WY0H5E505F61NZWBEKP4PRV8862ZLKKE6e8e8568c-0cec-4fd4-8fa7-f6d38be54047', 'ad30fe63-0cf8-4a26-81b9-3fdc3ebdb2ac', 0, 0, '2021-10-22 07:59:09.760519', '2022-04-22 07:59:09.760551'),
(23, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', '9ASCZ3FZ0A9DD5BOVX7VP5TDKOTXKKW0BZEe876b54c-c22f-42de-8a6a-8b5ec8ac8abd', '2e16c6b4-aae7-459a-b080-2801b0d55572', 0, 0, '2021-10-22 15:29:06.437205', '2022-04-22 15:29:06.437267'),
(24, 'efc5f92c-72e4-462c-9e7c-866b527ad9b0', 'UL95PLX802OGDAPL0L3FHOVQQKFY9F5BFOD301fb7c8-12f6-45c6-a6f9-ceb62bdd77c4', '7e68b429-7d65-43db-b759-c333eaadec3e', 0, 0, '2021-10-22 15:36:06.258272', '2022-04-22 15:36:06.258323');

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
  MODIFY `PaymentDataId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
