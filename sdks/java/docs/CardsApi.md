# CardsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**closeCard**](CardsApi.md#closeCard) | **POST** /cards/{cardId}/close | Close a card |
| [**createCard**](CardsApi.md#createCard) | **POST** /cards | Create a card |
| [**freezeCard**](CardsApi.md#freezeCard) | **POST** /cards/{cardId}/freeze | Freeze a card |
| [**getCard**](CardsApi.md#getCard) | **GET** /cards/{cardId} | Get a card |
| [**getCardLimits**](CardsApi.md#getCardLimits) | **GET** /cards/{cardId}/limits | Get card limits |
| [**getCardPinStatus**](CardsApi.md#getCardPinStatus) | **GET** /cards/{cardId}/secure-data/pin/status | Get card PIN status |
| [**listCards**](CardsApi.md#listCards) | **GET** /cards | List cards |
| [**replaceCard**](CardsApi.md#replaceCard) | **POST** /cards/{cardId}/replace | Replace a card |
| [**reportCardLost**](CardsApi.md#reportCardLost) | **POST** /cards/{cardId}/report-lost | Report card lost |
| [**reportCardStolen**](CardsApi.md#reportCardStolen) | **POST** /cards/{cardId}/report-stolen | Report card stolen |
| [**unfreezeCard**](CardsApi.md#unfreezeCard) | **POST** /cards/{cardId}/unfreeze | Unfreeze a card |
| [**updateCard**](CardsApi.md#updateCard) | **PATCH** /cards/{cardId} | Update a card |


<a id="closeCard"></a>
# **closeCard**
> CloseCard200Response closeCard(cardId, body)

Close a card

Close a card.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    Object body = null; // Object | 
    try {
      CloseCard200Response result = apiInstance.closeCard(cardId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#closeCard");
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
| **body** | **Object**|  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The closed card resource, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="createCard"></a>
# **createCard**
> CreateCard201Response createCard(createCardRequest)

Create a card

Create a card. Variants: - **CreateBusinessCreditCard** - **CreateBusinessDebitCard** - **CreateBusinessVirtualCreditCard** - **CreateBusinessVirtualDebitCard** - **CreateIndividualDebitCard** - **CreateIndividualVirtualDebitCard**

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    CreateCardRequest createCardRequest = new CreateCardRequest(); // CreateCardRequest | 
    try {
      CreateCard201Response result = apiInstance.createCard(createCardRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#createCard");
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
| **createCardRequest** | [**CreateCardRequest**](CreateCardRequest.md)|  | |

### Return type

[**CreateCard201Response**](CreateCard201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created card resource, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="freezeCard"></a>
# **freezeCard**
> CloseCard200Response freezeCard(cardId, freezeCardRequest)

Freeze a card

Freeze a card (temporarily block a card).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    FreezeCardRequest freezeCardRequest = new FreezeCardRequest(); // FreezeCardRequest | 
    try {
      CloseCard200Response result = apiInstance.freezeCard(cardId, freezeCardRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#freezeCard");
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
| **freezeCardRequest** | [**FreezeCardRequest**](FreezeCardRequest.md)|  | |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The frozen card resource, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCard"></a>
# **getCard**
> GetCard200Response getCard(cardId, include)

Get a card

Get a card resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
    try {
      GetCard200Response result = apiInstance.getCard(cardId, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#getCard");
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
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |

### Return type

[**GetCard200Response**](GetCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested card resource, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCardLimits"></a>
# **getCardLimits**
> GetAccountLimits200Response getCardLimits(cardId)

Get card limits

Get the limits of a card.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    try {
      GetAccountLimits200Response result = apiInstance.getCardLimits(cardId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#getCardLimits");
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

### Return type

[**GetAccountLimits200Response**](GetAccountLimits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The card limits resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCardPinStatus"></a>
# **getCardPinStatus**
> GetCardPinStatus200Response getCardPinStatus(cardId)

Get card PIN status

Gets the PIN status for the specified card.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    try {
      GetCardPinStatus200Response result = apiInstance.getCardPinStatus(cardId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#getCardPinStatus");
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

### Return type

[**GetCardPinStatus200Response**](GetCardPinStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The PIN status resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCards"></a>
# **listCards**
> ListCards200Response listCards(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterTags, filterStatus, include, sort)

List cards

List cards. Filtering and paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterTags = "filterTags_example"; // String | Optional. Filter Cards by Tags.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter cards by Card Status. Usage example: *filter[status][0]=Stolen&filter[status][1]=Lost*
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
    String sort = "createdAt"; // String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
    try {
      ListCards200Response result = apiInstance.listCards(pageLimit, pageOffset, filterAccountId, filterCustomerId, filterTags, filterStatus, include, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#listCards");
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
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterTags** | **String**| Optional. Filter Cards by Tags. | [optional] |
| **filterStatus** | **String**| Optional. Filter cards by Card Status. Usage example: *filter[status][0]&#x3D;Stolen&amp;filter[status][1]&#x3D;Lost* | [optional] |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |
| **sort** | **String**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to createdAt] |

### Return type

[**ListCards200Response**](ListCards200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of card resources, optionally filtered and sorted. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="replaceCard"></a>
# **replaceCard**
> ReplaceCard200Response replaceCard(cardId, replaceCardRequest)

Replace a card

Creates and ships a replacement physical debit card to an individual or business card holder. The replacement card has the same card number, expiration date and PIN as the original card, and does not require additional activation.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    ReplaceCardRequest replaceCardRequest = new ReplaceCardRequest(); // ReplaceCardRequest | 
    try {
      ReplaceCard200Response result = apiInstance.replaceCard(cardId, replaceCardRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#replaceCard");
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
| **replaceCardRequest** | [**ReplaceCardRequest**](ReplaceCardRequest.md)|  | |

### Return type

[**ReplaceCard200Response**](ReplaceCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The replacement card resource, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="reportCardLost"></a>
# **reportCardLost**
> CloseCard200Response reportCardLost(cardId, body)

Report card lost

Report card as lost.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    Object body = null; // Object | 
    try {
      CloseCard200Response result = apiInstance.reportCardLost(cardId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#reportCardLost");
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
| **body** | **Object**|  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The card resource marked as lost, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="reportCardStolen"></a>
# **reportCardStolen**
> CloseCard200Response reportCardStolen(cardId, body)

Report card stolen

Report card as stolen.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    Object body = null; // Object | 
    try {
      CloseCard200Response result = apiInstance.reportCardStolen(cardId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#reportCardStolen");
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
| **body** | **Object**|  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The card resource marked as stolen, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="unfreezeCard"></a>
# **unfreezeCard**
> CloseCard200Response unfreezeCard(cardId, body)

Unfreeze a card

Unfreeze a frozen card.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    Object body = null; // Object | 
    try {
      CloseCard200Response result = apiInstance.unfreezeCard(cardId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#unfreezeCard");
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
| **body** | **Object**|  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The unfrozen card resource, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updateCard"></a>
# **updateCard**
> UpdateCard200Response updateCard(cardId, updateCardRequest)

Update a card

Update a debit card.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardsApi apiInstance = new CardsApi(defaultClient);
    String cardId = "cardId_example"; // String | 
    UpdateCardRequest updateCardRequest = new UpdateCardRequest(); // UpdateCardRequest | 
    try {
      UpdateCard200Response result = apiInstance.updateCard(cardId, updateCardRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardsApi#updateCard");
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
| **updateCardRequest** | [**UpdateCardRequest**](UpdateCardRequest.md)|  | |

### Return type

[**UpdateCard200Response**](UpdateCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated card resource, distinguished by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

