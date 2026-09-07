package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.DepositAccount;
import org.junit.jupiter.api.Test;

class FreezeAccountIT {

  @Test
  void freezesADedicatedDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    DepositAccount account = SharedAccount.createDedicatedDepositAccount();

    CreateAccount201Response response =
        api.freezeAccount(account.getId(), Fixtures.freezeDepositAccountRequest());

    assertEquals(account.getId(), ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
