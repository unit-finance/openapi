package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.CreateApplicationRequest;
import com.unit.finance.sdk.model.IndividualApplication;
import com.unit.finance.sdk.model.IndividualApplicationRelationships;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.RelationshipData;
import com.unit.finance.sdk.model.ResourceIdentifier;
import com.unit.finance.sdk.model.DepositAccount;

/**
 * Provisions fresh individual customers/accounts for owner-mutation tests,
 * mirroring the Node {@code tests/helpers/individualCustomer.ts}. Owners can
 * only be added to an account whose existing owners are all individuals — Unit
 * rejects mixing a business owner with individuals — so these tests can't reuse
 * the shared business-owned account.
 */
final class IndividualCustomer {

  private IndividualCustomer() {}

  /**
   * Create an individual application in the sandbox and return the id of the
   * customer it provisions.
   */
  static String createIndividualCustomerId() throws ApiException, InterruptedException {
    ApplicationsApi api = ApiSupport.buildApi();
    ApiResponse<CreateApplication201Response> response =
        api.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.individualApplicationRequest()));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create individual application: expected status 201, got "
              + response.getStatusCode()
              + ".");
    }
    String applicationId = ApiSupport.jsonApiId(response.getData().getData());
    return waitForCustomerId(applicationId);
  }

  /**
   * Provision a fresh individual customer plus a deposit account owned solely by
   * that customer, so owner-mutation tests start from an all-individual account.
   */
  static DepositAccount createIndividualDepositAccount()
      throws ApiException, InterruptedException {
    String customerId = createIndividualCustomerId();
    AccountsApi api = ApiSupport.buildAccountsApi();
    ApiResponse<CreateAccount201Response> response =
        api.createAccountWithHttpInfo(Fixtures.depositAccountRequestForCustomer(customerId));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create individual deposit account: expected status 201, got "
              + response.getStatusCode()
              + ".");
    }
    return (DepositAccount) response.getData().getData().getActualInstance();
  }

  private static String waitForCustomerId(String applicationId)
      throws ApiException, InterruptedException {
    ApplicationsApi api = ApiSupport.buildApi();
    for (int attempt = 0; attempt < 30; attempt++) {
      CreateApplication201Response response = api.getById(applicationId);
      Object actual = response.getData().getActualInstance();
      if (actual instanceof IndividualApplication) {
        IndividualApplicationRelationships relationships =
            ((IndividualApplication) actual).getRelationships();
        Relationship customer = relationships != null ? relationships.getCustomer() : null;
        RelationshipData customerData = customer != null ? customer.getData() : null;
        if (customerData != null && customerData.getActualInstance() instanceof ResourceIdentifier) {
          String customerId = ((ResourceIdentifier) customerData.getActualInstance()).getId();
          if (customerId != null) {
            return customerId;
          }
        }
      }
      ApiSupport.sleep(1000);
    }
    throw new IllegalStateException(
        "Timed out waiting for customer on application " + applicationId + ".");
  }
}
