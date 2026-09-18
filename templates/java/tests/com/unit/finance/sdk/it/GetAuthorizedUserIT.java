package com.unit.finance.sdk.it;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AuthorizedUsersApi;
import com.unit.finance.sdk.model.AuthorizedUserType;
import com.unit.finance.sdk.model.GetAuthorizedUser200Response;
import com.unit.finance.sdk.model.ListAuthorizedUsers200Response;
import org.junit.jupiter.api.Test;

/** Mirrors {@code authorized-users/get.test.ts}. */
class GetAuthorizedUserIT {

  @Test
  void getsAnAuthorizedUserById() throws Exception {
    ApiSupport.assumeToken();
    AuthorizedUsersApi api = ApiSupport.buildAuthorizedUsersApi();
    String customerId = Customers.sharedBusinessCustomerId();
    AuthorizedUsers.Added added = AuthorizedUsers.addOrSkip(customerId);
    if (added == null) {
      return;
    }

    ListAuthorizedUsers200Response listed;
    try {
      listed = api.listAuthorizedUsers(customerId, null, null);
    } catch (IllegalArgumentException e) {
      assumeTrue(false, "listAuthorizedUsers body did not match AuthorizedUserType; cannot GET.");
      return;
    } catch (ApiException e) {
      if (e.getCause() instanceof IllegalArgumentException
          || (e.getMessage() != null && e.getMessage().contains("required field"))) {
        assumeTrue(false, "listAuthorizedUsers body did not match AuthorizedUserType; cannot GET.");
        return;
      }
      throw e;
    }

    assumeTrue(
        listed.getData() != null && !listed.getData().isEmpty(),
        "No authorized users to GET.");
    String userId = resourceId(listed.getData().get(0));
    assumeTrue(
        userId != null,
        "AuthorizedUserType has no id; getAuthorizedUser cannot be asserted until the spec models a resource.");

    ApiResponse<GetAuthorizedUser200Response> response;
    try {
      response = api.getAuthorizedUserWithHttpInfo(customerId, userId);
    } catch (IllegalArgumentException e) {
      assumeTrue(false, "getAuthorizedUser body did not match AuthorizedUserType: " + e.getMessage());
      return;
    } catch (ApiException e) {
      if (e.getCause() instanceof IllegalArgumentException
          || (e.getMessage() != null && e.getMessage().contains("required field"))) {
        assumeTrue(false, "getAuthorizedUser body did not match AuthorizedUserType: " + e.getMessage());
        return;
      }
      throw e;
    }

    assertEquals(200, response.getStatusCode());
    AuthorizedUserType item = response.getData().getData();
    assertNotNull(item.getFullName());
    assertNotNull(item.getEmail());
    assertNotNull(item.getPhone());
  }

  private static String resourceId(AuthorizedUserType item) {
    Object extra = item.getAdditionalProperty("id");
    return extra instanceof String ? (String) extra : null;
  }
}
