package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreatePayment201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/create-payment.test.ts}. */
class CreatePaymentIT {

  @Test
  void createsABookPayment() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ApiResponse<CreatePayment201Response> response =
        api.createPaymentWithHttpInfo(
            Fixtures.bookPaymentRequest(ctx.accountId, ctx.secondaryAccountId));

    assertEquals(201, response.getStatusCode());
    assertEquals("bookPayment", ApiSupport.paymentType(response.getData().getData()));
    assertNotNull(ApiSupport.paymentId(response.getData().getData()));
    assertNotNull(response.getData().getData().getActualInstance());
  }
}
