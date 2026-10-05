package com.unit.finance.sdk.it;

import com.google.gson.JsonObject;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.CreateStopPayment201Response;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Stop-payment helpers, mirroring the Node {@code tests/helpers/stopPayments.ts}.
 */
final class StopPayments {

  /**
   * The JSON:API {@code type} values stop payments deserialize to.
   *
   * <p>The spec says the check variant is {@code checkStopPayment}, but the
   * sandbox answers create, get, disable and list with the bare
   * {@code stopPayment} for it — only the ACH variant carries a discriminated
   * {@code achStopPayment}. Both spellings are accepted here so the suites keep
   * passing when {@code unit-openapi} reconciles the discriminator.
   */
  static final List<String> STOP_PAYMENT_TYPES =
      Arrays.asList("stopPayment", "checkStopPayment", "achStopPayment");

  /** What the sandbox actually returns for a check stop payment today. */
  static final String CHECK_STOP_PAYMENT_TYPE = "stopPayment";

  private StopPayments() {}

  private static String randomCheckNumber() {
    return Integer.toString(ThreadLocalRandom.current().nextInt(1000000, 10000000));
  }

  /**
   * Create a check stop payment and return the raw JSON:API resource.
   *
   * <p>The typed call cannot be used: every generated check-stop-payment model
   * pins {@code type} to the spec's {@code checkStopPayment}, and gson's
   * {@code oneOf} adapter rejects the {@code stopPayment} the sandbox actually
   * sends. Reading the raw body is the same escape hatch {@link ApiSupport#rawGet}
   * provides for the receivables reads.
   */
  static JsonObject createCheckStopPaymentRaw()
      throws ApiException, InterruptedException, IOException {
    String accountId = SharedAccount.get().accountId;
    JsonObject body =
        ApiSupport.rawPost(
            "/stop-payments",
            Fixtures.createCheckStopPaymentRequest(accountId, randomCheckNumber()));
    // Throw rather than assert: this runs in a helper, not a test body, so a
    // failed assertion would be attributed to the calling test misleadingly.
    if (ApiSupport.rawStatus(body) != 201) {
      throw new IllegalStateException(
          "Failed to create stop payment: expected status 201, got "
              + ApiSupport.rawStatus(body)
              + ".");
    }
    return body.getAsJsonObject("data");
  }

  /**
   * Each caller mints its own stop payment rather than sharing one:
   * {@code disable} moves a stop payment to {@code Disabled}, so a shared one
   * would make the run order-dependent.
   */
  static String createCheckStopPaymentId()
      throws ApiException, InterruptedException, IOException {
    return createCheckStopPaymentRaw().get("id").getAsString();
  }

  /**
   * {@code updateAchStopPayment} only accepts the ACH variant, hence a separate
   * helper. The ACH variant's {@code type} matches the spec, so this one can go
   * through the typed client.
   */
  static String createAchStopPaymentId() throws ApiException, InterruptedException {
    String accountId = SharedAccount.get().accountId;
    ApiResponse<CreateStopPayment201Response> response =
        ApiSupport.buildStopPaymentsApi()
            .createStopPaymentWithHttpInfo(Fixtures.createAchStopPaymentRequest(accountId));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create ACH stop payment: expected status 201, got "
              + response.getStatusCode()
              + ".");
    }
    return ApiSupport.jsonApiId(response.getData().getData());
  }
}
