package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ClearAchDebitPayment200Response;
import com.unit.finance.sdk.model.CreatePayment201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/clear-ach-debit-payment.test.ts}. */
class ClearAchDebitPaymentIT {

  @Test
  void clearsAnAchDebitPaymentInClearingStatus() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ApiResponse<CreatePayment201Response> created =
        api.createPaymentWithHttpInfo(Fixtures.achDebitPaymentRequest(ctx.accountId));
    assertEquals(201, created.getStatusCode());
    String paymentId = ApiSupport.paymentId(created.getData().getData());

    ClearAchDebitPayment200Response response = api.clearAchDebitPayment(paymentId);

    assertEquals(paymentId, response.getData().getId());
    assertEquals("achPayment", response.getData().getType().getValue());
  }
}
