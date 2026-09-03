package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreatePayment201Response;
import com.unit.finance.sdk.model.UpdatePayment200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/update-payment.test.ts}. */
class UpdatePaymentIT {

  @Test
  void updatesABookPayment() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ApiResponse<CreatePayment201Response> created =
        api.createPaymentWithHttpInfo(
            Fixtures.bookPaymentRequest(ctx.accountId, ctx.secondaryAccountId));
    assertEquals(201, created.getStatusCode());
    String paymentId = ApiSupport.paymentId(created.getData().getData());

    UpdatePayment200Response response =
        api.updatePayment(paymentId, Fixtures.updateBookPaymentRequest());

    assertEquals(paymentId, ApiSupport.paymentId(response.getData()));
    assertEquals("bookPayment", ApiSupport.paymentType(response.getData()));
  }
}
