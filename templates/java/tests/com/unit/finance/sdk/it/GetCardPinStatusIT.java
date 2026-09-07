package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.GetCardPinStatus200Response;
import org.junit.jupiter.api.Test;

class GetCardPinStatusIT {

  @Test
  void returnsThePinStatusForTheSharedCard() throws Exception {
    ApiSupport.assumeToken();
    SharedCard shared = SharedCard.get();
    CardsApi api = ApiSupport.buildCardsApi();

    ApiResponse<GetCardPinStatus200Response> response =
        api.getCardPinStatusWithHttpInfo(shared.cardId);

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData().getData());
  }
}
