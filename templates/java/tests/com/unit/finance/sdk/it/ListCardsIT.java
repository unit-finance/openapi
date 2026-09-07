package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsApi;
import com.unit.finance.sdk.model.ListCards200Response;
import com.unit.finance.sdk.model.ListCards200ResponseDataInner;
import org.junit.jupiter.api.Test;

class ListCardsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    SharedCard.get();
    CardsApi api = ApiSupport.buildCardsApi();

    ApiResponse<ListCards200Response> response =
        api.listCardsWithHttpInfo("20", null, null, null, null, null, null, null);

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData().getData());
    assertTrue(response.getData().getData().size() <= 20);
    for (ListCards200ResponseDataInner item : response.getData().getData()) {
      assertNotNull(ApiSupport.jsonApiType(item));
      assertNotNull(ApiSupport.jsonApiId(item));
    }
  }
}
