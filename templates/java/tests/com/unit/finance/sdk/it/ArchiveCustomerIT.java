package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CustomersApi;
import com.unit.finance.sdk.model.UpdateCustomer200Response;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code customers/archive.test.ts}. */
class ArchiveCustomerIT {

  // Skipped: blocked on an upstream spec fix. ArchiveCustomerData.type is the
  // constant "customerArchive", but the sandbox only accepts "archiveCustomer"
  // and rejects the request with a 400 (source pointer /data/type) before it
  // succeeds. Re-enable (remove @Disabled) once the spec's discriminator
  // constant is corrected.
  @Disabled("Blocked on upstream spec fix: ArchiveCustomerData.type must be 'archiveCustomer'.")
  @Test
  void archivesADedicatedIndividualCustomer() throws Exception {
    ApiSupport.assumeToken();
    CustomersApi api = ApiSupport.buildCustomersApi();
    // Archive a fresh, account-less individual customer so the shared business
    // customer stays usable for the other suites.
    String customerId = IndividualCustomer.createIndividualCustomerId();

    ApiResponse<UpdateCustomer200Response> response =
        api.archiveCustomerWithHttpInfo(customerId, Fixtures.archiveCustomerRequest());

    assertTrue(
        response.getStatusCode() == 200 || response.getStatusCode() == 201,
        "unexpected status: " + response.getStatusCode());
    assertEquals(customerId, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
