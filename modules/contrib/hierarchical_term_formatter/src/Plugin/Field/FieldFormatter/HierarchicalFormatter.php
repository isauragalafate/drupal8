<?php

namespace Drupal\hierarchical_term_formatter\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\Plugin\Field\FieldFormatter\EntityReferenceFormatterBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\taxonomy\Entity\Term;

/**
 * Plugin implementation of the 'rating' formatter.
 *
 * @FieldFormatter(
 *   id = "hierarchical_term_formatter",
 *   label = @Translation("Hierarchical Term Formatter"),
 *   description = @Translation("Provides hierarchical term formatters for taxonomy reference fields."),
 *   field_types = {
 *     "entity_reference"
 *   }
 * )
 */
class HierarchicalFormatter extends EntityReferenceFormatterBase {

  /**
   * Returns a list of supported display options.
   *
   * @return array
   *   An array whose keys are display machine names
   *   and whose values are their labels.
   */
  private function displayOptions() {
    return array(
      'all' => $this->t('The selected term and all of its parents'),
      'parents' => $this->t('Just the parent terms'),
      'root' => $this->t('Just the topmost/root term'),
      'nonroot' => $this->t('Any non-topmost/root terms'),
      'leaf' => $this->t('Just the selected term'),
    );
  }

  /**
   * Returns a list of supported wrapping options.
   *
   * @return array
   *   An array whose keys are wrapper machine names
   *   and whose values are their labels.
   */
  private function wrapOptions() {
    return array(
      'none' => $this->t('None'),
      'span' => $this->t('@tag elements', array('@tag' => '<span>')),
      'div' => $this->t('@tag elements', array('@tag' => '<div>')),
      'ul' => $this->t('@tag elements surrounded by a @parent_tag', array(
        '@tag' => '<li>',
        '@parent_tag' => '<ul>',
      )),
      'ol' => $this->t('@tag elements surrounded by a @parent_tag', array(
        '@tag' => '<li>',
        '@parent_tag' => '<ol>',
      )),
    );
  }

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return array(
      'display' => 'all',
      'link' => FALSE,
      'wrap' => 'none',
      'separator' => ' » ',
      'reverse' => FALSE,
    ) + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public static function isApplicable(FieldDefinitionInterface $field_definition) {
    // This formatter is only available for taxonomy terms.
    return $field_definition->getFieldStorageDefinition()->getSetting('target_type') == 'taxonomy_term';
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $form['display'] = array(
      '#title' => $this->t('Terms to display'),
      '#description' => $this->t('Choose what terms to display.'),
      '#type' => 'select',
      '#options' => $this->displayOptions(),
      '#default_value' => $this->getSetting('display'),
      '#required' => FALSE,
    );
    $form['link'] = array(
      '#title' => $this->t('Link each term'),
      '#description' => $this->t('If checked, the terms will link to their corresponding term pages.'),
      '#type' => 'checkbox',
      '#default_value' => $this->getSetting('link'),
    );
    $form['reverse'] = array(
      '#title' => $this->t('Reverse order'),
      '#description' => $this->t('If checked, children display first, parents last.'),
      '#type' => 'checkbox',
      '#default_value' => $this->getSetting('reverse'),
    );
    $form['wrap'] = array(
      '#title' => $this->t('Wrap each term'),
      '#description' => $this->t('Choose what type of html elements you would like to wrap the terms in, if any.'),
      '#type' => 'select',
      '#options' => $this->wrapOptions(),
      '#default_value' => $this->getSetting('wrap'),
      '#required' => FALSE,
    );
    $form['separator'] = array(
      '#title' => $this->t('Separator'),
      '#description' => $this->t('Enter some text or markup that will separate each term in the hierarchy. Leave blank for no separator. Example: <em>»</em>'),
      '#type' => 'textfield',
      '#size' => 20,
      '#default_value' => $this->getSetting('separator'),
      '#required' => FALSE,
    );
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $display_options = $this->displayOptions();
    $order = $this->getSetting('reverse') ? $this->t('Reverse') : $this->t('Natural');
    $summary = array();
    $summary[] = $this->t('Display: %display as %format.', array(
      '%display' => $display_options[$this->getSetting('display')],
      '%format' => $this->getSetting('link') ? $this->t('links') : $this->t('plain text'),
    ));
    $summary[] = $this->t('Wrapper: @wrapper.', array('@wrapper' => $this->getSetting('wrap')));
    $summary[] = $this->t('Order: %order.', array('%order' => $order));
    $summary[] = $this->t('Separator: "%separator".', array('%separator' => $this->getSetting('separator')));
    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = $used = array();
    foreach ($items as $delta => $item) {
      $item_value = $item->getValue();
      $tid = $item_value['target_id'];
      $storage = \Drupal::service('entity_type.manager')->getStorage('taxonomy_term');
      $term_tree = array();
      switch ($this->getSetting('display')) {
        case 'leaf':
          $term = Term::load($tid);
          $term_tree = array($term);
          break;

        case 'root':
          $parents = $storage->loadAllParents($tid);
          $term_tree = array(array_pop($parents));
          if (isset($used[$term_tree[0]->id()])) {
            $term_tree = array();
            break;
          }
          $used[$term_tree[0]->id()] = TRUE;
          break;

        case 'parents':
          $term_tree = array_reverse($storage->loadAllParents($tid));
          array_pop($term_tree);
          break;

        case 'nonroot':
          $parents = $storage->loadAllParents($tid);
          if (count($parents) > 1) {
            $term_tree = array_reverse($parents);
            // This gets rid of the first topmost term.
            array_shift($term_tree);
            // Terms can have multiple parents. Now remove any remaining topmost
            // terms.
            foreach ($term_tree as $key => $term) {
              $has_parents = $storage->loadAllParents($term->id());
              // This has no parents and is topmost.
              if (empty($has_parents)) {
                unset($term_tree[$key]);
              }
            }
          }
          break;

        default:
          $term_tree = array_reverse($storage->loadAllParents($tid));
          break;
      }

      // Change output order if Reverse order is checked.
      if ($this->getSetting('reverse') && count($term_tree)) {
        $term_tree = array_reverse($term_tree);
      }

      // Remove empty elements caused by discarded items.
      $term_tree = array_filter($term_tree);

      if (!$term_tree) {
        break;
      }

      $elements[$delta] = array(
        '#theme' => 'hierarchical_term_formatter',
        '#terms' => $term_tree,
        '#wrapper' => $this->getSetting('wrap'),
        '#separator' => $this->getSetting('separator'),
        '#link' => ($this->getSetting('link')) ? TRUE : FALSE,
      );
    }

    return $elements;
  }

}
