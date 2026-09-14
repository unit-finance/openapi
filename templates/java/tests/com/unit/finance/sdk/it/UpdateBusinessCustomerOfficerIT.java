package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CustomersApi;
import com.unit.finance.sdk.model.UpdateBusinessCustomerOfficer200Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code customers/update-officer.test.ts}. */
class UpdateBusinessCustomerOfficerIT {

  // Skipped: blocked on an upstream spec fix. Officer.attributes marks `status`
  // required, but the sandbox omits it on the 200 response, so gson throws
  // during deserialization (the PATCH itself succeeds). Node's axios client
  // doesn't validate response fields, so its equivalent test still runs.
  // Re-enable (remove @Disabled) once `status` is optional in the spec.
  @Disabled("Blocked on upstream spec fix: Officer.attributes.status wrongly required; won't deserialize.")
  @Test
  void patchesTheSharedBusinessCustomerOfficer() throws Exception {
    ApiSupport.assumeToken();
    CustomersApi api = ApiSupport.buildCustomersApi();
    String[] ids = Customers.sharedBusinessCustomerOfficerId();
    String customerId = ids[0];
    String officerId = ids[1];

    ApiResponse<UpdateBusinessCustomerOfficer200Response> response =
        api.updateBusinessCustomerOfficerWithHttpInfo(
            customerId, officerId, Fixtures.updateBusinessCustomerOfficerRequest());

    assertTrue(
        response.getStatusCode() == 200 || response.getStatusCode() == 201,
        "unexpected status: " + response.getStatusCode());
    assertEquals("officer", ApiSupport.jsonApiType(response.getData().getData()));
    assertNotNull(response.getData().getData());
  }
}
