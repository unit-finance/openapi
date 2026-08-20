package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccountHold201Response;
import org.junit.jupiter.api.Test;

class CreateAccountHoldIT {

  @Test
  void returnsAccountHoldResource() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateAccountHold201Response> response =
        api.createAccountHoldWithHttpInfo(
            Fixtures.createAccountHoldRequest(shared.accountId));

    assertEquals(201, response.getStatusCode());
    assertNotNull(ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(response.getData().getData());
  }
}
