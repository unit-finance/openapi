package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GetReceivedPayment200Response;
import com.unit.finance.sdk.model.ListReceivedPayments200Response;
import org.junit.jupiter.api.Test;

class GetReceivedPaymentIT {

  @Test
  void returnsTheReceivedPaymentById() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListReceivedPayments200Response list =
        api.listReceivedPayments(
            "1", null, null, null, null, null, null, null, null, null, null, null, null, null);
    assumeTrue(list.getData() != null && !list.getData().isEmpty(), "no received payments in sandbox");
    String id = ApiSupport.jsonApiId(list.getData().get(0));

    GetReceivedPayment200Response response = api.getReceivedPayment(id, null);

    assertEquals(id, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData());
  }
}
