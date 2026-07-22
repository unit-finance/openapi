package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAvailableDepositProducts200Response;
import com.unit.finance.sdk.model.GetAvailableDepositProducts200ResponseDataInner;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-available-deposit-products.test.ts}. */
class GetAvailableDepositProductsIT {

  @Test
  void returnsAvailableDepositProductsForAnAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    GetAvailableDepositProducts200Response response = api.getAvailableDepositProducts(shared.id);

    assertNotNull(response.getData());
    for (GetAvailableDepositProducts200ResponseDataInner item : response.getData()) {
      assertNotNull(item.getType());
      assertNotNull(item.getAttributes());
    }
  }
}
