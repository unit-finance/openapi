package com.unit.finance.sdk.it;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;

/** Receivables helpers, mirroring the Node {@code tests/helpers/receivables.ts}. */
final class Receivables {

  private Receivables() {}

  /**
   * {@code GET /receivables} as a raw JSON body.
   *
   * <p>The typed call cannot complete: the spec marks
   * {@code ReceivableAttributes.originalAmount} / {@code remainingAmount}
   * required, but the sandbox returns {@code totalPrincipal} /
   * {@code remainingPrincipal} instead, so gson's generated validation throws
   * before any assertion runs. Spec defect owned by {@code unit-openapi};
   * tracked in SLICES.md.
   */
  static JsonObject listRaw(String pageLimit) throws IOException {
    return ApiSupport.rawGet("/receivables", Collections.singletonMap("page[limit]", pageLimit));
  }

  /**
   * The receivable array out of a list body. {@code data} is a {@code oneOf}
   * of a receivable array and a single balance resource; only the array form
   * carries ids.
   */
  static JsonArray items(JsonObject body) {
    JsonElement data = body.get("data");
    return data != null && data.isJsonArray() ? data.getAsJsonArray() : new JsonArray();
  }

  /**
   * The id of an existing receivable, or {@code null} when the sandbox org has
   * none. Receivables are produced by Unit's lending flows, not through the
   * API — this surface exposes only list and get — so {@code getReceivableById}
   * has nothing to read when the list comes back empty.
   */
  static String firstIdOrSkip() throws IOException {
    JsonArray items = items(listRaw("1"));
    if (items.isEmpty()) {
      System.out.println(
          "No receivables exist on this sandbox org and the SDK has no create-receivable"
              + " operation; skipping.");
      return null;
    }
    return items.get(0).getAsJsonObject().get("id").getAsString();
  }

  /**
   * A one-day {@code filter[since]} / {@code filter[until]} window as full
   * ISO-8601 instants.
   *
   * <p>{@code GET /accrued-interest/total} rejects a missing range with 400
   * and rejects plain {@code YYYY-MM-DD} dates with 400 {@code Invalid value},
   * so the filters must be datetimes. The window is kept to a single day
   * because wider ranges make the sandbox hang past any sensible timeout.
   */
  static Map<String, String> accruedInterestWindow() {
    Instant until = Instant.now().truncatedTo(ChronoUnit.MILLIS);
    Instant since = until.minus(1, ChronoUnit.DAYS);
    Map<String, String> query = new LinkedHashMap<>();
    query.put("filter[since]", since.toString());
    query.put("filter[until]", until.toString());
    return query;
  }
}
