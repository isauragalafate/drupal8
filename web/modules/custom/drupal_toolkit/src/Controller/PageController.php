<?php

namespace Drupal\drupal_toolkit\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Generic controller for generate empty pages.
 */
class PageController extends ControllerBase {

  /**
   * {@inheritdoc}
   */
  public function content() {
    $build = [];

    return $build;
  }

}
