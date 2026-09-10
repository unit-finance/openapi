package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CustomersApi;
import com.unit.finance.sdk.model.UpdateCustomer200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code customers/update.test.ts}. */
class UpdateCustomerIT {

  @Test
  void patchesTheSharedBusinessCustomer() throws Exception {
    ApiSupport.assumeToken();
    CustomersApi api = ApiSupport.buildCustomersApi();
    String customerId = Customers.sharedBusinessCustomerId();

    ApiResponse<UpdateCustomer200Response> response =
        api.updateCustomerWithHttpInfo(customerId, Fixtures.updateBusinessCustomerRequest());

    assertTrue(
        response.getStatusCode() == 200 || response.getStatusCode() == 201,
        "unexpected status: " + response.getStatusCode());
    assertEquals(customerId, ApiSupport.jsonApiId(response.getData().getData()));
    assertEquals("businessCustomer", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(response.getData().getData().getActualInstance());
  }
}
