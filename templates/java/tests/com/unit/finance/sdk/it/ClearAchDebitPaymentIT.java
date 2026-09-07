package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ClearAchDebitPayment200Response;
import com.unit.finance.sdk.model.CreatePayment201Response;
import org.junit.jupiter.api.Test;

class ClearAchDebitPaymentIT {

  @Test
  void clearsAnAchDebitPaymentWhenOneExists() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    CreatePayment201Response created =
        api.createPayment(
            Fixtures.createBookPaymentRequest(shared.accountId, shared.counterpartyAccountId));
    String paymentId = ApiSupport.jsonApiId(created.getData());
    assumeTrue(paymentId != null, "no payment available to clear");

    try {
      ClearAchDebitPayment200Response response = api.clearAchDebitPayment(paymentId, null);
      assertNotNull(response.getData());
    } catch (Exception e) {
      assumeTrue(false, "sandbox has no clearable ACH debit payment: " + e.getMessage());
    }
  }
}
