package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CustomersApi;
import com.unit.finance.sdk.model.CreateBusinessWalletCustomer201Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code customers/create.test.ts}. */
class CreateBusinessWalletCustomerIT {

  // Skipped: the sandbox org behind UNIT_SANDBOX_TOKEN has no partner bank named
  // "Thread" (the create request 404s with "The specified bank was not found").
  // The available banks are org config we can't query from this SDK's spec
  // surface. Re-enable (remove @Disabled) once the fixture's bankName is set to a
  // bank provisioned for the sandbox org.
  @Disabled("sandbox org has no 'Thread' partner bank; see comment")
  @Test
  void createsABusinessWalletCustomer() throws Exception {
    ApiSupport.assumeToken();
    CustomersApi api = ApiSupport.buildCustomersApi();

    ApiResponse<CreateBusinessWalletCustomer201Response> response =
        api.createBusinessWalletCustomerWithHttpInfo(Fixtures.createBusinessWalletCustomerRequest());

    assertEquals(201, response.getStatusCode());
    assertEquals("businessWalletCustomer", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
  }
}
