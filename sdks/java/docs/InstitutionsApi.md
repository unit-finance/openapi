# InstitutionsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getByRoutingNumber**](InstitutionsApi.md#getByRoutingNumber) | **GET** /institutions/{routingNumber} | Get by routing number |


<a id="getByRoutingNumber"></a>
# **getByRoutingNumber**
> GetByRoutingNumber200Response getByRoutingNumber(routingNumber)

Get by routing number

Get an institution resource by routing number.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.InstitutionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    InstitutionsApi apiInstance = new InstitutionsApi(defaultClient);
    String routingNumber = "routingNumber_example"; // String | 
    try {
      GetByRoutingNumber200Response result = apiInstance.getByRoutingNumber(routingNumber);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InstitutionsApi#getByRoutingNumber");
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
| **routingNumber** | **String**|  | |

### Return type

[**GetByRoutingNumber200Response**](GetByRoutingNumber200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Institution resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

