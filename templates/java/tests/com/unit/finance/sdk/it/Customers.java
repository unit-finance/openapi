package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.api.CustomersApi;
import com.unit.finance.sdk.model.BusinessCustomer;
import com.unit.finance.sdk.model.BusinessCustomerRelationships;
import com.unit.finance.sdk.model.GetCustomer200Response;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.RelationshipData;
import com.unit.finance.sdk.model.ResourceIdentifier;

/**
 * Shared customer helpers. The shared business application auto-approves in the
 * sandbox, provisioning a business customer that the customer suites reuse; its
 * id is exposed via {@link SharedAccount}.
 */
final class Customers {

  private Customers() {}

  static String sharedBusinessCustomerId() throws ApiException, InterruptedException {
    return SharedAccount.get().customerId;
  }

  /** Returns {@code [customerId, officerId]} for the shared business customer. */
  static String[] sharedBusinessCustomerOfficerId() throws ApiException, InterruptedException {
    String customerId = sharedBusinessCustomerId();
    CustomersApi api = ApiSupport.buildCustomersApi();
    GetCustomer200Response response = api.getCustomer(customerId, null);
    Object actual = response.getData().getActualInstance();
    if (actual instanceof BusinessCustomer) {
      BusinessCustomerRelationships relationships = ((BusinessCustomer) actual).getRelationships();
      Relationship officer = relationships != null ? relationships.getOfficer() : null;
      RelationshipData officerData = officer != null ? officer.getData() : null;
      if (officerData != null && officerData.getActualInstance() instanceof ResourceIdentifier) {
        String officerId = ((ResourceIdentifier) officerData.getActualInstance()).getId();
        if (officerId != null) {
          return new String[] {customerId, officerId};
        }
      }
    }
    throw new IllegalStateException(
        "No officer relationship on business customer " + customerId + ".");
  }
}
