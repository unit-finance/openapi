package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.util.Collections;
import org.junit.jupiter.api.Test;

class ListStopPaymentsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();

    // Raw body: the generated `CheckStopPayment` model pins `type` to the spec's
    // `checkStopPayment`, which the sandbox does not send. See `StopPayments`.
    JsonObject body =
        ApiSupport.rawGet("/stop-payments", Collections.singletonMap("page[limit]", "20"));

    assertEquals(200, ApiSupport.rawStatus(body));
    JsonArray stopPayments = body.getAsJsonArray("data");
    assertNotNull(stopPayments);
    assertTrue(stopPayments.size() <= 20);
    for (JsonElement element : stopPayments) {
      JsonObject stopPayment = element.getAsJsonObject();
      assertNotNull(stopPayment.get("id").getAsString());
      assertTrue(
          StopPayments.STOP_PAYMENT_TYPES.contains(stopPayment.get("type").getAsString()),
          "unexpected stop payment type " + stopPayment.get("type").getAsString());
      assertNotNull(stopPayment.get("attributes"));
    }
  }
}
