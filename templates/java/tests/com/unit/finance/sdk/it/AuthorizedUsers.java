package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AuthorizedUsersApi;
import com.unit.finance.sdk.model.AuthorizedUserType;
import com.unit.finance.sdk.model.UpdateCustomer200Response;
import java.util.Arrays;
import java.util.List;

/**
 * Authorized-user helpers, mirroring the Node {@code tests/helpers/authorizedUsers.ts}.
 */
final class AuthorizedUsers {

  private static final List<Integer> SKIP_STATUSES = Arrays.asList(400, 403, 404, 409, 500);

  private AuthorizedUsers() {}

  static final class Added {
    final ApiResponse<UpdateCustomer200Response> response;
    final AuthorizedUserType user;

    Added(ApiResponse<UpdateCustomer200Response> response, AuthorizedUserType user) {
      this.response = response;
      this.user = user;
    }
  }

  /**
   * Add an authorized user, or return {@code null} when the sandbox org rejects
   * the POST (capability off / invalid payload).
   */
  static Added addOrSkip(String customerId) throws ApiException {
    AuthorizedUsersApi api = ApiSupport.buildAuthorizedUsersApi();
    AuthorizedUserType user = Fixtures.authorizedUser();
    try {
      ApiResponse<UpdateCustomer200Response> response =
          api.addAuthorizedUsersWithHttpInfo(
              customerId, Fixtures.addAuthorizedUsersRequest(user));
      if (SKIP_STATUSES.contains(response.getStatusCode())) {
        return null;
      }
      return new Added(response, user);
    } catch (ApiException e) {
      if (SKIP_STATUSES.contains(e.getCode())) {
        return null;
      }
      throw e;
    }
  }
}
