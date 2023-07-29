-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: personal_site
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.23.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Abouts`
--

DROP TABLE IF EXISTS `Abouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Abouts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `link` varchar(255) DEFAULT NULL,
  `link_title` varchar(255) DEFAULT NULL,
  `is_button` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Abouts`
--

LOCK TABLES `Abouts` WRITE;
/*!40000 ALTER TABLE `Abouts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Abouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Portfolios`
--

DROP TABLE IF EXISTS `Portfolios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Portfolios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `link` varchar(255) NOT NULL DEFAULT '#',
  `is_button` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Portfolios`
--

LOCK TABLES `Portfolios` WRITE;
/*!40000 ALTER TABLE `Portfolios` DISABLE KEYS */;
/*!40000 ALTER TABLE `Portfolios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_cards`
--

DROP TABLE IF EXISTS `about_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `about_cards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `description` text,
  `link` varchar(255) DEFAULT NULL,
  `link_title` varchar(50) DEFAULT NULL,
  `is_button` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_cards`
--

LOCK TABLES `about_cards` WRITE;
/*!40000 ALTER TABLE `about_cards` DISABLE KEYS */;
INSERT INTO `about_cards` VALUES (1,'Обо мне','Меня зовут Андрей, мне 21 год. Я программирую с лета 2019 года. По началу программирование для меня было просто интересным занятием.','','',0),(2,'Программист','Сейчас являюсь программистом. Но это только hard-skills. Про soft-skills я не буду здесь упоминать, они нужны любому специалисту. Теперь о каждой сфере по отдельности...','https://skillbox.ru/media/growth/kto_takoy_t_shaped_spetsialist/','Кто такой T-Shaped Специалист ?',1),(3,'Backend-разработчик','(Чтобы узнать о сфере подробно, нажмити на кнопку) Мне нравиться backend. Я программировал и на других языках, например на PHP и Python. Пробовал Go, Java и Kotlin.','https://checkroi.ru/blog/professiya-bekend-razrabotchik/','Кто такой Backend Разработчик ?',1),(4,'Frontend-разработчик','(Чтобы узнать о сфере подробно, нажмити на кнопку). Тест пока не придуман (-_-)/','https://checkroi.ru/blog/frontend-razrabotchik-podrobnyj-razbor-professii/','Кто такой Frontend Разработчик ?',1);
/*!40000 ALTER TABLE `about_cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) NOT NULL,
  `title` varchar(30) NOT NULL,
  `body` text,
  `button_name` varchar(30) NOT NULL DEFAULT 'Посмотреть',
  `link` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'https://img.icons8.com/color/48/000000/telegram-app--v1.png','Телеграмм','','Посмотреть','https://t.me/itserafim'),(2,'https://img.icons8.com/color/48/000000/github.png','GitHub','','Посмотреть','https://github.com/ITSerafim'),(3,'https://img.icons8.com/color/48/000000/linkedin.png','LinkedIn','','Посмотреть','');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navigation`
--

DROP TABLE IF EXISTS `navigation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `navigation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `path` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navigation`
--

LOCK TABLES `navigation` WRITE;
/*!40000 ALTER TABLE `navigation` DISABLE KEYS */;
INSERT INTO `navigation` VALUES (1,'index','Главная'),(2,'about','Обо мне'),(3,'portfolio','Портфолио');
/*!40000 ALTER TABLE `navigation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio`
--

DROP TABLE IF EXISTS `portfolio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(50) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` text,
  `is_button` tinyint(1) NOT NULL,
  `link` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio`
--

LOCK TABLES `portfolio` WRITE;
/*!40000 ALTER TABLE `portfolio` DISABLE KEYS */;
INSERT INTO `portfolio` VALUES (1,'brickproject.png','Флагман Кирпич','',1,'http://flagman-kirpich.ru/'),(2,'marriana.png','Марианна','',1,'http://marianna-cafe.ru/'),(3,'obektuv.png','Объектув','',1,'https://obektuv.ru/'),(4,'mamba.png','Черная мамба','',1,'https://mambaroll.ru/'),(5,'buildingsite.png','Сайт строительной компании','',1,'https://github.com/SoloProger/Vue-Shop-Frontend'),(6,'mysite.png','Сайт без фреймворков','',1,'#'),(7,'personsitev3.png','Сайт. Версия 3','',1,'#'),(8,'personsitev2.png','Сайт. Версия 2','',1,'#');
/*!40000 ALTER TABLE `portfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `body` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-29 11:13:47
