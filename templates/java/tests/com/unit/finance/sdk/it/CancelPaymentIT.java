package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CancelPayment200Response;
import com.unit.finance.sdk.model.CreatePayment201Response;
import java.util.Arrays;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/cancel-payment.test.ts}. */
class CancelPaymentIT {

  @Test
  void cancelsAPendingAchDebitPayment() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ApiResponse<CreatePayment201Response> created =
        api.createPaymentWithHttpInfo(Fixtures.achDebitPaymentRequest(ctx.accountId));
    assertEquals(201, created.getStatusCode());
    String paymentId = ApiSupport.paymentId(created.getData().getData());

    CancelPayment200Response response = api.cancelPayment(paymentId);

    assertEquals(paymentId, ApiSupport.paymentId(response.getData()));
    assertTrue(
        Arrays.asList("achPayment", "wirePayment")
            .contains(ApiSupport.paymentType(response.getData())));
  }
}
