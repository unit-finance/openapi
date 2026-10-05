package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.google.gson.JsonObject;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.CreateStopPayment201Response;
import org.junit.jupiter.api.Test;

class CreateStopPaymentIT {

  @Test
  void createsACheckStopPayment() throws Exception {
    ApiSupport.assumeToken();

    JsonObject stopPayment = StopPayments.createCheckStopPaymentRaw();

    assertEquals(StopPayments.CHECK_STOP_PAYMENT_TYPE, stopPayment.get("type").getAsString());
    assertNotNull(stopPayment.get("id").getAsString());
    assertNotNull(stopPayment.get("attributes"));
  }

  @Test
  void createsAnAchStopPayment() throws Exception {
    ApiSupport.assumeToken();
    String accountId = SharedAccount.get().accountId;

    ApiResponse<CreateStopPayment201Response> response =
        ApiSupport.buildStopPaymentsApi()
            .createStopPaymentWithHttpInfo(Fixtures.createAchStopPaymentRequest(accountId));

    assertEquals(201, response.getStatusCode());
    Object stopPayment = response.getData().getData();
    assertEquals("achStopPayment", ApiSupport.jsonApiType(stopPayment));
    assertNotNull(ApiSupport.jsonApiId(stopPayment));
  }
}
