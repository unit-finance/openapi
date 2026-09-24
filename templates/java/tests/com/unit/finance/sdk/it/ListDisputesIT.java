package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.DisputesApi;
import com.unit.finance.sdk.model.Dispute;
import com.unit.finance.sdk.model.ListDisputes200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code disputes/list-disputes.test.ts}. */
class ListDisputesIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    DisputesApi api = ApiSupport.buildDisputesApi();

    ListDisputes200Response response = api.listDisputes("20", null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (Dispute dispute : response.getData()) {
      assertNotNull(dispute.getId());
      assertEquals("dispute", dispute.getType().getValue());
      assertNotNull(dispute.getAttributes());
    }
  }
}
