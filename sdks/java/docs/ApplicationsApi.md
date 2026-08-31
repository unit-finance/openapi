# ApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**callList**](ApplicationsApi.md#callList) | **GET** /applications | List applications |
| [**cancelApplication**](ApplicationsApi.md#cancelApplication) | **POST** /applications/{id}/cancel | Cancel an application |
| [**createApplication**](ApplicationsApi.md#createApplication) | **POST** /applications | Create an application |
| [**getById**](ApplicationsApi.md#getById) | **GET** /applications/{id} | Get an application |
| [**updateApplication**](ApplicationsApi.md#updateApplication) | **PATCH** /applications/{id} | Update an application |
| [**updateBusinessBeneficialOwner**](ApplicationsApi.md#updateBusinessBeneficialOwner) | **PATCH** /beneficial-owner/{id} | Update a business beneficial owner |


<a id="callList"></a>
# **callList**
> List200Response callList(pageLimit, pageOffset, filterQuery, filterStatus, filterEmail, filterTags, sort)

List applications

List application resources. Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
    String filterQuery = "filterQuery_example"; // String | Optional. Search term according to the Full-Text Search Rules.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter applications by Application Status. Usage example: *filter[status][0]=Pending&filter[status][1]=Approved*
    String filterEmail = "filterEmail_example"; // String | Optional. Filter applications by email address (case sensitive).
    String filterTags = "filterTags_example"; // String | Optional. Filter Applications by Tags.
    String sort = "-createdAt"; // String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
    try {
      List200Response result = apiInstance.callList(pageLimit, pageOffset, filterQuery, filterStatus, filterEmail, filterTags, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#callList");
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
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional] [default to 0] |
| **filterQuery** | **String**| Optional. Search term according to the Full-Text Search Rules. | [optional] |
| **filterStatus** | **String**| Optional. Filter applications by Application Status. Usage example: *filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Approved* | [optional] |
| **filterEmail** | **String**| Optional. Filter applications by email address (case sensitive). | [optional] |
| **filterTags** | **String**| Optional. Filter Applications by Tags. | [optional] |
| **sort** | **String**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**List200Response**](List200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of application resources, optionally filtered and sorted. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="cancelApplication"></a>
# **cancelApplication**
> CancelApplication201Response cancelApplication(id, cancelApplicationRequest)

Cancel an application

Cancel an Application under &#x60;PendingReview&#x60; or &#x60;AwaitingDocuments&#x60; status. The application.canceled webhook event will be fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    String id = "id_example"; // String | 
    CancelApplicationRequest cancelApplicationRequest = new CancelApplicationRequest(); // CancelApplicationRequest | 
    try {
      CancelApplication201Response result = apiInstance.cancelApplication(id, cancelApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#cancelApplication");
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
| **cancelApplicationRequest** | [**CancelApplicationRequest**](CancelApplicationRequest.md)|  | |

### Return type

[**CancelApplication201Response**](CancelApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The canceled application resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createApplication"></a>
# **createApplication**
> CreateApplication201Response createApplication(createApplicationRequest)

Create an application

Create an application. Variants: - **CreateBusinessApplication** - **CreateIndividualApplication** - **CreateSoleProprietorApplication**

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    CreateApplicationRequest createApplicationRequest = new CreateApplicationRequest(); // CreateApplicationRequest | 
    try {
      CreateApplication201Response result = apiInstance.createApplication(createApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#createApplication");
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
| **createApplicationRequest** | [**CreateApplicationRequest**](CreateApplicationRequest.md)|  | |

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created application resource - a business or individual application, indicated by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getById"></a>
# **getById**
> CreateApplication201Response getById(id)

Get an application

Get an application resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateApplication201Response result = apiInstance.getById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#getById");
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

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested application resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateApplication"></a>
# **updateApplication**
> CreateApplication201Response updateApplication(id, updateApplicationRequest)

Update an application

Update an application. Variants: - **UpdateBusiness** - **UpdateBusinessOfficer** - **UpdateIndividual** - **UpdateSoleProprietor**

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateApplicationRequest updateApplicationRequest = new UpdateApplicationRequest(); // UpdateApplicationRequest | 
    try {
      CreateApplication201Response result = apiInstance.updateApplication(id, updateApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#updateApplication");
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
| **updateApplicationRequest** | [**UpdateApplicationRequest**](UpdateApplicationRequest.md)|  | |

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns the updated application resource, which is a business or individual application as indicated by the &#x60;type&#x60; field. Note: this endpoint responds with HTTP 201 (not 200) for a successful update; this reflects the live Unit API behavior (verified against the sandbox at https://api.s.unit.sh). |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateBusinessBeneficialOwner"></a>
# **updateBusinessBeneficialOwner**
> UpdateBusinessBeneficialOwner201Response updateBusinessBeneficialOwner(id, updateBusinessBeneficialOwnerRequest)

Update a business beneficial owner

Update a business application&#39;s beneficial owner. The application id associated with the beneficial owner must be passed as a relationship in the request body.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationsApi apiInstance = new ApplicationsApi(defaultClient);
    String id = "id_example"; // String | 
    UpdateBusinessBeneficialOwnerRequest updateBusinessBeneficialOwnerRequest = new UpdateBusinessBeneficialOwnerRequest(); // UpdateBusinessBeneficialOwnerRequest | 
    try {
      UpdateBusinessBeneficialOwner201Response result = apiInstance.updateBusinessBeneficialOwner(id, updateBusinessBeneficialOwnerRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationsApi#updateBusinessBeneficialOwner");
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
| **updateBusinessBeneficialOwnerRequest** | [**UpdateBusinessBeneficialOwnerRequest**](UpdateBusinessBeneficialOwnerRequest.md)|  | |

### Return type

[**UpdateBusinessBeneficialOwner201Response**](UpdateBusinessBeneficialOwner201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The updated beneficial owner resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

