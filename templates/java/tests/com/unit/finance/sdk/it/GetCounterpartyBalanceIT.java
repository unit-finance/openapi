package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CounterpartiesApi;
import com.unit.finance.sdk.model.ACHCounterparty;
import com.unit.finance.sdk.model.GetCounterpartyBalance200Response;
import org.junit.jupiter.api.Test;

class GetCounterpartyBalanceIT {

  @Test
  void returnsCounterpartyBalance() throws Exception {
    ApiSupport.assumeToken();
    CounterpartiesApi api = ApiSupport.buildCounterpartiesApi();
    ACHCounterparty counterparty = Counterparties.get();

    ApiResponse<GetCounterpartyBalance200Response> response =
        Counterparties.balanceOrSkip(api, counterparty.getId());
    assumeTrue(
        response != null, "the sandbox exposes no balance for an account-number counterparty");

    assertEquals(200, response.getStatusCode());
    assertEquals("counterpartyBalance", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(response.getData().getData().getAttributes());
    assertNotNull(response.getData().getData().getAttributes().getBalance());
  }
}
