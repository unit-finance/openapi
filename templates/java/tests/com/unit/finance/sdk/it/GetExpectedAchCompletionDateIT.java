package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GetExpectedAchCompletionDate200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/get-expected-ach-completion-date.test.ts}. */
class GetExpectedAchCompletionDateIT {

  @Test
  void returnsAnExpectedAchCompletionDate() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ApiResponse<GetExpectedAchCompletionDate200Response> response =
        api.getExpectedAchCompletionDateWithHttpInfo(
            Fixtures.expectedAchCompletionDateRequest(ctx.accountId));

    assertEquals(201, response.getStatusCode());
    assertEquals("achExpectedCompletionDate", response.getData().getData().getType());
    assertNotNull(response.getData().getData().getAttributes());
  }
}
