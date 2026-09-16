package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ClearAchDebitPayment200Response;
import org.junit.jupiter.api.Test;

class ClearAchDebitPaymentIT {

  @Test
  void clearsAnAchDebitPaymentWhenOneExists() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    // Same as Node/Ruby: no list-payments on the generated SDK, so this only
    // runs when a caller supplies an ACH debit already in Clearing.
    String paymentId = System.getenv("UNIT_SANDBOX_ACH_DEBIT_PAYMENT_ID");
    assumeTrue(
        paymentId != null && !paymentId.isBlank(),
        "No UNIT_SANDBOX_ACH_DEBIT_PAYMENT_ID; cannot exercise clearAchDebitPayment.");

    ClearAchDebitPayment200Response response = api.clearAchDebitPayment(paymentId, null);
    assertNotNull(response.getData());
  }
}
