package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.CreateApplication201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code applications/get-by-id.test.ts}. */
class GetByIdIT {

  @Test
  void returnsTheApplicationById() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi api = ApiSupport.buildApi();
    SharedApp shared = SharedApp.get();

    CreateApplication201Response response = api.getById(shared.id);

    assertEquals(shared.id, ApiSupport.resourceId(response.getData()));
    assertEquals(shared.type, ApiSupport.resourceType(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
