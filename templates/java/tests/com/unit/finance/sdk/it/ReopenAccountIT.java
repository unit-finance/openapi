package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.ReopenAccount200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/reopen-account.test.ts}. */
class ReopenAccountIT {

  @Test
  void reopensAClosedDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount account = SharedAccount.createDedicated();

    ApiResponse<CreateAccount201Response> closed =
        api.closeAccountWithHttpInfo(account.id, Fixtures.closeAccountRequest());
    assertEquals(200, closed.getStatusCode());

    ApiResponse<ReopenAccount200Response> response = api.reopenAccountWithHttpInfo(account.id);

    assertEquals(200, response.getStatusCode());
    DepositAccount reopened = (DepositAccount) response.getData().getData().getActualInstance();
    assertEquals(account.id, reopened.getId());
    assertEquals("depositAccount", reopened.getType().getValue());
    assertNotNull(reopened.getAttributes());
  }
}
