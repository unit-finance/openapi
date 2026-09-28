package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.LendingProgramsApi;
import com.unit.finance.sdk.model.GetLendingProgramExtendedInformationById200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code lending-programs/get-lending-program-extended-information-by-id.test.ts}. */
class GetLendingProgramExtendedInformationByIdIT {

  @Test
  void readsTheExtendedInformationForALendingProgram() throws Exception {
    ApiSupport.assumeToken();
    LendingProgramsApi api = ApiSupport.buildLendingProgramsApi();
    String id = LendingPrograms.firstIdOrSkip();
    if (id == null) {
      return;
    }

    GetLendingProgramExtendedInformationById200Response response =
        api.getLendingProgramExtendedInformationById(id);

    assertEquals(id, response.getData().getId());
    assertEquals(
        "lendingProgramExtendedInformation", response.getData().getType().getValue());
    assertNotNull(response.getData().getAttributes());
  }
}
