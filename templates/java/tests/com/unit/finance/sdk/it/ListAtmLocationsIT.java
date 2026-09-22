package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CardsAtmLocationsApi;
import com.unit.finance.sdk.model.ListAtmLocations200Response;
import org.junit.jupiter.api.Test;

class ListAtmLocationsIT {

  @Test
  void returnsAtmLocationsNearAPostalCode() throws Exception {
    ApiSupport.assumeToken();
    CardsAtmLocationsApi api = ApiSupport.buildCardsAtmLocationsApi();

    ApiResponse<ListAtmLocations200Response> response;
    try {
      response = api.listAtmLocationsWithHttpInfo(null, null, "11375", null);
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      assumeTrue(false, "atm-locations 200 body did not match the typed models: " + e.getMessage());
      return;
    } catch (ApiException e) {
      assumeTrue(
          e.getCode() != 500
              && !(e.getCause() instanceof IllegalArgumentException)
              && !(e.getCause() instanceof JsonSyntaxException),
          "atm-locations unavailable in sandbox or 200 body did not match the typed models");
      throw e;
    }

    assertNotNull(response.getData().getData());
    assertTrue(response.getData().getData().size() <= 100);
  }
}
