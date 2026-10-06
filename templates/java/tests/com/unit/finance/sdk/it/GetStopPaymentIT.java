package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.google.gson.JsonObject;
import org.junit.jupiter.api.Test;

class GetStopPaymentIT {

  @Test
  void fetchesAStopPaymentById() throws Exception {
    ApiSupport.assumeToken();
    String stopPaymentId = StopPayments.createCheckStopPaymentId();

    // Raw body: the generated `CheckStopPayment` model pins `type` to the spec's
    // `checkStopPayment`, which the sandbox does not send. See `StopPayments`.
    JsonObject body = ApiSupport.rawGet("/stop-payments/" + stopPaymentId, null);

    assertEquals(200, ApiSupport.rawStatus(body));
    JsonObject stopPayment = body.getAsJsonObject("data");
    assertEquals(stopPaymentId, stopPayment.get("id").getAsString());
    assertEquals(StopPayments.CHECK_STOP_PAYMENT_TYPE, stopPayment.get("type").getAsString());
    assertNotNull(stopPayment.get("attributes"));
  }
}
