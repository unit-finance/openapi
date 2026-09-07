package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import org.junit.jupiter.api.Test;

class GetAccountIT {

  @Test
  void returnsTheAccountById() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    CreateAccount201Response response = api.getAccount(shared.accountId, null, null);

    assertEquals(shared.accountId, ApiSupport.jsonApiId(response.getData()));
    assertEquals("depositAccount", ApiSupport.jsonApiType(response.getData()));
    assertNotNull(response.getData().getActualInstance());
  }
}
