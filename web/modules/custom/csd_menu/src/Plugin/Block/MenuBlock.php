<?php

namespace Drupal\csd_menu\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Menu\MenuLinkTreeInterface;
use Drupal\Core\Menu\DefaultMenuLinkTreeManipulators;
use Drupal\Core\Menu\MenuActiveTrailInterface;
use Drupal\Core\Menu\MenuParentFormSelectorInterface;
use Drupal\Core\Menu\MenuTreeStorageInterface;
use Drupal\Core\Menu\StaticMenuLinkOverridesInterface;
use Drupal\Core\Link;

/**
 * Provides a 'MenuBlock' block.
 *
 * @Block(
 *  id = "csd_menu_bock",
 *  admin_label = @Translation("Menu block"),
 * )
 */
class MenuBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Drupal\Core\Menu\MenuLinkTreeInterface definition.
   *
   * @var \Drupal\Core\Menu\MenuLinkTreeInterface
   */
  protected $menuLinkTree;
  /**
   * Drupal\Core\Menu\DefaultMenuLinkTreeManipulators definition.
   *
   * @var \Drupal\Core\Menu\DefaultMenuLinkTreeManipulators
   */
  protected $menuDefaultTreeManipulators;
  /**
   * Drupal\Core\Menu\MenuActiveTrailInterface definition.
   *
   * @var \Drupal\Core\Menu\MenuActiveTrailInterface
   */
  protected $menuActiveTrail;
  /**
   * Drupal\Core\Menu\MenuParentFormSelectorInterface definition.
   *
   * @var \Drupal\Core\Menu\MenuParentFormSelectorInterface
   */
  protected $menuParentFormSelector;
  /**
   * Drupal\Core\Menu\MenuTreeStorageInterface definition.
   *
   * @var \Drupal\Core\Menu\MenuTreeStorageInterface
   */
  protected $menuTreeStorage;
  /**
   * Drupal\Core\Menu\StaticMenuLinkOverridesInterface definition.
   *
   * @var \Drupal\Core\Menu\StaticMenuLinkOverridesInterface
   */
  protected $menuLinkStaticOverrides;
  /**
   * Constructs a new MenuBlock object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param string $plugin_definition
   *   The plugin implementation definition.
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    MenuLinkTreeInterface $menu_link_tree, 
    DefaultMenuLinkTreeManipulators $menu_default_tree_manipulators,
    MenuActiveTrailInterface $menu_active_trail,
    MenuParentFormSelectorInterface $menu_parent_form_selector,
    MenuTreeStorageInterface $menu_tree_storage,
    StaticMenuLinkOverridesInterface $menu_link_static_overrides
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->menuLinkTree = $menu_link_tree;
    $this->menuDefaultTreeManipulators = $menu_default_tree_manipulators;
    $this->menuActiveTrail = $menu_active_trail;
    $this->menuParentFormSelector = $menu_parent_form_selector;
    $this->menuTreeStorage = $menu_tree_storage;
    $this->menuLinkStaticOverrides = $menu_link_static_overrides;
  }
  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('menu.link_tree'),
      $container->get('menu.default_tree_manipulators'),
      $container->get('menu.active_trail'),
      $container->get('menu.parent_form_selector'),
      $container->get('menu.tree_storage'),
      $container->get('menu_link.static.overrides')
    );
  }
  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csd_menu_bock']['#markup'] = 'Implement MenuBlock.';

    $menu_name = 'main';
    $menu_tree = \Drupal::menuTree();
    $parameters = $menu_tree->getCurrentRouteMenuTreeParameters($menu_name);
    $parameters->setMinDepth(1);
    //Delete comments to have only enabled links
    //$parameters->onlyEnabledLinks();

    $tree = $menu_tree->load($menu_name, $parameters);
    $manipulators = array(
      array('callable' => 'menu.default_tree_manipulators:checkAccess'),
      array('callable' => 'menu.default_tree_manipulators:generateIndexAndSort'),
    );
    $tree = $menu_tree->transform($tree, $manipulators);
    $list = [];

    foreach ($tree as $item) {
      $title = $item->link->getTitle();
      $url = $item->link->getUrlObject();
      $list[] = Link::fromTextAndUrl($title, $url);
    }

    $build['sections'] = array(
      '#theme' => 'item_list',
      '#items' => $list,
    );

    return $build;
  }

}
