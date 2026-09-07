package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAccountBalanceHistory200Response;
import org.junit.jupiter.api.Test;

class GetAccountBalanceHistoryIT {

  @Test
  void returnsBalanceHistoryForTheSharedAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    GetAccountBalanceHistory200Response response =
        api.getAccountBalanceHistory("20", null, shared.accountId, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
  }
}
