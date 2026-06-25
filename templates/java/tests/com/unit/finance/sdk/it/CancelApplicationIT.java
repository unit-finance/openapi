package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.CancelApplication201Response;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.CreateApplicationRequest;
import com.unit.finance.sdk.model.IndividualApplication;
import org.junit.jupiter.api.Test;

/** Mirrors {@code applications/cancel.test.ts}. */
class CancelApplicationIT {

  @Test
  void cancelsAnAwaitingDocumentsIndividualApplication() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi api = ApiSupport.buildApi();

    // Cancel is only valid for applications in `PendingReview` or
    // `AwaitingDocuments`. Business applications auto-approve in the sandbox
    // (even with a magic officer SSN), so this suite creates an individual
    // applicant (SSN `000000003`) that lands in `AwaitingDocuments`.
    ApiResponse<CreateApplication201Response> created =
        api.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.cancelableIndividualApplicationRequest()));
    assertEquals(201, created.getStatusCode());
    String id = ApiSupport.resourceId(created.getData().getData());

    ApiResponse<CancelApplication201Response> response =
        api.cancelApplicationWithHttpInfo(id, Fixtures.cancelApplicationRequest());

    assertEquals(201, response.getStatusCode());
    assertEquals(id, ApiSupport.resourceId(response.getData().getData()));
    Object cancelled = response.getData().getData().getActualInstance();
    assertEquals(
        "Canceled", ((IndividualApplication) cancelled).getAttributes().getStatus());
  }
}
