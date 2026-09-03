package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ListReceivedPayments200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/list-received-payments.test.ts}. */
class ListReceivedPaymentsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListReceivedPayments200Response response =
        api.listReceivedPayments("20", null, null, null, null, null, null, null, null, null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
  }
}
