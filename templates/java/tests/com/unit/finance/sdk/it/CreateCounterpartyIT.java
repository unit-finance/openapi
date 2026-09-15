package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CounterpartiesApi;
import com.unit.finance.sdk.model.CreateCounterparty201Response;
import org.junit.jupiter.api.Test;

class CreateCounterpartyIT {

  @Test
  void createsAnAchCounterparty() throws Exception {
    ApiSupport.assumeToken();
    CounterpartiesApi api = ApiSupport.buildCounterpartiesApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateCounterparty201Response> response =
        api.createCounterpartyWithHttpInfo(
            Fixtures.createCounterpartyRequest(
                shared.customerId, shared.routingNumber, shared.accountNumber));

    assertEquals(201, response.getStatusCode());
    assertEquals("achCounterparty", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(response.getData().getData().getAttributes());
    assertEquals(
        shared.routingNumber, response.getData().getData().getAttributes().getRoutingNumber());
    assertNotNull(response.getData().getData().getAttributes().getPermissions());
  }
}
