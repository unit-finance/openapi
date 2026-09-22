package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckPaymentsApi;
import com.unit.finance.sdk.model.CheckPayment;
import com.unit.finance.sdk.model.OriginateCheckPaymentMailPhysicalCheck201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-payments/cancel.test.ts}. */
class CancelCheckPaymentIT {

  @Test
  void cancelsAPendingOriginatedCheckPayment() throws Exception {
    ApiSupport.assumeToken();
    CheckPaymentsApi api = ApiSupport.buildCheckPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> created =
        CheckPayments.originateOrSkip(api, shared.accountId, shared.customerId);
    assumeTrue(created != null, "check payments are unavailable on this sandbox org");

    ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> canceled =
        CheckPayments.cancelOrSkip(api, created.getData().getData().getId());
    assumeTrue(canceled != null, "originated check payment is not cancellable");

    assertEquals(200, canceled.getStatusCode());
    CheckPayment payment = canceled.getData().getData();
    assertEquals("checkPayment", ApiSupport.jsonApiType(payment));
    assertEquals(created.getData().getData().getId(), payment.getId());
    assertNotNull(payment.getAttributes());
  }
}
