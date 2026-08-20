package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccountHold201Response;
import org.junit.jupiter.api.Test;

class ReleaseAccountHoldIT {

  @Test
  void releasesAnAccountHold() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    CreateAccountHold201Response created =
        api.createAccountHold(Fixtures.createAccountHoldRequest(shared.accountId));
    String holdId = ApiSupport.jsonApiId(created.getData());

    CreateAccountHold201Response response =
        api.releaseAccountHold(holdId, Fixtures.releaseAccountHoldRequest(500));

    assertNotNull(response.getData());
  }
}
