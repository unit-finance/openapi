# InterestApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTotalAccruedInterest**](InterestApi.md#getTotalAccruedInterest) | **GET** /accrued-interest/total | Get total accrued interest |


<a id="getTotalAccruedInterest"></a>
# **getTotalAccruedInterest**
> GetTotalAccruedInterest200Response getTotalAccruedInterest(filterAccountId, filterSince, filterUntil, filterSinceInterestMonth, filterUntilInterestMonth)

Get total accrued interest

The response to this API call includes the sum of customer accrued interest (in cents) for a given period of time.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.InterestApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    InterestApi apiInstance = new InterestApi(defaultClient);
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterSince = "filterSince_example"; // String | Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z
    String filterUntil = "filterUntil_example"; // String | Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z
    String filterSinceInterestMonth = "filterSinceInterestMonth_example"; // String | Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03
    String filterUntilInterestMonth = "filterUntilInterestMonth_example"; // String | Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07
    try {
      GetTotalAccruedInterest200Response result = apiInstance.getTotalAccruedInterest(filterAccountId, filterSince, filterUntil, filterSinceInterestMonth, filterUntilInterestMonth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InterestApi#getTotalAccruedInterest");
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
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterSince** | **String**| Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z | [optional] |
| **filterUntil** | **String**| Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z | [optional] |
| **filterSinceInterestMonth** | **String**| Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03 | [optional] |
| **filterUntilInterestMonth** | **String**| Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07 | [optional] |

### Return type

[**GetTotalAccruedInterest200Response**](GetTotalAccruedInterest200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Total accrued interest. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **0** | Error response |  -  |

