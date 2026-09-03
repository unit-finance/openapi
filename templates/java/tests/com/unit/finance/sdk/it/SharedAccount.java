package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.api.PaymentsApi;
import com.unit.finance.sdk.model.BusinessApplication;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateAccountRequest;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.CreateApplicationRequest;
import com.unit.finance.sdk.model.CreatePayment201Response;

/**
 * Lazily provisions a funded deposit account (plus a secondary account and an
 * individual customer) that fees/accounts/payments suites reuse, mirroring the
 * Node {@code tests/helpers/sharedAccount.ts}.
 */
final class SharedAccount {

  final String customerId;
  final String accountId;
  final String secondaryAccountId;
  final String individualCustomerId;

  private SharedAccount(
      String customerId,
      String accountId,
      String secondaryAccountId,
      String individualCustomerId) {
    this.customerId = customerId;
    this.accountId = accountId;
    this.secondaryAccountId = secondaryAccountId;
    this.individualCustomerId = individualCustomerId;
  }

  private static SharedAccount cached;

  static synchronized SharedAccount get() throws ApiException {
    if (cached != null) {
      return cached;
    }
    SharedApp sharedApp = SharedApp.get();
    String customerId = customerIdFromApplication(sharedApp.id);
    String accountId = createDepositAccount(customerId);
    fundAccount(accountId);
    String secondaryAccountId = createDepositAccount(customerId);
    String individualCustomerId = individualCustomerId();
    cached = new SharedAccount(customerId, accountId, secondaryAccountId, individualCustomerId);
    return cached;
  }

  /** Alias mirroring the Node helper name. */
  static SharedAccount getContext() throws ApiException {
    return get();
  }

  private static String customerIdFromApplication(String applicationId) throws ApiException {
    ApplicationsApi appsApi = ApiSupport.buildApi();
    CreateApplication201Response response = appsApi.getById(applicationId);
    Object actual = response.getData().getActualInstance();
    if (!(actual instanceof BusinessApplication)) {
      throw new IllegalStateException(
          "Application " + applicationId + " is not a business application.");
    }
    BusinessApplication app = (BusinessApplication) actual;
    String customerId = ApiSupport.relationshipId(app.getRelationships().getCustomer());
    if (customerId == null) {
      throw new IllegalStateException(
          "Application "
              + applicationId
              + " has no customer relationship yet (status="
              + app.getAttributes().getStatus()
              + ").");
    }
    return customerId;
  }

  private static String createDepositAccount(String customerId) throws ApiException {
    AccountsApi accountsApi = ApiSupport.buildAccountsApi();
    ApiResponse<CreateAccount201Response> response =
        accountsApi.createAccountWithHttpInfo(
            new CreateAccountRequest(Fixtures.createDepositAccountRequest(customerId)));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException("Failed to create deposit account: status " + response.getStatusCode());
    }
    return ApiSupport.accountId(response.getData().getData());
  }

  private static void fundAccount(String accountId) throws ApiException {
    PaymentsApi paymentsApi = ApiSupport.buildPaymentsApi();
    ApiResponse<CreatePayment201Response> response =
        paymentsApi.createPaymentWithHttpInfo(Fixtures.achCreditPaymentRequest(accountId));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to fund account " + accountId + ": status " + response.getStatusCode());
    }
  }

  private static String individualCustomerId() throws ApiException {
    ApplicationsApi appsApi = ApiSupport.buildApi();
    ApiResponse<CreateApplication201Response> response =
        appsApi.createApplicationWithHttpInfo(
            new CreateApplicationRequest(Fixtures.individualApplicationRequest()));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create individual application: status " + response.getStatusCode());
    }
    return customerIdFromApplication(ApiSupport.resourceId(response.getData().getData()));
  }
}
