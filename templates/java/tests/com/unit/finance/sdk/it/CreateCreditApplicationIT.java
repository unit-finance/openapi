package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CreditApplicationsApi;
import com.unit.finance.sdk.model.CreateCreditApplication201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code credit-applications/create-credit-application.test.ts}. */
class CreateCreditApplicationIT {

  @Test
  void createsACreditApplicationForAnExistingCustomer() throws Exception {
    ApiSupport.assumeToken();
    CreditApplicationsApi api = ApiSupport.buildCreditApplicationsApi();

    // Needs a real lendingProgram id, and this SDK surface has no
    // list-lending-programs operation; the helper borrows one off an existing
    // credit application and returns null when the org has none.
    ApiResponse<CreateCreditApplication201Response> response = Credit.createApplicationOrSkip(api);
    if (response == null) {
      return;
    }

    assertEquals(201, response.getStatusCode());
    assertNotNull(response.getData().getData());
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
