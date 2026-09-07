package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringPayment201Response;
import org.junit.jupiter.api.Test;

class CreateRecurringPaymentIT {

  @Test
  void returnsRecurringPaymentResource() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateRecurringPayment201Response> response =
        api.createRecurringPaymentWithHttpInfo(
            Fixtures.createRecurringBookPaymentRequest(
                shared.accountId, shared.counterpartyAccountId));

    assertEquals(201, response.getStatusCode());
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
  }
}
