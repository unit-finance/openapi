package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.PositivePayApi;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code positive-pay/configure-positive-pay-policy.test.ts}. */
class ConfigurePositivePayPolicyIT {

  // Disabled: the sandbox does not route `POST /positive-pay-policy` at all.
  // It answers every request — including a spec-valid one — with 404 "Please
  // check the path, we don't serve any resource at the specified path", so the
  // operation exists only in the spec. Re-enable once the sandbox serves the
  // path, or once `unit-openapi` drops the operation.
  @Disabled("Sandbox does not serve POST /positive-pay-policy (404 unknown path).")
  @Test
  void optsAnAccountInToCheckPaymentPositivePay() throws Exception {
    ApiSupport.assumeToken();
    PositivePayApi api = ApiSupport.buildPositivePayApi();
    String accountId = SharedAccount.get().accountId;

    ApiResponse<Void> response =
        api.configurePositivePayPolicyWithHttpInfo(
            Fixtures.configurePositivePayPolicyRequest(accountId));

    assertEquals(200, response.getStatusCode());
  }
}
