package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.CreateApplication201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code applications/update.test.ts}. */
class UpdateApplicationIT {

  @Test
  void patchesTheSharedBusinessApplication() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi api = ApiSupport.buildApi();
    SharedApp shared = SharedApp.get();

    ApiResponse<CreateApplication201Response> response =
        api.updateApplicationWithHttpInfo(
            shared.id, Fixtures.updateBusinessApplicationRequest());

    assertTrue(
        response.getStatusCode() == 200 || response.getStatusCode() == 201,
        "unexpected status: " + response.getStatusCode());
    assertEquals(shared.id, ApiSupport.resourceId(response.getData().getData()));
    assertEquals("businessApplication", ApiSupport.resourceType(response.getData().getData()));
    assertNotNull(response.getData().getData().getActualInstance());
  }
}
