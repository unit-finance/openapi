package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAccountBalanceHistory200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/get-account-balance-history.test.ts}. */
class GetAccountBalanceHistoryIT {

  @Test
  void listsEndOfDayBalancesForAnAccount() throws Exception {
    ApiSupport.assumeToken();
    SharedAccount ctx = SharedAccount.get();
    AccountsApi api = ApiSupport.buildAccountsApi();

    GetAccountBalanceHistory200Response response =
        api.getAccountBalanceHistory("20", null, ctx.accountId, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
  }
}
