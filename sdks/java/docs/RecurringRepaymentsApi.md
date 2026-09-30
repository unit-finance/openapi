# RecurringRepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRecurringRepayment**](RecurringRepaymentsApi.md#createRecurringRepayment) | **POST** /recurring-repayments | Create a recurring repayment |
| [**disableRecurringRepayment**](RecurringRepaymentsApi.md#disableRecurringRepayment) | **POST** /recurring-repayments/{id}/disable | Disable a recurring repayment |
| [**enableRecurringRepayment**](RecurringRepaymentsApi.md#enableRecurringRepayment) | **POST** /recurring-repayments/{id}/enable | Enable a recurring repayment |
| [**getRecurringRepayment**](RecurringRepaymentsApi.md#getRecurringRepayment) | **GET** /recurring-repayments/{id} | Get a recurring repayment by id |
| [**listRecurringRepayments**](RecurringRepaymentsApi.md#listRecurringRepayments) | **GET** /recurring-repayments | List recurring repayments |


<a id="createRecurringRepayment"></a>
# **createRecurringRepayment**
> CreateRecurringRepayment201Response createRecurringRepayment(createRecurringRepaymentRequest)

Create a recurring repayment

Originate a recurring repayment. The request body is one of CreateRecurringACHRepaymentRequest, CreateRecurringBookRepaymentRequest, CreateRecurringCapitalPartnerACHRepaymentRequest, or CreateRecurringCapitalPartnerBookRepaymentRequest, discriminated by data.type (recurringAchRepayment, recurringBookRepayment) together with the relationships supplied — the capital partner variants omit the account relationship.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RecurringRepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecurringRepaymentsApi apiInstance = new RecurringRepaymentsApi(defaultClient);
    CreateRecurringRepaymentRequest createRecurringRepaymentRequest = new CreateRecurringRepaymentRequest(); // CreateRecurringRepaymentRequest | 
    try {
      CreateRecurringRepayment201Response result = apiInstance.createRecurringRepayment(createRecurringRepaymentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecurringRepaymentsApi#createRecurringRepayment");
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
| **createRecurringRepaymentRequest** | [**CreateRecurringRepaymentRequest**](CreateRecurringRepaymentRequest.md)|  | |

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created recurring repayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="disableRecurringRepayment"></a>
# **disableRecurringRepayment**
> CreateRecurringRepayment201Response disableRecurringRepayment(id, body)

Disable a recurring repayment

Disable a Recurring Repayment by id. When a Recurring Repayment is disabled, the Recurring Repayment Status Changed webhook event is fired and future repayments will no longer be created according to the defined schedule.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RecurringRepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecurringRepaymentsApi apiInstance = new RecurringRepaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    Object body = null; // Object | 
    try {
      CreateRecurringRepayment201Response result = apiInstance.disableRecurringRepayment(id, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecurringRepaymentsApi#disableRecurringRepayment");
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

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring Repayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="enableRecurringRepayment"></a>
# **enableRecurringRepayment**
> CreateRecurringRepayment201Response enableRecurringRepayment(id, body)

Enable a recurring repayment

Enable a recurring repayment by id. When a Recurring Repayment is enabled, its status is set to Active according to the start date and end date that were defined in the schedule. See Recurring Repayment Statuses. When enabled, the Recurring Repayment Status Changed webhook event is fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RecurringRepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecurringRepaymentsApi apiInstance = new RecurringRepaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    Object body = null; // Object | 
    try {
      CreateRecurringRepayment201Response result = apiInstance.enableRecurringRepayment(id, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecurringRepaymentsApi#enableRecurringRepayment");
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

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring Repayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getRecurringRepayment"></a>
# **getRecurringRepayment**
> CreateRecurringRepayment201Response getRecurringRepayment(id)

Get a recurring repayment by id

Get a recurring repayment by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RecurringRepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecurringRepaymentsApi apiInstance = new RecurringRepaymentsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateRecurringRepayment201Response result = apiInstance.getRecurringRepayment(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecurringRepaymentsApi#getRecurringRepayment");
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

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recurring Repayment resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listRecurringRepayments"></a>
# **listRecurringRepayments**
> ListRecurringRepayments200Response listRecurringRepayments(pageLimit, pageOffset, filterCreditAccountId, filterCustomerId, filterStatus, filterFromStartTime, filterToStartTime, sort)

List recurring repayments

List recurring repayments resources. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RecurringRepaymentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RecurringRepaymentsApi apiInstance = new RecurringRepaymentsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterCreditAccountId = "filterCreditAccountId_example"; // String | Optional. Filters the results by the specified credit account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]=Active
    String filterFromStartTime = "filterFromStartTime_example"; // String | Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13
    String filterToStartTime = "filterToStartTime_example"; // String | Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    try {
      ListRecurringRepayments200Response result = apiInstance.listRecurringRepayments(pageLimit, pageOffset, filterCreditAccountId, filterCustomerId, filterStatus, filterFromStartTime, filterToStartTime, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RecurringRepaymentsApi#listRecurringRepayments");
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
| **filterCreditAccountId** | **String**| Optional. Filters the results by the specified credit account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterStatus** | **String**| Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]&#x3D;Active | [optional] |
| **filterFromStartTime** | **String**| Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13 | [optional] |
| **filterToStartTime** | **String**| Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13 | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**ListRecurringRepayments200Response**](ListRecurringRepayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of recurring repayment resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

