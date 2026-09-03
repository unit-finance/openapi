package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.UpdateReceivedPayment200Response;
import com.unit.finance.sdk.model.ListReceivedPayments200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/update-received-payment.test.ts}. */
class UpdateReceivedPaymentIT {

  @Test
  void updatesAReceivedPaymentWhenOneExists() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ListReceivedPayments200Response listed =
        api.listReceivedPayments("1", null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    if (listed.getData().isEmpty()) {
      return;
    }
    String receivedId = ApiSupport.receivedPaymentId(listed.getData().get(0));

    UpdateReceivedPayment200Response response =
        api.updateReceivedPayment(receivedId, Fixtures.updateReceivedPaymentRequest());

    assertEquals(receivedId, ApiSupport.receivedPaymentId(response.getData()));
  }
}
