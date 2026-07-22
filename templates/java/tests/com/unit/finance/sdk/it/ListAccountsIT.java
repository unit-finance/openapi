package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.ListAccounts200Response;
import com.unit.finance.sdk.model.ListAccounts200ResponseDataInner;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/list.test.ts}. */
class ListAccountsIT {

  @Test
  void returnsAJsonApiListWithPageLimit20() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();

    ListAccounts200Response response = api.listAccounts("20", null, null, null, null, null, null, null, null);

    assertNotNull(response.getData());
    assertTrue(response.getData().size() <= 20);
    for (ListAccounts200ResponseDataInner item : response.getData()) {
      assertNotNull(ApiSupport.accountResourceType(item));
      assertNotNull(ApiSupport.accountResourceId(item));
    }
  }
}
