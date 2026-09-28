package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.google.gson.JsonObject;
import org.junit.jupiter.api.Test;

/** Mirrors {@code interest/get-total-accrued-interest.test.ts}. */
class GetTotalAccruedInterestIT {

  @Test
  void totalsAccruedInterestOverAWindow() throws Exception {
    ApiSupport.assumeToken();

    // The spec types `data` as a bare `{ amount }` object, but the sandbox
    // answers with a full JSON:API resource (`type`/`attributes.amount`), so
    // gson's generated validation rejects the typed round-trip for a missing
    // required `amount`. Read the raw body. Tracked in SLICES.md.
    JsonObject body =
        ApiSupport.rawGet("/accrued-interest/total", Receivables.accruedInterestWindow());

    assertEquals(200, body.get("__status").getAsInt());
    JsonObject resource = body.getAsJsonObject("data");
    assertEquals("totalAccruedInterest", resource.get("type").getAsString());
    assertTrue(resource.getAsJsonObject("attributes").get("amount").isJsonPrimitive());
  }
}
