# CheckDepositsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clearCheckDeposit**](CheckDepositsApi.md#clearCheckDeposit) | **POST** /check-deposits/{checkDepositId}/clear | Clear a check deposit |
| [**confirmCheckDepositDetails**](CheckDepositsApi.md#confirmCheckDepositDetails) | **POST** /check-deposits/{checkDepositId}/confirm | Confirm check deposit details |
| [**createCheckDeposit**](CheckDepositsApi.md#createCheckDeposit) | **POST** /check-deposits | Create a check deposit |
| [**createCheckDepositSendLink**](CheckDepositsApi.md#createCheckDepositSendLink) | **POST** /white-label/send-link | Create a check deposit send link |
| [**getCheckDeposit**](CheckDepositsApi.md#getCheckDeposit) | **GET** /check-deposits/{checkDepositId} | Get a check deposit by id |
| [**getCheckDepositBackImage**](CheckDepositsApi.md#getCheckDepositBackImage) | **GET** /check-deposits/{checkDepositId}/back | Get a check deposit back image |
| [**getCheckDepositFrontImage**](CheckDepositsApi.md#getCheckDepositFrontImage) | **GET** /check-deposits/{checkDepositId}/front | Get a check deposit front image |
| [**listCheckDeposits**](CheckDepositsApi.md#listCheckDeposits) | **GET** /check-deposits | List check deposits |
| [**updateCheckDeposit**](CheckDepositsApi.md#updateCheckDeposit) | **PATCH** /check-deposits/{checkDepositId} | Update a check deposit |
| [**uploadCheckDepositBackImage**](CheckDepositsApi.md#uploadCheckDepositBackImage) | **PUT** /check-deposits/{checkDepositId}/back | Upload a check deposit back image |
| [**uploadCheckDepositFrontImage**](CheckDepositsApi.md#uploadCheckDepositFrontImage) | **PUT** /check-deposits/{checkDepositId}/front | Upload a check deposit front image |


<a id="clearCheckDeposit"></a>
# **clearCheckDeposit**
> CreateCheckDeposit201Response clearCheckDeposit(checkDepositId, body)

Clear a check deposit

Clears a check deposit while in &#x60;Clearing&#x60; status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    Object body = null; // Object | 
    try {
      CreateCheckDeposit201Response result = apiInstance.clearCheckDeposit(checkDepositId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#clearCheckDeposit");
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
| **checkDepositId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The cleared check deposit. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="confirmCheckDepositDetails"></a>
# **confirmCheckDepositDetails**
> confirmCheckDepositDetails(checkDepositId, body)

Confirm check deposit details

Confirms a check deposit details when it&#39;s in &#x60;AwaitingCustomerConfirmation&#x60; status

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.confirmCheckDepositDetails(checkDepositId, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#confirmCheckDepositDetails");
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
| **checkDepositId** | **String**|  | |
| **body** | **Object**|  | [optional] |

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
| **200** | The check deposit details were confirmed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createCheckDeposit"></a>
# **createCheckDeposit**
> CreateCheckDeposit201Response createCheckDeposit(createCheckDepositRequest)

Create a check deposit

Creates a check deposit for an &#x60;Account&#x60;.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    CreateCheckDepositRequest createCheckDepositRequest = new CreateCheckDepositRequest(); // CreateCheckDepositRequest | 
    try {
      CreateCheckDeposit201Response result = apiInstance.createCheckDeposit(createCheckDepositRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#createCheckDeposit");
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
| **createCheckDepositRequest** | [**CreateCheckDepositRequest**](CreateCheckDepositRequest.md)|  | |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

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

<a id="createCheckDepositSendLink"></a>
# **createCheckDepositSendLink**
> CreateCheckDepositSendLink201Response createCheckDepositSendLink(createCheckDepositSendLinkRequest)

Create a check deposit send link

Creates a shareable link for the Check Deposit component for an &#x60;Account&#x60;. The link can be sent to an end user via SMS or email and used to complete a check deposit. Unless a White Label Theme is customized, the component uses the default theme. Unless an Email Domain is customized the link will be created under a default domain starting in &#x60;https://application-form.sh&#x60;.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    CreateCheckDepositSendLinkRequest createCheckDepositSendLinkRequest = new CreateCheckDepositSendLinkRequest(); // CreateCheckDepositSendLinkRequest | 
    try {
      CreateCheckDepositSendLink201Response result = apiInstance.createCheckDepositSendLink(createCheckDepositSendLinkRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#createCheckDepositSendLink");
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
| **createCheckDepositSendLinkRequest** | [**CreateCheckDepositSendLinkRequest**](CreateCheckDepositSendLinkRequest.md)|  | |

### Return type

[**CreateCheckDepositSendLink201Response**](CreateCheckDepositSendLink201Response.md)

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

<a id="getCheckDeposit"></a>
# **getCheckDeposit**
> GetCheckDeposit200Response getCheckDeposit(checkDepositId, include)

Get a check deposit by id

Get a check deposit by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
    try {
      GetCheckDeposit200Response result = apiInstance.getCheckDeposit(checkDepositId, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#getCheckDeposit");
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
| **checkDepositId** | **String**|  | |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**GetCheckDeposit200Response**](GetCheckDeposit200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CheckDeposit resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCheckDepositBackImage"></a>
# **getCheckDepositBackImage**
> File getCheckDepositBackImage(checkDepositId)

Get a check deposit back image

Get a check deposit back image by check deposit id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    try {
      File result = apiInstance.getCheckDepositBackImage(checkDepositId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#getCheckDepositBackImage");
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
| **checkDepositId** | **String**|  | |

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
| **200** | The check deposit back image. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCheckDepositFrontImage"></a>
# **getCheckDepositFrontImage**
> File getCheckDepositFrontImage(checkDepositId)

Get a check deposit front image

Get a check deposit front image by check deposit id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    try {
      File result = apiInstance.getCheckDepositFrontImage(checkDepositId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#getCheckDepositFrontImage");
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
| **checkDepositId** | **String**|  | |

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
| **200** | The check deposit front image. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCheckDeposits"></a>
# **listCheckDeposits**
> ListCheckDeposits200Response listCheckDeposits(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterStatus, filterTags, filterFromAmount, filterToAmount, sort, include)

List check deposits

List check deposit resources. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String pageLimit = "100"; // String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]=PendingReview&filter[status][1]=AwaitingImages
    String filterTags = "filterTags_example"; // String | Optional. Filter check deposits by Tags.
    String filterFromAmount = "filterFromAmount_example"; // String | Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
    String filterToAmount = "filterToAmount_example"; // String | Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
    try {
      ListCheckDeposits200Response result = apiInstance.listCheckDeposits(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterStatus, filterTags, filterFromAmount, filterToAmount, sort, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#listCheckDeposits");
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
| **filterStatus** | **String**| Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]&#x3D;PendingReview&amp;filter[status][1]&#x3D;AwaitingImages | [optional] |
| **filterTags** | **String**| Optional. Filter check deposits by Tags. | [optional] |
| **filterFromAmount** | **String**| Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filterToAmount** | **String**| Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**ListCheckDeposits200Response**](ListCheckDeposits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of check deposit resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateCheckDeposit"></a>
# **updateCheckDeposit**
> CreateCheckDeposit201Response updateCheckDeposit(checkDepositId, updateCheckDepositRequest)

Update a check deposit

Update a check deposit.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    UpdateCheckDepositRequest updateCheckDepositRequest = new UpdateCheckDepositRequest(); // UpdateCheckDepositRequest | 
    try {
      CreateCheckDeposit201Response result = apiInstance.updateCheckDeposit(checkDepositId, updateCheckDepositRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#updateCheckDeposit");
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
| **checkDepositId** | **String**|  | |
| **updateCheckDepositRequest** | [**UpdateCheckDepositRequest**](UpdateCheckDepositRequest.md)|  | |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated CheckDeposit resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="uploadCheckDepositBackImage"></a>
# **uploadCheckDepositBackImage**
> CreateCheckDeposit201Response uploadCheckDepositBackImage(checkDepositId, body)

Upload a check deposit back image

Uploads a check back-side image file. Currently only &#x60;jpeg&#x60; file type is supported.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    File body = new File("/path/to/file"); // File | 
    try {
      CreateCheckDeposit201Response result = apiInstance.uploadCheckDepositBackImage(checkDepositId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#uploadCheckDepositBackImage");
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
| **checkDepositId** | **String**|  | |
| **body** | **File**|  | |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: image/jpeg
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated CheckDeposit resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="uploadCheckDepositFrontImage"></a>
# **uploadCheckDepositFrontImage**
> CreateCheckDeposit201Response uploadCheckDepositFrontImage(checkDepositId, body)

Upload a check deposit front image

Uploads a check front-side image file. Currently only &#x60;jpeg&#x60; file type is supported.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CheckDepositsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CheckDepositsApi apiInstance = new CheckDepositsApi(defaultClient);
    String checkDepositId = "checkDepositId_example"; // String | 
    File body = new File("/path/to/file"); // File | 
    try {
      CreateCheckDeposit201Response result = apiInstance.uploadCheckDepositFrontImage(checkDepositId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CheckDepositsApi#uploadCheckDepositFrontImage");
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
| **checkDepositId** | **String**|  | |
| **body** | **File**|  | |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: image/jpeg
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated CheckDeposit resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

