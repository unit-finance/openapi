package com.unit.finance.sdk.it;

import com.google.gson.JsonSyntaxException;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CheckPaymentsApi;
import com.unit.finance.sdk.model.CheckPayment;
import com.unit.finance.sdk.model.OriginateCheckPaymentMailPhysicalCheck201Response;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

/**
 * Check-payment helpers, mirroring the Node {@code tests/helpers/checkPayments.ts}.
 */
final class CheckPayments {

  private CheckPayments() {}

  private static final List<Integer> SKIP_STATUSES =
      Arrays.asList(400, 403, 404, 409, 422, 500, 501);

  private static CheckPayment cachedShared;
  private static boolean cachedMissing;

  static ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> originateOrSkip(
      CheckPaymentsApi api, String accountId, String customerId)
      throws ApiException, InterruptedException, IOException {
    Funding.fundAccount(accountId, 1000);
    try {
      return api.originateCheckPaymentMailPhysicalCheckWithHttpInfo(
          Fixtures.originateCheckPaymentRequest(accountId, customerId));
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    } catch (IllegalArgumentException | JsonSyntaxException e) {
      return null;
    }
  }

  static synchronized CheckPayment getOrCreateShared()
      throws ApiException, InterruptedException, IOException {
    if (cachedShared != null) {
      return cachedShared;
    }
    if (cachedMissing) {
      return null;
    }
    SharedAccount shared = SharedAccount.get();
    ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> created =
        originateOrSkip(ApiSupport.buildCheckPaymentsApi(), shared.accountId, shared.customerId);
    if (created == null) {
      cachedMissing = true;
      return null;
    }
    cachedShared = created.getData().getData();
    return cachedShared;
  }

  static ApiResponse<File> getCheckImageOrSkip(CheckPaymentsApi api, String id)
      throws ApiException {
    try {
      return api.getCheckImageWithHttpInfo(id, "front", "printed");
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }

  static ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> cancelOrSkip(
      CheckPaymentsApi api, String id) throws ApiException {
    try {
      return api.cancelCheckPaymentWithHttpInfo(id, null);
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }

  static ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> returnOrSkip(
      CheckPaymentsApi api, String id) throws ApiException {
    try {
      return api.returnCheckPaymentWithHttpInfo(id, Fixtures.returnCheckPaymentRequest());
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }

  static ApiResponse<OriginateCheckPaymentMailPhysicalCheck201Response> approveOrSkip(
      CheckPaymentsApi api, String id) throws ApiException {
    try {
      return api.approveCheckPaymentAdditionalVerificationWithHttpInfo(
          id, Fixtures.approveCheckPaymentAdditionalVerificationRequest());
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }
}
