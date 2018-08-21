<?php

namespace Drupal\csd_menu\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\TermInterface;

/**
 * Class MenuController.
 */
class MenuController extends ControllerBase {

  /**
   * Menu.
   *
   * @return string
   *   Return Hello string.
   */
  public function content($term) {
    var_dump($term);
    $render_output = [];
    $menu_tree = \Drupal::menuTree();
    $parmeters = $menu_tree->getCurrentRouteMenuTreeParameters('main');
    //$parmeters->setMaxDepth(1);
    $parmeters->setMaxDepth(1);
    $parmeters->setMinDepth(1);
    //var_dump($parmeters->root);
    $taxonomy_menu_prefix = 'taxonomy_menu.menu_link:taxonomy_menu.menu_link.category.';
    $parmeters->setRoot($taxonomy_menu_prefix . $term);
    $menu_items = $menu_tree->load('main', $parmeters);
    $manipulators = array(
      array('callable' => 'menu.default_tree_manipulators:checkAccess'),
      array('callable' => 'menu.default_tree_manipulators:generateIndexAndSort'),
      array('callable' => 'toolbar_menu_navigation_links'),
    );
    $menu_items = $menu_tree->transform($menu_items, $manipulators);

    foreach ($menu_items as $menu_item) {
      //var_dump($menu_item->link);
      $provider = $menu_item->link->getProvider();
      $object = $menu_item->link->getUrlObject();
      $route_parameters = $menu_item->link->getRouteParameters();
      if ($route_parameters) {
        reset($route_parameters);
        $entity_type = key($route_parameters);
        $entity_id = $route_parameters[$entity_type];
       // var_dump($entity_type .' .. ' .$entity_id);
        $entity = \Drupal::entityTypeManager()
           ->getStorage($entity_type)
           ->load($entity_id);
        $view_mode = 'teaser';
        $langcode = 'en';
        $render_controller = \Drupal::entityTypeManager()->getViewBuilder($entity->getEntityTypeId());
        $render_output[] = $render_controller->view($entity, $view_mode, $langcode);
        //$view_builder = \Drupal::entityManager()->getViewBuilder('my_entity_type');
        //$full_output = $view_builder->view($entity);
        //var_dump($entity); die();
      }
      /*$plugin_definition = $menu_item->link->getPluginDefinition();
      $plugin_id = $menu_item->link->getPluginId();
      $derivate_id = $menu_item->link->getDerivativeId();
      var_dump($plugin_definition);
      var_dump($plugin_id);
      var_dump($derivate_id);
      var_dump($menu_item);*/
    }
//var_dump($menu);
    return [
      '#theme' => 'item_list',
      '#items' => $render_output,
      '#list_type' => 'ul',
    ];
  }

}
