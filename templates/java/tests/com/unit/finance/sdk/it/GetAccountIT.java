package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-account.test.ts}. */
class GetAccountIT {

  @Test
  void returnsTheAccountById() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();

    CreateAccount201Response response = api.getAccount(ctx.accountId, null, null);

    assertEquals(ctx.accountId, ApiSupport.accountId(response.getData()));
    assertEquals("depositAccount", ApiSupport.accountType(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
