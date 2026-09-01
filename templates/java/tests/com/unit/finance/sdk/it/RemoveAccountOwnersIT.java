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
    // Owners can only be added to an account whose existing owners are all
    // individuals — Unit rejects mixing a business owner with individuals.
    DepositAccount account = IndividualCustomer.createIndividualDepositAccount();
    String ownerCustomerId = IndividualCustomer.createIndividualCustomerId();
    api.addAccountOwners(
        account.getId(),
        Fixtures.addAccountOwnersRequest(Collections.singletonList(ownerCustomerId)));

    AddAccountOwners200Response response =
        api.removeAccountOwners(
            account.getId(),
            Fixtures.removeAccountOwnersRequest(Collections.singletonList(ownerCustomerId)));

    assertNotNull(response.getData());
  }
}
