<?php

namespace Drupal\drupal_toolkit;

/**
 * Class DrupalToolkit.
 *
 * @package Drupal\drupal_toolkit
 */
class DrupalToolkit {

  /**
   * Constructor.
   */
  public function __construct() {
    // Initialize variables.
  }

  /**
   * Get a field value given a field object.
   *
   * @param object $field
   *   Field object to get the plain value of it.
   *
   * @return mixed
   *   Field value.
   */
  public static function getFieldValue($field) {
    $parsed_value = '';

    if (is_object($field)) {
      $value = $field->getValue();
      if ($value) {
        if (isset($value[0]['value'])) {
          $parsed_value = $value[0]['value'];
        }
        elseif (isset($value[0][0]['value'])) {
          $parsed_value = $value[0][0]['value'];
        }
      }
    }
    else {
      $value = reset($field);
      $parsed_value = reset($value);
    }
    return $parsed_value;
  }

  /**
   * Get a taxonomy term entity by its vid and languge given.
   *
   * @param string $vid
   *   Machine name of the taxonomy.
   * @param string $langcode
   *   Code of the language we want the terms be translated.
   * @param int $parent
   *   Parent tid.
   * @param string $max_depth
   *   Maximum number of children level given.
   * @param bool $load_entities
   *   Return an array of entities.
   *
   * @return array
   *   Entities of taxonomy terms.
   */
  public static function getTaxonomyTermsByLanguage($vid, $langcode, $parent = 0, $max_depth = NULL, $load_entities = FALSE) {
    $taxonomy_terms = \Drupal::entityTypeManager()->getStorage('taxonomy_term')
      ->loadTree($vid, $parent, $max_depth, $load_entities);

    if ($load_entities) {
      $taxonomy_terms_translated = [];

      foreach ($taxonomy_terms as $taxonomy_term) {
        $taxonomy_term_translated = \Drupal::service('entity.repository')
          ->getTranslationFromContext($taxonomy_term, $langcode);
        array_push($taxonomy_terms_translated, $taxonomy_term_translated);
      }
      return $taxonomy_terms_translated;
    }
    else {
      return $taxonomy_terms;
    }
  }

  /**
   * Get a taxonomy term entity by its tid and languge given.
   *
   * @param int $tid
   *   Term ID of the taxonomy.
   * @param string $langcode
   *   Code of the language we want the terms be translated.
   *
   * @return array
   *   Entities of taxonomy terms.
   */
  public static function getTaxonomyTermByLanguage($tid, $langcode) {
    $taxonomy_term_translated = NULL;
    $taxonomy_term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')
      ->load($tid);

    if ($taxonomy_term) {
      $taxonomy_term_translated = \Drupal::service('entity.repository')
        ->getTranslationFromContext($taxonomy_term, $langcode);
    }

    return $taxonomy_term_translated;
  }

  /**
   * Convert an xml from its URL to a SimpleXMLElement object.
   *
   * @param string $url
   *   Url of the web service.
   *
   * @return SimpleXMLElement
   *   Return the SimpleXMLElement object.
   */
  public static function getXmlElement($url) {
    $context = stream_context_create(['http' => ['header' => 'Accept: application/xml']]);
    $xml = NULL;
    if ($url) {
      $xml = file_get_contents($url, FALSE, $context);
      $xml = simplexml_load_string($xml);
    }
    return $xml;
  }

  /**
   * Get value of an XML element.
   *
   * @param object $xml_element
   *   SimpleXMLElement object.
   * @param string $type
   *   XML value type (attribute, element).
   * @param string $element
   *   XML element name to be retrieved.
   *
   * @return string
   *   Return the value.
   */
  public static function getXmlElementValue($xml_element, $type, $element) {
    $xml_element_value = '';

    if (is_object($xml_element)) {
      switch ($type) {
        case 'element':
          $xml_element_value = (string) $xml_element->$element;
          break;

        case 'attribute':
          if (isset($xml_element[$element])) {
            $xml_element_value = (string) $xml_element[$element];
          }
          else {
            foreach ($xml_element as $child) {
              if ($child['name'] == $element) {
                $xml_element_value = $child['value'];
              }
            }
          }
          break;
      }
    }
    return $xml_element_value;
  }

  /**
   * Execute the GET connetion to a web service given.
   *
   * @param string $url
   *   Url of the web service.
   * @param string $options
   *   Options of the web service.
   * @param bool $decode
   *   Options of the web service.
   *
   * @return string
   *   Return the request of doing the GET if the connection success or array()
   *   if there was a connection problem.
   */
  public static function getWebService($url, $options, $decode = TRUE) {
    $result = [];
    try {
      $client = \Drupal::service('http_client');
      $result = $client->get($url, $options);

      if (is_object($result) && $result->getStatusCode() === 200) {
        if ($decode) {
          $output = $result->getBody();

          $result = json_decode($output);
          if (isset($results[0]) && !empty($results[0])) {
            $result = $results[0];
          }
        }
      }
      else {
        $message = t('An error occured connecting to $url');
        \Drupal::logger('iac_observatory')->notice($message);
      }
    }
    catch (\RuntimeException $e) {
      $args = ['@url' => $url, '%message' => $e->getMessage()];
      $message = t('An error occured connecting to @url: %message.', $args);
      \Drupal::logger('iac_observatory')->notice($message);
    }

    return $result;
  }

}
