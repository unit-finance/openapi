package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.ListAccounts200Response;

/**
 * Credit-account helpers, mirroring the Node {@code tests/helpers/creditAccounts.ts}.
 */
final class CreditAccounts {

  /**
   * {@code creditTerms} names a credit product configured on the org, and there
   * is no API to enumerate them. {@code credit_terms_1} is the identifier
   * Unit's own docs use for the sandbox default; an org without it answers the
   * create with 4xx, which the caller treats as feature-unavailable.
   */
  private static final String SANDBOX_CREDIT_TERMS = "credit_terms_1";

  private static String cachedId;
  private static boolean resolved;

  private CreditAccounts() {}

  /**
   * A credit account id for the repayment suites, or {@code null} when the
   * sandbox org has no credit product.
   *
   * <p>Prefers an existing credit account over minting one so repeated runs
   * don't accumulate them; falls back to a create.
   */
  static synchronized String getCreditAccountId() throws ApiException, InterruptedException {
    if (resolved) {
      return cachedId;
    }
    resolved = true;

    String existing = findExistingCreditAccountId();
    if (existing != null) {
      cachedId = existing;
      return cachedId;
    }

    String customerId = SharedAccount.get().customerId;
    try {
      ApiResponse<CreateAccount201Response> response =
          ApiSupport.buildAccountsApi()
              .createAccountWithHttpInfo(
                  Fixtures.createCreditAccountRequest(customerId, SANDBOX_CREDIT_TERMS));
      cachedId = ApiSupport.jsonApiId(response.getData().getData());
    } catch (ApiException e) {
      if (Capabilities.isCapabilityError(e)) {
        System.out.println(
            "No credit product is configured on this sandbox org, so credit accounts "
                + "cannot be created; skipping. "
                + Capabilities.errorBody(e));
        return null;
      }
      throw e;
    }
    return cachedId;
  }

  private static String findExistingCreditAccountId() throws ApiException {
    AccountsApi api = ApiSupport.buildAccountsApi();
    ListAccounts200Response response =
        api.listAccounts("100", null, null, null, null, null, null, null, null);
    if (response.getData() == null) {
      return null;
    }
    for (Object account : response.getData()) {
      if ("creditAccount".equals(ApiSupport.jsonApiType(account))) {
        return ApiSupport.jsonApiId(account);
      }
    }
    return null;
  }
}
