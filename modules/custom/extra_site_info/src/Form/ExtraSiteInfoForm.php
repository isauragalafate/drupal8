<?php
/**
 * Created by PhpStorm.
 * User: igalafate
 * Date: 27/07/16
 * Time: 0:34
 */
namespace Drupal\extra_site_info\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\UrlHelper;
use Drupal\system\Form\SiteInformationForm;

/**
 * Configure site information settings for the site with extra information.
 */
class ExtraSiteInfoForm extends SiteInformationForm {


  public function buildForm(array $form, FormStateInterface $form_state) { die('HOLAA');
  $site_config = $this->config('system.site');
    $site_mail = $site_config->get('mail');
    if (empty($site_mail)) {
      $site_mail = ini_get('sendmail_from');
    }

    $form['site_information'] = array(
      '#type' => 'details',
      '#title' => t('ISAURA7'),
      '#open' => TRUE,
    );
    $form['site_information']['site_name'] = array(
      '#type' => 'textfield',
      '#title' => t('Site name'),
      '#default_value' => $site_config->get('name'),
      '#required' => TRUE,
    );
    $form['site_information']['site_slogan'] = array(
      '#type' => 'textfield',
      '#title' => t('Slogan'),
      '#default_value' => $site_config->get('slogan'),
      '#description' => t("How this is used depends on your site's theme."),
    );
    $form['site_information']['site_mail'] = array(
      '#type' => 'email',
      '#title' => t('Email address'),
      '#default_value' => $site_mail,
      '#description' => t("The <em>From</em> address in automated emails sent during registration and new password requests, and other notifications. (Use an address ending in your site's domain to help prevent this email being flagged as spam.)"),
      '#required' => TRUE,
    );
    $form['front_page'] = array(
      '#type' => 'details',
      '#title' => t('Front page'),
      '#open' => TRUE,
    );
    $front_page = $site_config->get('page.front') != '/user/login' ? $this->aliasManager->getAliasByPath($site_config->get('page.front')) : '';
    $form['front_page']['site_frontpage'] = array(
      '#type' => 'textfield',
      '#title' => t('Default front page'),
      '#default_value' => $front_page,
      '#size' => 40,
      '#description' => t('Optionally, specify a relative URL to display as the front page. Leave blank to display the default front page.'),
      '#field_prefix' => $this->requestContext->getCompleteBaseUrl(),
    );
    $form['error_page'] = array(
      '#type' => 'details',
      '#title' => t('Error pages'),
      '#open' => TRUE,
    );
    $form['error_page']['site_403'] = array(
      '#type' => 'textfield',
      '#title' => t('Default 403 (access denied) page'),
      '#default_value' => $site_config->get('page.403'),
      '#size' => 40,
      '#description' => t('This page is displayed when the requested document is denied to the current user. Leave blank to display a generic "access denied" page.'),
    );
    $form['error_page']['site_404'] = array(
      '#type' => 'textfield',
      '#title' => t('Default 404 (not found) page'),
      '#default_value' => $site_config->get('page.404'),
      '#size' => 40,
      '#description' => t('This page is displayed when no other content matches the requested document. Leave blank to display a generic "page not found" page.'),
    );
*/
    return parent::buildForm($form, $form_state);
  }

}