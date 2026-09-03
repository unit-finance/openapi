package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateAccountRequest;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/create-account.test.ts}. */
class CreateAccountIT {

  @Test
  void createsADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();

    ApiResponse<CreateAccount201Response> response =
        api.createAccountWithHttpInfo(
            new CreateAccountRequest(Fixtures.createDepositAccountRequest(ctx.customerId)));

    assertEquals(201, response.getStatusCode());
    assertEquals("depositAccount", ApiSupport.accountType(response.getData().getData()));
    assertNotNull(ApiSupport.accountId(response.getData().getData()));
    assertNotNull(response.getData().getData().getActualInstance());
  }
}
