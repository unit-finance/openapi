package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.CreatePositivePay201Response;
import com.unit.finance.sdk.model.CreatePositivePayRequest;
import java.util.Arrays;
import java.util.List;

/** Positive Pay helpers, mirroring the Node {@code tests/helpers/positivePay.ts}. */
final class PositivePay {

  /** The JSON:API {@code type} values the three Positive Pay variants deserialize to. */
  static final List<String> TYPES =
      Arrays.asList(
          "checkPaymentPositivePay", "receivedAchDebitPositivePay", "drawdownPositivePay");

  private PositivePay() {}

  /**
   * Create a Positive Pay rule and return its id.
   *
   * <p>Each caller mints its own rule rather than sharing one: {@code cancel}
   * moves a rule to {@code Cancelled} and {@code uploadPositivePayDocument}
   * moves a drawdown rule from {@code AwaitingDocuments} to {@code Active}, so
   * a shared rule would make the run depend on Surefire's execution order.
   */
  private static String create(CreatePositivePayRequest request)
      throws ApiException, InterruptedException {
    ApiResponse<CreatePositivePay201Response> response =
        ApiSupport.buildPositivePayApi().createPositivePayWithHttpInfo(request);
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create Positive Pay rule: expected status 201, got "
              + response.getStatusCode()
              + ".");
    }
    return ApiSupport.jsonApiId(response.getData().getData());
  }

  /** An {@code Active} check-payment rule for the get / cancel suites to read. */
  static String createCheckPaymentRuleId() throws ApiException, InterruptedException {
    String accountId = SharedAccount.get().accountId;
    return create(Fixtures.createCheckPaymentPositivePayRequest(accountId));
  }

  /**
   * A drawdown rule, created {@code AwaitingDocuments} — the only state the
   * document upload accepts.
   */
  static String createWireDrawdownRuleId() throws ApiException, InterruptedException {
    String accountId = SharedAccount.get().accountId;
    return create(Fixtures.createWireDrawdownPositivePayRequest(accountId));
  }
}
