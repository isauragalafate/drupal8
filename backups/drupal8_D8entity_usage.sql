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
-- Table structure for table `D8entity_usage`
--

DROP TABLE IF EXISTS `D8entity_usage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `D8entity_usage` (
  `target_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'The target entity ID.',
  `target_id_string` varchar(128) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The target ID, when the entity uses string IDs.',
  `target_type` varchar(128) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The target entity type.',
  `source_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'The source entity ID.',
  `source_id_string` varchar(128) CHARACTER SET ascii DEFAULT NULL COMMENT 'The source ID, when the entity uses string IDs.',
  `source_type` varchar(128) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The source entity type.',
  `source_langcode` varchar(12) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The source entity language code.',
  `source_vid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'The source entity revision ID.',
  `method` varchar(128) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The method used to track the target, generally the plugin ID.',
  `field_name` varchar(128) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The field in the source entity containing the target entity.',
  `count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'The number of times the target entity is referenced in this case.',
  PRIMARY KEY (`target_id`,`target_id_string`,`target_type`,`source_id`,`source_type`,`source_langcode`,`source_vid`,`method`,`field_name`),
  KEY `target_entity` (`target_type`,`target_id`),
  KEY `target_entity_string` (`target_type`,`target_id_string`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Track entities that reference other entities.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `D8entity_usage`
--

LOCK TABLES `D8entity_usage` WRITE;
/*!40000 ALTER TABLE `D8entity_usage` DISABLE KEYS */;
INSERT INTO `D8entity_usage` VALUES (0,'left_card','classy_paragraphs_style',4,NULL,'paragraph','en',12,'entity_reference','field_classy_paragraphs_style',1),(1,'','block_content',4,NULL,'paragraph','en',9,'entity_reference','field_block',1),(1,'','block_content',4,NULL,'paragraph','en',12,'entity_reference','field_block',1),(1,'','block_content',5,NULL,'paragraph','en',13,'entity_reference','field_block',1),(1,'','paragraph',4,NULL,'node','en',4,'entity_reference','field_component',1),(1,'','paragraph',4,NULL,'node','en',5,'entity_reference','field_component',1),(1,'','paragraph',4,NULL,'node','en',6,'entity_reference','field_component',1),(2,'','paragraph',5,NULL,'node','en',8,'entity_reference','field_component',1),(2,'','paragraph',5,NULL,'node','en',9,'entity_reference','field_component',1),(2,'','paragraph',5,NULL,'node','en',10,'entity_reference','field_component',1),(2,'','paragraph',5,NULL,'node','en',11,'entity_reference','field_component',1),(3,'','paragraph',5,NULL,'node','en',9,'entity_reference','field_component',1),(3,'','paragraph',5,NULL,'node','en',10,'entity_reference','field_component',1),(3,'','paragraph',5,NULL,'node','en',11,'entity_reference','field_component',1),(4,'','paragraph',5,NULL,'node','en',10,'entity_reference','field_component',1),(4,'','paragraph',5,NULL,'node','en',11,'entity_reference','field_component',1),(5,'','paragraph',1,NULL,'header','en',0,'entity_reference','field_view',1);
/*!40000 ALTER TABLE `D8entity_usage` ENABLE KEYS */;
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
