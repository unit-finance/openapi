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
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

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
    cached = create(true);
    return cached;
  }

  static synchronized SharedAccount createDedicated() throws ApiException {
    return create(false);
  }

  private static SharedAccount create(boolean fund) throws ApiException {
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
    if (fund) {
      fundDepositAccount(account.getId());
      waitForAvailableBalance(accountsApi, account.getId());
    }
    return new SharedAccount(
        account.getId(),
        customerId,
        account.getAttributes().getRoutingNumber(),
        account.getAttributes().getAccountNumber());
  }

  /**
   * Seed a positive balance on a freshly created deposit account.
   *
   * <p>TODO: Replace this raw sandbox call once the spec exposes a first-class
   * credit/funding operation (e.g. a received-ACH or book-credit endpoint). The
   * {@code /sandbox/payments} (achPayment, direction "Credit") simulation is NOT
   * part of the curated 0.3.0 spec, so it can't go through the generated SDK yet
   * — we hit it directly with the JDK HTTP client purely as test setup. When a
   * funding endpoint is added to the spec, swap this for the generated SDK
   * method and delete the raw request below.
   */
  private static void fundDepositAccount(String accountId) {
    String body =
        "{\"data\":{\"type\":\"achPayment\",\"attributes\":{\"amount\":50000,"
            + "\"direction\":\"Credit\",\"description\":\"SDK integration test funding\"},"
            + "\"relationships\":{\"account\":{\"data\":{\"type\":\"depositAccount\",\"id\":\""
            + accountId
            + "\"}}}}}";
    HttpRequest request =
        HttpRequest.newBuilder()
            .uri(URI.create(ApiSupport.BASE_PATH + "/sandbox/payments"))
            .header("Authorization", "Bearer " + ApiSupport.TOKEN)
            .header("Content-Type", "application/vnd.api+json")
            .POST(HttpRequest.BodyPublishers.ofString(body))
            .build();
    try {
      HttpResponse<String> response =
          HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
      if (response.statusCode() / 100 != 2) {
        throw new IllegalStateException(
            "Failed to fund deposit account "
                + accountId
                + ": expected 2xx, got "
                + response.statusCode()
                + " body="
                + response.body());
      }
    } catch (java.io.IOException e) {
      throw new IllegalStateException("Failed to fund deposit account " + accountId, e);
    } catch (InterruptedException e) {
      Thread.currentThread().interrupt();
      throw new IllegalStateException("Interrupted funding deposit account " + accountId, e);
    }
  }

  /**
   * The sandbox ACH credit above does not always reflect in the account's
   * available balance synchronously, so poll {@code getAccount} until funds have
   * landed before returning. Without this, fee/debit suites can race the credit
   * and fail with {@code InsufficientFunds}.
   */
  private static void waitForAvailableBalance(AccountsApi accountsApi, String accountId)
      throws ApiException {
    for (int attempt = 0; attempt < 20; attempt++) {
      DepositAccount account =
          ApiSupport.depositAccount(
              accountsApi.getAccountWithHttpInfo(accountId, null, null).getData().getData());
      Integer available = account != null ? account.getAttributes().getAvailable() : null;
      if (available != null && available > 0) {
        return;
      }
      try {
        Thread.sleep(500);
      } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
        throw new IllegalStateException("Interrupted awaiting funds for account " + accountId, e);
      }
    }
    throw new IllegalStateException(
        "Deposit account " + accountId + " never reflected the seeded credit balance.");
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
