package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.CreateRecurringRepayment201Response;
import com.unit.finance.sdk.model.CreateRepayment201Response;
import com.unit.finance.sdk.model.ListRecurringRepayments200Response;
import com.unit.finance.sdk.model.ListRepayments200Response;
import java.util.Arrays;
import java.util.List;

/**
 * Repayment helpers, mirroring the Node {@code tests/helpers/repayments.ts}.
 */
final class Repayments {

  /** The JSON:API {@code type} values the repayment variants deserialize to. */
  static final List<String> REPAYMENT_TYPES =
      Arrays.asList(
          "achRepayment",
          "bookRepayment",
          "capitalPartnerAchRepayment",
          "capitalPartnerBookRepayment",
          "externalRepayment");

  /** The JSON:API {@code type} values the recurring repayment variants deserialize to. */
  static final List<String> RECURRING_REPAYMENT_TYPES =
      Arrays.asList(
          "recurringAchRepayment",
          "recurringBookRepayment",
          "recurringCapitalPartnerAchRepayment",
          "recurringCapitalPartnerBookRepayment");

  private Repayments() {}

  /**
   * Create a book repayment, or {@code null} when repayments are unreachable on
   * this org.
   *
   * <p>Every repayment needs a {@code creditAccount}, which needs a credit
   * product on the org's bank agreement; see {@link CreditAccounts}. Repaying
   * also requires a drawn balance on the credit account, which the sandbox will
   * not always have, so a rejected repayment is treated as unavailable too.
   */
  static Object createBookRepaymentOrSkip() throws ApiException, InterruptedException {
    String creditAccountId = CreditAccounts.getCreditAccountId();
    if (creditAccountId == null) {
      return null;
    }
    SharedAccount shared = SharedAccount.get();
    ApiResponse<CreateRepayment201Response> response;
    try {
      response =
          ApiSupport.buildRepaymentsApi()
              .createRepaymentWithHttpInfo(
                  Fixtures.createBookRepaymentRequest(
                      shared.accountId, creditAccountId, shared.counterpartyAccountId));
    } catch (ApiException e) {
      if (Capabilities.isCapabilityError(e)) {
        System.out.println(
            "Repayments are not available on this sandbox org; skipping. "
                + Capabilities.errorBody(e));
        return null;
      }
      throw e;
    }
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create repayment: expected status 201, got " + response.getStatusCode() + ".");
    }
    return response.getData().getData();
  }

  /**
   * An external repayment id for {@code returnExternalRepayment} to reverse.
   *
   * <p>{@code return} is only valid for the external variant, so the id cannot
   * come from the book repayment above.
   */
  static String createExternalRepaymentOrSkip() throws ApiException, InterruptedException {
    String creditAccountId = CreditAccounts.getCreditAccountId();
    if (creditAccountId == null) {
      return null;
    }
    ApiResponse<CreateRepayment201Response> response;
    try {
      response =
          ApiSupport.buildRepaymentsApi()
              .createRepaymentWithHttpInfo(
                  Fixtures.createExternalRepaymentRequest(creditAccountId));
    } catch (ApiException e) {
      if (Capabilities.isCapabilityError(e)) {
        System.out.println(
            "External repayments are not available on this sandbox org; skipping. "
                + Capabilities.errorBody(e));
        return null;
      }
      throw e;
    }
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create external repayment: expected status 201, got "
              + response.getStatusCode()
              + ".");
    }
    return ApiSupport.jsonApiId(response.getData().getData());
  }

  /**
   * A repayment id for the read suite. Prefers one this run created; falls back
   * to an existing repayment so the read is still covered on an org that cannot
   * create one.
   */
  static String getRepaymentId() throws ApiException, InterruptedException {
    Object created = createBookRepaymentOrSkip();
    if (created != null) {
      return ApiSupport.jsonApiId(created);
    }
    ListRepayments200Response response =
        ApiSupport.buildRepaymentsApi()
            .listRepayments("1", null, null, null, null, null, null, null, null, null);
    if (response.getData() != null) {
      for (Object repayment : response.getData()) {
        String id = ApiSupport.jsonApiId(repayment);
        if (id != null) {
          return id;
        }
      }
    }
    return null;
  }

  /**
   * Create a recurring book repayment, or {@code null} when unreachable.
   *
   * <p>Each caller mints its own: {@code enable} / {@code disable} flip the
   * schedule's status, so a shared one would make the run order-dependent.
   */
  static Object createRecurringRepaymentOrSkip() throws ApiException, InterruptedException {
    String creditAccountId = CreditAccounts.getCreditAccountId();
    if (creditAccountId == null) {
      return null;
    }
    SharedAccount shared = SharedAccount.get();
    ApiResponse<CreateRecurringRepayment201Response> response;
    try {
      response =
          ApiSupport.buildRecurringRepaymentsApi()
              .createRecurringRepaymentWithHttpInfo(
                  Fixtures.createRecurringBookRepaymentRequest(
                      shared.accountId, creditAccountId, shared.counterpartyAccountId));
    } catch (ApiException e) {
      if (Capabilities.isCapabilityError(e)) {
        System.out.println(
            "Recurring repayments are not available on this sandbox org; skipping. "
                + Capabilities.errorBody(e));
        return null;
      }
      throw e;
    }
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create recurring repayment: expected status 201, got "
              + response.getStatusCode()
              + ".");
    }
    return response.getData().getData();
  }

  /** A recurring repayment id for the read suite, created or pre-existing. */
  static String getRecurringRepaymentId() throws ApiException, InterruptedException {
    Object created = createRecurringRepaymentOrSkip();
    if (created != null) {
      return ApiSupport.jsonApiId(created);
    }
    ListRecurringRepayments200Response response =
        ApiSupport.buildRecurringRepaymentsApi()
            .listRecurringRepayments("1", null, null, null, null, null, null, null);
    if (response.getData() != null) {
      for (Object recurring : response.getData()) {
        String id = ApiSupport.jsonApiId(recurring);
        if (id != null) {
          return id;
        }
      }
    }
    return null;
  }
}
