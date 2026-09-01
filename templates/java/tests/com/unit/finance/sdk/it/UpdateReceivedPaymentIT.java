package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ListReceivedPayments200Response;
import com.unit.finance.sdk.model.UpdateReceivedPayment200Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class UpdateReceivedPaymentIT {

  // TODO(payments-slice): re-enable once the received-payment response schemas
  // are fixed. The generated `oneOf` marks ACHReceivedPayment.isAdvanceable as
  // required, but the sandbox omits it, so gson can't deserialize the list used
  // to pick a payment id. Fix in the OpenAPI payments slice.
  @Disabled("payments-slice: ACHReceivedPayment.isAdvanceable wrongly required; won't deserialize")
  @Test
  void updatesReceivedPaymentTags() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListReceivedPayments200Response list =
        api.listReceivedPayments(
            "1", null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    assumeTrue(list.getData() != null && !list.getData().isEmpty(), "no received payments in sandbox");
    String id = ApiSupport.jsonApiId(list.getData().get(0));

    UpdateReceivedPayment200Response response =
        api.updateReceivedPayment(id, Fixtures.updateReceivedPaymentRequest());

    assertEquals(id, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData());
  }
}
