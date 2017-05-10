<?php
/**
 * @file
 * Contains \Drupal\sevilla_fc_custom\Form\HelloConfigForm.
 */

namespace Drupal\sevilla_fc_custom\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Sevilla FC settings.
 */
class SevillaFcCustomConfigForm extends ConfigFormBase {
  /**
   * {@inheritdoc}
   */
  public function getFormID() {
    return 'sevilla_fc_custom_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'sevilla_fc_custom.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('sevilla_fc_custom.settings');
    $video_provider_url = $config->get('video_provider_url');

    $form['media'] = array(
      '#type' => 'fieldset',
      '#title' => t('Media configuration'),
      '#collapsible' => FALSE,
      '#collapsed' => FALSE,
    );

    $form['media']['sevilla_fc_custom_video_provider_url'] = array(
      '#type' => 'url',
      '#title' => $this->t('Video provider Url'),
      '#default_value' => $video_provider_url,
      '#description' => $this->t('Choose the base url to embed the Sevilla FC videos.'),
    );

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = \Drupal::service('config.factory')->getEditable('sevilla_fc_custom.settings');
    $config->set('video_provider_url', $form_state->getValue('sevilla_fc_custom_video_provider_url'))
      ->save();
    
    parent::submitForm($form, $form_state);
  }
}