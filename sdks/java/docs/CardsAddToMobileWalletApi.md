# CardsAddToMobileWalletApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMobileWalletPayload**](CardsAddToMobileWalletApi.md#getMobileWalletPayload) | **POST** /cards/{cardId}/mobile-wallet-payload | Get mobile wallet payload |


<a id="getMobileWalletPayload"></a>
# **getMobileWalletPayload**
> GetMobileWalletPayload200Response getMobileWalletPayload(cardId, getMobileWalletPayloadRequest)

Get mobile wallet payload

Get the mobile wallet encrypted payload for the specified card. The encrypted payload is unique per issuance and is required as part of the SDK integration.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsAddToMobileWalletApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsAddToMobileWalletApi apiInstance = new CardsAddToMobileWalletApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    GetMobileWalletPayloadRequest getMobileWalletPayloadRequest = new GetMobileWalletPayloadRequest(); // GetMobileWalletPayloadRequest | 
    try {
      GetMobileWalletPayload200Response result = apiInstance.getMobileWalletPayload(cardId, getMobileWalletPayloadRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsAddToMobileWalletApi#getMobileWalletPayload");
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
| **cardId** | **String**|  | |
| **getMobileWalletPayloadRequest** | [**GetMobileWalletPayloadRequest**](GetMobileWalletPayloadRequest.md)|  | |

### Return type

[**GetMobileWalletPayload200Response**](GetMobileWalletPayload200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A JSON object containing the encrypted payload. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

