package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CancelPayment200Response;
import com.unit.finance.sdk.model.CreatePayment201Response;
import org.junit.jupiter.api.Test;

class CancelPaymentIT {

  @Test
  void cancelsABookPayment() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    CreatePayment201Response created =
        api.createPayment(
            Fixtures.createBookPaymentRequest(shared.accountId, shared.counterpartyAccountId));
    String paymentId = ApiSupport.jsonApiId(created.getData());

    CancelPayment200Response response = api.cancelPayment(paymentId);

    assertNotNull(response.getData());
  }
}
