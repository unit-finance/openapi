package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckPaymentsApi;
import com.unit.finance.sdk.model.CheckPayment;
import com.unit.finance.sdk.model.OriginateCheckPaymentMailPhysicalCheck201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code check-payments/return.test.ts}. */
class ReturnCheckPaymentIT {

  @Test
  void returnsACheckPaymentThatIsStillWithinTheReturnWindow() throws Exception {
    ApiSupport.assumeToken();
    CheckPayment shared = CheckPayments.getOrCreateShared();
    assumeTrue(shared != null, "check payments are unavailable on this sandbox org");
    CheckPaymentsApi api = ApiSupport.buildCheckPaymentsApi();

    ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> response =
        CheckPayments.returnOrSkip(api, shared.getId());
    assumeTrue(response != null, "check payment is not returnable (originated vs inbound)");

    assertEquals(200, response.getStatusCode());
    CheckPayment payment = response.getData().getData();
    assertEquals("checkPayment", ApiSupport.jsonApiType(payment));
    assertEquals(shared.getId(), payment.getId());
    assertNotNull(payment.getAttributes());
  }
}
