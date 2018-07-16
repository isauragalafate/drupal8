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
-- Table structure for table `D8node_revision__panelizer`
--

DROP TABLE IF EXISTS `D8node_revision__panelizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `D8node_revision__panelizer` (
  `bundle` varchar(128) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The field instance bundle to which this row belongs, used when deleting a field instance',
  `deleted` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'A boolean indicating whether this data item has been deleted',
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to',
  `langcode` varchar(32) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'The language code for this data item.',
  `delta` int(10) unsigned NOT NULL COMMENT 'The sequence number for this data item, used for multi-value fields',
  `panelizer_view_mode` varchar(255) NOT NULL,
  `panelizer_default` varchar(255) DEFAULT NULL,
  `panelizer_panels_display` blob,
  PRIMARY KEY (`entity_id`,`revision_id`,`deleted`,`delta`,`langcode`),
  KEY `bundle` (`bundle`),
  KEY `revision_id` (`revision_id`),
  KEY `panelizer_default` (`panelizer_default`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Revision archive storage for node field panelizer.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `D8node_revision__panelizer`
--

LOCK TABLES `D8node_revision__panelizer` WRITE;
/*!40000 ALTER TABLE `D8node_revision__panelizer` DISABLE KEYS */;
INSERT INTO `D8node_revision__panelizer` VALUES ('article',0,4,5,'en',0,'full',NULL,'a:12:{s:6:\"blocks\";a:4:{s:36:\"1e7945bd-5b5b-4103-bb4d-39e0f92344a9\";a:9:{s:2:\"id\";s:25:\"entity_field:node:created\";s:5:\"label\";s:11:\"Authored on\";s:8:\"provider\";s:12:\"ctools_block\";s:13:\"label_display\";s:1:\"0\";s:9:\"formatter\";a:6:{s:5:\"label\";s:6:\"hidden\";s:4:\"type\";s:9:\"timestamp\";s:8:\"settings\";a:3:{s:11:\"date_format\";s:6:\"medium\";s:18:\"custom_date_format\";s:0:\"\";s:8:\"timezone\";s:0:\"\";}s:20:\"third_party_settings\";a:0:{}s:6:\"weight\";i:0;s:6:\"region\";s:7:\"content\";}s:15:\"context_mapping\";a:1:{s:6:\"entity\";s:32:\"@panelizer.entity_context:entity\";}s:6:\"region\";s:3:\"top\";s:6:\"weight\";i:2;s:4:\"uuid\";s:36:\"1e7945bd-5b5b-4103-bb4d-39e0f92344a9\";}s:36:\"fd04afbf-79fc-47dc-aa3e-b2c3bbd716cb\";a:9:{s:2:\"id\";s:22:\"entity_field:node:body\";s:5:\"label\";s:4:\"Body\";s:8:\"provider\";s:12:\"ctools_block\";s:13:\"label_display\";s:1:\"0\";s:9:\"formatter\";a:6:{s:5:\"label\";s:6:\"hidden\";s:4:\"type\";s:12:\"text_default\";s:8:\"settings\";a:0:{}s:20:\"third_party_settings\";a:0:{}s:6:\"weight\";i:0;s:6:\"region\";s:7:\"content\";}s:15:\"context_mapping\";a:1:{s:6:\"entity\";s:32:\"@panelizer.entity_context:entity\";}s:6:\"region\";s:3:\"top\";s:6:\"weight\";i:4;s:4:\"uuid\";s:36:\"fd04afbf-79fc-47dc-aa3e-b2c3bbd716cb\";}s:36:\"a445b9ef-6ae0-4d79-bd29-d4ede8be8862\";a:9:{s:2:\"id\";s:29:\"entity_field:node:field_image\";s:5:\"label\";s:5:\"Image\";s:8:\"provider\";s:12:\"ctools_block\";s:13:\"label_display\";s:1:\"0\";s:9:\"formatter\";a:6:{s:5:\"label\";s:6:\"hidden\";s:4:\"type\";s:5:\"image\";s:8:\"settings\";a:2:{s:11:\"image_style\";s:5:\"large\";s:10:\"image_link\";s:0:\"\";}s:20:\"third_party_settings\";a:0:{}s:6:\"weight\";i:0;s:6:\"region\";s:7:\"content\";}s:15:\"context_mapping\";a:1:{s:6:\"entity\";s:32:\"@panelizer.entity_context:entity\";}s:6:\"region\";s:3:\"top\";s:6:\"weight\";i:3;s:4:\"uuid\";s:36:\"a445b9ef-6ae0-4d79-bd29-d4ede8be8862\";}s:36:\"50b4a0ef-64f6-44bd-a1a0-c281dd81cb27\";a:9:{s:2:\"id\";s:28:\"entity_field:node:field_tags\";s:5:\"label\";s:4:\"Tags\";s:8:\"provider\";s:12:\"ctools_block\";s:13:\"label_display\";s:1:\"0\";s:9:\"formatter\";a:6:{s:5:\"label\";s:6:\"hidden\";s:4:\"type\";s:22:\"entity_reference_label\";s:8:\"settings\";a:1:{s:4:\"link\";b:1;}s:20:\"third_party_settings\";a:0:{}s:6:\"weight\";i:0;s:6:\"region\";s:7:\"content\";}s:15:\"context_mapping\";a:1:{s:6:\"entity\";s:32:\"@panelizer.entity_context:entity\";}s:6:\"region\";s:3:\"top\";s:6:\"weight\";i:1;s:4:\"uuid\";s:36:\"50b4a0ef-64f6-44bd-a1a0-c281dd81cb27\";}}s:2:\"id\";s:14:\"panels_variant\";s:5:\"label\";s:7:\"Default\";s:4:\"uuid\";s:36:\"69b03709-1abe-49af-88fe-cffe7338f604\";s:6:\"weight\";i:0;s:6:\"layout\";s:24:\"layout_threecol_33_34_33\";s:15:\"layout_settings\";a:0:{}s:10:\"page_title\";s:12:\"[node:title]\";s:12:\"storage_type\";s:15:\"panelizer_field\";s:10:\"storage_id\";s:13:\"node:4:full:5\";s:7:\"builder\";s:3:\"ipe\";s:7:\"pattern\";s:9:\"panelizer\";}'),('article',0,4,6,'en',0,'full',NULL,'a:12:{s:6:\"blocks\";a:3:{s:36:\"fd04afbf-79fc-47dc-aa3e-b2c3bbd716cb\";a:9:{s:2:\"id\";s:22:\"entity_field:node:body\";s:5:\"label\";s:4:\"Body\";s:8:\"provider\";s:12:\"ctools_block\";s:13:\"label_display\";s:1:\"0\";s:9:\"formatter\";a:6:{s:5:\"label\";s:6:\"hidden\";s:4:\"type\";s:12:\"text_default\";s:8:\"settings\";a:0:{}s:20:\"third_party_settings\";a:0:{}s:6:\"weight\";i:0;s:6:\"region\";s:7:\"content\";}s:15:\"context_mapping\";a:1:{s:6:\"entity\";s:32:\"@panelizer.entity_context:entity\";}s:6:\"region\";s:3:\"top\";s:6:\"weight\";i:2;s:4:\"uuid\";s:36:\"fd04afbf-79fc-47dc-aa3e-b2c3bbd716cb\";}s:36:\"50b4a0ef-64f6-44bd-a1a0-c281dd81cb27\";a:9:{s:2:\"id\";s:28:\"entity_field:node:field_tags\";s:5:\"label\";s:4:\"Tags\";s:8:\"provider\";s:12:\"ctools_block\";s:13:\"label_display\";s:1:\"0\";s:9:\"formatter\";a:6:{s:5:\"label\";s:6:\"hidden\";s:4:\"type\";s:22:\"entity_reference_label\";s:8:\"settings\";a:1:{s:4:\"link\";b:1;}s:20:\"third_party_settings\";a:0:{}s:6:\"weight\";i:0;s:6:\"region\";s:7:\"content\";}s:15:\"context_mapping\";a:1:{s:6:\"entity\";s:32:\"@panelizer.entity_context:entity\";}s:6:\"region\";s:3:\"top\";s:6:\"weight\";i:1;s:4:\"uuid\";s:36:\"50b4a0ef-64f6-44bd-a1a0-c281dd81cb27\";}s:36:\"11b8a28b-c811-4762-929b-f1bfc1215431\";a:9:{s:2:\"id\";s:33:\"entity_field:node:field_component\";s:5:\"label\";s:9:\"Component\";s:8:\"provider\";s:12:\"ctools_block\";s:13:\"label_display\";i:0;s:9:\"formatter\";a:5:{s:5:\"label\";s:6:\"hidden\";s:4:\"type\";s:38:\"entity_reference_revisions_entity_view\";s:8:\"settings\";a:1:{s:9:\"view_mode\";s:7:\"default\";}s:20:\"third_party_settings\";a:0:{}s:6:\"weight\";i:0;}s:15:\"context_mapping\";a:1:{s:6:\"entity\";s:32:\"@panelizer.entity_context:entity\";}s:6:\"region\";s:6:\"second\";s:4:\"uuid\";s:36:\"11b8a28b-c811-4762-929b-f1bfc1215431\";s:6:\"weight\";i:1;}}s:2:\"id\";s:14:\"panels_variant\";s:5:\"label\";s:7:\"Default\";s:4:\"uuid\";s:36:\"69b03709-1abe-49af-88fe-cffe7338f604\";s:6:\"weight\";i:0;s:6:\"layout\";s:24:\"layout_threecol_33_34_33\";s:15:\"layout_settings\";a:0:{}s:10:\"page_title\";s:12:\"[node:title]\";s:12:\"storage_type\";s:15:\"panelizer_field\";s:10:\"storage_id\";s:13:\"node:4:full:6\";s:7:\"builder\";s:3:\"ipe\";s:7:\"pattern\";s:9:\"panelizer\";}');
/*!40000 ALTER TABLE `D8node_revision__panelizer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-17  1:34:26
