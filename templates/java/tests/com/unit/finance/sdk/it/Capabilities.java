package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * Capability detection, mirroring the Node {@code tests/helpers/capabilities.ts}.
 *
 * <p>The sandbox answers with these statuses when an operation is real but the
 * org behind the token was never provisioned for it — no credit terms, no
 * rewards program, no statement history. These are org configuration, not bad
 * requests, so the helpers that hit them return {@code null} (unavailable) and
 * the calling suite aborts instead of failing. Same pattern as {@link Holds}.
 */
final class Capabilities {

  private static final Set<Integer> CAPABILITY_STATUSES =
      new HashSet<>(Arrays.asList(400, 403, 404, 405, 409, 422, 500));

  private Capabilities() {}

  static boolean isCapabilityError(ApiException e) {
    return CAPABILITY_STATUSES.contains(e.getCode());
  }

  /** The sandbox's error body, for the warning that explains a skip. */
  static String errorBody(ApiException e) {
    String body = e.getResponseBody();
    return body == null ? "" : body;
  }
}
