package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.model.AccountHold;
import com.unit.finance.sdk.model.CreateAccountHold201Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code accounts/release-account-hold.test.ts}. */
class ReleaseAccountHoldIT {

  @Test
  void releasesAnAccountHold() throws Exception {
    ApiSupport.assumeToken();
    AccountsApi api = ApiSupport.buildAccountsApi();
    SharedAccount shared = SharedAccount.get();

    ApiResponse<CreateAccountHold201Response> created =
        api.createAccountHoldWithHttpInfo(Fixtures.createAccountHoldRequest(shared.id));
    assertEquals(201, created.getStatusCode());

    ApiResponse<CreateAccountHold201Response> response =
        api.releaseAccountHoldWithHttpInfo(
            created.getData().getData().getId(), Fixtures.releaseAccountHoldRequest());

    assertEquals(200, response.getStatusCode());
    AccountHold hold = response.getData().getData();
    assertEquals(created.getData().getData().getId(), hold.getId());
    assertEquals("accountHold", hold.getType().getValue());
    assertNotNull(hold.getAttributes());
    assertNotNull(hold.getAttributes().getStatus());
  }
}
