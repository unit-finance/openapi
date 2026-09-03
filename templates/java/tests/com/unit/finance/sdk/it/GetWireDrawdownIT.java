package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.GetWireDrawdown200Response;
import com.unit.finance.sdk.model.ListWireDrawdowns200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/get-wire-drawdown.test.ts}. */
class GetWireDrawdownIT {

  @Test
  void returnsAWireDrawdownWhenOneExists() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ListWireDrawdowns200Response listed = api.listWireDrawdowns("1", null, null, null, null);
    if (listed.getData().isEmpty()) {
      return;
    }
    String drawdownId = listed.getData().get(0).getId();

    GetWireDrawdown200Response response = api.getWireDrawdown(drawdownId, null);

    assertEquals(drawdownId, response.getData().getId());
    assertEquals("wireDrawdown", response.getData().getType().getValue());
  }
}
