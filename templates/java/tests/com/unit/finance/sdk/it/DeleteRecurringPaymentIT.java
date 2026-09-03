package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringPayment201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/delete-recurring-payment.test.ts}. */
class DeleteRecurringPaymentIT {

  @Test
  void deletesARecurringPayment() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ApiResponse<CreateRecurringPayment201Response> created =
        api.createRecurringPaymentWithHttpInfo(
            Fixtures.recurringBookPaymentRequest(ctx.accountId, ctx.secondaryAccountId));
    assertEquals(201, created.getStatusCode());
    String recurringId = ApiSupport.recurringPaymentId(created.getData().getData());

    ApiResponse<CreateRecurringPayment201Response> response =
        api.deleteRecurringPaymentWithHttpInfo(recurringId);

    assertEquals(204, response.getStatusCode());
  }
}
