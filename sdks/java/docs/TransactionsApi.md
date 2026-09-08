# TransactionsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /accounts/{accountId}/transactions/{transactionId} | Get a transaction |
| [**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /transactions | List transactions |
| [**updateTransaction**](TransactionsApi.md#updateTransaction) | **PATCH** /transactions/{transactionId} | Update a transaction |
| [**updateTransactionTags**](TransactionsApi.md#updateTransactionTags) | **PATCH** /accounts/{accountId}/transactions/{transactionId} | Update transaction tags |


<a id="getTransaction"></a>
# **getTransaction**
> GetTransaction200Response getTransaction(accountId, transactionId, filterCustomerId, include)

Get a transaction

Get a transaction by transaction id and account id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    String transactionId = "transactionId_example"; // String | 
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the result by the specified customer id.
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
    try {
      GetTransaction200Response result = apiInstance.getTransaction(accountId, transactionId, filterCustomerId, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#getTransaction");
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
| **transactionId** | **String**|  | |
| **filterCustomerId** | **String**| Optional. Filters the result by the specified customer id. | [optional] |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |

### Return type

[**GetTransaction200Response**](GetTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A Transaction resource. |  -  |
| **0** | Error |  -  |

<a id="listTransactions"></a>
# **listTransactions**
> ListTransactions200Response listTransactions(pageLimit, pageOffset, filterAccountId, filterAccountIds, filterCustomerId, filterQuery, filterTags, filterSince, filterUntil, filterCardId, filterType, filterFromAmount, filterToAmount, filterDirection, filterExcludeFees, filterAccountType, sort, include)

List transactions

List transaction resources. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterAccountIds = "filterAccountIds_example"; // String | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001*
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterQuery = "filterQuery_example"; // String | Optional. search term according to the Full-Text Search Rules.
    String filterTags = "filterTags_example"; // String | Optional. Filter Transactions by Tags.
    String filterSince = "filterSince_example"; // String | Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
    String filterUntil = "filterUntil_example"; // String | Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
    String filterCardId = "filterCardId_example"; // String | Optional. Filters the results by the specified card id.
    String filterType = "filterType_example"; // String | Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]=OriginatedAch&filter[type][1]=ReceivedAch*
    String filterFromAmount = "filterFromAmount_example"; // String | Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
    String filterToAmount = "filterToAmount_example"; // String | Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
    String filterDirection = "filterDirection_example"; // String | Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]=Debit*
    String filterExcludeFees = "filterExcludeFees_example"; // String | Optional. Filter Fee type Transactions.
    String filterAccountType = "filterAccountType_example"; // String | Optional. Filter Transactions by account type (deposit, credit).
    String sort = "createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
    try {
      ListTransactions200Response result = apiInstance.listTransactions(pageLimit, pageOffset, filterAccountId, filterAccountIds, filterCustomerId, filterQuery, filterTags, filterSince, filterUntil, filterCardId, filterType, filterFromAmount, filterToAmount, filterDirection, filterExcludeFees, filterAccountType, sort, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#listTransactions");
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
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterAccountIds** | **String**| Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterQuery** | **String**| Optional. search term according to the Full-Text Search Rules. | [optional] |
| **filterTags** | **String**| Optional. Filter Transactions by Tags. | [optional] |
| **filterSince** | **String**| Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filterUntil** | **String**| Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |
| **filterCardId** | **String**| Optional. Filters the results by the specified card id. | [optional] |
| **filterType** | **String**| Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]&#x3D;OriginatedAch&amp;filter[type][1]&#x3D;ReceivedAch* | [optional] |
| **filterFromAmount** | **String**| Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToAmount** | **String**| Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **filterDirection** | **String**| Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]&#x3D;Debit* | [optional] |
| **filterExcludeFees** | **String**| Optional. Filter Fee type Transactions. | [optional] |
| **filterAccountType** | **String**| Optional. Filter Transactions by account type (deposit, credit). | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to createdAt] |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of transaction resources. |  -  |
| **0** | Error |  -  |

<a id="updateTransaction"></a>
# **updateTransaction**
> UpdateTransaction200Response updateTransaction(transactionId, updateTransactionRequest)

Update a transaction

Update a transaction. The request body is one of UpdateBookTransactionRequest (bookTransaction) or UpdateChargebackTransactionRequest (chargebackTransaction), discriminated by data.type.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String transactionId = "transactionId_example"; // String | 
    UpdateTransactionRequest updateTransactionRequest = new UpdateTransactionRequest(); // UpdateTransactionRequest | 
    try {
      UpdateTransaction200Response result = apiInstance.updateTransaction(transactionId, updateTransactionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#updateTransaction");
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
| **transactionId** | **String**|  | |
| **updateTransactionRequest** | [**UpdateTransactionRequest**](UpdateTransactionRequest.md)|  | |

### Return type

[**UpdateTransaction200Response**](UpdateTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A Transaction resource. |  -  |
| **0** | Error |  -  |

<a id="updateTransactionTags"></a>
# **updateTransactionTags**
> UpdateTransaction200Response updateTransactionTags(accountId, transactionId, updateTagsRequest)

Update transaction tags

Update Tags Transaction.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.TransactionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TransactionsApi apiInstance = new TransactionsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    String transactionId = "transactionId_example"; // String | 
    UpdateTagsRequest updateTagsRequest = new UpdateTagsRequest(); // UpdateTagsRequest | 
    try {
      UpdateTransaction200Response result = apiInstance.updateTransactionTags(accountId, transactionId, updateTagsRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsApi#updateTransactionTags");
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
| **transactionId** | **String**|  | |
| **updateTagsRequest** | [**UpdateTagsRequest**](UpdateTagsRequest.md)|  | |

### Return type

[**UpdateTransaction200Response**](UpdateTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A Transaction resource. |  -  |
| **0** | Error |  -  |

