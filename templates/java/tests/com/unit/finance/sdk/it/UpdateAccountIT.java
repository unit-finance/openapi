package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/update-account.test.ts}. */
class UpdateAccountIT {

  @Test
  void updatesADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();

    CreateAccount201Response response =
        api.updateAccount(ctx.accountId, Fixtures.updateDepositAccountRequest());

    assertEquals(ctx.accountId, ApiSupport.accountId(response.getData()));
    assertEquals("depositAccount", ApiSupport.accountType(response.getData()));
  }
}
