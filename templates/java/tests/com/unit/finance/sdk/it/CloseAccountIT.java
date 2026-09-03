package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateAccountRequest;
import com.unit.finance.sdk.model.DepositAccount;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/close-account.test.ts}. */
class CloseAccountIT {

  @Test
  void closesADedicatedDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();
    ApiResponse<CreateAccount201Response> created =
        api.createAccountWithHttpInfo(
            new CreateAccountRequest(Fixtures.createDepositAccountRequest(ctx.customerId)));
    assertEquals(201, created.getStatusCode());
    String accountId = ApiSupport.accountId(created.getData().getData());

    CreateAccount201Response response =
        api.closeAccount(accountId, Fixtures.closeDepositAccountRequest());

    assertEquals(accountId, ApiSupport.accountId(response.getData()));
    DepositAccount account = ApiSupport.asDepositAccount(response.getData());
    assertEquals("Closed", account.getAttributes().getStatus());
  }
}
