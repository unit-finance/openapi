package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ListStoreLocations200Response;
import org.junit.jupiter.api.Test;

class ListStoreLocationsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListStoreLocations200Response response =
        api.listStoreLocations(null, "11375", null, "20", null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
  }
}
