package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringPayment201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/create-recurring-payment.test.ts}. */
class CreateRecurringPaymentIT {

  @Test
  void createsARecurringBookPayment() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ApiResponse<CreateRecurringPayment201Response> response =
        api.createRecurringPaymentWithHttpInfo(
            Fixtures.recurringBookPaymentRequest(ctx.accountId, ctx.secondaryAccountId));

    assertEquals(201, response.getStatusCode());
    assertEquals(
        "recurringCreditBookPayment",
        ApiSupport.recurringPaymentType(response.getData().getData()));
    assertNotNull(ApiSupport.recurringPaymentId(response.getData().getData()));
  }
}
