<?php

namespace Drupal\csd_menu\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    if ($route = $collection->get('entity.taxonomy_term.canonical')) {
      // i've tried both of these
      $route->addDefaults(['_controller' => '\Drupal\csd_menu\Controller\MenuController::content']);
      $route->addDefaults(['_title' => 'test']);
    }
  }

}