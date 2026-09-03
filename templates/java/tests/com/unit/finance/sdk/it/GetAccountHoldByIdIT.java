package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccountHold201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-account-hold-by-id.test.ts}. */
class GetAccountHoldByIdIT {

  @Test
  void returnsAnAccountHoldById() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();
    ApiResponse<CreateAccountHold201Response> created =
        api.createAccountHoldWithHttpInfo(Fixtures.createAccountHoldRequest(ctx.accountId));
    assertEquals(201, created.getStatusCode());
    String holdId = created.getData().getData().getId();

    CreateAccountHold201Response response = api.getAccountHoldById(holdId);

    assertEquals(holdId, response.getData().getId());
    assertEquals("accountHold", response.getData().getType().getValue());
  }
}
