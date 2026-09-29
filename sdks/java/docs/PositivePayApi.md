# PositivePayApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelPositivePay**](PositivePayApi.md#cancelPositivePay) | **POST** /positive-pay/{positivePayId}/cancel | Cancel a positive pay rule |
| [**configurePositivePayPolicy**](PositivePayApi.md#configurePositivePayPolicy) | **POST** /positive-pay-policy | Configure a positive pay policy |
| [**createPositivePay**](PositivePayApi.md#createPositivePay) | **POST** /positive-pay | Create a positive pay rule |
| [**getPositivePayById**](PositivePayApi.md#getPositivePayById) | **GET** /positive-pay/{positivePayId} | Get a positive pay rule by id |
| [**listPositivePay**](PositivePayApi.md#listPositivePay) | **GET** /positive-pay | List positive pay rules |
| [**uploadPositivePayDocument**](PositivePayApi.md#uploadPositivePayDocument) | **PUT** /positive-pay/{positivePayId}/documents | Upload a positive pay document |


<a id="cancelPositivePay"></a>
# **cancelPositivePay**
> CancelPositivePay200Response cancelPositivePay(positivePayId, body)

Cancel a positive pay rule

Cancel a Positive Pay rule by ID. Cancelled rules stop authorizing payments.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PositivePayApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PositivePayApi apiInstance = new PositivePayApi(defaultClient);
    String positivePayId = "positivePayId_example"; // String | 
    Object body = null; // Object | 
    try {
      CancelPositivePay200Response result = apiInstance.cancelPositivePay(positivePayId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PositivePayApi#cancelPositivePay");
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
| **positivePayId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**CancelPositivePay200Response**](CancelPositivePay200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The cancelled Positive Pay rule. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="configurePositivePayPolicy"></a>
# **configurePositivePayPolicy**
> configurePositivePayPolicy(configurePositivePayPolicyRequest)

Configure a positive pay policy

Configure Positive Pay policy to control which payment types require matching Positive Pay rules before they can be processed.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PositivePayApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PositivePayApi apiInstance = new PositivePayApi(defaultClient);
    ConfigurePositivePayPolicyRequest configurePositivePayPolicyRequest = new ConfigurePositivePayPolicyRequest(); // ConfigurePositivePayPolicyRequest | 
    try {
      apiInstance.configurePositivePayPolicy(configurePositivePayPolicyRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling PositivePayApi#configurePositivePayPolicy");
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
| **configurePositivePayPolicyRequest** | [**ConfigurePositivePayPolicyRequest**](ConfigurePositivePayPolicyRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Positive Pay policy was configured. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createPositivePay"></a>
# **createPositivePay**
> CreatePositivePay201Response createPositivePay(createPositivePayRequest)

Create a positive pay rule

Create a Positive Pay rule. Variants: - **CreateCheckPaymentPositivePay** - **CreateReceivedACHDebitPositivePay** - **CreateWireDrawdownPositivePay**

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PositivePayApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PositivePayApi apiInstance = new PositivePayApi(defaultClient);
    CreatePositivePayRequest createPositivePayRequest = new CreatePositivePayRequest(); // CreatePositivePayRequest | 
    try {
      CreatePositivePay201Response result = apiInstance.createPositivePay(createPositivePayRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PositivePayApi#createPositivePay");
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
| **createPositivePayRequest** | [**CreatePositivePayRequest**](CreatePositivePayRequest.md)|  | |

### Return type

[**CreatePositivePay201Response**](CreatePositivePay201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created Positive Pay rule, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getPositivePayById"></a>
# **getPositivePayById**
> GetPositivePayById200Response getPositivePayById(positivePayId)

Get a positive pay rule by id

Get a Positive Pay rule by ID.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PositivePayApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PositivePayApi apiInstance = new PositivePayApi(defaultClient);
    String positivePayId = "positivePayId_example"; // String | 
    try {
      GetPositivePayById200Response result = apiInstance.getPositivePayById(positivePayId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PositivePayApi#getPositivePayById");
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
| **positivePayId** | **String**|  | |

### Return type

[**GetPositivePayById200Response**](GetPositivePayById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Positive Pay rule. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listPositivePay"></a>
# **listPositivePay**
> ListPositivePay200Response listPositivePay(pageLimit, pageOffset, filterAccountId, filterStatus, filterType, filterTags, sort)

List positive pay rules

List Positive Pay rules. Filtering, paging, and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PositivePayApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PositivePayApi apiInstance = new PositivePayApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterStatus = "filterStatus_example"; // String | Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled.
    String filterType = "filterType_example"; // String | Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay.
    String filterTags = "filterTags_example"; // String | Optional. Filter positive pay by Tags.
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    try {
      ListPositivePay200Response result = apiInstance.listPositivePay(pageLimit, pageOffset, filterAccountId, filterStatus, filterType, filterTags, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PositivePayApi#listPositivePay");
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
| **filterStatus** | **String**| Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled. | [optional] |
| **filterType** | **String**| Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay. | [optional] |
| **filterTags** | **String**| Optional. Filter positive pay by Tags. | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**ListPositivePay200Response**](ListPositivePay200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of positive pay rule resources. Each resource can be any of the listed rule types, as indicated by the type field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **0** | Error response |  -  |

<a id="uploadPositivePayDocument"></a>
# **uploadPositivePayDocument**
> uploadPositivePayDocument(positivePayId, body)

Upload a positive pay document

Upload the authorization document required to activate a drawdown rule (Wire Drawdown Only).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.PositivePayApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    PositivePayApi apiInstance = new PositivePayApi(defaultClient);
    String positivePayId = "positivePayId_example"; // String | 
    File body = new File("/path/to/file"); // File | 
    try {
      apiInstance.uploadPositivePayDocument(positivePayId, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling PositivePayApi#uploadPositivePayDocument");
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
| **positivePayId** | **String**|  | |
| **body** | **File**|  | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The authorization document was uploaded. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

