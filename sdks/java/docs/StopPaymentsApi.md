# StopPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStopPayment**](StopPaymentsApi.md#createStopPayment) | **POST** /stop-payments | Create a stop payment |
| [**disableStopPayment**](StopPaymentsApi.md#disableStopPayment) | **POST** /stop-payments/{stopPaymentId}/disable | Disable a stop payment |
| [**getStopPayment**](StopPaymentsApi.md#getStopPayment) | **GET** /stop-payments/{stopPaymentId} | Get a stop payment by id |
| [**listStopPayments**](StopPaymentsApi.md#listStopPayments) | **GET** /stop-payments | List stop payments |
| [**updateAchStopPayment**](StopPaymentsApi.md#updateAchStopPayment) | **PATCH** /stop-payments/{stopPaymentId} | Update an ACH stop payment |


<a id="createStopPayment"></a>
# **createStopPayment**
> CreateStopPayment201Response createStopPayment(createStopPaymentRequest)

Create a stop payment

Create a stop payment. The request body is one of CreateACHStopPaymentRequest or CreateCheckStopPaymentRequest, discriminated by data.type (achStopPayment, checkStopPayment). The stopPayment created webhook event will be fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StopPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StopPaymentsApi apiInstance = new StopPaymentsApi(defaultClient);
    CreateStopPaymentRequest createStopPaymentRequest = new CreateStopPaymentRequest(); // CreateStopPaymentRequest | 
    try {
      CreateStopPayment201Response result = apiInstance.createStopPayment(createStopPaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StopPaymentsApi#createStopPayment");
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
| **createStopPaymentRequest** | [**CreateStopPaymentRequest**](CreateStopPaymentRequest.md)|  | |

### Return type

[**CreateStopPayment201Response**](CreateStopPayment201Response.md)

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

<a id="disableStopPayment"></a>
# **disableStopPayment**
> GetStopPayment200Response disableStopPayment(stopPaymentId, body)

Disable a stop payment

Disable a Stop Payment by id. When a Stop Payment is disabled, the checkStopPayment disabled webhook event is fired and future check payments wont be stopped by this stop payment.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StopPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StopPaymentsApi apiInstance = new StopPaymentsApi(defaultClient);
    String stopPaymentId = "stopPaymentId_example"; // String | 
    Object body = null; // Object | 
    try {
      GetStopPayment200Response result = apiInstance.disableStopPayment(stopPaymentId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StopPaymentsApi#disableStopPayment");
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
| **stopPaymentId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**GetStopPayment200Response**](GetStopPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | checkStopPayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getStopPayment"></a>
# **getStopPayment**
> GetStopPayment200Response getStopPayment(stopPaymentId)

Get a stop payment by id

Get a stop payment by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StopPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StopPaymentsApi apiInstance = new StopPaymentsApi(defaultClient);
    String stopPaymentId = "stopPaymentId_example"; // String | 
    try {
      GetStopPayment200Response result = apiInstance.getStopPayment(stopPaymentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StopPaymentsApi#getStopPayment");
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
| **stopPaymentId** | **String**|  | |

### Return type

[**GetStopPayment200Response**](GetStopPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | checkStopPayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listStopPayments"></a>
# **listStopPayments**
> ListStopPayments200Response listStopPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterTags, sort, filterSince, filterUntil, filterStatus, filterFromAmount, filterToAmount, filterNoAmount, filterFromMinAmount, filterToMinAmount, filterNoMinAmount, filterOriginatorName, filterNoOriginatorName, filterCheckNumber, filterType)

List stop payments

List stop payment resources. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StopPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StopPaymentsApi apiInstance = new StopPaymentsApi(defaultClient);
    String pageLimit = "100"; // String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterTags = "filterTags_example"; // String | Optional. Filter stop payments by Tags.
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    String filterSince = "filterSince_example"; // String | Optional. Filters *before* the specified date. e.g. 2021-06-01
    String filterUntil = "filterUntil_example"; // String | Optional. Filters *after* the specified date. e.g. 2021-07-01
    String filterStatus = "Active"; // String | Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]=Disabled*
    String filterFromAmount = "filterFromAmount_example"; // String | Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
    String filterToAmount = "filterToAmount_example"; // String | Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
    String filterNoAmount = "filterNoAmount_example"; // String | Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount
    String filterFromMinAmount = "filterFromMinAmount_example"; // String | Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents).
    String filterToMinAmount = "filterToMinAmount_example"; // String | Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents).
    String filterNoMinAmount = "filterNoMinAmount_example"; // String | Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount
    String filterOriginatorName = "filterOriginatorName_example"; // String | Optional.
    String filterNoOriginatorName = "filterNoOriginatorName_example"; // String | Optional.
    String filterCheckNumber = "filterCheckNumber_example"; // String | Optional. Filter Stop Payments by check number (trimming leading zeros).
    String filterType = "filterType_example"; // String | Optional. Either checkStopPayment or achStopPayment
    try {
      ListStopPayments200Response result = apiInstance.listStopPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterTags, sort, filterSince, filterUntil, filterStatus, filterFromAmount, filterToAmount, filterNoAmount, filterFromMinAmount, filterToMinAmount, filterNoMinAmount, filterOriginatorName, filterNoOriginatorName, filterCheckNumber, filterType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StopPaymentsApi#listStopPayments");
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
| **pageLimit** | **String**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterTags** | **String**| Optional. Filter stop payments by Tags. | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |
| **filterSince** | **String**| Optional. Filters *before* the specified date. e.g. 2021-06-01 | [optional] |
| **filterUntil** | **String**| Optional. Filters *after* the specified date. e.g. 2021-07-01 | [optional] |
| **filterStatus** | **String**| Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]&#x3D;Disabled* | [optional] [default to Active] |
| **filterFromAmount** | **String**| Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToAmount** | **String**| Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **filterNoAmount** | **String**| Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount | [optional] |
| **filterFromMinAmount** | **String**| Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents). | [optional] |
| **filterToMinAmount** | **String**| Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents). | [optional] |
| **filterNoMinAmount** | **String**| Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount | [optional] |
| **filterOriginatorName** | **String**| Optional. | [optional] |
| **filterNoOriginatorName** | **String**| Optional. | [optional] |
| **filterCheckNumber** | **String**| Optional. Filter Stop Payments by check number (trimming leading zeros). | [optional] |
| **filterType** | **String**| Optional. Either checkStopPayment or achStopPayment | [optional] |

### Return type

[**ListStopPayments200Response**](ListStopPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of check stop payments resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateAchStopPayment"></a>
# **updateAchStopPayment**
> UpdateAchStopPayment200Response updateAchStopPayment(stopPaymentId, updateAchStopPaymentRequest)

Update an ACH stop payment

Update an AchStopPayment.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StopPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StopPaymentsApi apiInstance = new StopPaymentsApi(defaultClient);
    String stopPaymentId = "stopPaymentId_example"; // String | 
    UpdateAchStopPaymentRequest updateAchStopPaymentRequest = new UpdateAchStopPaymentRequest(); // UpdateAchStopPaymentRequest | 
    try {
      UpdateAchStopPayment200Response result = apiInstance.updateAchStopPayment(stopPaymentId, updateAchStopPaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StopPaymentsApi#updateAchStopPayment");
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
| **stopPaymentId** | **String**|  | |
| **updateAchStopPaymentRequest** | [**UpdateAchStopPaymentRequest**](UpdateAchStopPaymentRequest.md)|  | |

### Return type

[**UpdateAchStopPayment200Response**](UpdateAchStopPayment200Response.md)

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

