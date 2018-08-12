<?php

namespace Drupal\drupal_toolkit_social_networks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\Component\Utility\UrlHelper;

/**
 * Provides a 'Social networks' block.
 *
 * @Block(
 *   id = "drupal_toolkit_social_networks_block",
 *   admin_label = @Translation("Toolkit: Social Networks"),
 *   category = @Translation("Blocks")
 * )
 */
class SocialNetworksBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'social_networks' => [
        'rss' => '',
        'twitter' => '',
        'facebook' => '',
        'instagram' => '',
        'linkedin' => '',
        'flickr' => '',
        'youtube' => '',
        'vimeo' => '',
        'dailymotion' => '',
        'blog' => '',
      ],
      'settings' => 1,
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);

    $config = $this->getConfiguration();
    $selector = 'settings[social_networks][settings]';

    $form['social_networks'] = [
      '#type' => 'details',
      '#title' => $this->t('Social networks'),
      '#open' => TRUE,
    ];

    $form['social_networks']['settings'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Use default configuration'),
      '#default_value' => $config['settings'],
      '#description' => $this->t('If you want a custom configuration, uncheck this option.'),
    ];

    $form['social_networks']['rss'] = [
      '#type' => 'textfield',
      '#title' => $this->t('RSS'),
      '#default_value' => $config['social_networks']['rss'],
      '#description' => $this->t('RSS source.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['twitter'] = [
      '#type' => 'url',
      '#title' => $this->t('Twitter'),
      '#default_value' => $config['social_networks']['twitter'],
      '#description' => $this->t('Twitter URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['facebook'] = [
      '#type' => 'url',
      '#title' => $this->t('Facebook'),
      '#default_value' => $config['social_networks']['facebook'],
      '#description' => $this->t('Facebook URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['instagram'] = [
      '#type' => 'url',
      '#title' => $this->t('Instagram'),
      '#default_value' => $config['social_networks']['instagram'],
      '#description' => $this->t('Instagram URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['linkedin'] = [
      '#type' => 'url',
      '#title' => $this->t('LinkedIn'),
      '#default_value' => $config['social_networks']['linkedin'],
      '#description' => $this->t('LinkedIn URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['flickr'] = [
      '#type' => 'url',
      '#title' => $this->t('Flickr'),
      '#default_value' => $config['social_networks']['flickr'],
      '#description' => $this->t('Flickr URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['youtube'] = [
      '#type' => 'url',
      '#title' => $this->t('YouTube'),
      '#default_value' => $config['social_networks']['youtube'],
      '#description' => $this->t('YouTube URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['vimeo'] = [
      '#type' => 'url',
      '#title' => $this->t('Vimeo'),
      '#default_value' => $config['social_networks']['vimeo'],
      '#description' => $this->t('Vimeo URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['dailymotion'] = [
      '#type' => 'url',
      '#title' => $this->t('Dailymotion'),
      '#default_value' => $config['social_networks']['dailymotion'],
      '#description' => $this->t('Dailymotion URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
        ],
      ],
    ];

    $form['social_networks']['blog'] = [
      '#type' => 'url',
      '#title' => $this->t('Blog'),
      '#default_value' => $config['social_networks']['blog'],
      '#description' => $this->t('Blog URL.'),
      '#states' => [
        'visible' => [
          ":input[name='{$selector}']" => ['checked' => FALSE],
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

    // Extract 'settings' value from 'social_networks' array.
    $settings = $form_state->getValue(['social_networks', 'settings']);
    $this->setConfigurationValue('settings', $settings);

    $values = $form_state->getValues();
    unset($values['social_networks']['settings']);
    foreach ($values['social_networks'] as $social_network => $value) {
      $this->configuration['social_networks'][$social_network] = $form_state->getValue(['social_networks', $social_network]);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $config = $this->getConfiguration();
    $default_config = \Drupal::config('drupal_toolkit_social_networks.social_networks')->get('social_networks');

    $data = ($config['settings']) ? $default_config : $config['social_networks'];

    $social_networks = [];
    foreach ($data as $key => $value) {
      $schema = '';
      if (!empty($value)) {
        if ($key == 'rss') {
          $schema = 'internal:/';
        }
        $url = Url::fromUri($schema . $value, ['attributes' => ['class' => $key, 'target' => '_blank']]);
        $social_networks[] = Link::fromTextAndUrl($value, $url);
      }
    }

    $build['social_networks'] = [
      '#theme' => 'item_list',
      '#items' => $social_networks,
      '#attributes' => ['class' => ['social-networks']],
    ];

    return $build;
  }

}
