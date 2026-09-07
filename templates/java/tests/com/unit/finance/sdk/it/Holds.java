package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccountHold201Response;

/**
 * Account-hold helpers, mirroring the Node {@code tests/helpers/holds.ts}.
 */
final class Holds {

  private Holds() {}

  /**
   * Create an account hold, or return {@code null} when the sandbox org's bank
   * agreement has {@code enableHoldOnAccounts} turned off. That flag is a
   * property of the org the token belongs to and cannot be toggled from the
   * API, so every hold-creating test has to treat it as feature-unavailable
   * rather than fail.
   */
  static ApiResponse<CreateAccountHold201Response> createOrSkip(AccountsApi api, String accountId)
      throws ApiException {
    try {
      return api.createAccountHoldWithHttpInfo(Fixtures.createAccountHoldRequest(accountId));
    } catch (ApiException e) {
      if (e.getCode() == 400
          && e.getResponseBody() != null
          && e.getResponseBody().contains("enableHoldOnAccounts")) {
        return null;
      }
      throw e;
    }
  }
}
