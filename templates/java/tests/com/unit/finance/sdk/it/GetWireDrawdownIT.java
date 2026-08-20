package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GetWireDrawdown200Response;
import com.unit.finance.sdk.model.ListWireDrawdowns200Response;
import org.junit.jupiter.api.Test;

class GetWireDrawdownIT {

  @Test
  void returnsTheWireDrawdownById() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListWireDrawdowns200Response list = api.listWireDrawdowns("1", null, null, null, null);
    assumeTrue(list.getData() != null && !list.getData().isEmpty(), "no wire drawdowns in sandbox");
    String id = ApiSupport.jsonApiId(list.getData().get(0));

    GetWireDrawdown200Response response = api.getWireDrawdown(id, null);

    assertEquals(id, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData());
  }
}
