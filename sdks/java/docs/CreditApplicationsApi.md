# CreditApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCreditApplication**](CreditApplicationsApi.md#createCreditApplication) | **POST** /credit-applications | Create a credit application |
| [**getCreditApplication**](CreditApplicationsApi.md#getCreditApplication) | **GET** /credit-applications/{creditApplicationId} | Get a credit application by id |
| [**listCreditApplications**](CreditApplicationsApi.md#listCreditApplications) | **GET** /credit-applications | List credit applications |
| [**updateCreditApplication**](CreditApplicationsApi.md#updateCreditApplication) | **PATCH** /credit-applications/{creditApplicationId} | Update a credit application |


<a id="createCreditApplication"></a>
# **createCreditApplication**
> CreateCreditApplication201Response createCreditApplication(createCreditApplicationRequest)

Create a credit application

Create a credit application. The request body is one of CreateExistingCreditApplicationRequest (an existing customer, related to a customer) or CreateOnboardingCreditApplicationRequest (a customer being onboarded, related to an application).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CreditApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditApplicationsApi apiInstance = new CreditApplicationsApi(defaultClient);
    CreateCreditApplicationRequest createCreditApplicationRequest = new CreateCreditApplicationRequest(); // CreateCreditApplicationRequest | 
    try {
      CreateCreditApplication201Response result = apiInstance.createCreditApplication(createCreditApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditApplicationsApi#createCreditApplication");
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
| **createCreditApplicationRequest** | [**CreateCreditApplicationRequest**](CreateCreditApplicationRequest.md)|  | |

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The returned resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCreditApplication"></a>
# **getCreditApplication**
> CreateCreditApplication201Response getCreditApplication(creditApplicationId)

Get a credit application by id

Get a credit application resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CreditApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditApplicationsApi apiInstance = new CreditApplicationsApi(defaultClient);
    String creditApplicationId = "creditApplicationId_example"; // String | 
    try {
      CreateCreditApplication201Response result = apiInstance.getCreditApplication(creditApplicationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditApplicationsApi#getCreditApplication");
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
| **creditApplicationId** | **String**|  | |

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A credit application resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCreditApplications"></a>
# **listCreditApplications**
> ListCreditApplications200Response listCreditApplications(pageLimit, pageOffset, filterLendingProgramId, filterOrgId, filterBankId, filterApplicationId, filterCustomerId)

List credit applications

List credit applications resources. Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CreditApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditApplicationsApi apiInstance = new CreditApplicationsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterLendingProgramId = "filterLendingProgramId_example"; // String | Optional. Search resources by lending program id.
    String filterOrgId = "filterOrgId_example"; // String | Optional. Search resources by organization id.
    String filterBankId = "filterBankId_example"; // String | Optional. Search resources by bank id.
    String filterApplicationId = "filterApplicationId_example"; // String | Optional. Search resources by application id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Search resources by customer id.
    try {
      ListCreditApplications200Response result = apiInstance.listCreditApplications(pageLimit, pageOffset, filterLendingProgramId, filterOrgId, filterBankId, filterApplicationId, filterCustomerId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditApplicationsApi#listCreditApplications");
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
| **filterLendingProgramId** | **String**| Optional. Search resources by lending program id. | [optional] |
| **filterOrgId** | **String**| Optional. Search resources by organization id. | [optional] |
| **filterBankId** | **String**| Optional. Search resources by bank id. | [optional] |
| **filterApplicationId** | **String**| Optional. Search resources by application id. | [optional] |
| **filterCustomerId** | **String**| Optional. Search resources by customer id. | [optional] |

### Return type

[**ListCreditApplications200Response**](ListCreditApplications200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of credit application resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateCreditApplication"></a>
# **updateCreditApplication**
> CreateCreditApplication201Response updateCreditApplication(creditApplicationId, updateCreditApplicationRequest)

Update a credit application

Update a credit application.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CreditApplicationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditApplicationsApi apiInstance = new CreditApplicationsApi(defaultClient);
    String creditApplicationId = "creditApplicationId_example"; // String | 
    UpdateCreditApplicationRequest updateCreditApplicationRequest = new UpdateCreditApplicationRequest(); // UpdateCreditApplicationRequest | 
    try {
      CreateCreditApplication201Response result = apiInstance.updateCreditApplication(creditApplicationId, updateCreditApplicationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditApplicationsApi#updateCreditApplication");
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
| **creditApplicationId** | **String**|  | |
| **updateCreditApplicationRequest** | [**UpdateCreditApplicationRequest**](UpdateCreditApplicationRequest.md)|  | |

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

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

