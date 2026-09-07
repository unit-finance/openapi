# FeesApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFee**](FeesApi.md#createFee) | **POST** /fees | Create a fee |
| [**reverseFee**](FeesApi.md#reverseFee) | **POST** /fees/reverse | Reverse a fee |


<a id="createFee"></a>
# **createFee**
> CreateFee201Response createFee(createFeeRequest)

Create a fee

Creates a fee for an &#x60;Account&#x60;.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.FeesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    FeesApi apiInstance = new FeesApi(defaultClient);
    CreateFeeRequest createFeeRequest = new CreateFeeRequest(); // CreateFeeRequest | 
    try {
      CreateFee201Response result = apiInstance.createFee(createFeeRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FeesApi#createFee");
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
| **createFeeRequest** | [**CreateFeeRequest**](CreateFeeRequest.md)|  | |

### Return type

[**CreateFee201Response**](CreateFee201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created fee resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="reverseFee"></a>
# **reverseFee**
> ReverseFee201Response reverseFee(reverseFeeRequest)

Reverse a fee

Reverse a fee for an &#x60;Account&#x60;.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.FeesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    FeesApi apiInstance = new FeesApi(defaultClient);
    ReverseFeeRequest reverseFeeRequest = new ReverseFeeRequest(); // ReverseFeeRequest | 
    try {
      ReverseFee201Response result = apiInstance.reverseFee(reverseFeeRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FeesApi#reverseFee");
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
| **reverseFeeRequest** | [**ReverseFeeRequest**](ReverseFeeRequest.md)|  | |

### Return type

[**ReverseFee201Response**](ReverseFee201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created fee reversal resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

