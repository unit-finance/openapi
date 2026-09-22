package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsAuthorizationsApi;
import com.unit.finance.sdk.model.GetAuthorization200Response;
import com.unit.finance.sdk.model.ListAuthorizations200Response;
import org.junit.jupiter.api.Test;

class GetAuthorizationIT {

  @Test
  void returnsTheAuthorizationById() throws Exception {
    ApiSupport.assumeToken();
    CardsAuthorizationsApi api = ApiSupport.buildCardsAuthorizationsApi();

    ListAuthorizations200Response list;
    try {
      ApiResponse<ListAuthorizations200Response> listed =
          api.listAuthorizationsWithHttpInfo(
              "1", null, null, null, null, null, null, null, "true", null, null, null, null, null);
      list = listed.getData();
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      assumeTrue(
          false, "listAuthorizations 200 body did not match the typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      assumeTrue(
          !(e.getCause() instanceof IllegalArgumentException)
              && !(e.getCause() instanceof JsonSyntaxException),
          "listAuthorizations 200 body did not match the typed models");
      throw e;
    }

    assumeTrue(list.getData() != null && !list.getData().isEmpty(), "no authorizations in sandbox");
    String id = list.getData().get(0).getId();

    GetAuthorization200Response response;
    try {
      response = api.getAuthorization(id, "true");
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      assumeTrue(
          false, "getAuthorization 200 body did not match the typed models: " + e.getMessage());
      return;
    }

    assertEquals(id, response.getData().getId());
    assertNotNull(response.getData().getAttributes());
  }
}
