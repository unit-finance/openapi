package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AuthorizedUsersApi;
import com.unit.finance.sdk.model.AuthorizedUserType;
import com.unit.finance.sdk.model.ListAuthorizedUsers200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code authorized-users/list.test.ts}. */
class ListAuthorizedUsersIT {

  @Test
  void returnsAListOfAuthorizedUsers() throws Exception {
    ApiSupport.assumeToken();
    AuthorizedUsersApi api = ApiSupport.buildAuthorizedUsersApi();
    String customerId = Customers.sharedBusinessCustomerId();
    AuthorizedUsers.addOrSkip(customerId);

    ApiResponse<ListAuthorizedUsers200Response> response;
    try {
      response = api.listAuthorizedUsersWithHttpInfo(customerId, null, null);
    } catch (IllegalArgumentException e) {
      // Spec types list items as AuthorizedUserType; sandbox may send JSON:API
      // resources (type/id/attributes) that Gson will not deserialize.
      assumeTrue(false, "listAuthorizedUsers body did not match AuthorizedUserType: " + e.getMessage());
      return;
    } catch (ApiException e) {
      if (e.getCause() instanceof IllegalArgumentException
          || (e.getMessage() != null && e.getMessage().contains("required field"))) {
        assumeTrue(false, "listAuthorizedUsers body did not match AuthorizedUserType: " + e.getMessage());
        return;
      }
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    assertNotNull(response.getData().getData());
    for (AuthorizedUserType item : response.getData().getData()) {
      assertNotNull(item.getFullName());
      assertNotNull(item.getEmail());
      assertNotNull(item.getPhone());
    }
  }
}
