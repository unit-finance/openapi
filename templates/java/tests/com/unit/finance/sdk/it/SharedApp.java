package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.BusinessApplication;
import com.unit.finance.sdk.model.BusinessApplicationRelationships;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.CreateApplicationRequest;
import com.unit.finance.sdk.model.List200ResponseDataInner;
import com.unit.finance.sdk.model.ToManyRelationship;

/**
 * Lazily creates one Business application that downstream suites
 * ({@code getById}, {@code update}, {@code updateBeneficialOwner}) reuse,
 * mirroring the Node {@code tests/helpers/sharedApp.ts}.
 *
 * <p>Surefire runs the suite in a single JVM (one fork), so this static cache
 * is shared across test classes. Creation is lazy, so test ordering does not
 * matter.
 */
final class SharedApp {

  final String id;
  final String type;
  final String beneficialOwnerId;

  private SharedApp(String id, String type, String beneficialOwnerId) {
    this.id = id;
    this.type = type;
    this.beneficialOwnerId = beneficialOwnerId;
  }

  private static SharedApp cached;

  static synchronized SharedApp get() throws ApiException {
    if (cached != null) {
      return cached;
    }
    ApplicationsApi api = ApiSupport.buildApi();
    ApiResponse<CreateApplication201Response> response =
        api.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.businessApplicationRequest()));
    CreateApplication201Response body = response.getData();
    List200ResponseDataInner created = body.getData();

    // Beneficial owners are not compound-included on the create response
    // (`included` is empty); only their resource identifiers are exposed, via
    // the business application's `beneficialOwners` relationship. Read the id
    // from there.
    String beneficialOwnerId = null;
    Object actual = created.getActualInstance();
    if (actual instanceof BusinessApplication) {
      BusinessApplicationRelationships relationships =
          ((BusinessApplication) actual).getRelationships();
      ToManyRelationship beneficialOwners =
          relationships != null ? relationships.getBeneficialOwners() : null;
      if (beneficialOwners != null
          && beneficialOwners.getData() != null
          && !beneficialOwners.getData().isEmpty()) {
        beneficialOwnerId = beneficialOwners.getData().get(0).getId();
      }
    }

    cached =
        new SharedApp(
            ApiSupport.resourceId(created), ApiSupport.resourceType(created), beneficialOwnerId);
    return cached;
  }
}
