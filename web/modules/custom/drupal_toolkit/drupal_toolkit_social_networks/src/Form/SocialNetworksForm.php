<?php

namespace Drupal\drupal_toolkit_social_networks\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * General settings for this site.
 */
class SocialNetworksForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'drupal_toolkit_social_networks_form';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['drupal_toolkit_social_networks.social_networks'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('drupal_toolkit_social_networks.social_networks');
    $social_networks = $config->get('social_networks');

    $form['social_networks'] = [
      '#type' => 'details',
      '#title' => $this->t('Social networks'),
      '#open' => TRUE,
    ];

    $form['social_networks']['rss'] = [
      '#type' => 'textfield',
      '#title' => $this->t('RSS'),
      '#default_value' => $social_networks['rss'],
      '#description' => $this->t('RSS source.'),
    ];

    $form['social_networks']['twitter'] = [
      '#type' => 'url',
      '#title' => $this->t('Twitter'),
      '#default_value' => $social_networks['twitter'],
      '#description' => $this->t('Twitter URL.'),
    ];

    $form['social_networks']['facebook'] = [
      '#type' => 'url',
      '#title' => $this->t('Facebook'),
      '#default_value' => $social_networks['facebook'],
      '#description' => $this->t('Facebook URL.'),
    ];

    $form['social_networks']['instagram'] = [
      '#type' => 'url',
      '#title' => $this->t('Instagram'),
      '#default_value' => $social_networks['instagram'],
      '#description' => $this->t('Instagram URL.'),
    ];

    $form['social_networks']['linkedin'] = [
      '#type' => 'url',
      '#title' => $this->t('LinkedIn'),
      '#default_value' => $social_networks['linkedin'],
      '#description' => $this->t('LinkedIn URL.'),
    ];

    $form['social_networks']['flickr'] = [
      '#type' => 'url',
      '#title' => $this->t('Flickr'),
      '#default_value' => $social_networks['flickr'],
      '#description' => $this->t('Flickr URL.'),
    ];

    $form['social_networks']['youtube'] = [
      '#type' => 'textfield',
      '#title' => $this->t('YouTube'),
      '#default_value' => $social_networks['youtube'],
      '#description' => $this->t('YouTube URL.'),
    ];

    $form['social_networks']['vimeo'] = [
      '#type' => 'url',
      '#title' => $this->t('Vimeo'),
      '#default_value' => $social_networks['vimeo'],
      '#description' => $this->t('Vimeo URL.'),
    ];

    $form['social_networks']['dailymotion'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Dailymotion'),
      '#default_value' => $social_networks['dailymotion'],
      '#description' => $this->t('Dailymotion URL.'),
    ];

    $form['social_networks']['blog'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Blog'),
      '#default_value' => $social_networks['blog'],
      '#description' => $this->t('Blog URL.'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('drupal_toolkit_social_networks.social_networks');

    $social_networks = $config->get('social_networks');
    foreach ($social_networks as $key => $value) {
      $config->set("social_networks.{$key}", $form_state->getValue($key));
    }

    $config->save();

    parent::submitForm($form, $form_state);
  }

}
