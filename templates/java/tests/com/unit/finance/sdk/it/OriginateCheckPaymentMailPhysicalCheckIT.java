package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckPaymentsApi;
import com.unit.finance.sdk.model.CheckPayment;
import com.unit.finance.sdk.model.OriginateCheckPaymentMailPhysicalCheck201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-payments/originate.test.ts}. */
class OriginateCheckPaymentMailPhysicalCheckIT {

  @Test
  void originatesAMailedCheckPaymentOnTheSharedAccount() throws Exception {
    ApiSupport.assumeToken();
    CheckPaymentsApi api = ApiSupport.buildCheckPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> response =
        CheckPayments.originateOrSkip(api, shared.accountId, shared.customerId);
    assumeTrue(response != null, "check payments are unavailable on this sandbox org");

    assertEquals(201, response.getStatusCode());
    CheckPayment payment = response.getData().getData();
    assertEquals("checkPayment", ApiSupport.jsonApiType(payment));
    assertNotNull(payment.getId());
    assertNotNull(payment.getAttributes());
    assertNotNull(payment.getAttributes().getStatus());
  }
}
