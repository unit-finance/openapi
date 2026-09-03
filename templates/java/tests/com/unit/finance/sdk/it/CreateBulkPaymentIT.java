package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateBulkPayment201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/create-bulk-payment.test.ts}. */
class CreateBulkPaymentIT {

  @Test
  void acceptsABulkBookPaymentRequest() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ApiResponse<CreateBulkPayment201Response> response =
        api.createBulkPaymentWithHttpInfo(
            Fixtures.bulkPaymentRequest(ctx.accountId, ctx.secondaryAccountId));

    assertEquals(201, response.getStatusCode());
    assertEquals("bulkPayment", response.getData().getData().getType());
    assertNotNull(response.getData().getData().getAttributes());
  }
}
