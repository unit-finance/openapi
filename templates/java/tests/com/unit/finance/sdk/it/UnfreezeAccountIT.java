package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/unfreeze-account.test.ts}. */
class UnfreezeAccountIT {

  @Test
  void unfreezesAFrozenDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount account = SharedAccount.createDedicated();

    ApiResponse<CreateAccount201Response> frozen =
        api.freezeAccountWithHttpInfo(account.id, Fixtures.freezeAccountRequest());
    assertEquals(200, frozen.getStatusCode());

    ApiResponse<CreateAccount201Response> response =
        api.unfreezeAccountWithHttpInfo(account.id);

    assertEquals(200, response.getStatusCode());
    assertEquals(account.id, ApiSupport.accountResourceId(response.getData().getData()));
    assertEquals("depositAccount", ApiSupport.accountResourceType(response.getData().getData()));
    assertNotNull(ApiSupport.depositAccount(response.getData().getData()).getAttributes());
  }
}
