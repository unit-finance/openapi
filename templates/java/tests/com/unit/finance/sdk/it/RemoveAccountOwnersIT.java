package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.AddAccountOwners200Response;
import com.unit.finance.sdk.model.DepositAccount;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/remove-account-owners.test.ts}. */
class RemoveAccountOwnersIT {

  // SKIPPED: blocked by an upstream unit-openapi spec bug — the generated body
  // nests as data.attributes.data, but the API expects a top-level JSON:API array
  // (data: [{ type: "customer", id }]).
  @Disabled("Blocked by unit-openapi spec bug: account-owners body shape")
  @Test
  void removesAnIndividualCustomerFromAJointDepositAccount() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount account = SharedAccount.createDedicated();
    String individualCustomerId = SharedAccount.individualCustomerId();

    ApiResponse<AddAccountOwners200Response> added =
        api.addAccountOwnersWithHttpInfo(
            account.id, Fixtures.addAccountOwnersRequest(individualCustomerId));
    assertEquals(200, added.getStatusCode());

    ApiResponse<AddAccountOwners200Response> response =
        api.removeAccountOwnersWithHttpInfo(
            account.id, Fixtures.removeAccountOwnersRequest(individualCustomerId));

    assertEquals(200, response.getStatusCode());
    DepositAccount updated = response.getData().getData();
    assertEquals(account.id, updated.getId());
    assertEquals("depositAccount", updated.getType().getValue());
    assertNotNull(updated.getAttributes());
  }
}
