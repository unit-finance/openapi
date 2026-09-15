package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CounterpartiesApi;
import com.unit.finance.sdk.model.ACHCounterparty;
import com.unit.finance.sdk.model.CreateCounterparty201Response;
import com.unit.finance.sdk.model.GetCounterpartyBalance200Response;

/**
 * Counterparty helpers, mirroring the Node {@code tests/helpers/counterparties.ts}.
 */
final class Counterparties {

  private Counterparties() {}

  private static ACHCounterparty cached;

  /** Creates an ACH counterparty owned by the shared business customer. */
  static ACHCounterparty createDedicated() throws ApiException, InterruptedException {
    SharedAccount shared = SharedAccount.get();
    CounterpartiesApi api = ApiSupport.buildCounterpartiesApi();
    CreateCounterparty201Response response =
        api.createCounterparty(
            Fixtures.createCounterpartyRequest(
                shared.customerId, shared.routingNumber, shared.accountNumber));
    return response.getData();
  }

  /**
   * Returns a cached counterparty for the read-only suites. {@code update} and
   * {@code delete} provision their own so they never mutate or remove a
   * resource another test depends on.
   */
  static synchronized ACHCounterparty get() throws ApiException, InterruptedException {
    if (cached == null) {
      cached = createDedicated();
    }
    return cached;
  }

  /**
   * Read a counterparty balance, or return {@code null} when the sandbox does
   * not expose one for this counterparty. Balances are only tracked for
   * counterparties linked through Plaid, so an account/routing-number
   * counterparty answers with a validation error rather than a resource — a
   * property of the counterparty kind we can create here, not of the request.
   */
  static ApiResponse<GetCounterpartyBalance200Response> balanceOrSkip(
      CounterpartiesApi api, String counterpartyId) throws ApiException {
    try {
      return api.getCounterpartyBalanceWithHttpInfo(counterpartyId);
    } catch (ApiException e) {
      if (e.getCode() == 400 || e.getCode() == 404) {
        return null;
      }
      throw e;
    }
  }
}
