package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.model.LendingProgram;
import com.unit.finance.sdk.model.ListLendingPrograms200Response;
import java.util.List;

/** Lending-program lookup helpers, mirroring the Node {@code helpers/lendingPrograms.ts}. */
final class LendingPrograms {

  private LendingPrograms() {}

  /**
   * The id of an existing lending program, or {@code null} when the sandbox
   * org has none. Lending programs are provisioned by Unit, not through the
   * API — this surface exposes only list and the two reads — so the by-id
   * operations have nothing to read when the list comes back empty.
   */
  static String firstIdOrSkip() throws ApiException {
    ListLendingPrograms200Response response =
        ApiSupport.buildLendingProgramsApi()
            .listLendingPrograms("1", null, null, null, null, null, null);
    List<LendingProgram> items = response.getData();
    if (items == null || items.isEmpty()) {
      System.out.println(
          "No lending programs exist on this sandbox org and the SDK has no"
              + " create-lending-program operation; skipping.");
      return null;
    }
    return items.get(0).getId();
  }
}
