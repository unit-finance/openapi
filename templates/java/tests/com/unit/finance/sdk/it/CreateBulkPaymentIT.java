package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateBulkPayment201Response;
import org.junit.jupiter.api.Test;

class CreateBulkPaymentIT {

  @Test
  void returnsBulkPaymentResource() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateBulkPayment201Response> response =
        api.createBulkPaymentWithHttpInfo(
            Fixtures.createBulkPaymentRequest(shared.accountId, shared.counterpartyAccountId));

    assertEquals(201, response.getStatusCode());
    assertNotNull(response.getData().getData());
    assertNotNull(response.getData().getData().getType());
    assertNotNull(response.getData().getData().getAttributes());
  }
}
