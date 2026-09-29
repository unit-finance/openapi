# LendingProgramsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLendingProgramById**](LendingProgramsApi.md#getLendingProgramById) | **GET** /lending-programs/{id} | Get lending program by id |
| [**getLendingProgramExtendedInformationById**](LendingProgramsApi.md#getLendingProgramExtendedInformationById) | **GET** /lending-programs/{id}/extended | Get lending program extended information by id |
| [**listLendingPrograms**](LendingProgramsApi.md#listLendingPrograms) | **GET** /lending-programs | List lending programs |


<a id="getLendingProgramById"></a>
# **getLendingProgramById**
> GetLendingProgramById200Response getLendingProgramById(id)

Get lending program by id

Get a lending program resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.LendingProgramsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    LendingProgramsApi apiInstance = new LendingProgramsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      GetLendingProgramById200Response result = apiInstance.getLendingProgramById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LendingProgramsApi#getLendingProgramById");
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

[**GetLendingProgramById200Response**](GetLendingProgramById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A lending-program resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getLendingProgramExtendedInformationById"></a>
# **getLendingProgramExtendedInformationById**
> GetLendingProgramExtendedInformationById200Response getLendingProgramExtendedInformationById(id)

Get lending program extended information by id

Get lending program extended information resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.LendingProgramsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    LendingProgramsApi apiInstance = new LendingProgramsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      GetLendingProgramExtendedInformationById200Response result = apiInstance.getLendingProgramExtendedInformationById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LendingProgramsApi#getLendingProgramExtendedInformationById");
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

[**GetLendingProgramExtendedInformationById200Response**](GetLendingProgramExtendedInformationById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A lending-program extended information resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listLendingPrograms"></a>
# **listLendingPrograms**
> ListLendingPrograms200Response listLendingPrograms(pageLimit, pageOffset, filterName, filterProgramType, filterMinProgramLimit, filterOrgId, filterBankId)

List lending programs

List lending program resources. Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.LendingProgramsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    LendingProgramsApi apiInstance = new LendingProgramsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterName = "filterName_example"; // String | Optional. Filters the results by the specified program name.
    String filterProgramType = "filterProgramType_example"; // String | Optional. Filters the results by the specified Lending Program Type.
    String filterMinProgramLimit = "filterMinProgramLimit_example"; // String | Optional. Filters the results by a maximum value of programSizeLimit.
    String filterOrgId = "filterOrgId_example"; // String | Optional. Filters the results by the specified org id.
    String filterBankId = "filterBankId_example"; // String | Optional. Filters the results by the specified bank id.
    try {
      ListLendingPrograms200Response result = apiInstance.listLendingPrograms(pageLimit, pageOffset, filterName, filterProgramType, filterMinProgramLimit, filterOrgId, filterBankId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LendingProgramsApi#listLendingPrograms");
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
| **filterName** | **String**| Optional. Filters the results by the specified program name. | [optional] |
| **filterProgramType** | **String**| Optional. Filters the results by the specified Lending Program Type. | [optional] |
| **filterMinProgramLimit** | **String**| Optional. Filters the results by a maximum value of programSizeLimit. | [optional] |
| **filterOrgId** | **String**| Optional. Filters the results by the specified org id. | [optional] |
| **filterBankId** | **String**| Optional. Filters the results by the specified bank id. | [optional] |

### Return type

[**ListLendingPrograms200Response**](ListLendingPrograms200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of lending-program resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **0** | Error response |  -  |

