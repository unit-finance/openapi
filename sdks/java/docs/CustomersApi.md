# CustomersApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveCustomer**](CustomersApi.md#archiveCustomer) | **POST** /customers/{customerId}/archive | Archive a customer |
| [**createBusinessWalletCustomer**](CustomersApi.md#createBusinessWalletCustomer) | **POST** /customers | Create a business wallet customer |
| [**getCustomer**](CustomersApi.md#getCustomer) | **GET** /customers/{customerId} | Get a customer |
| [**listCustomers**](CustomersApi.md#listCustomers) | **GET** /customers | List customers |
| [**updateBusinessCustomerOfficer**](CustomersApi.md#updateBusinessCustomerOfficer) | **PATCH** /customers/{customerId}/officers/{officerId} | Update a business customer officer |
| [**updateCustomer**](CustomersApi.md#updateCustomer) | **PATCH** /customers/{customerId} | Update a customer |


<a id="archiveCustomer"></a>
# **archiveCustomer**
> UpdateCustomer200Response archiveCustomer(customerId, archiveCustomerRequest)

Archive a customer

Archive a customer. The Customer Archived webhook event will be fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CustomersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CustomersApi apiInstance = new CustomersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    ArchiveCustomerRequest archiveCustomerRequest = new ArchiveCustomerRequest(); // ArchiveCustomerRequest | 
    try {
      UpdateCustomer200Response result = apiInstance.archiveCustomer(customerId, archiveCustomerRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CustomersApi#archiveCustomer");
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
| **customerId** | **String**|  | |
| **archiveCustomerRequest** | [**ArchiveCustomerRequest**](ArchiveCustomerRequest.md)|  | |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The archived customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createBusinessWalletCustomer"></a>
# **createBusinessWalletCustomer**
> CreateBusinessWalletCustomer201Response createBusinessWalletCustomer(createBusinessWalletCustomerRequest)

Create a business wallet customer

Create a business wallet customer.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CustomersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CustomersApi apiInstance = new CustomersApi(defaultClient);
    CreateBusinessWalletCustomerRequest createBusinessWalletCustomerRequest = new CreateBusinessWalletCustomerRequest(); // CreateBusinessWalletCustomerRequest | 
    try {
      CreateBusinessWalletCustomer201Response result = apiInstance.createBusinessWalletCustomer(createBusinessWalletCustomerRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CustomersApi#createBusinessWalletCustomer");
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
| **createBusinessWalletCustomerRequest** | [**CreateBusinessWalletCustomerRequest**](CreateBusinessWalletCustomerRequest.md)|  | |

### Return type

[**CreateBusinessWalletCustomer201Response**](CreateBusinessWalletCustomer201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created business wallet customer resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCustomer"></a>
# **getCustomer**
> GetCustomer200Response getCustomer(customerId, include)

Get a customer

Get a customer resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CustomersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CustomersApi apiInstance = new CustomersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources
    try {
      GetCustomer200Response result = apiInstance.getCustomer(customerId, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CustomersApi#getCustomer");
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
| **customerId** | **String**|  | |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources | [optional] |

### Return type

[**GetCustomer200Response**](GetCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCustomers"></a>
# **listCustomers**
> ListCustomers200Response listCustomers(pageLimit, pageOffset, filterQuery, filterEmail, filterTags, filterStatus, sort)

List customers

List customer resources. Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CustomersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CustomersApi apiInstance = new CustomersApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterQuery = "filterQuery_example"; // String | Optional. Search term according to the Full-Text Search Rules.
    String filterEmail = "filterEmail_example"; // String | Optional. Filter customers by email address (case sensitive).
    String filterTags = "filterTags_example"; // String | Optional. Filter Customers by Tags.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]=Active
    String sort = "-createdAt"; // String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
    try {
      ListCustomers200Response result = apiInstance.listCustomers(pageLimit, pageOffset, filterQuery, filterEmail, filterTags, filterStatus, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CustomersApi#listCustomers");
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
| **filterQuery** | **String**| Optional. Search term according to the Full-Text Search Rules. | [optional] |
| **filterEmail** | **String**| Optional. Filter customers by email address (case sensitive). | [optional] |
| **filterTags** | **String**| Optional. Filter Customers by Tags. | [optional] |
| **filterStatus** | **String**| Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]&#x3D;Active | [optional] |
| **sort** | **String**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**ListCustomers200Response**](ListCustomers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of customer resources, each a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateBusinessCustomerOfficer"></a>
# **updateBusinessCustomerOfficer**
> UpdateBusinessCustomerOfficer200Response updateBusinessCustomerOfficer(customerId, officerId, updateBusinessCustomerOfficerRequest)

Update a business customer officer

Update an officer of a business customer.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CustomersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CustomersApi apiInstance = new CustomersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    String officerId = "officerId_example"; // String | 
    UpdateBusinessCustomerOfficerRequest updateBusinessCustomerOfficerRequest = new UpdateBusinessCustomerOfficerRequest(); // UpdateBusinessCustomerOfficerRequest | 
    try {
      UpdateBusinessCustomerOfficer200Response result = apiInstance.updateBusinessCustomerOfficer(customerId, officerId, updateBusinessCustomerOfficerRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CustomersApi#updateBusinessCustomerOfficer");
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
| **customerId** | **String**|  | |
| **officerId** | **String**|  | |
| **updateBusinessCustomerOfficerRequest** | [**UpdateBusinessCustomerOfficerRequest**](UpdateBusinessCustomerOfficerRequest.md)|  | |

### Return type

[**UpdateBusinessCustomerOfficer200Response**](UpdateBusinessCustomerOfficer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated officer resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateCustomer"></a>
# **updateCustomer**
> UpdateCustomer200Response updateCustomer(customerId, updateCustomerRequest)

Update a customer

Update a customer. The Customer Updated webhook event will be fired. Variants: - **UpdateBusinessCustomer** - **UpdateIndividualCustomer**

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CustomersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CustomersApi apiInstance = new CustomersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    UpdateCustomerRequest updateCustomerRequest = new UpdateCustomerRequest(); // UpdateCustomerRequest | 
    try {
      UpdateCustomer200Response result = apiInstance.updateCustomer(customerId, updateCustomerRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CustomersApi#updateCustomer");
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
| **customerId** | **String**|  | |
| **updateCustomerRequest** | [**UpdateCustomerRequest**](UpdateCustomerRequest.md)|  | |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

