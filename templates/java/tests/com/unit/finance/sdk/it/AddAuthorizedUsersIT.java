package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.model.UpdateCustomer200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code authorized-users/add.test.ts}. */
class AddAuthorizedUsersIT {

  @Test
  void addsAnAuthorizedUser() throws Exception {
    ApiSupport.assumeToken();
    String customerId = Customers.sharedBusinessCustomerId();

    AuthorizedUsers.Added added = AuthorizedUsers.addOrSkip(customerId);
    if (added == null) {
      return;
    }
    ApiResponse<UpdateCustomer200Response> response = added.response;

    assertTrue(
        response.getStatusCode() == 200 || response.getStatusCode() == 201,
        "unexpected status: " + response.getStatusCode());
    assertEquals(customerId, ApiSupport.jsonApiId(response.getData().getData()));
    assertNotNull(ApiSupport.jsonApiType(response.getData().getData()));
  }
}
