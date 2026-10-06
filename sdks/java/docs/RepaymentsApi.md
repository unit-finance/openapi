# RepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRepayment**](RepaymentsApi.md#createRepayment) | **POST** /repayments | Create a repayment |
| [**getRepayment**](RepaymentsApi.md#getRepayment) | **GET** /repayments/{repaymentId} | Get a repayment by id |
| [**listRepayments**](RepaymentsApi.md#listRepayments) | **GET** /repayments | List repayments |
| [**returnExternalRepayment**](RepaymentsApi.md#returnExternalRepayment) | **POST** /repayments/{repaymentId}/return | Return an external repayment |


<a id="createRepayment"></a>
# **createRepayment**
> CreateRepayment201Response createRepayment(createRepaymentRequest)

Create a repayment

Create a repayment for a credit account. The request body is one of CreateACHRepaymentRequest, CreateBookRepaymentRequest, CreateCapitalPartnerACHRepaymentRequest, CreateCapitalPartnerBookRepaymentRequest, or CreateExternalRepaymentRequest, discriminated by data.type (repayment, externalRepayment) together with the relationships supplied — the capital partner variants omit the account relationship, the book variants use counterpartyAccount instead of counterparty, and the external variant only takes creditAccount.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RepaymentsApi apiInstance = new RepaymentsApi(defaultClient);
    CreateRepaymentRequest createRepaymentRequest = new CreateRepaymentRequest(); // CreateRepaymentRequest | 
    try {
      CreateRepayment201Response result = apiInstance.createRepayment(createRepaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RepaymentsApi#createRepayment");
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
| **createRepaymentRequest** | [**CreateRepaymentRequest**](CreateRepaymentRequest.md)|  | |

### Return type

[**CreateRepayment201Response**](CreateRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The requested resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getRepayment"></a>
# **getRepayment**
> GetRepayment200Response getRepayment(repaymentId)

Get a repayment by id

Get a repayment by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RepaymentsApi apiInstance = new RepaymentsApi(defaultClient);
    String repaymentId = "repaymentId_example"; // String | 
    try {
      GetRepayment200Response result = apiInstance.getRepayment(repaymentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RepaymentsApi#getRepayment");
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
| **repaymentId** | **String**|  | |

### Return type

[**GetRepayment200Response**](GetRepayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Repayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listRepayments"></a>
# **listRepayments**
> ListRepayments200Response listRepayments(pageLimit, pageOffset, filterAccountId, filterCreditAccountId, filterRecurringRepaymentId, filterCustomerId, filterStatus, filterType, filterSince, filterUntil)

List repayments

List repayments resources. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RepaymentsApi apiInstance = new RepaymentsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCreditAccountId = "filterCreditAccountId_example"; // String | Optional. Filters the results by the specified credit account id.
    String filterRecurringRepaymentId = "filterRecurringRepaymentId_example"; // String | Optional. Filters the result according to the associated Recurring Repayment id
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]=Active
    String filterType = "filterType_example"; // String | Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]=AchRepayment&filter[type][1]=BookRepayment*
    String filterSince = "filterSince_example"; // String | Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
    String filterUntil = "filterUntil_example"; // String | Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
    try {
      ListRepayments200Response result = apiInstance.listRepayments(pageLimit, pageOffset, filterAccountId, filterCreditAccountId, filterRecurringRepaymentId, filterCustomerId, filterStatus, filterType, filterSince, filterUntil);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RepaymentsApi#listRepayments");
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
| **filterCreditAccountId** | **String**| Optional. Filters the results by the specified credit account id. | [optional] |
| **filterRecurringRepaymentId** | **String**| Optional. Filters the result according to the associated Recurring Repayment id | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterStatus** | **String**| Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]&#x3D;Active | [optional] |
| **filterType** | **String**| Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]&#x3D;AchRepayment&amp;filter[type][1]&#x3D;BookRepayment* | [optional] |
| **filterSince** | **String**| Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filterUntil** | **String**| Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |

### Return type

[**ListRepayments200Response**](ListRepayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of repayment resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="returnExternalRepayment"></a>
# **returnExternalRepayment**
> ReturnExternalRepayment200Response returnExternalRepayment(repaymentId, returnExternalRepaymentRequest)

Return an external repayment

Returns an external repayment that was previously created with &#x60;Sent&#x60; status. This is used when the external payment needs to be reversed. When an external repayment is returned, the credit account balance will increase and the available credit limit will decrease.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RepaymentsApi apiInstance = new RepaymentsApi(defaultClient);
    String repaymentId = "repaymentId_example"; // String | 
    ReturnExternalRepaymentRequest returnExternalRepaymentRequest = new ReturnExternalRepaymentRequest(); // ReturnExternalRepaymentRequest | 
    try {
      ReturnExternalRepayment200Response result = apiInstance.returnExternalRepayment(repaymentId, returnExternalRepaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RepaymentsApi#returnExternalRepayment");
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
| **repaymentId** | **String**|  | |
| **returnExternalRepaymentRequest** | [**ReturnExternalRepaymentRequest**](ReturnExternalRepaymentRequest.md)|  | |

### Return type

[**ReturnExternalRepayment200Response**](ReturnExternalRepayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

