<?php
/**
 * @file
 * Contains \Drupal\hello_world\Controller\HelloController.
 */

namespace Drupal\extra_site_info\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class ExtraSiteInfoController
 * @package Drupal\extra_site_info\Controller
 */
class ExtraSiteInfoController extends ControllerBase {
  public function content() {
    return array(
      '#type' => 'markup',
      '#markup' => $this->t('Extra Site Info!'),
    );
  }
}
?>