package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CreditApplicationsApi;
import com.unit.finance.sdk.model.CreateCreditApplication201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code credit-applications/update-credit-application.test.ts}. */
class UpdateCreditApplicationIT {

  @Test
  void patchesTheUnderwritingAttributesOfACreditApplication() throws Exception {
    ApiSupport.assumeToken();
    // A dedicated application: an approved decision would flip the shared one
    // to `Approved`, which the API refuses to PATCH.
    String applicationId = Credit.patchableApplicationId();
    if (applicationId == null) {
      return;
    }

    CreditApplicationsApi api = ApiSupport.buildCreditApplicationsApi();
    ApiResponse<CreateCreditApplication201Response> response =
        api.updateCreditApplicationWithHttpInfo(
            applicationId, Fixtures.updateCreditApplicationRequest());

    assertEquals(200, response.getStatusCode());
    assertEquals(applicationId, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
