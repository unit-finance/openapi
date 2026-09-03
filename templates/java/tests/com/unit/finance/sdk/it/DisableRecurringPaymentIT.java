package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreateRecurringPayment201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/disable-recurring-payment.test.ts}. */
class DisableRecurringPaymentIT {

  @Test
  void disablesARecurringPayment() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ApiResponse<CreateRecurringPayment201Response> created =
        api.createRecurringPaymentWithHttpInfo(
            Fixtures.recurringBookPaymentRequest(ctx.accountId, ctx.secondaryAccountId));
    assertEquals(201, created.getStatusCode());
    String recurringId = ApiSupport.recurringPaymentId(created.getData().getData());

    CreateRecurringPayment201Response response = api.disableRecurringPayment(recurringId);

    assertEquals(recurringId, ApiSupport.recurringPaymentId(response.getData()));
  }
}
