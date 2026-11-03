# AccountsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAccountOwners**](AccountsApi.md#addAccountOwners) | **POST** /accounts/{accountId}/relationships/customers | Add account owners |
| [**addSecondaryRoutingNumber**](AccountsApi.md#addSecondaryRoutingNumber) | **POST** /accounts/{accountId}/secondary-routing-number | Add secondary routing number |
| [**closeAccount**](AccountsApi.md#closeAccount) | **POST** /accounts/{accountId}/close | Close an account |
| [**createAccount**](AccountsApi.md#createAccount) | **POST** /accounts | Create an account |
| [**createAccountHold**](AccountsApi.md#createAccountHold) | **POST** /account-holds | Create an account hold |
| [**freezeAccount**](AccountsApi.md#freezeAccount) | **POST** /accounts/{accountId}/freeze | Freeze an account |
| [**getAccount**](AccountsApi.md#getAccount) | **GET** /accounts/{accountId} | Get an account by id |
| [**getAccountBalanceHistory**](AccountsApi.md#getAccountBalanceHistory) | **GET** /account-end-of-day | List account end-of-day balances |
| [**getAccountHoldById**](AccountsApi.md#getAccountHoldById) | **GET** /account-holds/{id} | Get an account hold by id |
| [**getAccountLimits**](AccountsApi.md#getAccountLimits) | **GET** /accounts/{accountId}/limits | Get account limits |
| [**getAvailableDepositProducts**](AccountsApi.md#getAvailableDepositProducts) | **GET** /accounts/{accountId}/deposit-products | Get available deposit products |
| [**listAccountHolds**](AccountsApi.md#listAccountHolds) | **GET** /account-holds | List account holds |
| [**listAccounts**](AccountsApi.md#listAccounts) | **GET** /accounts | List accounts |
| [**releaseAccountHold**](AccountsApi.md#releaseAccountHold) | **POST** /account-holds/{id}/release | Release an account hold |
| [**removeAccountOwners**](AccountsApi.md#removeAccountOwners) | **DELETE** /accounts/{accountId}/relationships/customers | Remove account owners |
| [**reopenAccount**](AccountsApi.md#reopenAccount) | **POST** /accounts/{accountId}/reopen | Reopen an account |
| [**switchAccountNumbers**](AccountsApi.md#switchAccountNumbers) | **POST** /accounts/{accountId}/switch-account-numbers | Switch account numbers |
| [**unfreezeAccount**](AccountsApi.md#unfreezeAccount) | **POST** /accounts/{accountId}/unfreeze | Unfreeze an account |
| [**updateAccount**](AccountsApi.md#updateAccount) | **PATCH** /accounts/{accountId} | Update an account |


<a id="addAccountOwners"></a>
# **addAccountOwners**
> AddAccountOwners200Response addAccountOwners(accountId, addAccountOwnersRequest)

Add account owners

Add owner or owners to an existing deposit account.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    AddAccountOwnersRequest addAccountOwnersRequest = new AddAccountOwnersRequest(); // AddAccountOwnersRequest | 
    try {
      AddAccountOwners200Response result = apiInstance.addAccountOwners(accountId, addAccountOwnersRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#addAccountOwners");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **addAccountOwnersRequest** | [**AddAccountOwnersRequest**](AddAccountOwnersRequest.md)|  | |

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated deposit account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="addSecondaryRoutingNumber"></a>
# **addSecondaryRoutingNumber**
> AddAccountOwners200Response addSecondaryRoutingNumber(accountId, addSecondaryRoutingNumberRequest)

Add secondary routing number

Add a secondary routing/account-number pair to an existing deposit account.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    AddSecondaryRoutingNumberRequest addSecondaryRoutingNumberRequest = new AddSecondaryRoutingNumberRequest(); // AddSecondaryRoutingNumberRequest | 
    try {
      AddAccountOwners200Response result = apiInstance.addSecondaryRoutingNumber(accountId, addSecondaryRoutingNumberRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#addSecondaryRoutingNumber");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **addSecondaryRoutingNumberRequest** | [**AddSecondaryRoutingNumberRequest**](AddSecondaryRoutingNumberRequest.md)|  | |

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated account resource after assigning the secondary routing/account number pair. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="closeAccount"></a>
# **closeAccount**
> CreateAccount201Response closeAccount(accountId, closeAccountRequest)

Close an account

Closes an account. Closing an account is irreversible and can only be done by an Org user. An account.closed event is raised when the call was successful. The request body is one of CloseDepositAccountRequest, CloseCreditAccountRequest, or CloseWalletRequest.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    CloseAccountRequest closeAccountRequest = new CloseAccountRequest(); // CloseAccountRequest | 
    try {
      CreateAccount201Response result = apiInstance.closeAccount(accountId, closeAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#closeAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **closeAccountRequest** | [**CloseAccountRequest**](CloseAccountRequest.md)|  | |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The closed account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createAccount"></a>
# **createAccount**
> CreateAccount201Response createAccount(createAccountRequest)

Create an account

Creates an account. The request body is one of CreateDepositAccountRequest, CreateCreditAccountRequest, or CreateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    CreateAccountRequest createAccountRequest = new CreateAccountRequest(); // CreateAccountRequest | 
    try {
      CreateAccount201Response result = apiInstance.createAccount(createAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#createAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createAccountRequest** | [**CreateAccountRequest**](CreateAccountRequest.md)|  | |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createAccountHold"></a>
# **createAccountHold**
> CreateAccountHold201Response createAccountHold(createAccountHoldRequest)

Create an account hold

Create an account hold resource.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    CreateAccountHoldRequest createAccountHoldRequest = new CreateAccountHoldRequest(); // CreateAccountHoldRequest | 
    try {
      CreateAccountHold201Response result = apiInstance.createAccountHold(createAccountHoldRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#createAccountHold");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createAccountHoldRequest** | [**CreateAccountHoldRequest**](CreateAccountHoldRequest.md)|  | |

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created AccountHold resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="freezeAccount"></a>
# **freezeAccount**
> CreateAccount201Response freezeAccount(accountId, freezeAccountRequest)

Freeze an account

Freezes an account. An account.frozen event is raised when the call was successful. A frozen account behaves like a closed account, with the primary difference being that a frozen state should be temporary. The request body is one of FreezeDepositAccountRequest, FreezeCreditAccountRequest, or FreezeWalletRequest.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    FreezeAccountRequest freezeAccountRequest = new FreezeAccountRequest(); // FreezeAccountRequest | 
    try {
      CreateAccount201Response result = apiInstance.freezeAccount(accountId, freezeAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#freezeAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **freezeAccountRequest** | [**FreezeAccountRequest**](FreezeAccountRequest.md)|  | |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The frozen account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getAccount"></a>
# **getAccount**
> CreateAccount201Response getAccount(accountId, include, extraFieldsAccount)

Get an account by id

Get an account resource (deposit account, credit account, or wallet) by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    String include = "include_example"; // String | Optional. Related resources to include are relationship-backed resources such as customer, customers, and org. See Getting Related Resources
    String extraFieldsAccount = "extraFieldsAccount_example"; // String | Optional. Comma-separated fields. Supported values currently include interestTerms and maskedAccountNumber.
    try {
      CreateAccount201Response result = apiInstance.getAccount(accountId, include, extraFieldsAccount);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **include** | **String**| Optional. Related resources to include are relationship-backed resources such as customer, customers, and org. See Getting Related Resources | [optional] |
| **extraFieldsAccount** | **String**| Optional. Comma-separated fields. Supported values currently include interestTerms and maskedAccountNumber. | [optional] |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getAccountBalanceHistory"></a>
# **getAccountBalanceHistory**
> GetAccountBalanceHistory200Response getAccountBalanceHistory(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterSince, filterUntil)

List account end-of-day balances

List account end-of-day balances history (filtering and paging can be applied).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources.
    String pageOffset = "0"; // String | Optional. Number of resources to skip.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id. At least one of accountId and customerId is required.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required.
    String filterSince = "filterSince_example"; // String | Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01
    String filterUntil = "filterUntil_example"; // String | Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01
    try {
      GetAccountBalanceHistory200Response result = apiInstance.getAccountBalanceHistory(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterSince, filterUntil);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAccountBalanceHistory");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. | [optional] [default to 0] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. At least one of accountId and customerId is required. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required. | [optional] |
| **filterSince** | **String**| Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01 | [optional] |
| **filterUntil** | **String**| Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01 | [optional] |

### Return type

[**GetAccountBalanceHistory200Response**](GetAccountBalanceHistory200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of account end-of-day resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getAccountHoldById"></a>
# **getAccountHoldById**
> CreateAccountHold201Response getAccountHoldById(id)

Get an account hold by id

Get an account hold resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateAccountHold201Response result = apiInstance.getAccountHoldById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAccountHoldById");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The AccountHold resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getAccountLimits"></a>
# **getAccountLimits**
> GetAccountLimits200Response getAccountLimits(accountId)

Get account limits

Get the limits of an account (deposit account, credit account, or wallet).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    try {
      GetAccountLimits200Response result = apiInstance.getAccountLimits(accountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAccountLimits");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |

### Return type

[**GetAccountLimits200Response**](GetAccountLimits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The account limits resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getAvailableDepositProducts"></a>
# **getAvailableDepositProducts**
> GetAvailableDepositProducts200Response getAvailableDepositProducts(accountId)

Get available deposit products

Get the deposit products available for an account.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    try {
      GetAvailableDepositProducts200Response result = apiInstance.getAvailableDepositProducts(accountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#getAvailableDepositProducts");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |

### Return type

[**GetAvailableDepositProducts200Response**](GetAvailableDepositProducts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of available deposit products. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listAccountHolds"></a>
# **listAccountHolds**
> ListAccountHolds200Response listAccountHolds(pageLimit, pageOffset, filterStatus, filterExpiredAt, filterCustomerId, filterAccountId)

List account holds

List account hold resources. Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased.
    String filterExpiredAt = "filterExpiredAt_example"; // String | Optional. Date only (e.g. \"2001-08-15\"). Filters by the date the account hold will be automatically released at.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    try {
      ListAccountHolds200Response result = apiInstance.listAccountHolds(pageLimit, pageOffset, filterStatus, filterExpiredAt, filterCustomerId, filterAccountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#listAccountHolds");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterStatus** | **String**| Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased. | [optional] |
| **filterExpiredAt** | **String**| Optional. Date only (e.g. \&quot;2001-08-15\&quot;). Filters by the date the account hold will be automatically released at. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |

### Return type

[**ListAccountHolds200Response**](ListAccountHolds200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of account hold resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listAccounts"></a>
# **listAccounts**
> ListAccounts200Response listAccounts(pageLimit, pageOffset, sort, filterCustomerId, filterDepositProductId, filterRoutingNumber, filterAccountNumber, filterTags, filterStatus, filterFromBalance, filterToBalance, include, extraFieldsAccount)

List accounts

List account resources (deposit accounts, credit accounts, and wallets). Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String sort = "sort_example"; // String | Optional. Sort by createdAt, -createdAt, updatedAt, -updatedAt, balance, -balance, type, or -type.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterDepositProductId = "filterDepositProductId_example"; // String | Optional. Filters the results by the specified deposit product id.
    String filterRoutingNumber = "filterRoutingNumber_example"; // String | Optional. Filters the results by the specified routing number (9 digits). Usage example: *filter[routingNumber]=051000017*. Must be used together with filter[accountNumber].
    String filterAccountNumber = "filterAccountNumber_example"; // String | Optional. Filters the results by the specified account number (5-17 digits). Usage example: *filter[accountNumber]=10000123*. Must be used together with filter[routingNumber].
    String filterTags = "filterTags_example"; // String | Optional. Filter Accounts by Tags.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter Account by its status (Open, Frozen, or Closed). Single-value and array forms are supported. Usage example: *filter[status][0]=Closed*
    String filterFromBalance = "filterFromBalance_example"; // String | Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000
    String filterToBalance = "filterToBalance_example"; // String | Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000
    String include = "include_example"; // String | Optional. Commonly used includes are customer, org, and bank. See Getting Related Resources
    String extraFieldsAccount = "extraFieldsAccount_example"; // String | Optional. Comma-separated fields. Supported values currently include interestTerms and maskedAccountNumber.
    try {
      ListAccounts200Response result = apiInstance.listAccounts(pageLimit, pageOffset, sort, filterCustomerId, filterDepositProductId, filterRoutingNumber, filterAccountNumber, filterTags, filterStatus, filterFromBalance, filterToBalance, include, extraFieldsAccount);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#listAccounts");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **sort** | **String**| Optional. Sort by createdAt, -createdAt, updatedAt, -updatedAt, balance, -balance, type, or -type. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterDepositProductId** | **String**| Optional. Filters the results by the specified deposit product id. | [optional] |
| **filterRoutingNumber** | **String**| Optional. Filters the results by the specified routing number (9 digits). Usage example: *filter[routingNumber]&#x3D;051000017*. Must be used together with filter[accountNumber]. | [optional] |
| **filterAccountNumber** | **String**| Optional. Filters the results by the specified account number (5-17 digits). Usage example: *filter[accountNumber]&#x3D;10000123*. Must be used together with filter[routingNumber]. | [optional] |
| **filterTags** | **String**| Optional. Filter Accounts by Tags. | [optional] |
| **filterStatus** | **String**| Optional. Filter Account by its status (Open, Frozen, or Closed). Single-value and array forms are supported. Usage example: *filter[status][0]&#x3D;Closed* | [optional] |
| **filterFromBalance** | **String**| Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToBalance** | **String**| Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000 | [optional] |
| **include** | **String**| Optional. Commonly used includes are customer, org, and bank. See Getting Related Resources | [optional] |
| **extraFieldsAccount** | **String**| Optional. Comma-separated fields. Supported values currently include interestTerms and maskedAccountNumber. | [optional] |

### Return type

[**ListAccounts200Response**](ListAccounts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of account resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="releaseAccountHold"></a>
# **releaseAccountHold**
> CreateAccountHold201Response releaseAccountHold(id, releaseAccountHoldRequest)

Release an account hold

You can release an account hold fully (entire amount) or partially (a specified amount).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String id = "id_example"; // String | 
    ReleaseAccountHoldRequest releaseAccountHoldRequest = new ReleaseAccountHoldRequest(); // ReleaseAccountHoldRequest | 
    try {
      CreateAccountHold201Response result = apiInstance.releaseAccountHold(id, releaseAccountHoldRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#releaseAccountHold");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |
| **releaseAccountHoldRequest** | [**ReleaseAccountHoldRequest**](ReleaseAccountHoldRequest.md)|  | |

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The released AccountHold resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="removeAccountOwners"></a>
# **removeAccountOwners**
> AddAccountOwners200Response removeAccountOwners(accountId, removeAccountOwnersRequest)

Remove account owners

Remove owner or owners from an existing joint deposit account.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    RemoveAccountOwnersRequest removeAccountOwnersRequest = new RemoveAccountOwnersRequest(); // RemoveAccountOwnersRequest | 
    try {
      AddAccountOwners200Response result = apiInstance.removeAccountOwners(accountId, removeAccountOwnersRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#removeAccountOwners");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **removeAccountOwnersRequest** | [**RemoveAccountOwnersRequest**](RemoveAccountOwnersRequest.md)|  | |

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated deposit account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="reopenAccount"></a>
# **reopenAccount**
> ReopenAccount200Response reopenAccount(accountId, body)

Reopen an account

Reopens a closed account. Applies to deposit accounts and wallets.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    Object body = null; // Object | 
    try {
      ReopenAccount200Response result = apiInstance.reopenAccount(accountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#reopenAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**ReopenAccount200Response**](ReopenAccount200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The reopened account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="switchAccountNumbers"></a>
# **switchAccountNumbers**
> AddAccountOwners200Response switchAccountNumbers(accountId, body)

Switch account numbers

Switch primary and secondary account numbers for an existing deposit account.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    Object body = null; // Object | 
    try {
      AddAccountOwners200Response result = apiInstance.switchAccountNumbers(accountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#switchAccountNumbers");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated account resource after switching primary and secondary account numbers. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="unfreezeAccount"></a>
# **unfreezeAccount**
> CreateAccount201Response unfreezeAccount(accountId, body)

Unfreeze an account

Unfreezes an account.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    Object body = null; // Object | 
    try {
      CreateAccount201Response result = apiInstance.unfreezeAccount(accountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#unfreezeAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The unfrozen account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateAccount"></a>
# **updateAccount**
> CreateAccount201Response updateAccount(accountId, updateAccountRequest)

Update an account

Update an account. The request body is one of UpdateDepositAccountRequest, UpdateCreditAccountRequest, or UpdateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AccountsApi apiInstance = new AccountsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    UpdateAccountRequest updateAccountRequest = new UpdateAccountRequest(); // UpdateAccountRequest | 
    try {
      CreateAccount201Response result = apiInstance.updateAccount(accountId, updateAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountsApi#updateAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | **String**|  | |
| **updateAccountRequest** | [**UpdateAccountRequest**](UpdateAccountRequest.md)|  | |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

