package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/close-account.test.ts}. */
class CloseAccountIT {

  @Test
  void closesADedicatedDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount account = SharedAccount.createDedicated();

    ApiResponse<CreateAccount201Response> response =
        api.closeAccountWithHttpInfo(account.id, Fixtures.closeAccountRequest());

    assertEquals(200, response.getStatusCode());
    assertEquals(account.id, ApiSupport.accountResourceId(response.getData().getData()));
    assertEquals("depositAccount", ApiSupport.accountResourceType(response.getData().getData()));
    assertNotNull(ApiSupport.depositAccount(response.getData().getData()).getAttributes().getStatus());
  }
}
