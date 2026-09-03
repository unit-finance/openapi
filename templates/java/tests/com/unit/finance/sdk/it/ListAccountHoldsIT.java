package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.ListAccountHolds200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/list-account-holds.test.ts}. */
class ListAccountHoldsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();

    ListAccountHolds200Response response = api.listAccountHolds("20", null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
  }
}
