package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.LendingProgramsApi;
import com.unit.finance.sdk.model.GetLendingProgramById200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code lending-programs/get-lending-program-by-id.test.ts}. */
class GetLendingProgramByIdIT {

  @Test
  void readsASingleLendingProgramResource() throws Exception {
    ApiSupport.assumeToken();
    LendingProgramsApi api = ApiSupport.buildLendingProgramsApi();
    String id = LendingPrograms.firstIdOrSkip();
    if (id == null) {
      return;
    }

    GetLendingProgramById200Response response = api.getLendingProgramById(id);

    assertEquals(id, response.getData().getId());
    assertNotNull(response.getData().getType());
    assertNotNull(response.getData().getAttributes());
    assertNotNull(response.getData().getAttributes().getName());
    assertNotNull(response.getData().getAttributes().getProgramSizeLimit());
  }
}
