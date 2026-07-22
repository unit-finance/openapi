package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.AccountHold;
import com.unit.finance.sdk.model.CreateAccountHold201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/create-account-hold.test.ts}. */
class CreateAccountHoldIT {

  @Test
  void createsAnAccountHoldOnADepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateAccountHold201Response> response =
        api.createAccountHoldWithHttpInfo(Fixtures.createAccountHoldRequest(shared.id));

    assertEquals(201, response.getStatusCode());
    AccountHold hold = response.getData().getData();
    assertEquals("accountHold", hold.getType().getValue());
    assertNotNull(hold.getId());
    assertNotNull(hold.getAttributes());
    assertNotNull(hold.getAttributes().getAmount());
    assertNotNull(hold.getAttributes().getDescription());
  }
}
