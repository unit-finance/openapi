# CardsAuthorizationRequestsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAuthorizationRequestById**](CardsAuthorizationRequestsApi.md#getAuthorizationRequestById) | **GET** /authorization-requests/{id} | Get an authorization request by id |
| [**listAuthorizationRequests**](CardsAuthorizationRequestsApi.md#listAuthorizationRequests) | **GET** /authorization-requests | List authorization requests |


<a id="getAuthorizationRequestById"></a>
# **getAuthorizationRequestById**
> GetAuthorizationRequestById200Response getAuthorizationRequestById(id)

Get an authorization request by id

Get an authorization request resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsAuthorizationRequestsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsAuthorizationRequestsApi apiInstance = new CardsAuthorizationRequestsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      GetAuthorizationRequestById200Response result = apiInstance.getAuthorizationRequestById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsAuthorizationRequestsApi#getAuthorizationRequestById");
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

[**GetAuthorizationRequestById200Response**](GetAuthorizationRequestById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authorization Request resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listAuthorizationRequests"></a>
# **listAuthorizationRequests**
> ListAuthorizationRequests200Response listAuthorizationRequests(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterMerchantCategoryCode, filterFromAmount, filterToAmount)

List authorization requests

List authorization requests. Filtering and paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsAuthorizationRequestsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsAuthorizationRequestsApi apiInstance = new CardsAuthorizationRequestsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources.
    String pageOffset = "0"; // String | Optional. Number of resources to skip.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterMerchantCategoryCode = "filterMerchantCategoryCode_example"; // String | Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC).
    String filterFromAmount = "filterFromAmount_example"; // String | Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
    String filterToAmount = "filterToAmount_example"; // String | Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
    try {
      ListAuthorizationRequests200Response result = apiInstance.listAuthorizationRequests(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterMerchantCategoryCode, filterFromAmount, filterToAmount);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsAuthorizationRequestsApi#listAuthorizationRequests");
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
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterMerchantCategoryCode** | **String**| Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC). | [optional] |
| **filterFromAmount** | **String**| Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToAmount** | **String**| Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |

### Return type

[**ListAuthorizationRequests200Response**](ListAuthorizationRequests200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of authorization request resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

