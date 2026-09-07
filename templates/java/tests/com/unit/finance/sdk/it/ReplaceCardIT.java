package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.ReplaceCard200Response;
import java.util.Arrays;
import org.junit.jupiter.api.Test;

class ReplaceCardIT {

  @Test
  void replacesADedicatedPhysicalCard() throws Exception {
    ApiSupport.assumeToken();
    SharedCard card = SharedCard.createDedicatedCard();
    CardsApi api = ApiSupport.buildCardsApi();

    ApiResponse<ReplaceCard200Response> response =
        api.replaceCardWithHttpInfo(card.cardId, Fixtures.replaceCardRequest());

    assertTrue(Arrays.asList(200, 201).contains(response.getStatusCode()));
    Object data = response.getData().getData();
    assertNotNull(ApiSupport.jsonApiId(data));
    assertNotNull(ApiSupport.jsonApiType(data));
  }
}
