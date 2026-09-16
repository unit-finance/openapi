package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccountHold201Response;
import org.junit.jupiter.api.Test;

class GetAccountHoldByIdIT {

  @Test
  void returnsTheAccountHoldById() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateAccountHold201Response> created =
        Holds.createOrSkip(api, shared.accountId);
    assumeTrue(created != null, "account holds are disabled on this sandbox org");
    String holdId = ApiSupport.jsonApiId(created.getData().getData());

    CreateAccountHold201Response response = api.getAccountHoldById(holdId);

    assertEquals(holdId, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData());
  }
}
