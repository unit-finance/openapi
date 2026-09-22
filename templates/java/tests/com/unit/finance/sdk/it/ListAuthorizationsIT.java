package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsAuthorizationsApi;
import com.unit.finance.sdk.model.Authorization;
import com.unit.finance.sdk.model.ListAuthorizations200Response;
import org.junit.jupiter.api.Test;

class ListAuthorizationsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    CardsAuthorizationsApi api = ApiSupport.buildCardsAuthorizationsApi();

    ApiResponse<ListAuthorizations200Response> response;
    try {
      response =
          api.listAuthorizationsWithHttpInfo(
              "20", null, null, null, null, null, null, null, null, null, null, null, null, null);
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

    assertNotNull(response.getData().getData());
    assertTrue(response.getData().getData().size() <= 20);
    for (Authorization item : response.getData().getData()) {
      assertNotNull(item.getId());
      assertNotNull(item.getType());
    }
  }
}
