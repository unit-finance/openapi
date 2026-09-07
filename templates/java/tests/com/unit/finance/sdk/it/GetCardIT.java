package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.GetCard200Response;
import org.junit.jupiter.api.Test;

class GetCardIT {

  @Test
  void returnsTheSharedCardById() throws Exception {
    ApiSupport.assumeToken();
    SharedCard shared = SharedCard.get();
    CardsApi api = ApiSupport.buildCardsApi();

    ApiResponse<GetCard200Response> response = api.getCardWithHttpInfo(shared.cardId, null);

    assertEquals(200, response.getStatusCode());
    Object data = response.getData().getData();
    assertEquals(shared.cardId, ApiSupport.jsonApiId(data));
    assertNotNull(ApiSupport.jsonApiType(data));
  }
}
