package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.AddAccountOwners200Response;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateAccountRequest;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/add-account-owners.test.ts}. */
class AddAccountOwnersIT {

  @Test
  void addsAnIndividualOwnerToADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();
    ApiResponse<CreateAccount201Response> created =
        api.createAccountWithHttpInfo(
            new CreateAccountRequest(Fixtures.createDepositAccountRequest(ctx.customerId)));
    assertEquals(201, created.getStatusCode());
    String accountId = ApiSupport.accountId(created.getData().getData());

    AddAccountOwners200Response response =
        api.addAccountOwners(accountId, Fixtures.addAccountOwnersRequest(ctx.individualCustomerId));

    assertEquals(accountId, response.getData().getId());
    assertEquals("depositAccount", response.getData().getType().getValue());
  }
}
