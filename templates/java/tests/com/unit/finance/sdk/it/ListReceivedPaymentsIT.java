package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ListReceivedPayments200Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class ListReceivedPaymentsIT {

  // TODO(payments-slice): re-enable once the received-payment response schemas
  // are fixed. The generated `oneOf` (ACHReceivedPayment / RealtimeReceivedPayment)
  // marks `isAdvanceable` as required, but the sandbox omits it, so gson fails
  // to deserialize an otherwise-valid 200. Fix in the OpenAPI payments slice.
  @Disabled("payments-slice: ACHReceivedPayment.isAdvanceable wrongly required; response won't deserialize")
  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListReceivedPayments200Response response =
        api.listReceivedPayments(
            "20", null, null, null, null, null, null, null, null, null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
  }
}
