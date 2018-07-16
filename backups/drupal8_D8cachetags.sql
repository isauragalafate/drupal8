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
-- Table structure for table `D8cachetags`
--

DROP TABLE IF EXISTS `D8cachetags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `D8cachetags` (
  `tag` varchar(255) CHARACTER SET ascii NOT NULL DEFAULT '' COMMENT 'Namespace-prefixed tag string.',
  `invalidations` int(11) NOT NULL DEFAULT '0' COMMENT 'Number incremented when the tag is invalidated.',
  PRIMARY KEY (`tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Cache table for tracking cache tag invalidations.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `D8cachetags`
--

LOCK TABLES `D8cachetags` WRITE;
/*!40000 ALTER TABLE `D8cachetags` DISABLE KEYS */;
INSERT INTO `D8cachetags` VALUES ('4xx-response',95),('block_content_list',1),('block_content_view',1),('breakpoints',82),('brick_list',2),('brick_view',5),('comment_view',1),('config:action_list',4),('config:block.block.bartik_account_menu',1),('config:block.block.bartik_branding',1),('config:block.block.bartik_breadcrumbs',1),('config:block.block.bartik_content',1),('config:block.block.bartik_footer',1),('config:block.block.bartik_help',1),('config:block.block.bartik_local_actions',1),('config:block.block.bartik_local_tasks',1),('config:block.block.bartik_main_menu',1),('config:block.block.bartik_messages',1),('config:block.block.bartik_page_title',1),('config:block.block.bartik_powered',1),('config:block.block.bartik_search',1),('config:block.block.bartik_tools',1),('config:block.block.da_vinci_branding',1),('config:block.block.da_vinci_breadcrumbs',1),('config:block.block.da_vinci_content',1),('config:block.block.da_vinci_footer',1),('config:block.block.da_vinci_help',1),('config:block.block.da_vinci_local_actions',1),('config:block.block.da_vinci_local_tasks',1),('config:block.block.da_vinci_main_menu',1),('config:block.block.da_vinci_messages',1),('config:block.block.da_vinci_page_title',1),('config:block.block.da_vinci_powered',1),('config:block.block.da_vinci_search',1),('config:block.block.pagetitle',2),('config:block.block.seven_breadcrumbs',1),('config:block.block.seven_content',1),('config:block.block.seven_help',1),('config:block.block.seven_local_actions',1),('config:block.block.seven_login',1),('config:block.block.seven_messages',1),('config:block.block.seven_page_title',1),('config:block.block.seven_primary_local_tasks',1),('config:block.block.seven_secondary_local_tasks',1),('config:block.block.useraccountmenu',1),('config:block.block.userlogin',1),('config:block.block.views_block__who_s_online_who_s_online_block',1),('config:block_content_type_list',1),('config:block_list',3),('config:brick_type_list',5),('config:classy_paragraphs_style_list',1),('config:comment_type_list',1),('config:contact.form.feedback',1),('config:contact_form_list',3),('config:core.entity_form_display.node.article.default',4),('config:core.entity_form_display.node.bricky.default',11),('config:core.entity_form_display.paragraph.embed_block.default',3),('config:core.entity_form_display.paragraph.embed_view.default',1),('config:core.entity_view_display.node.article.default',5),('config:core.entity_view_display.node.article.full',7),('config:core.entity_view_display.node.article.rss',1),('config:core.entity_view_display.node.bricky.default',6),('config:core.entity_view_display.paragraph.embed_block.default',1),('config:core.extension',65),('config:core.menu.static_menu_link_overrides',1),('config:eck_entity_type_list',2),('config:editor_list',1),('config:entity_form_display_list',26),('config:entity_form_mode_list',1),('config:entity_view_display_list',27),('config:entity_view_mode_list',5),('config:field.field.brick.view.field_view',1),('config:field.field.header.headerbundle.field_view',1),('config:field.field.node.article.field_component',2),('config:field.field.node.bricky.field_header',4),('config:field.field.node.bricky.field_headerbricks',2),('config:field.field.node.bricky.field_testing',1),('config:field.field.paragraph.embed_block.field_block',2),('config:field.field.paragraph.embed_block.field_classy_paragraphs_style',2),('config:field.field.paragraph.embed_view.field_view',1),('config:field.storage.brick.field_view',1),('config:field.storage.header.field_view',1),('config:field.storage.node.field_component',3),('config:field.storage.node.field_header',4),('config:field.storage.node.field_headerbricks',1),('config:field.storage.node.field_testing',1),('config:field.storage.paragraph.field_block',1),('config:field.storage.paragraph.field_classy_paragraphs_style',1),('config:field.storage.paragraph.field_view',1),('config:filter_format_list',2),('config:header_type_list',3),('config:image_style_list',1),('config:menu_list',1),('config:node.settings',1),('config:node_type_list',2),('config:paragraphs_type_list',2),('config:rdf_mapping_list',1),('config:search_page_list',1),('config:shortcut.set.default',1),('config:shortcut_set_list',2),('config:system.date',1),('config:system.file',1),('config:system.menu.account',82),('config:system.menu.admin',83),('config:system.menu.footer',59),('config:system.menu.main',81),('config:system.menu.tools',77),('config:system.site',5),('config:system.theme',1),('config:taxonomy_vocabulary_list',1),('config:tour_list',1),('config:update.settings',1),('config:user.role.anonymous',2),('config:user.role.authenticated',2),('config:user.settings',1),('config:user_role_list',3),('config:views.view.archive',2),('config:views.view.basic_page',8),('config:views.view.block_content',2),('config:views.view.comment',2),('config:views.view.comments_recent',2),('config:views.view.content',2),('config:views.view.content_recent',2),('config:views.view.entity_referenced',10),('config:views.view.files',2),('config:views.view.frontpage',2),('config:views.view.glossary',2),('config:views.view.taxonomy_term',2),('config:views.view.user_admin_people',2),('config:views.view.watchdog',2),('config:views.view.who_s_new',2),('config:views.view.who_s_online',2),('config:view_list',9),('contact_message_view',1),('contextual_links_plugins',82),('element_info_build',82),('entity_bundles',122),('entity_field_info',193),('entity_types',124),('file_list',1),('header_list',1),('header_view',4),('http_response',83),('link_relation_type',82),('local_action',84),('local_task',96),('migration_plugins',19),('node:1',1),('node:4',2),('node:5',4),('node_list',12),('node_view',30),('panelizer_default:node:article:full:default',5),('paragraph:1',3),('paragraph:2',3),('paragraph:3',2),('paragraph:4',1),('paragraph:5',1),('paragraph_list',8),('paragraph_view',9),('rendered',7),('routes',83),('route_match',86),('search_index:node_search',2),('taxonomy_term_view',1),('theme_registry',62),('user:1',2),('user_list',3),('user_view',1),('views_data',30);
/*!40000 ALTER TABLE `D8cachetags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-17  1:34:25
