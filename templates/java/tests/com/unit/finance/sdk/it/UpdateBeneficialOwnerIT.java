package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.UpdateBusinessBeneficialOwner201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code applications/update-beneficial-owner.test.ts}. */
class UpdateBeneficialOwnerIT {

  @Test
  void patchesABeneficialOwnerOfTheSharedBusinessApplication() throws Exception {
    ApiSupport.assumeToken();
    ApplicationsApi api = ApiSupport.buildApi();
    SharedApp shared = SharedApp.get();

    assertNotNull(
        shared.beneficialOwnerId,
        "Business application is missing beneficialOwners.data[0].id");

    ApiResponse<UpdateBusinessBeneficialOwner201Response> response =
        api.updateBusinessBeneficialOwnerWithHttpInfo(
            shared.beneficialOwnerId,
            Fixtures.updateBusinessBeneficialOwnerRequest(shared.id));

    assertEquals(201, response.getStatusCode(), "unexpected status");
    assertEquals("beneficialOwner", response.getData().getData().getType().getValue());
    assertEquals(shared.beneficialOwnerId, response.getData().getData().getId());
  }
}
