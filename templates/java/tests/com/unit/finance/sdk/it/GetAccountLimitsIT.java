package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.GetAccountLimits200Response;
import org.junit.jupiter.api.Test;

class GetAccountLimitsIT {

  @Test
  void returnsAccountLimits() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    GetAccountLimits200Response response = api.getAccountLimits(shared.accountId);

    assertNotNull(response.getData());
  }
}
