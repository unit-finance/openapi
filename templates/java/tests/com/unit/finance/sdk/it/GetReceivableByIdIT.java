package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.google.gson.JsonObject;
import java.util.Collections;
import org.junit.jupiter.api.Test;

/** Mirrors {@code receivables-management/get-receivable-by-id.test.ts}. */
class GetReceivableByIdIT {

  @Test
  void readsASingleReceivableResource() throws Exception {
    ApiSupport.assumeToken();
    String id = Receivables.firstIdOrSkip();
    if (id == null) {
      return;
    }

    // Read the raw body: the spec's `ReceivableAttributes` requires
    // `originalAmount` / `remainingAmount`, which the sandbox replaces with
    // `totalPrincipal` / `remainingPrincipal`, so gson's generated validation
    // rejects the typed round-trip. Tracked in SLICES.md.
    JsonObject body =
        ApiSupport.rawGet("/receivables/" + id, Collections.<String, String>emptyMap());

    assertEquals(200, body.get("__status").getAsInt());
    JsonObject receivable = body.getAsJsonObject("data");
    assertEquals(id, receivable.get("id").getAsString());
    assertEquals("bankReceivable", receivable.get("type").getAsString());
    assertNotNull(receivable.getAsJsonObject("attributes").get("createdAt").getAsString());
  }
}
