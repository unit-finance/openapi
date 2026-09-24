package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.DisputesApi;
import com.unit.finance.sdk.model.GetDisputeById200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code disputes/get-dispute-by-id.test.ts}. */
class GetDisputeByIdIT {

  @Test
  void readsASingleDisputeResource() throws Exception {
    ApiSupport.assumeToken();
    DisputesApi api = ApiSupport.buildDisputesApi();
    String id = Disputes.firstIdOrSkip();
    if (id == null) {
      return;
    }

    GetDisputeById200Response response = api.getDisputeById(id);

    assertEquals(id, response.getData().getId());
    assertEquals("dispute", response.getData().getType().getValue());
    assertNotNull(response.getData().getAttributes());
    assertNotNull(response.getData().getAttributes().getStatus());
  }
}
