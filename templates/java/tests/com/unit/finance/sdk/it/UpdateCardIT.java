package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.UpdateCard200Response;
import java.util.Arrays;
import org.junit.jupiter.api.Test;

class UpdateCardIT {

  @Test
  void updatesADedicatedCard() throws Exception {
    ApiSupport.assumeToken();
    SharedCard card = SharedCard.createDedicatedCard();
    CardsApi api = ApiSupport.buildCardsApi();

    ApiResponse<UpdateCard200Response> response =
        api.updateCardWithHttpInfo(card.cardId, Fixtures.updateCardRequest());

    assertTrue(Arrays.asList(200, 201).contains(response.getStatusCode()));
    Object data = response.getData().getData();
    assertEquals(card.cardId, ApiSupport.jsonApiId(data));
    assertNotNull(ApiSupport.jsonApiType(data));
  }
}
