package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.ReopenAccount200Response;
import org.junit.jupiter.api.Test;

class ReopenAccountIT {

  @Test
  void reopensAClosedDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    DepositAccount account = SharedAccount.createDedicatedDepositAccount();
    api.closeAccount(account.getId(), Fixtures.closeDepositAccountRequest());

    ReopenAccount200Response response = api.reopenAccount(account.getId());

    assertEquals(account.getId(), ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
