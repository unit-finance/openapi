package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.CounterpartiesApi;
import com.unit.finance.sdk.model.ACHCounterparty;
import com.unit.finance.sdk.model.CreateCounterparty201Response;
import org.junit.jupiter.api.Test;

class GetCounterpartyIT {

  @Test
  void returnsTheCounterpartyById() throws Exception {
    ApiSupport.assumeToken();
    CounterpartiesApi api = ApiSupport.buildCounterpartiesApi();
    ACHCounterparty counterparty = Counterparties.get();

    CreateCounterparty201Response response = api.getCounterparty(counterparty.getId());

    assertEquals(counterparty.getId(), ApiSupport.jsonApiId(response.getData()));
    assertEquals("achCounterparty", ApiSupport.jsonApiType(response.getData()));
    assertNotNull(response.getData().getAttributes());
    assertNotNull(response.getData().getAttributes().getAccountNumber());
  }
}
