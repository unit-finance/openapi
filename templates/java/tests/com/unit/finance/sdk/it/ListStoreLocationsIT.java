package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.ListStoreLocations200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code payments/list-store-locations.test.ts}. */
class ListStoreLocationsIT {

  @Test
  void returnsStoreLocationsForAPostalCode() throws Exception {
    ApiSupport.assumeToken();
    PaymentsApi api = ApiSupport.buildPaymentsApi();

    ListStoreLocations200Response response = api.listStoreLocations(null, "11375", null, null, null);

    assertNotNull(response.getData());
  }
}
