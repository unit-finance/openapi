package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.CreateAccountHold201Response;
import com.unit.finance.sdk.model.ListAccountHolds200Response;
import org.junit.jupiter.api.Test;

class GetAccountHoldByIdIT {

  @Test
  void returnsTheAccountHoldById() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();

    ListAccountHolds200Response list = api.listAccountHolds("1", null, null, null);
    assumeTrue(list.getData() != null && !list.getData().isEmpty(), "no account holds in sandbox");
    String holdId = ApiSupport.jsonApiId(list.getData().get(0));

    CreateAccountHold201Response response = api.getAccountHoldById(holdId);

    assertEquals(holdId, ApiSupport.jsonApiId(response.getData()));
    assertNotNull(response.getData());
  }
}
