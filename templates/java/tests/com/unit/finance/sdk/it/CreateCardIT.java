package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.CreateCard201Response;
import org.junit.jupiter.api.Test;

class CreateCardIT {

  @Test
  void createsABusinessDebitCard() throws Exception {
    ApiSupport.assumeToken();
    CardsApi api = ApiSupport.buildCardsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateCard201Response> response =
        api.createCardWithHttpInfo(Fixtures.createBusinessDebitCardRequest(shared.accountId));

    assertEquals(201, response.getStatusCode());
    Object data = response.getData().getData();
    assertEquals("businessDebitCard", ApiSupport.jsonApiType(data));
    assertNotNull(ApiSupport.jsonApiId(data));
  }
}
