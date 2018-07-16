CREATE DATABASE  IF NOT EXISTS `drupal8` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `drupal8`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: drupal8
-- ------------------------------------------------------
-- Server version	5.6.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `D8paragraphs_item_revision_field_data`
--

DROP TABLE IF EXISTS `D8paragraphs_item_revision_field_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `D8paragraphs_item_revision_field_data` (
  `id` int(10) unsigned NOT NULL,
  `revision_id` int(10) unsigned NOT NULL,
  `langcode` varchar(12) CHARACTER SET ascii NOT NULL,
  `uid` int(10) unsigned DEFAULT NULL COMMENT 'The ID of the target entity.',
  `status` tinyint(4) NOT NULL,
  `created` int(11) DEFAULT NULL,
  `behavior_settings` longtext,
  `default_langcode` tinyint(4) NOT NULL,
  `revision_translation_affected` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`revision_id`,`langcode`),
  KEY `paragraph__id__default_langcode__langcode` (`id`,`default_langcode`,`langcode`),
  KEY `paragraph_field__uid__target_id` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='The revision data table for paragraph entities.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `D8paragraphs_item_revision_field_data`
--

LOCK TABLES `D8paragraphs_item_revision_field_data` WRITE;
/*!40000 ALTER TABLE `D8paragraphs_item_revision_field_data` DISABLE KEYS */;
INSERT INTO `D8paragraphs_item_revision_field_data` VALUES (1,1,'en',1,1,1531692359,'a:0:{}',1,1),(1,2,'en',1,1,1531692359,'a:0:{}',1,NULL),(1,3,'en',1,1,1531692359,'a:0:{}',1,NULL),(2,4,'en',1,1,1531693510,'a:0:{}',1,1),(2,5,'en',1,1,1531693510,'a:0:{}',1,NULL),(3,6,'en',1,1,1531775021,'a:0:{}',1,1),(2,7,'en',1,1,1531693510,'a:0:{}',1,NULL),(3,8,'en',1,1,1531775021,'a:0:{}',1,NULL),(4,9,'en',1,1,1531776527,'a:0:{}',1,1),(2,10,'en',1,1,1531693510,'a:0:{}',1,NULL),(3,11,'en',1,1,1531775021,'a:0:{}',1,NULL),(4,12,'en',1,1,1531776527,'a:0:{}',1,1),(5,13,'en',1,1,1531782971,'a:0:{}',1,1);
/*!40000 ALTER TABLE `D8paragraphs_item_revision_field_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-17  1:34:27
