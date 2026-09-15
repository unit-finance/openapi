# CounterpartiesApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCounterparty**](CounterpartiesApi.md#createCounterparty) | **POST** /counterparties | Create a counterparty |
| [**deleteCounterparty**](CounterpartiesApi.md#deleteCounterparty) | **DELETE** /counterparties/{counterpartyId} | Delete a counterparty |
| [**getCounterparty**](CounterpartiesApi.md#getCounterparty) | **GET** /counterparties/{counterpartyId} | Get a counterparty by id |
| [**getCounterpartyBalance**](CounterpartiesApi.md#getCounterpartyBalance) | **GET** /counterparties/{counterpartyId}/balance | Get a counterparty balance by id |
| [**listCounterparties**](CounterpartiesApi.md#listCounterparties) | **GET** /counterparties | List counterparties |
| [**updateCounterparty**](CounterpartiesApi.md#updateCounterparty) | **PATCH** /counterparties/{counterpartyId} | Update a counterparty |


<a id="createCounterparty"></a>
# **createCounterparty**
> CreateCounterparty201Response createCounterparty(createCounterpartyBody)

Create a counterparty

Creates an ACH counterparty for a specific customer. The request body is one of CreateCounterpartyRequest (account/routing number) or CreateCounterpartyWithPlaidTokenRequest (Plaid processor token).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CounterpartiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CounterpartiesApi apiInstance = new CounterpartiesApi(defaultClient);
    CreateCounterpartyBody createCounterpartyBody = new CreateCounterpartyBody(); // CreateCounterpartyBody | 
    try {
      CreateCounterparty201Response result = apiInstance.createCounterparty(createCounterpartyBody);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CounterpartiesApi#createCounterparty");
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
| **createCounterpartyBody** | [**CreateCounterpartyBody**](CreateCounterpartyBody.md)|  | |

### Return type

[**CreateCounterparty201Response**](CreateCounterparty201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created counterparty resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="deleteCounterparty"></a>
# **deleteCounterparty**
> deleteCounterparty(counterpartyId, body)

Delete a counterparty

Delete a counterparty resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CounterpartiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CounterpartiesApi apiInstance = new CounterpartiesApi(defaultClient);
    String counterpartyId = "counterpartyId_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.deleteCounterparty(counterpartyId, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling CounterpartiesApi#deleteCounterparty");
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
| **counterpartyId** | **String**|  | |
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
| **204** | The counterparty was deleted successfully. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCounterparty"></a>
# **getCounterparty**
> CreateCounterparty201Response getCounterparty(counterpartyId)

Get a counterparty by id

Get a counterparty resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CounterpartiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CounterpartiesApi apiInstance = new CounterpartiesApi(defaultClient);
    String counterpartyId = "counterpartyId_example"; // String | 
    try {
      CreateCounterparty201Response result = apiInstance.getCounterparty(counterpartyId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CounterpartiesApi#getCounterparty");
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
| **counterpartyId** | **String**|  | |

### Return type

[**CreateCounterparty201Response**](CreateCounterparty201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Counterparty resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCounterpartyBalance"></a>
# **getCounterpartyBalance**
> GetCounterpartyBalance200Response getCounterpartyBalance(counterpartyId)

Get a counterparty balance by id

Get a counterparty balance resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CounterpartiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CounterpartiesApi apiInstance = new CounterpartiesApi(defaultClient);
    String counterpartyId = "counterpartyId_example"; // String | 
    try {
      GetCounterpartyBalance200Response result = apiInstance.getCounterpartyBalance(counterpartyId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CounterpartiesApi#getCounterpartyBalance");
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
| **counterpartyId** | **String**|  | |

### Return type

[**GetCounterpartyBalance200Response**](GetCounterpartyBalance200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Counterparty Balance resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCounterparties"></a>
# **listCounterparties**
> ListCounterparties200Response listCounterparties(pageLimit, pageOffset, filterCustomerId, filterAccountNumber, filterRoutingNumber, filterTags, filterPermissions, sort)

List counterparties

List counterparties. Filtering and paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CounterpartiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CounterpartiesApi apiInstance = new CounterpartiesApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterAccountNumber = "filterAccountNumber_example"; // String | Optional. Filters the results by the specified account number.
    String filterRoutingNumber = "filterRoutingNumber_example"; // String | Optional. Filters the results by the specified routing number.
    String filterTags = "filterTags_example"; // String | Optional. Filter Counterparties by Tags.
    String filterPermissions = "filterPermissions_example"; // String | Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]=CreditOnly&filter[permissions][1]=CreditAndDebit*
    String sort = "createdAt"; // String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
    try {
      ListCounterparties200Response result = apiInstance.listCounterparties(pageLimit, pageOffset, filterCustomerId, filterAccountNumber, filterRoutingNumber, filterTags, filterPermissions, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CounterpartiesApi#listCounterparties");
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
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterAccountNumber** | **String**| Optional. Filters the results by the specified account number. | [optional] |
| **filterRoutingNumber** | **String**| Optional. Filters the results by the specified routing number. | [optional] |
| **filterTags** | **String**| Optional. Filter Counterparties by Tags. | [optional] |
| **filterPermissions** | **String**| Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]&#x3D;CreditOnly&amp;filter[permissions][1]&#x3D;CreditAndDebit* | [optional] |
| **sort** | **String**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to createdAt] |

### Return type

[**ListCounterparties200Response**](ListCounterparties200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of counterparty resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateCounterparty"></a>
# **updateCounterparty**
> UpdateCounterparty200Response updateCounterparty(counterpartyId, updateCounterpartyRequest)

Update a counterparty

Update a Counterparty. Relink existing counterparty with a new Plaid processor token.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CounterpartiesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CounterpartiesApi apiInstance = new CounterpartiesApi(defaultClient);
    String counterpartyId = "counterpartyId_example"; // String | 
    UpdateCounterpartyRequest updateCounterpartyRequest = new UpdateCounterpartyRequest(); // UpdateCounterpartyRequest | 
    try {
      UpdateCounterparty200Response result = apiInstance.updateCounterparty(counterpartyId, updateCounterpartyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CounterpartiesApi#updateCounterparty");
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
| **counterpartyId** | **String**|  | |
| **updateCounterpartyRequest** | [**UpdateCounterpartyRequest**](UpdateCounterpartyRequest.md)|  | |

### Return type

[**UpdateCounterparty200Response**](UpdateCounterparty200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The target resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

