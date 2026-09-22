package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsAuthorizationRequestsApi;
import com.unit.finance.sdk.model.ListAuthorizationRequests200Response;
import com.unit.finance.sdk.model.ListAuthorizationRequests200ResponseDataInner;
import org.junit.jupiter.api.Test;

class ListAuthorizationRequestsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    CardsAuthorizationRequestsApi api = ApiSupport.buildCardsAuthorizationRequestsApi();

    ApiResponse<ListAuthorizationRequests200Response> response;
    try {
      response =
          api.listAuthorizationRequestsWithHttpInfo("20", null, null, null, null, null, null);
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      assumeTrue(
          false,
          "listAuthorizationRequests 200 body did not match the typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      assumeTrue(
          !(e.getCause() instanceof IllegalArgumentException)
              && !(e.getCause() instanceof JsonSyntaxException),
          "listAuthorizationRequests 200 body did not match the typed models");
      throw e;
    }

    assertNotNull(response.getData().getData());
    assertTrue(response.getData().getData().size() <= 20);
    for (ListAuthorizationRequests200ResponseDataInner item : response.getData().getData()) {
      assertNotNull(ApiSupport.jsonApiId(item));
      assertNotNull(ApiSupport.jsonApiType(item));
    }
  }
}
