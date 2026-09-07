package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAvailableDepositProducts200Response;
import org.junit.jupiter.api.Test;

class GetAvailableDepositProductsIT {

  @Test
  void returnsAvailableDepositProducts() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    GetAvailableDepositProducts200Response response =
        api.getAvailableDepositProducts(shared.accountId);

    assertNotNull(response.getData());
  }
}
