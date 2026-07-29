package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.DepositAccount;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-account.test.ts}. */
class GetAccountIT {

  @Test
  void returnsTheDepositAccountById() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    CreateAccount201Response response = api.getAccount(shared.id, null, null);

    assertEquals(shared.id, ApiSupport.accountResourceId(response.getData()));
    DepositAccount account = ApiSupport.depositAccount(response.getData());
    assertEquals("depositAccount", account.getType().getValue());
    assertNotNull(account.getAttributes());
    assertNotNull(account.getAttributes().getRoutingNumber());
    assertNotNull(account.getAttributes().getAccountNumber());
  }
}
