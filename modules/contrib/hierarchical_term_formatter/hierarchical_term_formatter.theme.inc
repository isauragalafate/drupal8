<?php

/**
 * @file
 * Theme preprocess used to prepare Twig variables.
 */

use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\Component\Utility\Html;

/**
 * Prepares term objects for Twig template.
 *
 * @param array $variables
 *   An associative array with preprocess variables for this theme.
 *   by theme_preprocess.
 */
function template_preprocess_hierarchical_term_formatter(&$variables) {
  $terms = array();
  foreach ($variables['terms'] as $term) {
    if ($variables['link']) {
      $url = new Url('entity.taxonomy_term.canonical', array('taxonomy_term' => $term->id()));
      $link = Link::fromTextAndUrl($term->getName(), $url);
      $link = $link->toRenderable();
      $terms[] = render($link);
    }
    else {
      $terms[] = $term->getName();
    }
  }
  if ($variables['wrapper'] != 'none') {
    $count = 0;
    foreach ($terms as &$term) {
      $count++;
      $term = array(
        '#type' => 'html_tag',
        '#tag' => (in_array($variables['wrapper'], array('ol', 'ul'))) ? 'li' : $variables['wrapper'],
        '#value' => $term,
        '#attributes' => array(
          'class' => array(
            Html::cleanCssIdentifier('taxonomy-term'),
            Html::cleanCssIdentifier("count $count"),
          ),
        ),
      );
    }
  }

  unset($variables['link']);
  $variables['terms'] = $terms;
}
