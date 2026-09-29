package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.junit.jupiter.api.Test;

/** Mirrors {@code receivables-management/list-receivables.test.ts}. */
class ListReceivablesIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();

    // Read the raw body: the spec's `ReceivableAttributes` requires keys the
    // sandbox does not send, so the typed call throws. See `Receivables`.
    JsonObject body = Receivables.listRaw("20");

    assertEquals(200, body.get("__status").getAsInt());
    JsonArray items = Receivables.items(body);
    assertTrue(items.size() <= 20);
    for (JsonElement item : items) {
      JsonObject receivable = item.getAsJsonObject();
      assertNotNull(receivable.get("id").getAsString());
      assertEquals("bankReceivable", receivable.get("type").getAsString());
      assertNotNull(receivable.getAsJsonObject("attributes"));
    }
  }
}
