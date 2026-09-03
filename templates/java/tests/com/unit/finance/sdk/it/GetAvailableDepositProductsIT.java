package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAvailableDepositProducts200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-available-deposit-products.test.ts}. */
class GetAvailableDepositProductsIT {

  @Test
  void returnsAvailableDepositProductsForAnAccount() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();

    GetAvailableDepositProducts200Response response = api.getAvailableDepositProducts(ctx.accountId);

    assertNotNull(response.getData());
  }
}
