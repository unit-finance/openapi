# CardHolderApiTokensApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCardholderToken**](CardHolderApiTokensApi.md#createCardholderToken) | **POST** /cards/{cardId}/cardholder/token | Create a cardholder token |
| [**createCardholderTokenVerification**](CardHolderApiTokensApi.md#createCardholderTokenVerification) | **POST** /cards/{cardId}/cardholder/token/verification | Create a cardholder token verification |


<a id="createCardholderToken"></a>
# **createCardholderToken**
> CreateCardholderToken201Response createCardholderToken(cardId, createCardholderTokenRequest)

Create a cardholder token

Create a bearer token for a specific card.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardHolderApiTokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardHolderApiTokensApi apiInstance = new CardHolderApiTokensApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    CreateCardholderTokenRequest createCardholderTokenRequest = new CreateCardholderTokenRequest(); // CreateCardholderTokenRequest | 
    try {
      CreateCardholderToken201Response result = apiInstance.createCardholderToken(cardId, createCardholderTokenRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardHolderApiTokensApi#createCardholderToken");
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
| **createCardholderTokenRequest** | [**CreateCardholderTokenRequest**](CreateCardholderTokenRequest.md)|  | |

### Return type

[**CreateCardholderToken201Response**](CreateCardholderToken201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created cardholder token. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createCardholderTokenVerification"></a>
# **createCardholderTokenVerification**
> CreateCardholderTokenVerification201Response createCardholderTokenVerification(cardId, createCardholderTokenVerificationRequest)

Create a cardholder token verification

When creating a cardholder token that contains a scope which requires two-factor authentication (see Scopes), it is required to first create a verification challenge that will be sent to the customer.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardHolderApiTokensApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardHolderApiTokensApi apiInstance = new CardHolderApiTokensApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    CreateCardholderTokenVerificationRequest createCardholderTokenVerificationRequest = new CreateCardholderTokenVerificationRequest(); // CreateCardholderTokenVerificationRequest | 
    try {
      CreateCardholderTokenVerification201Response result = apiInstance.createCardholderTokenVerification(cardId, createCardholderTokenVerificationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardHolderApiTokensApi#createCardholderTokenVerification");
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
| **createCardholderTokenVerificationRequest** | [**CreateCardholderTokenVerificationRequest**](CreateCardholderTokenVerificationRequest.md)|  | |

### Return type

[**CreateCardholderTokenVerification201Response**](CreateCardholderTokenVerification201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created cardholder token verification. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

