package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AuthorizedUsersApi;
import com.unit.finance.sdk.model.UpdateCustomer200Response;
import java.util.Collections;
import org.junit.jupiter.api.Test;

/** Mirrors {@code authorized-users/remove.test.ts}. */
class RemoveAuthorizedUsersIT {

  @Test
  void removesAnAuthorizedUser() throws Exception {
    ApiSupport.assumeToken();
    AuthorizedUsersApi api = ApiSupport.buildAuthorizedUsersApi();
    String customerId = Customers.sharedBusinessCustomerId();
    AuthorizedUsers.Added added = AuthorizedUsers.addOrSkip(customerId);
    if (added == null) {
      return;
    }

    ApiResponse<UpdateCustomer200Response> response =
        api.removeAuthorizedUsersWithHttpInfo(
            customerId,
            Fixtures.removeAuthorizedUsersRequest(
                Collections.singletonList(added.user.getEmail())));

    assertTrue(
        response.getStatusCode() == 200 || response.getStatusCode() == 201,
        "unexpected status: " + response.getStatusCode());
    assertEquals(customerId, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
