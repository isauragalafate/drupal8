<?php
/**
 * @file
 * Contains Drupal\page_manager\PageManagerHelper.
 */

namespace Drupal\page_manager;

use Drupal\Core\Utility\Token;

/**
 * Helper service for page_manager.
 */
class PageManagerHelper {

  /**
   * The token service.
   *
   * @var \Drupal\Core\Utility\Token
   */
  protected $token;

  /**
   * Constructs a new PageManagerHelper.
   *
   * @param \Drupal\Core\Utility\Token $token
   *   The token service.
   */
  public function __construct(Token $token) {
    $this->token = $token;
  }

  /**
   * Title callback for page variants.
   *
   * @param \Drupal\page_manager\PageVariantInterface $page_manager_page_variant
   *   The PageVariant entity.
   *
   * @return string
   *   The title of the page variant after replacing any tokens.
   *
   * @see \Drupal\page_manager\Routing\PageManagerRoutes::alterRoutes()
   */
  public function getVariantTitle(PageVariantInterface $page_manager_page_variant) {
    return $this->getTitle($page_manager_page_variant->getTitle(), $page_manager_page_variant->getContexts());
  }

  /**
   * Gets the title using given context and replaces tokens.
   *
   * @param string $title
   *   The title string.
   * @param \Drupal\Core\Plugin\Context\ContextInterface[] $contexts
   *   An array of set context values, keyed by context name.
   *
   * @return string
   *   The title after replacing any tokens for given context.
   */
  public function getTitle($title, array $contexts) {
    return $this->token->replace($title, $this->getContextAsTokenData($contexts));
   }

  /**
   * Returns available context as token data.
   *
   * @param \Drupal\Core\Plugin\Context\ContextInterface[] $contexts
   *   An array of set context values, keyed by context name.
   *
   * @return array
   *   An array with token data values keyed by token type.
   */
  protected function getContextAsTokenData(array $contexts) {
    $data = [];
    foreach ($contexts as $context) {
      // @todo Simplify this when token and typed data types are unified in
      //   https://drupal.org/node/2163027.
      if (strpos($context->getContextDefinition()->getDataType(), 'entity:') === 0) {
        $token_type = substr($context->getContextDefinition()->getDataType(), 7);
        if ($token_type == 'taxonomy_term') {
          $token_type = 'term';
        }
        $data[$token_type] = $context->getContextValue();
      }
    }
    return $data;
  }

}
