package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.CreateCard201Response;

/**
 * Lazily provisions one Active virtual card that read-only Cards suites reuse,
 * plus factories for dedicated physical/virtual cards used by mutating suites,
 * mirroring the Node {@code tests/helpers/sharedCard.ts}.
 */
final class SharedCard {

  final String cardId;
  final String type;

  private SharedCard(String cardId, String type) {
    this.cardId = cardId;
    this.type = type;
  }

  private static SharedCard cached;

  private static SharedCard createCard(boolean virtual) throws ApiException, InterruptedException {
    SharedAccount shared = SharedAccount.get();
    CardsApi api = ApiSupport.buildCardsApi();
    ApiResponse<CreateCard201Response> response =
        api.createCardWithHttpInfo(
            virtual
                ? Fixtures.createBusinessVirtualDebitCardRequest(shared.accountId)
                : Fixtures.createBusinessDebitCardRequest(shared.accountId));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create card: expected status 201, got " + response.getStatusCode() + ".");
    }
    Object data = response.getData().getData();
    return new SharedCard(ApiSupport.jsonApiId(data), ApiSupport.jsonApiType(data));
  }

  /** Returns a cached Active virtual card for read-only Cards suites. */
  static synchronized SharedCard get() throws ApiException, InterruptedException {
    if (cached == null) {
      cached = createCard(true);
    }
    return cached;
  }

  /** Creates an isolated physical debit card for state-mutating suites. */
  static SharedCard createDedicatedCard() throws ApiException, InterruptedException {
    return createCard(false);
  }

  /** Creates an isolated Active virtual card (report-lost/report-stolen). */
  static SharedCard createDedicatedVirtualCard() throws ApiException, InterruptedException {
    return createCard(true);
  }
}
