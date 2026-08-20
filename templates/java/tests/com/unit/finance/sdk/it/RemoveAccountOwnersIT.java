package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.AddAccountOwners200Response;
import com.unit.finance.sdk.model.DepositAccount;
import java.util.Collections;
import org.junit.jupiter.api.Test;

class RemoveAccountOwnersIT {

  @Test
  void removesAccountOwners() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();
    DepositAccount account = SharedAccount.createDedicatedDepositAccount();
    api.addAccountOwners(
        account.getId(),
        Fixtures.addAccountOwnersRequest(Collections.singletonList(shared.customerId)));

    AddAccountOwners200Response response =
        api.removeAccountOwners(
            account.getId(),
            Fixtures.removeAccountOwnersRequest(Collections.singletonList(shared.customerId)));

    assertNotNull(response.getData());
  }
}
