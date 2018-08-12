<?php

namespace Drupal\drupal_toolkit_copyright\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'Copyright' block.
 *
 * @Block(
 *   id = "drupal_toolkit_copyright_block",
 *   admin_label = @Translation("Toolkit: Copyright block"),
 *   category = @Translation("Blocks"),
 * )
 */
class CopyrightBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $default_config = \Drupal::config('drupal_toolkit_copyright.settings');

    return [
      'statement_text' => $default_config->get('statement_text'),
      'option_selector' => $default_config->get('option_selector'),
      'year' => date('Y'),
      'start_year' => '',
      'end_year' => date('Y'),
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();
    $selector = 'settings[copyright][option_selector]';

    $form['copyright'] = [
      '#type' => 'details',
      '#title' => $this->t('Copyright settings'),
      '#open' => TRUE,
    ];

    $form['copyright']['statement_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Copyright statement text'),
      '#default_value' => $config['statement_text'],
    ];

    $form['copyright']['option_selector'] = [
      '#type' => 'radios',
      '#title' => $this->t('Configuration to use'),
      '#default_value' => $config['option_selector'],
      '#options' => [
        'none' => $this->t("Don't show year"),
        'single' => $this->t('Single year'),
        'range' => $this->t('Range of years'),
      ],
    ];

    $form['copyright']['year'] = [
      '#type' => 'number',
      '#title' => $this->t('Copyright year'),
      '#min' => '1970',
      '#max' => date('Y'),
      '#default_value' => $config['year'],
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['value' => 'single'],
        ],
        'required' => [
          ":input[name='{$selector}']" => ['value' => 'single'],
        ],
      ],
    ];

    $form['copyright']['start_year'] = [
      '#type' => 'number',
      '#title' => $this->t('Copyright start year'),
      '#min' => '1970',
      '#max' => date('Y'),
      '#default_value' => $config['start_year'],
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['value' => 'range'],
        ],
        'required' => [
          ":input[name='{$selector}']" => ['value' => 'range'],
        ],
      ],
    ];

    $form['copyright']['end_year'] = [
      '#type' => 'number',
      '#title' => $this->t('Copyright end year'),
      '#min' => '1970',
      '#max' => date('Y'),
      '#default_value' => $config['end_year'],
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['value' => 'range'],
        ],
        'required' => [
          ":input[name='{$selector}']" => ['value' => 'range'],
        ],
      ],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);

    $values = $form_state->getValues();
    foreach ($values['copyright'] as $key => $value) {
      $this->setConfigurationValue($key, $value);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $config = $this->getConfiguration();
    $token_service = \Drupal::token();

    // Build the proper output according to the selected configuration.
    switch ($config['option_selector']) {
      case 'none':
        $copyright_year = '';
        break;

      case 'range':
        $copyright_year = "{$config['start_year']} - {$config['end_year']}";
        break;

      default:
        $copyright_year = $config['year'];
    }

    // Render block output.
    $separator = (!empty($config['statement_text']) && !empty($copyright_year)) ? ' - ' : '';
    $statement_text = $token_service->replace($config['statement_text']);
    $this->t('@statement_text', ['@statement_text' => $statement_text]);
    $build['copyright_block'] = [
      '#markup' => '@' . $copyright_year . $separator . $statement_text,
      '#theme_wrappers' => [
        'container' => [
          '#attributes' => ['class' => ['copyright-block']],
        ],
      ],
    ];

    return $build;
  }

}
