package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.CounterpartiesApi;
import com.unit.finance.sdk.model.ACHCounterparty;
import com.unit.finance.sdk.model.UpdateCounterparty200Response;
import org.junit.jupiter.api.Test;

class UpdateCounterpartyIT {

  @Test
  void updatesCounterpartyTags() throws Exception {
    ApiSupport.assumeToken();
    CounterpartiesApi api = ApiSupport.buildCounterpartiesApi();
    ACHCounterparty counterparty = Counterparties.createDedicated();

    UpdateCounterparty200Response response =
        api.updateCounterparty(counterparty.getId(), Fixtures.updateCounterpartyRequest());

    assertEquals(counterparty.getId(), ApiSupport.jsonApiId(response.getData()));
    assertEquals("achCounterparty", ApiSupport.jsonApiType(response.getData()));
    assertNotNull(response.getData().getAttributes());
  }
}
