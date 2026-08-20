package com.unit.finance.sdk.it;

import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.ApiResponse;
import com.unit.finance.sdk.api.AccountsApi;
import com.unit.finance.sdk.api.ApplicationsApi;
import com.unit.finance.sdk.model.BusinessApplication;
import com.unit.finance.sdk.model.BusinessApplicationRelationships;
import com.unit.finance.sdk.model.CreateAccount201Response;
import com.unit.finance.sdk.model.CreateAccountRequest;
import com.unit.finance.sdk.model.CreateApplication201Response;
import com.unit.finance.sdk.model.DepositAccount;
import com.unit.finance.sdk.model.DepositAccountAttributes;
import com.unit.finance.sdk.model.Relationship;
import com.unit.finance.sdk.model.RelationshipData;
import com.unit.finance.sdk.model.ResourceIdentifier;

/**
 * Lazily provisions a customer plus two deposit accounts that downstream
 * fees/accounts/payments suites reuse, mirroring the Node
 * {@code tests/helpers/sharedAccount.ts}.
 */
final class SharedAccount {

  final String accountId;
  final String counterpartyAccountId;
  final String customerId;
  final String routingNumber;
  final String accountNumber;

  private SharedAccount(
      String accountId,
      String counterpartyAccountId,
      String customerId,
      String routingNumber,
      String accountNumber) {
    this.accountId = accountId;
    this.counterpartyAccountId = counterpartyAccountId;
    this.customerId = customerId;
    this.routingNumber = routingNumber;
    this.accountNumber = accountNumber;
  }

  private static SharedAccount cached;

  static synchronized SharedAccount get() throws ApiException, InterruptedException {
    if (cached != null) {
      return cached;
    }
    SharedApp sharedApp = SharedApp.get();
    String customerId = waitForCustomerId(sharedApp.id);
    DepositAccount primary = createDepositAccount(customerId);
    DepositAccount counterparty = createDepositAccount(customerId);
    DepositAccountAttributes attributes = primary.getAttributes();
    cached =
        new SharedAccount(
            primary.getId(),
            counterparty.getId(),
            customerId,
            attributes.getRoutingNumber(),
            attributes.getAccountNumber());
    return cached;
  }

  /** Creates an isolated deposit account for tests that mutate account state. */
  static DepositAccount createDedicatedDepositAccount() throws ApiException, InterruptedException {
    SharedAccount shared = get();
    AccountsApi api = ApiSupport.buildAccountsApi();
    ApiResponse<CreateAccount201Response> response =
        api.createAccountWithHttpInfo(
            new CreateAccountRequest(Fixtures.createDepositAccountRequest(shared.customerId)));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create dedicated deposit account: expected status 201, got "
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
      if (actual instanceof BusinessApplication) {
        BusinessApplicationRelationships relationships =
            ((BusinessApplication) actual).getRelationships();
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

  private static DepositAccount createDepositAccount(String customerId) throws ApiException {
    AccountsApi api = ApiSupport.buildAccountsApi();
    ApiResponse<CreateAccount201Response> response =
        api.createAccountWithHttpInfo(
            new CreateAccountRequest(Fixtures.createDepositAccountRequest(customerId)));
    if (response.getStatusCode() != 201) {
      throw new IllegalStateException(
          "Failed to create deposit account: expected status 201, got "
              + response.getStatusCode()
              + ".");
    }
    return (DepositAccount) response.getData().getData().getActualInstance();
  }
}
