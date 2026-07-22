package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.BusinessApplication;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.CreateApplicationRequest;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.IndividualApplication;
import com.unit.finance.sdk.model.List200ResponseDataInner;
import com.unit.finance.sdk.model.ListAccounts200ResponseDataInner;

/**
 * Lazily creates one deposit account (backed by an auto-approved business
 * application) that downstream account/fee suites reuse, mirroring the Node
 * {@code tests/helpers/sharedAccount.ts}.
 */
final class SharedAccount {

  final String id;
  final String customerId;
  final String routingNumber;
  final String accountNumber;

  private SharedAccount(
      String id, String customerId, String routingNumber, String accountNumber) {
    this.id = id;
    this.customerId = customerId;
    this.routingNumber = routingNumber;
    this.accountNumber = accountNumber;
  }

  private static SharedAccount cached;
  private static String cachedIndividualCustomerId;

  static synchronized SharedAccount get() throws ApiException {
    if (cached != null) {
      return cached;
    }
    cached = createDedicated();
    return cached;
  }

  static synchronized SharedAccount createDedicated() throws ApiException {
    ApplicationsApi appsApi = ApiSupport.buildApplicationsApi();
    AccountsApi accountsApi = ApiSupport.buildAccountsApi();

    ApiResponse<CreateApplication201Response> created =
        appsApi.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.businessApplicationRequest()));
    if (created.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create business application: expected status 201, got "
              + created.getStatusCode());
    }

    String applicationId = ApiSupport.resourceId(created.getData().getData());
    String customerId = customerIdFromApplication(appsApi, applicationId);

    ApiResponse<CreateAccount201Response> accountRes =
        accountsApi.createAccountWithHttpInfo(Fixtures.createAccountRequest(customerId));
    if (accountRes.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create deposit account: expected status 201, got "
              + accountRes.getStatusCode());
    }

    DepositAccount account = ApiSupport.depositAccount(accountRes.getData().getData());
    return new SharedAccount(
        account.getId(),
        customerId,
        account.getAttributes().getRoutingNumber(),
        account.getAttributes().getAccountNumber());
  }

  static synchronized String individualCustomerId() throws ApiException {
    if (cachedIndividualCustomerId != null) {
      return cachedIndividualCustomerId;
    }
    ApplicationsApi appsApi = ApiSupport.buildApplicationsApi();
    ApiResponse<CreateApplication201Response> created =
        appsApi.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.individualApplicationRequest()));
    if (created.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create individual application: expected status 201, got "
              + created.getStatusCode());
    }
    String applicationId = ApiSupport.resourceId(created.getData().getData());
    cachedIndividualCustomerId = individualCustomerIdFromApplication(appsApi, applicationId);
    return cachedIndividualCustomerId;
  }

  private static String customerIdFromApplication(ApplicationsApi appsApi, String applicationId)
      throws ApiException {
    List200ResponseDataInner appData = appsApi.getById(applicationId).getData();
    Object actual = appData.getActualInstance();
    if (actual instanceof BusinessApplication) {
      return ApiSupport.customerIdFromBusinessApplication((BusinessApplication) actual);
    }
    throw new IllegalStateException("Expected business application " + applicationId);
  }

  private static String individualCustomerIdFromApplication(
      ApplicationsApi appsApi, String applicationId) throws ApiException {
    List200ResponseDataInner appData = appsApi.getById(applicationId).getData();
    Object actual = appData.getActualInstance();
    if (actual instanceof IndividualApplication) {
      return ApiSupport.customerIdFromIndividualApplication((IndividualApplication) actual);
    }
    throw new IllegalStateException("Expected individual application " + applicationId);
  }
}
