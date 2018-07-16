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
-- Table structure for table `D8search_index`
--

DROP TABLE IF EXISTS `D8search_index`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `D8search_index` (
  `word` varchar(50) NOT NULL DEFAULT '' COMMENT 'The D8search_total.word that is associated with the search item.',
  `sid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'The D8search_dataset.sid of the searchable item to which the word belongs.',
  `langcode` varchar(12) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The D8languages.langcode of the item variant.',
  `type` varchar(64) CHARACTER SET ascii NOT NULL COMMENT 'The D8search_dataset.type of the searchable item to which the word belongs.',
  `score` float DEFAULT NULL COMMENT 'The numeric score of the word, higher being more important.',
  PRIMARY KEY (`word`,`sid`,`langcode`,`type`),
  KEY `sid_type` (`sid`,`langcode`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Stores the search index, associating words, items and…';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `D8search_index`
--

LOCK TABLES `D8search_index` WRITE;
/*!40000 ALTER TABLE `D8search_index` DISABLE KEYS */;
INSERT INTO `D8search_index` VALUES ('2318',2,'en','node_search',1),('2319',3,'en','node_search',1),('2358',1,'en','node_search',1),('5',4,'en','node_search',1),('5',5,'en','node_search',1),('7122018',1,'en','node_search',1),('7152018',2,'en','node_search',1),('7152018',3,'en','node_search',1),('7162018',4,'en','node_search',1),('7162018',5,'en','node_search',1),('about',4,'en','node_search',22),('about',5,'en','node_search',22),('admin',1,'en','node_search',1),('admin',2,'en','node_search',1),('admin',3,'en','node_search',1),('admin',4,'en','node_search',1),('admin',5,'en','node_search',1),('and',1,'en','node_search',27),('api',1,'en','node_search',27),('article',4,'en','node_search',26),('article',5,'en','node_search',26),('basic',2,'en','node_search',27),('basic',3,'en','node_search',27),('basic',4,'en','node_search',80),('basic',5,'en','node_search',80),('body',4,'en','node_search',1),('body',5,'en','node_search',1),('bricks',1,'en','node_search',27),('eck',1,'en','node_search',27),('example',1,'en','node_search',27),('layout',1,'en','node_search',27),('mon',4,'en','node_search',1),('mon',5,'en','node_search',1),('more',4,'en','node_search',22),('more',5,'en','node_search',22),('page',1,'en','node_search',27),('page',2,'en','node_search',27),('page',3,'en','node_search',27),('page',4,'en','node_search',80),('page',5,'en','node_search',80),('powered',1,'en','node_search',27),('read',4,'en','node_search',22),('read',5,'en','node_search',22),('sun',2,'en','node_search',1),('sun',3,'en','node_search',1),('the',4,'en','node_search',1),('the',5,'en','node_search',1),('this',4,'en','node_search',1),('this',5,'en','node_search',1),('thu',1,'en','node_search',1),('view',4,'en','node_search',1),('view',5,'en','node_search',1);
/*!40000 ALTER TABLE `D8search_index` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-17  1:34:28
