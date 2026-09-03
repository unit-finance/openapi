package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ListWireDrawdowns200Response;
import com.unit.finance.sdk.model.SendDrawdownPayment200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/send-drawdown-payment.test.ts}. */
class SendDrawdownPaymentIT {

  @Test
  void sendsADrawdownPaymentWhenAWireDrawdownExists() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();
    ListWireDrawdowns200Response listed = api.listWireDrawdowns("1", null, null, null, null);
    if (listed.getData().isEmpty()) {
      return;
    }
    String drawdownId = listed.getData().get(0).getId();

    ApiResponse<SendDrawdownPayment200Response> response =
        api.sendDrawdownPaymentWithHttpInfo(drawdownId, Fixtures.sendDrawdownPaymentRequest());

    assertEquals(201, response.getStatusCode());
    assertEquals("wireDrawdown", response.getData().getData().getType().getValue());
    assertNotNull(response.getData().getData().getId());
  }
}
