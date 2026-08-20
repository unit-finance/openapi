package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.VerifyAccount200Response;
import org.junit.jupiter.api.Test;

class VerifyAccountIT {

  @Test
  void verifiesTheSharedAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    VerifyAccount200Response response =
        api.verifyAccount(
            Fixtures.verifyAccountRequest(shared.routingNumber, shared.accountNumber));

    assertNotNull(response.getData());
  }
}
