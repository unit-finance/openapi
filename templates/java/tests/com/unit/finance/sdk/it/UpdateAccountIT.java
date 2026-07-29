package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/update-account.test.ts}. */
class UpdateAccountIT {

  @Test
  void patchesTheSharedDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateAccount201Response> response =
        api.updateAccountWithHttpInfo(shared.id, Fixtures.updateAccountRequest());

    assertEquals(200, response.getStatusCode());
    assertEquals(shared.id, ApiSupport.accountResourceId(response.getData().getData()));
    assertEquals("depositAccount", ApiSupport.accountResourceType(response.getData().getData()));
    assertNotNull(ApiSupport.depositAccount(response.getData().getData()).getAttributes());
  }
}
