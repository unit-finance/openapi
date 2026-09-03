package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAccountLimits200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-account-limits.test.ts}. */
class GetAccountLimitsIT {

  @Test
  void returnsAccountLimits() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();

    GetAccountLimits200Response response = api.getAccountLimits(ctx.accountId);

    assertEquals("limits", response.getData().getType());
    assertNotNull(response.getData().getAttributes());
  }
}
