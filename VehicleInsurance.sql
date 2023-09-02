CREATE DATABASE  IF NOT EXISTS `vehicledata` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vehicledata`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: vehicledata
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `comp_id` int NOT NULL AUTO_INCREMENT,
  `login_id` int DEFAULT NULL,
  `company_name` varchar(25) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `contact_no` varchar(12) NOT NULL,
  `license_no` varchar(50) NOT NULL,
  PRIMARY KEY (`comp_id`),
  UNIQUE KEY `contact_no` (`contact_no`),
  UNIQUE KEY `license_no` (`license_no`),
  KEY `login_id` (`login_id`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,7,'National Insurance','national@gmail.com','national111','123 Main Street, Mumbai','555-123-4567','SDI123456'),(2,9,'HDFC Insurance','hdfc@gmail.com','hdfc111','456 Park Avenue, Delhi','555-987-6543','GCI987654'),(3,6,'Reliance Insurance','reliance@gmail.com','reliance111','789 MG Road, Bangalore','555-456-7890','RAC789012'),(4,3,'Bajaj Insurance','bajaj@gmail.com','bajaj111','101 First Avenue, Chennai','555-789-0123','TWA345678'),(5,8,'SBI Insurance','sbi@gmail.com','sbi111','222 Gandhi Nagar, Kolkata','555-234-5678','SVI567890'),(6,4,'ICIC Insurance','icic@gmail.con','icici111','469 Uttam Nagar, Pune','565-234-5678','XVX567890'),(30,60,'sagar shimpi','vaibhav88@gmail.com','123123','asdsgasg','1254657894','1244656'),(31,62,'Ifosys','vaibhav788@gmail.com','i11111','At post pune','8845659412','12564');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cust_id` int NOT NULL AUTO_INCREMENT,
  `login_id` int DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `contact_no` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `bdate` varchar(20) DEFAULT NULL,
  `v_id` int DEFAULT NULL,
  PRIMARY KEY (`cust_id`),
  UNIQUE KEY `email` (`email`),
  KEY `login_id` (`login_id`),
  KEY `v_id` (`v_id`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  CONSTRAINT `customer_ibfk_2` FOREIGN KEY (`v_id`) REFERENCES `vehicle_info` (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,1,'Ganesh Savant','g111','9876543210','ganesh@gmail.com','1990-05-10',1),(2,2,'Vaibhav Jadhav','v111','9876543210','vaibhav@gmail.com','1990-05-10',2),(3,3,'Chetan Bavane','c111','9998887776','chetan@gmail.com','1992-08-25',3),(4,4,'Prasad Kavade','pr111','8887776665','prasad@gmail.com','1988-03-15',4),(5,5,'Amol Shinde','a111','7776665554','amol@gmail.com','1995-11-20',5),(6,6,'Abhay Savant','ab111','6665554443','abhay@gmail.com','1993-06-12',6),(7,7,'Ganesh Patil','gp111','5554443332','ganeshpatil@gmail.com','1991-09-08',7),(23,59,'Pavan Patil','Pavan123','9955223344','vaibhav55@gmail.com','2000-20-02',28),(24,61,'CHETAN BAWANE','Ch1456','9528794568','vaibhaL@gmail.com','2000-20-02',29);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `user_type` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'pavan@gmail.com','p111',2),(2,'vaibhav@gmail.com','v111',0),(3,'bajaj@gmail.com','bajaj111',1),(4,'icici@gmail.com','icici111',1),(5,'ganesh@gmail.com','g111',0),(6,'reliance@gmail.com','reliance111',1),(7,'national@gmail.com','national111',1),(8,'sbi@gmail.com','sbi111',1),(9,'hdfc@gmail.com','hdfc111',1),(12,'national11@gmail.com','nationa34l111',1),(59,'vaibhav55@gmail.com','Pavan123',0),(60,'vaibhav88@gmail.com','123123',1),(61,'vaibhaL@gmail.com','Ch1456',0),(62,'vaibhav788@gmail.com','i11111',1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `cust_id` int DEFAULT NULL,
  `comp_id` int DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_date` date NOT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `cust_id` (`cust_id`),
  KEY `comp_id` (`comp_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`comp_id`) REFERENCES `company` (`comp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,1,'Paid',1200.00,'2023-01-15'),(2,2,2,'Pending',1500.00,'2023-02-20'),(3,3,3,'Paid',1600.00,'2023-03-10'),(4,4,4,'Paid',1200.00,'2023-04-05'),(5,5,5,'Pending',1500.00,'2023-05-12'),(6,6,6,'Paid',1600.00,'2023-06-18');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan` (
  `plan_id` int NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `comp_id` int DEFAULT NULL,
  `duration` int DEFAULT '1',
  `coverage_type` varchar(50) NOT NULL,
  `premium_amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`plan_id`),
  KEY `comp_id` (`comp_id`),
  CONSTRAINT `plan_ibfk_1` FOREIGN KEY (`comp_id`) REFERENCES `company` (`comp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (1,'Own Damage','Standard coverage for your car when damaged by own',1,1,'Own',1500.00),(2,'Comprehensive Plus','Comprehensive coverage with added benefits of own and third party',2,1,'Comprehensive',2000.00),(3,'Own Damage','Standard coverage for your car when damaged by own',1,1,'Own',1500.00),(4,'Third Party Only','Basic coverage for third-party liabilities',2,1,'Third Party',1000.00),(5,'Comprehensive Plus','Comprehensive coverage with added benefits of own and third party',3,1,'Comprehensive',2000.00),(6,'Third Party Only','Basic coverage for third-party liabilities',3,1,'Third Party',1000.00);
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policy_details`
--

DROP TABLE IF EXISTS `policy_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policy_details` (
  `policy_id` int NOT NULL AUTO_INCREMENT,
  `plan_id` int DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  PRIMARY KEY (`policy_id`),
  KEY `plan_id` (`plan_id`),
  KEY `cust_id` (`cust_id`),
  CONSTRAINT `policy_details_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`plan_id`),
  CONSTRAINT `policy_details_ibfk_2` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policy_details`
--

LOCK TABLES `policy_details` WRITE;
/*!40000 ALTER TABLE `policy_details` DISABLE KEYS */;
INSERT INTO `policy_details` VALUES (1,1,1),(2,2,2),(3,2,3),(4,3,4),(5,4,5);
/*!40000 ALTER TABLE `policy_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_info`
--

DROP TABLE IF EXISTS `vehicle_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_info` (
  `v_id` int NOT NULL AUTO_INCREMENT,
  `vehicle_no` varchar(20) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `chassis_no` int NOT NULL,
  `year_of_manufacture` varchar(50) NOT NULL,
  PRIMARY KEY (`v_id`),
  UNIQUE KEY `vehicle_no` (`vehicle_no`),
  UNIQUE KEY `chassis_no` (`chassis_no`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_info`
--

LOCK TABLES `vehicle_info` WRITE;
/*!40000 ALTER TABLE `vehicle_info` DISABLE KEYS */;
INSERT INTO `vehicle_info` VALUES (1,'MH04AB1234','Maruti','Swift',123456,'2019'),(2,'DL05CD5678','Hyundai','i20',987654,'2020'),(3,'KA03EF9012','Honda','City',654321,'2018'),(4,'TN02GH3456','Toyota','Innova',789012,'2022'),(5,'GJ06IJ7890','Mahindra','XUV500',456789,'2021'),(6,'PB08KL2345','Ford','EcoSport',567890,'2017'),(7,'MH05AF2550','TATA','Tiago',526545,'2010'),(28,'MH-99-AA-4545','Ford','Focus',12345121,'2020'),(29,'MH-12-AB-9988','Ford','Explorer',78954689,'2011');
/*!40000 ALTER TABLE `vehicle_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-02 10:24:47
