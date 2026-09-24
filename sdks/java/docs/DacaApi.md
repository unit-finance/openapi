# DacaApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateControlAgreement**](DacaApi.md#activateControlAgreement) | **POST** /accounts/{accountId}/activate-daca | Activate control agreement |
| [**deactivateControlAgreement**](DacaApi.md#deactivateControlAgreement) | **POST** /accounts/{accountId}/deactivate-daca | Deactivate control agreement |
| [**enterControlAgreement**](DacaApi.md#enterControlAgreement) | **POST** /accounts/{accountId}/enter-daca | Enter control agreement |


<a id="activateControlAgreement"></a>
# **activateControlAgreement**
> EnterControlAgreement200Response activateControlAgreement(accountId, body)

Activate control agreement

Set an account with DACA &#x60;Activated&#x60; status. This action will:

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.DacaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    DacaApi apiInstance = new DacaApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    Object body = null; // Object | 
    try {
      EnterControlAgreement200Response result = apiInstance.activateControlAgreement(accountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DacaApi#activateControlAgreement");
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
| **accountId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deposit account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="deactivateControlAgreement"></a>
# **deactivateControlAgreement**
> EnterControlAgreement200Response deactivateControlAgreement(accountId, body)

Deactivate control agreement

Deactivate an account with DACA &#x60;Activated&#x60; status. This action will:

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.DacaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    DacaApi apiInstance = new DacaApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    Object body = null; // Object | 
    try {
      EnterControlAgreement200Response result = apiInstance.deactivateControlAgreement(accountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DacaApi#deactivateControlAgreement");
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
| **accountId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deposit account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="enterControlAgreement"></a>
# **enterControlAgreement**
> EnterControlAgreement200Response enterControlAgreement(accountId, body)

Enter control agreement

Set an account with DACA &#x60;Entered&#x60; status.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.DacaApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    DacaApi apiInstance = new DacaApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    Object body = null; // Object | 
    try {
      EnterControlAgreement200Response result = apiInstance.enterControlAgreement(accountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DacaApi#enterControlAgreement");
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
| **accountId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deposit account resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

