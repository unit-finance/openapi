package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAccountLimits200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-account-limits.test.ts}. */
class GetAccountLimitsIT {

  @Test
  void returnsLimitsForADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    GetAccountLimits200Response response = api.getAccountLimits(shared.id);

    assertNotNull(response.getData());
    assertNotNull(response.getData().getAttributes());
  }
}
