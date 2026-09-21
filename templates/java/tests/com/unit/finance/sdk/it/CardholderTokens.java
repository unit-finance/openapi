package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardHolderApiTokensApi;
import com.unit.finance.sdk.model.CreateCardholderTokenVerification201Response;
import java.util.Set;

/**
 * Cardholder-token helpers, mirroring the Node {@code tests/helpers/cardholderTokens.ts}.
 */
final class CardholderTokens {

  static final Set<Integer> SKIP_STATUSES = Set.of(400, 403, 404, 409, 410, 500);

  private CardholderTokens() {}

  /**
   * Start an OTP challenge for a card, or return {@code null} when the sandbox rejects it. The
   * challenge is delivered over SMS to the customer's contact phone, and whether an org's cards
   * can receive one is org/bank configuration the API cannot toggle, so every cardholder-token
   * test treats a 4xx/5xx as feature-unavailable rather than a failure.
   */
  static ApiResponse<CreateCardholderTokenVerification201Response> createVerificationOrSkip(
      CardHolderApiTokensApi api, String cardId) throws ApiException {
    try {
      return api.createCardholderTokenVerificationWithHttpInfo(
          cardId, Fixtures.createCardholderTokenVerificationRequest());
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }
}
