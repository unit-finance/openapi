# CardsAuthorizationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAuthorization**](CardsAuthorizationsApi.md#getAuthorization) | **GET** /authorizations/{id} | Get an authorization |
| [**listAuthorizations**](CardsAuthorizationsApi.md#listAuthorizations) | **GET** /authorizations | List authorizations |
| [**releaseAuthorization**](CardsAuthorizationsApi.md#releaseAuthorization) | **POST** /authorizations/{id}/release | Release an authorization |


<a id="getAuthorization"></a>
# **getAuthorization**
> GetAuthorization200Response getAuthorization(id, filterIncludeNonAuthorized)

Get an authorization

Get an authorization resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsAuthorizationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsAuthorizationsApi apiInstance = new CardsAuthorizationsApi(defaultClient);
    String id = "id_example"; // String | 
    String filterIncludeNonAuthorized = "false"; // String | Optional. Include authorizations from all statuses.
    try {
      GetAuthorization200Response result = apiInstance.getAuthorization(id, filterIncludeNonAuthorized);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsAuthorizationsApi#getAuthorization");
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
| **filterIncludeNonAuthorized** | **String**| Optional. Include authorizations from all statuses. | [optional] [default to false] |

### Return type

[**GetAuthorization200Response**](GetAuthorization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authorization resource. |  -  |
| **0** | Error |  -  |

<a id="listAuthorizations"></a>
# **listAuthorizations**
> ListAuthorizations200Response listAuthorizations(pageLimit, pageOffset, filterAccountId, filterAccountType, filterCustomerId, filterCardId, filterSince, filterUntil, filterIncludeNonAuthorized, filterStatus, filterMerchantCategoryCode, filterFromAmount, filterToAmount, sort)

List authorizations

List authorizations. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsAuthorizationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsAuthorizationsApi apiInstance = new CardsAuthorizationsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources.
    String pageOffset = "0"; // String | Optional. Number of resources to skip.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterAccountType = "filterAccountType_example"; // String | Optional. Filter the results by account type (deposit, credit).
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterCardId = "filterCardId_example"; // String | Optional. Filters the results by the specified card id.
    String filterSince = "filterSince_example"; // String | Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
    String filterUntil = "filterUntil_example"; // String | Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
    String filterIncludeNonAuthorized = "false"; // String | Optional. Include authorizations from all statuses.
    String filterStatus = "Authorized"; // String | Optional. Filter authorizations by Authorization Status.
    String filterMerchantCategoryCode = "filterMerchantCategoryCode_example"; // String | Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC).
    String filterFromAmount = "filterFromAmount_example"; // String | Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
    String filterToAmount = "filterToAmount_example"; // String | Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    try {
      ListAuthorizations200Response result = apiInstance.listAuthorizations(pageLimit, pageOffset, filterAccountId, filterAccountType, filterCustomerId, filterCardId, filterSince, filterUntil, filterIncludeNonAuthorized, filterStatus, filterMerchantCategoryCode, filterFromAmount, filterToAmount, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsAuthorizationsApi#listAuthorizations");
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
| **filterAccountType** | **String**| Optional. Filter the results by account type (deposit, credit). | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterCardId** | **String**| Optional. Filters the results by the specified card id. | [optional] |
| **filterSince** | **String**| Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filterUntil** | **String**| Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |
| **filterIncludeNonAuthorized** | **String**| Optional. Include authorizations from all statuses. | [optional] [default to false] |
| **filterStatus** | **String**| Optional. Filter authorizations by Authorization Status. | [optional] [default to Authorized] |
| **filterMerchantCategoryCode** | **String**| Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC). | [optional] |
| **filterFromAmount** | **String**| Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToAmount** | **String**| Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**ListAuthorizations200Response**](ListAuthorizations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of authorization resources. |  -  |
| **0** | Error |  -  |

<a id="releaseAuthorization"></a>
# **releaseAuthorization**
> GetAuthorization200Response releaseAuthorization(id, body)

Release an authorization

Manually release an authorization that is in &#x60;Authorized&#x60; status. This removes the authorization hold from the account so the **available** balance increases by the authorization amount (subject to other pending activity).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsAuthorizationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsAuthorizationsApi apiInstance = new CardsAuthorizationsApi(defaultClient);
    String id = "id_example"; // String | 
    Object body = null; // Object | 
    try {
      GetAuthorization200Response result = apiInstance.releaseAuthorization(id, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsAuthorizationsApi#releaseAuthorization");
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
| **body** | **Object**|  | [optional] |

### Return type

[**GetAuthorization200Response**](GetAuthorization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated authorization. |  -  |
| **0** | Error |  -  |

