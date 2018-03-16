<?php

namespace Drupal\manage_display\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldFormatter\BasicStringFormatter;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Routing\LinkGeneratorTrait;
use Drupal\Core\Template\Attribute;

/**
 * A field formatter for entity titles.
 *
 * @FieldFormatter(
 *   id = "title",
 *   label = @Translation("Title"),
 *   field_types = {
 *     "string"
 *   }
 * )
 */
class TitleFormatter extends BasicStringFormatter {

  use LinkGeneratorTrait;

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode = NULL) {
    if ($this->getSetting('page') == 'block') {
      $output['#page_title'] = parent::viewElements($items, $langcode);
    }
    else {
      $output['#page_title'] = [];
    }

    $attributes = new Attribute();
    // @todo delete this next bit?
    if ($this->getSetting('tag') == 'h1') {
      $attributes->addClass('title');
      $attributes->addClass('replaced-title');
      $attributes->setAttribute('id', 'page-title');
    }

    $classes = $this->getSetting('classes');
    if (!empty($classes)) {
      $attributes->addClass($classes);
    }

    $parent = $items->getParent()->getValue();
    foreach ($items as $item) {
      $text = $item->getValue()['value'];
      if ($this->getSetting('linked')) {
        $text = $this->l($text, $parent->toUrl());
      }
      $output[] = [
        '#type' => 'html_tag',
        '#tag' => $this->getSetting('tag'),
        '#attributes' => $attributes->toArray(),
        '#value' => $text,
      ];
    }
    return $output;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $heading_options = [
      'span' => 'span',
      'div' => 'div',
    ];
    foreach (range(1, 5) as $level) {
      $heading_options['h' . $level] = 'H' . $level;
    }
    $page_options = [
      'block' => $this->t('Use title block'),
      'content' => $this->t('Hide block and use format'),
    ];

    $form['page'] = [
      '#title' => $this->t('Page'),
      '#type' => 'select',
      '#description' => $this->t('Behavior when the entity is shown as a page.'),
      '#options' => $page_options,
      '#default_value' => $this->getSetting('page'),
    ];
    $form['tag'] = [
      '#title' => $this->t('Tag'),
      '#type' => 'select',
      '#description' => $this->t('Select the tag which will be wrapped around the title.'),
      '#options' => $heading_options,
      '#default_value' => $this->getSetting('tag'),
    ];
    $form['linked'] = [
      '#title' => $this->t('Link to the Content'),
      '#type' => 'checkbox',
      '#description' => $this->t('Wrap the title with a link to the content.'),
      '#default_value' => $this->getSetting('linked'),
    ];
    $form['classes'] = [
      '#title' => $this->t('Classes'),
      '#type' => 'textfield',
      '#default_value' => $this->getSetting('classes'),
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'page' => 'block',
      'tag' => 'h2',
      'linked' => '1',
      'classes' => '',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $settings = $this->getSettings();
    $page_setting = [
      'block' => $this->t('On own page use title block'),
      'content' => $this->t('On own page hide title block and use format'),
    ];
    $summary[] = $page_setting[$settings['page']];
    $display = $this->t('Display as @tag', ['@tag' => $settings['tag']]);
    if ($settings['linked']) {
      $display .= $this->t(', linked to content');
    }
    $summary[] = $display;
    if (!empty($settings['classes'])) {
      $summary[] = $this->t('Classes: @classes', ['@classes' => $settings['classes']]);
    }

    return $summary;
  }

}
