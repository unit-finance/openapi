package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.model.ListDisputes200Response;
import java.util.List;

/** Dispute lookup helpers, mirroring the Node {@code tests/helpers/disputes.ts}. */
final class Disputes {

  private Disputes() {}

  /**
   * The id of an existing dispute, or {@code null} when the sandbox org has
   * none. Disputes are opened by Unit operations, not through the API — this
   * surface exposes only list and get — so {@code getDisputeById} has nothing
   * to read when the list comes back empty.
   */
  static String firstIdOrSkip() throws ApiException {
    ListDisputes200Response response =
        ApiSupport.buildDisputesApi().listDisputes("1", null, null);
    List<com.unit.finance.sdk.model.Dispute> items = response.getData();
    if (items == null || items.isEmpty()) {
      System.out.println(
          "No disputes exist on this sandbox org and the SDK has no create-dispute operation;"
              + " skipping.");
      return null;
    }
    return items.get(0).getId();
  }
}
