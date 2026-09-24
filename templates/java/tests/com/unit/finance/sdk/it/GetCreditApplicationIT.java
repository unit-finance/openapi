package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CreditApplicationsApi;
import com.unit.finance.sdk.model.CreateCreditApplication201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code credit-applications/get-credit-application.test.ts}. */
class GetCreditApplicationIT {

  @Test
  void fetchesACreditApplicationById() throws Exception {
    ApiSupport.assumeToken();
    String applicationId = Credit.applicationId();
    if (applicationId == null) {
      return;
    }

    CreditApplicationsApi api = ApiSupport.buildCreditApplicationsApi();
    ApiResponse<CreateCreditApplication201Response> response =
        api.getCreditApplicationWithHttpInfo(applicationId);

    assertEquals(200, response.getStatusCode());
    assertEquals(applicationId, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
