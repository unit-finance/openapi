package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.CreditApplicationsApi;
import com.unit.finance.sdk.api.CreditDecisionsApi;
import com.unit.finance.sdk.model.CreateCreditApplication201Response;
import com.unit.finance.sdk.model.CreateCreditDecision201Response;
import com.unit.finance.sdk.model.ListCreditApplications200Response;
import com.unit.finance.sdk.model.ListCreditApplications200ResponseDataInner;
import com.unit.finance.sdk.model.ListCreditDecisions200Response;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.ResourceIdentifier;
import java.util.Arrays;
import java.util.List;

/**
 * Credit application / decision helpers, mirroring the Node
 * {@code tests/helpers/credit.ts}.
 *
 * <p>Every credit application create needs a {@code lendingProgram}
 * relationship id, and this SDK surface exposes no list-lending-programs
 * operation, so the suite borrows one off an existing credit application. An
 * org with no lending program (and therefore no credit applications) cannot
 * reach create at all, so the helpers return {@code null} (unavailable) instead
 * of failing — the holds pattern.
 */
final class Credit {

  private static final List<Integer> SKIP_STATUSES = Arrays.asList(400, 403, 404, 409, 422, 500);

  private static boolean applicationIdResolved;
  private static String applicationId;

  private Credit() {}

  private static boolean isPrecondition(ApiException e) {
    return SKIP_STATUSES.contains(e.getCode());
  }

  static ListCreditApplications200Response listApplicationsOrSkip(CreditApplicationsApi api)
      throws ApiException {
    try {
      return api.listCreditApplications("20", null, null, null, null, null, null);
    } catch (ApiException e) {
      if (isPrecondition(e)) {
        return null;
      }
      throw e;
    }
  }

  static ListCreditDecisions200Response listDecisionsOrSkip(CreditDecisionsApi api)
      throws ApiException {
    try {
      return api.listCreditDecisions("20", null, null, null, null, null, null, null, null);
    } catch (ApiException e) {
      if (isPrecondition(e)) {
        return null;
      }
      throw e;
    }
  }

  /** Read a lending program id off an existing credit application. */
  static String lendingProgramId() throws ApiException {
    ListCreditApplications200Response listed =
        listApplicationsOrSkip(ApiSupport.buildCreditApplicationsApi());
    if (listed == null || listed.getData() == null) {
      return null;
    }
    for (ListCreditApplications200ResponseDataInner item : listed.getData()) {
      Object actual = ApiSupport.unwrap(item);
      if (actual == null) {
        continue;
      }
      try {
        Object relationships = actual.getClass().getMethod("getRelationships").invoke(actual);
        if (relationships == null) {
          continue;
        }
        Object program = relationships.getClass().getMethod("getLendingProgram").invoke(relationships);
        if (program instanceof Relationship) {
          Object data = ((Relationship) program).getData();
          Object identifier = ApiSupport.unwrap(data);
          if (identifier instanceof ResourceIdentifier) {
            String id = ((ResourceIdentifier) identifier).getId();
            if (id != null) {
              return id;
            }
          }
        }
      } catch (ReflectiveOperationException ignored) {
        // Variant without a lendingProgram relationship; try the next item.
      }
    }
    return null;
  }

  static ApiResponse<CreateCreditApplication201Response> createApplicationOrSkip(
      CreditApplicationsApi api) throws ApiException, InterruptedException {
    String programId = lendingProgramId();
    if (programId == null) {
      return null;
    }
    String customerId = Customers.sharedBusinessCustomerId();
    try {
      return api.createCreditApplicationWithHttpInfo(
          Fixtures.createExistingCreditApplicationRequest(customerId, programId));
    } catch (ApiException e) {
      if (isPrecondition(e)) {
        return null;
      }
      throw e;
    }
  }

  /**
   * A credit application id for get/decision to reuse. Prefer one this run
   * created so the suites never touch an unrelated org resource; fall back to
   * an existing one.
   *
   * <p>The update suite deliberately does NOT share this one — see
   * {@link #patchableApplicationId()}.
   */
  static String applicationId() throws ApiException, InterruptedException {
    if (applicationIdResolved) {
      return applicationId;
    }
    applicationIdResolved = true;
    CreditApplicationsApi api = ApiSupport.buildCreditApplicationsApi();
    ApiResponse<CreateCreditApplication201Response> created = createApplicationOrSkip(api);
    if (created != null && created.getData() != null) {
      String createdId = ApiSupport.jsonApiId(created.getData().getData());
      if (createdId != null) {
        applicationId = createdId;
        return applicationId;
      }
    }
    ListCreditApplications200Response listed = listApplicationsOrSkip(api);
    if (listed != null && listed.getData() != null && !listed.getData().isEmpty()) {
      applicationId = ApiSupport.jsonApiId(listed.getData().get(0));
    }
    return applicationId;
  }

  /**
   * A credit application the update suite may PATCH.
   *
   * <p>Recording an approved decision flips an application to {@code Approved},
   * and the API then refuses the PATCH with <b>400
   * {@code not_supported_for_credit_application_status}</b>. Sharing one
   * application between the update and create-decision suites therefore makes
   * the run order-dependent — which is exactly how this broke on CI, where
   * Surefire's filesystem order put the decision first. So the update suite
   * always mints its own application and only ever falls back to one still in
   * {@code Pending}.
   */
  static String patchableApplicationId() throws ApiException, InterruptedException {
    CreditApplicationsApi api = ApiSupport.buildCreditApplicationsApi();
    ApiResponse<CreateCreditApplication201Response> created = createApplicationOrSkip(api);
    if (created != null && created.getData() != null) {
      String createdId = ApiSupport.jsonApiId(created.getData().getData());
      if (createdId != null) {
        return createdId;
      }
    }
    ListCreditApplications200Response listed = listApplicationsOrSkip(api);
    if (listed == null || listed.getData() == null) {
      return null;
    }
    for (ListCreditApplications200ResponseDataInner item : listed.getData()) {
      if ("Pending".equals(statusOf(item))) {
        return ApiSupport.jsonApiId(item);
      }
    }
    return null;
  }

  private static String statusOf(Object item) {
    Object actual = ApiSupport.unwrap(item);
    if (actual == null) {
      return null;
    }
    try {
      Object attributes = actual.getClass().getMethod("getAttributes").invoke(actual);
      if (attributes == null) {
        return null;
      }
      Object status = attributes.getClass().getMethod("getStatus").invoke(attributes);
      return status == null ? null : status.toString();
    } catch (ReflectiveOperationException ignored) {
      return null;
    }
  }

  static ApiResponse<CreateCreditDecision201Response> createDecisionOrSkip(
      CreditDecisionsApi api, String creditApplicationId) throws ApiException {
    try {
      return api.createCreditDecisionWithHttpInfo(
          Fixtures.createApprovedCreditLimitDecisionRequest(creditApplicationId));
    } catch (ApiException e) {
      if (isPrecondition(e)) {
        return null;
      }
      throw e;
    }
  }
}
