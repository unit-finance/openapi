# CardsAtmLocationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listAtmLocations**](CardsAtmLocationsApi.md#listAtmLocations) | **GET** /atm-locations | List ATM locations |


<a id="listAtmLocations"></a>
# **listAtmLocations**
> ListAtmLocations200Response listAtmLocations(filterAddress, filterCoordinates, filterPostalCode, filterSearchRadius)

List ATM locations

List ATM locations by address, by coordinates, or by postal code.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsAtmLocationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsAtmLocationsApi apiInstance = new CardsAtmLocationsApi(defaultClient);
    String filterAddress = "filterAddress_example"; // String | Filters the results by the specified address.
    String filterCoordinates = "filterCoordinates_example"; // String | Filters the results by the specified coordinates.
    String filterPostalCode = "filterPostalCode_example"; // String | Filters the results by the specified postal code.
    String filterSearchRadius = "filterSearchRadius_example"; // String | Filters the results by the search radius (in miles). Default and max values are 100.
    try {
      ListAtmLocations200Response result = apiInstance.listAtmLocations(filterAddress, filterCoordinates, filterPostalCode, filterSearchRadius);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsAtmLocationsApi#listAtmLocations");
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
| **filterAddress** | **String**| Filters the results by the specified address. | [optional] |
| **filterCoordinates** | **String**| Filters the results by the specified coordinates. | [optional] |
| **filterPostalCode** | **String**| Filters the results by the specified postal code. | [optional] |
| **filterSearchRadius** | **String**| Filters the results by the search radius (in miles). Default and max values are 100. | [optional] |

### Return type

[**ListAtmLocations200Response**](ListAtmLocations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of ATM Location resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

