package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.LendingProgramsApi;
import com.unit.finance.sdk.model.LendingProgram;
import com.unit.finance.sdk.model.ListLendingPrograms200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code lending-programs/list-lending-programs.test.ts}. */
class ListLendingProgramsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    LendingProgramsApi api = ApiSupport.buildLendingProgramsApi();

    ListLendingPrograms200Response response =
        api.listLendingPrograms("20", null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (LendingProgram program : response.getData()) {
      assertNotNull(program.getId());
      // The program `type` is open-ended in the spec, so assert presence
      // rather than pinning a literal.
      assertNotNull(program.getType());
      assertNotNull(program.getAttributes());
      assertNotNull(program.getAttributes().getName());
    }
  }
}
