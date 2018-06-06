<?php

namespace Drupal\extra_site_info\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * @Block(
 *   id = "extra_site_info",
 *   admin_label = @Translation("Extra Site Info block"),
 * )
 */
class ExtraSiteInfoBlock extends BlockBase implements BlockPluginInterface{
  public function build() {
    $config = $this->getConfiguration();

    if (!empty($config['name'])) {
      $name = $config['name'];
    }
    else {
      $name = $this->t('to no one');
    }
    return array(
      '#markup' => $this->t('Extra Site Info, @name!', array(
        '@name' => $name,
      )),
    );
  }

  /**
   * {@inheritdoc}
   * Loaded when the module is installed
   */
  public function defaultConfiguration() {
    $default_config = \Drupal::config('extra_site_info.settings');
    return array(
      'name' => $default_config->get('extra_site_info.name'),
    );
  }

  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);

    $config = $this->getConfiguration();

    $form['extra_site_info_block_name'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('Who'),
      '#description' => $this->t('Who do you want to say hello to?'),
      '#default_value' => isset($config['name']) ? $config['name'] : '',
    );

    return $form;
  }

  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->setConfigurationValue('name', $form_state->getValue('extra_site_info_block_name'));
  }

}
?>