package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.CreatePayment201Response;
import com.unit.finance.sdk.model.UpdatePayment200Response;
import org.junit.jupiter.api.Test;

class UpdatePaymentIT {

  @Test
  void updatesBookPaymentTags() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    SharedAccount shared = SharedAccount.get();

    CreatePayment201Response created =
        api.createPayment(
            Fixtures.createBookPaymentRequest(shared.accountId, shared.counterpartyAccountId));
    String paymentId = ApiSupport.jsonApiId(created.getData());

    UpdatePayment200Response response =
        api.updatePayment(paymentId, Fixtures.updateBookPaymentRequest());

    assertEquals(paymentId, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
