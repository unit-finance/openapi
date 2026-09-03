package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GetReceivedPayment200Response;
import com.unit.finance.sdk.model.ListReceivedPayments200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/get-received-payment.test.ts}. */
class GetReceivedPaymentIT {

  @Test
  void returnsAReceivedPaymentWhenOneExists() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ListReceivedPayments200Response listed =
        api.listReceivedPayments("1", null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    if (listed.getData().isEmpty()) {
      return;
    }
    String receivedId = ApiSupport.receivedPaymentId(listed.getData().get(0));

    GetReceivedPayment200Response response = api.getReceivedPayment(receivedId, null);

    assertEquals(receivedId, ApiSupport.receivedPaymentId(response.getData()));
    assertNotNull(ApiSupport.receivedPaymentType(response.getData()));
  }
}
