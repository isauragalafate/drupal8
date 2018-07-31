<?php

namespace Drupal\csd_menu\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Cache\Cache;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Url;
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
 *  admin_label = @Translation("CSD Main navigation"),
 *  category = @Translation("Menus")
 * )
 */
class MenuBlock extends BlockBase implements ContainerFactoryPluginInterface {
  /**
   * The menu link tree service.
   *
   * @var \Drupal\Core\Menu\MenuLinkTreeInterface
   */
  protected $menuTree;

  /**
   * Constructs a new SystemMenuBlock.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param array $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Menu\MenuLinkTreeInterface $menu_tree
   *   The menu tree service.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, MenuLinkTreeInterface $menu_tree) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->menuTree = $menu_tree;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('menu.link_tree')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = $menu_root = [];
    $menu_name = 'main';
    $level = 2;
    $depth = 1;
    $menu_tree = \Drupal::menuTree();
    $parameters = $menu_tree->getCurrentRouteMenuTreeParameters($menu_name);
    $parameters->setMaxDepth(9);
    $parameters->setMinDepth($level);
    $parameters->onlyEnabledLinks();

    if ($depth > 0) {
      $parameters->setMaxDepth(min($level + $depth - 1, $menu_tree->maxDepth()));
    }

    if (count($parameters->activeTrail) >= $level) {
      // Active trail array is child-first. Reverse it, and pull the new menu
      // root based on the parent of the configured start level.
      $menu_trail_ids = array_reverse(array_values($parameters->activeTrail));
      $menu_root_id = $menu_trail_ids[count($menu_trail_ids) - 2];
      $menu_root_id_explode = explode(':', $menu_root_id);
      if (isset($menu_root_id_explode[1])) {
        $parameters->setRoot($menu_root_id)->setMinDepth(1);
        $menu_root_uuid = $menu_root_id_explode[1];
        $menu_root_entity = \Drupal::service('entity.repository')
          ->loadEntityByUuid('menu_link_content', $menu_root_uuid);
        $menu_root['title'] = $menu_root_entity->getTitle();
        $menu_root_url = $menu_root_entity->getUrlObject();
        $menu_root_link_options = [
          'attributes' => [
            'class' => [
              'csd-menu-main-root-link',
            ],
            'title' => $this->t('Go to the previous level')
          ],
        ];
        $menu_root_url->setOptions($menu_root_link_options);
        $menu_root['link'] = Link::fromTextAndUrl($this->t('Previous'), $menu_root_url);
        if ($depth > 0) {
          $parameters->setMaxDepth(min($level - 1 + $depth - 1, $this->menuTree->maxDepth()));
        }
      }
    }
    else {
      return [];
    }

    if (!empty($menu_root)) {
      $tree = $menu_tree->load($menu_name, $parameters);
      $manipulators = array(
        array('callable' => 'menu.default_tree_manipulators:checkAccess'),
        array('callable' => 'menu.default_tree_manipulators:generateIndexAndSort'),
      );
      $tree = $menu_tree->transform($tree, $manipulators);

      $build = $menu_tree->build($tree);
      $build['#theme'] = 'csd_menu_main';
      $build['#menu_root'] = $menu_root;
    }

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
    $cache_tags = parent::getCacheTags();
    $cache_tags[] = 'config:system.menu.main';
    return $cache_tags;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    $menu_name = 'main';
    return Cache::mergeContexts(parent::getCacheContexts(), ['route.menu_active_trails:' . $menu_name]);
  }
}
