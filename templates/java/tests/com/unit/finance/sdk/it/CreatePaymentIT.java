package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreatePayment201Response;
import org.junit.jupiter.api.Test;

class CreatePaymentIT {

  @Test
  void returnsBookPaymentResource() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreatePayment201Response> response =
        api.createPaymentWithHttpInfo(
            Fixtures.createBookPaymentRequest(shared.accountId, shared.counterpartyAccountId));

    assertEquals(201, response.getStatusCode());
    assertEquals("bookPayment", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
  }
}
