# CheckPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**approveCheckPaymentAdditionalVerification**](CheckPaymentsApi.md#approveCheckPaymentAdditionalVerification) | **POST** /check-payments/{checkPaymentId}/approve | Approve check payment additional verification |
| [**cancelCheckPayment**](CheckPaymentsApi.md#cancelCheckPayment) | **POST** /check-payments/{checkPaymentId}/cancel | Cancel a check payment |
| [**getCheckImage**](CheckPaymentsApi.md#getCheckImage) | **GET** /check-payments/{checkPaymentId}/{side}/{type} | Get a check payment image |
| [**getCheckPayment**](CheckPaymentsApi.md#getCheckPayment) | **GET** /check-payments/{checkPaymentId} | Get a check payment by id |
| [**listCheckPayments**](CheckPaymentsApi.md#listCheckPayments) | **GET** /check-payments | List check payments |
| [**originateCheckPaymentMailPhysicalCheck**](CheckPaymentsApi.md#originateCheckPaymentMailPhysicalCheck) | **POST** /check-payments | Originate a check payment |
| [**returnCheckPayment**](CheckPaymentsApi.md#returnCheckPayment) | **POST** /check-payments/{checkPaymentId}/return | Return a check payment |


<a id="approveCheckPaymentAdditionalVerification"></a>
# **approveCheckPaymentAdditionalVerification**
> OriginateCheckPaymentMailPhysicalCheck201Response approveCheckPaymentAdditionalVerification(checkPaymentId, approveCheckPaymentAdditionalVerificationRequest)

Approve check payment additional verification

When a Check Payment requires additional verification, its &#x60;additionalVerificationStatus&#x60; will be set to &#x60;Required&#x60;. In this case, a CheckPayment.additionalVerificationRequired event will be triggered.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckPaymentsApi apiInstance = new CheckPaymentsApi(defaultClient);
    String checkPaymentId = "checkPaymentId_example"; // String | 
    ApproveCheckPaymentAdditionalVerificationRequest approveCheckPaymentAdditionalVerificationRequest = new ApproveCheckPaymentAdditionalVerificationRequest(); // ApproveCheckPaymentAdditionalVerificationRequest | 
    try {
      OriginateCheckPaymentMailPhysicalCheck201Response result = apiInstance.approveCheckPaymentAdditionalVerification(checkPaymentId, approveCheckPaymentAdditionalVerificationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckPaymentsApi#approveCheckPaymentAdditionalVerification");
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
| **checkPaymentId** | **String**|  | |
| **approveCheckPaymentAdditionalVerificationRequest** | [**ApproveCheckPaymentAdditionalVerificationRequest**](ApproveCheckPaymentAdditionalVerificationRequest.md)|  | |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CheckPayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="cancelCheckPayment"></a>
# **cancelCheckPayment**
> OriginateCheckPaymentMailPhysicalCheck201Response cancelCheckPayment(checkPaymentId, body)

Cancel a check payment

Cancels a previously processed check payment. Only check payments in status &#x60;Pending&#x60; can be canceled. If cancelation was successful, the check status will change to &#x60;Canceled&#x60; and a checkPayment.canceled will be fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckPaymentsApi apiInstance = new CheckPaymentsApi(defaultClient);
    String checkPaymentId = "checkPaymentId_example"; // String | 
    Object body = null; // Object | 
    try {
      OriginateCheckPaymentMailPhysicalCheck201Response result = apiInstance.cancelCheckPayment(checkPaymentId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckPaymentsApi#cancelCheckPayment");
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
| **checkPaymentId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The canceled payment. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCheckImage"></a>
# **getCheckImage**
> File getCheckImage(checkPaymentId, side, type)

Get a check payment image

Get a check payment image by check payment id, side (front or back), and type (printed or deposited).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckPaymentsApi apiInstance = new CheckPaymentsApi(defaultClient);
    String checkPaymentId = "checkPaymentId_example"; // String | 
    String side = "side_example"; // String | Check side: front or back.
    String type = "type_example"; // String | Image type: printed or deposited.
    try {
      File result = apiInstance.getCheckImage(checkPaymentId, side, type);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckPaymentsApi#getCheckImage");
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
| **checkPaymentId** | **String**|  | |
| **side** | **String**| Check side: front or back. | |
| **type** | **String**| Image type: printed or deposited. | |

### Return type

[**File**](File.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The check payment image. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCheckPayment"></a>
# **getCheckPayment**
> GetCheckPayment200Response getCheckPayment(checkPaymentId, include)

Get a check payment by id

Get a check payment by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckPaymentsApi apiInstance = new CheckPaymentsApi(defaultClient);
    String checkPaymentId = "checkPaymentId_example"; // String | 
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
    try {
      GetCheckPayment200Response result = apiInstance.getCheckPayment(checkPaymentId, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckPaymentsApi#getCheckPayment");
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
| **checkPaymentId** | **String**|  | |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**GetCheckPayment200Response**](GetCheckPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CheckPayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCheckPayments"></a>
# **listCheckPayments**
> ListCheckPayments200Response listCheckPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterTags, sort, filterSince, filterUntil, filterStatus, filterFromAmount, filterToAmount, filterCheckNumber, include)

List check payments

List check payments resources. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckPaymentsApi apiInstance = new CheckPaymentsApi(defaultClient);
    String pageLimit = "100"; // String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterTags = "filterTags_example"; // String | Optional. Filter check payments by Tags.
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    String filterSince = "filterSince_example"; // String | Optional. Filters *before* the specified date. e.g. 2021-06-01
    String filterUntil = "filterUntil_example"; // String | Optional. Filters *after* the specified date. e.g. 2021-07-01
    String filterStatus = "filterStatus_example"; // String | Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, `). Usage example: *filter[status][0]=Processed*
    String filterFromAmount = "filterFromAmount_example"; // String | Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
    String filterToAmount = "filterToAmount_example"; // String | Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
    String filterCheckNumber = "filterCheckNumber_example"; // String | Optional. Filter Check Payments by check number (trimming leading zeros).
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
    try {
      ListCheckPayments200Response result = apiInstance.listCheckPayments(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterTags, sort, filterSince, filterUntil, filterStatus, filterFromAmount, filterToAmount, filterCheckNumber, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckPaymentsApi#listCheckPayments");
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
| **filterTags** | **String**| Optional. Filter check payments by Tags. | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |
| **filterSince** | **String**| Optional. Filters *before* the specified date. e.g. 2021-06-01 | [optional] |
| **filterUntil** | **String**| Optional. Filters *after* the specified date. e.g. 2021-07-01 | [optional] |
| **filterStatus** | **String**| Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, &#x60;). Usage example: *filter[status][0]&#x3D;Processed* | [optional] |
| **filterFromAmount** | **String**| Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToAmount** | **String**| Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **filterCheckNumber** | **String**| Optional. Filter Check Payments by check number (trimming leading zeros). | [optional] |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**ListCheckPayments200Response**](ListCheckPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of check payment resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="originateCheckPaymentMailPhysicalCheck"></a>
# **originateCheckPaymentMailPhysicalCheck**
> OriginateCheckPaymentMailPhysicalCheck201Response originateCheckPaymentMailPhysicalCheck(originateCheckPaymentMailPhysicalCheckRequest)

Originate a check payment

Creates a physical check. The check will be printed and mailed to the US recipient specified in the request. Originated check payments can be set to be sent immediately or scheduled for a future date.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckPaymentsApi apiInstance = new CheckPaymentsApi(defaultClient);
    OriginateCheckPaymentMailPhysicalCheckRequest originateCheckPaymentMailPhysicalCheckRequest = new OriginateCheckPaymentMailPhysicalCheckRequest(); // OriginateCheckPaymentMailPhysicalCheckRequest | 
    try {
      OriginateCheckPaymentMailPhysicalCheck201Response result = apiInstance.originateCheckPaymentMailPhysicalCheck(originateCheckPaymentMailPhysicalCheckRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckPaymentsApi#originateCheckPaymentMailPhysicalCheck");
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
| **originateCheckPaymentMailPhysicalCheckRequest** | [**OriginateCheckPaymentMailPhysicalCheckRequest**](OriginateCheckPaymentMailPhysicalCheckRequest.md)|  | |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Creates a physical check. The check will be printed and mailed to the US recipient specified in the request. Originated check payments can be set to be sent immediately or scheduled for a future date. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="returnCheckPayment"></a>
# **returnCheckPayment**
> OriginateCheckPaymentMailPhysicalCheck201Response returnCheckPayment(checkPaymentId, returnCheckPaymentRequest)

Return a check payment

Create a return as long as it happens before the &#x60;returnCutoffTime&#x60;, the Check Payment status will be set to &#x60;MarkedForReturn&#x60;. A CheckPayment.markedForReturn event is raised when the request is completed successfully.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckPaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckPaymentsApi apiInstance = new CheckPaymentsApi(defaultClient);
    String checkPaymentId = "checkPaymentId_example"; // String | 
    ReturnCheckPaymentRequest returnCheckPaymentRequest = new ReturnCheckPaymentRequest(); // ReturnCheckPaymentRequest | 
    try {
      OriginateCheckPaymentMailPhysicalCheck201Response result = apiInstance.returnCheckPayment(checkPaymentId, returnCheckPaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckPaymentsApi#returnCheckPayment");
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
| **checkPaymentId** | **String**|  | |
| **returnCheckPaymentRequest** | [**ReturnCheckPaymentRequest**](ReturnCheckPaymentRequest.md)|  | |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CheckPayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

