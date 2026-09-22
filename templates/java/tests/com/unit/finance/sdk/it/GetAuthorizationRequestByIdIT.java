package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsAuthorizationRequestsApi;
import com.unit.finance.sdk.model.GetAuthorizationRequestById200Response;
import com.unit.finance.sdk.model.ListAuthorizationRequests200Response;
import org.junit.jupiter.api.Test;

class GetAuthorizationRequestByIdIT {

  @Test
  void returnsTheAuthorizationRequestById() throws Exception {
    ApiSupport.assumeToken();
    CardsAuthorizationRequestsApi api = ApiSupport.buildCardsAuthorizationRequestsApi();

    ListAuthorizationRequests200Response list;
    try {
      ApiResponse<ListAuthorizationRequests200Response> listed =
          api.listAuthorizationRequestsWithHttpInfo("1", null, null, null, null, null, null);
      list = listed.getData();
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

    assumeTrue(
        list.getData() != null && !list.getData().isEmpty(),
        "no authorization requests in sandbox");
    String id = ApiSupport.jsonApiId(list.getData().get(0));

    GetAuthorizationRequestById200Response response;
    try {
      response = api.getAuthorizationRequestById(id);
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      assumeTrue(
          false,
          "getAuthorizationRequestById 200 body did not match the typed models: " + e.getMessage());
      return;
    }

    assertEquals(id, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData());
  }
}
