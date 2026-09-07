package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.CloseCard200Response;
import java.util.Arrays;
import org.junit.jupiter.api.Test;

class ReportCardStolenIT {

  @Test
  void reportsADedicatedCardAsStolen() throws Exception {
    ApiSupport.assumeToken();
    SharedCard card = SharedCard.createDedicatedVirtualCard();
    CardsApi api = ApiSupport.buildCardsApi();

    ApiResponse<CloseCard200Response> response =
        api.reportCardStolenWithHttpInfo(card.cardId, null);

    assertTrue(Arrays.asList(200, 201).contains(response.getStatusCode()));
    Object data = response.getData().getData();
    assertEquals(card.cardId, ApiSupport.jsonApiId(data));
    assertNotNull(ApiSupport.jsonApiType(data));
  }
}
