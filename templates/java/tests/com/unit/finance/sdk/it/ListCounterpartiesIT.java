package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.CounterpartiesApi;
import com.unit.finance.sdk.model.ACHCounterparty;
import com.unit.finance.sdk.model.ListCounterparties200Response;
import org.junit.jupiter.api.Test;

class ListCounterpartiesIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    CounterpartiesApi api = ApiSupport.buildCounterpartiesApi();
    SharedAccount shared = SharedAccount.get();
    // Guarantee at least one counterparty exists, and scope the listing to this
    // run's customer: the org accumulates counterparties whose `bank` is null,
    // which the spec marks required and this strictly-typed client rejects
    // while deserializing the page.
    Counterparties.get();

    ListCounterparties200Response response =
        api.listCounterparties("20", null, shared.customerId, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (ACHCounterparty item : response.getData()) {
      assertEquals("achCounterparty", ApiSupport.jsonApiType(item));
      assertNotNull(item.getId());
      assertNotNull(item.getAttributes());
    }
  }
}
