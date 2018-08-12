<?php

namespace Drupal\drupal_toolkit_read_more;

/**
 * Class UrlScope.
 *
 * @package Drupal\drupal_toolkit_read_more
 */
class UrlScope {

  /**
   * Get the path alias of an entity according to the current scope.
   *
   * @param string $entity
   *   Defined param type.
   *
   * @return string
   *   Defined return type.
   */
  public static function getEntityViewUrlByScope($entity) {
    $entity_type = $entity->getEntityTypeId();
    $entity_id = $entity->id();
    $entity_url_alias = '';


    if ($entity_type == 'node') {
      $entity_canonical_url = '/node/' . $entity_id;
    }

    if ($entity_type == 'media') {
      $entity_canonical_url = '/media/' . $entity_id;
    }

    if (isset($entity_canonical_url)) {
      $langcode = \Drupal::languageManager()->getCurrentLanguage()->getId();
      $entity_url_alias = \Drupal::service('path.alias_manager')->getAliasByPath($entity_canonical_url, $langcode);

      if (!empty($langcode)) {
        $entity_url_alias = '/' . $langcode . $entity_url_alias;
      }
    }

    return $entity_url_alias;
  }

}
