<?php

/**
 * @file
 * Drupal Toolkit custom drush commands.
 */

/**
 * Implements hook_drush_command().
 */
function drupal_toolkit_drush_command() {
  $items = [];

  $items['clean-paragraph'] = [
    'description' => 'Clean the data stored in a specific paragraph type.',
    'arguments' => [
      'paragraph_type' => 'The machine name of a specific paragraph type.',
    ],
    'drupal dependencies' => ['drupal_toolkit'],
    'aliases' => ['cp'],
  ];

  return $items;
}

/**
 * Command handler.
 *
 * @param string $paragraph_type
 *   The machine name of the paragraph type.
 */
function drush_drupal_toolkit_clean_paragraph($paragraph_type = '') {
  if ($paragraph_type) {
    $this->output()->writeln("Searching for {$paragraph_type} data ...");
    callback_clean_paragraph_type($paragraph_type);
  }
  else {
    $this->output()->writeln('Specify the paragraph type like in the follow example of usage: "drush clean-paragraph {paragraph_type}"');
  }
}

/**
 * Clean the data of the paragraph type stored in the database.
 *
 * Callback for drush_drupal_toolkit_clean_paragraph().
 *
 * @param string $paragraph_type
 *   The machine name of the paragraph type.
 */
function callback_clean_paragraph_type($paragraph_type) {
  if (!empty($paragraph_type)) {
    // Database connection.
    $database = Drupal::database();
    $query = $database->select('paragraphs_item_field_data', 'pd');
    $query->fields('pd', ['id']);
    $query->condition('pd.type', $paragraph_type);
    $paragraph_ids = $query->execute()->fetchCol();

    if (!empty($paragraph_ids)) {
      foreach ($paragraph_ids as $paragraph_id) {
        $paragraph = \Drupal::entityTypeManager()->getStorage('paragraph')->loadByProperties(['id' => $paragraph_id]);

        if (!empty($paragraph[$paragraph_id])) {
          // Cleaning data stored in the database.
          $paragraph[$paragraph_id]->delete();

          $message = t("The paragraph type '@paragraph_type' with ID @paragraph_id was deleted successfully.", [
            '@paragraph_type' => $paragraph_type,
            '@paragraph_id' => $paragraph_id,
          ]);
        }
        else {
          $message = t("Warning: The paragraph type '@paragraph_type' with ID @paragraph_id was not deleted successfully.", [
            '@paragraph_type' => $paragraph_type,
            '@paragraph_id' => $paragraph_id,
          ]);
        }

        $this->output()->writeln($message);
      }
    }
    else {
      $message = t("The paragraph type @paragraph_type has not data.", ['@paragraph_type' => $paragraph_type]);
      $this->output()->writeln($message);
    }
  }
}
