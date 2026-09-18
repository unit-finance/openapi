# AuthorizedUsersApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAuthorizedUsers**](AuthorizedUsersApi.md#addAuthorizedUsers) | **POST** /customers/{customerId}/authorized-users | Add authorized users |
| [**getAuthorizedUser**](AuthorizedUsersApi.md#getAuthorizedUser) | **GET** /customers/{customerId}/authorized-users/{authorizedUserId} | Get an authorized user |
| [**listAuthorizedUsers**](AuthorizedUsersApi.md#listAuthorizedUsers) | **GET** /customers/{customerId}/authorized-users | List authorized users |
| [**removeAuthorizedUsers**](AuthorizedUsersApi.md#removeAuthorizedUsers) | **DELETE** /customers/{customerId}/authorized-users | Remove authorized users |


<a id="addAuthorizedUsers"></a>
# **addAuthorizedUsers**
> UpdateCustomer200Response addAuthorizedUsers(customerId, addAuthorizedUsersRequest)

Add authorized users

Add authorized users for a customer. The Customer Update webhook event will be fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AuthorizedUsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthorizedUsersApi apiInstance = new AuthorizedUsersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    AddAuthorizedUsersRequest addAuthorizedUsersRequest = new AddAuthorizedUsersRequest(); // AddAuthorizedUsersRequest | 
    try {
      UpdateCustomer200Response result = apiInstance.addAuthorizedUsers(customerId, addAuthorizedUsersRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthorizedUsersApi#addAuthorizedUsers");
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
| **customerId** | **String**|  | |
| **addAuthorizedUsersRequest** | [**AddAuthorizedUsersRequest**](AddAuthorizedUsersRequest.md)|  | |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getAuthorizedUser"></a>
# **getAuthorizedUser**
> GetAuthorizedUser200Response getAuthorizedUser(customerId, authorizedUserId)

Get an authorized user

Get an authorized user resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AuthorizedUsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthorizedUsersApi apiInstance = new AuthorizedUsersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    String authorizedUserId = "authorizedUserId_example"; // String | 
    try {
      GetAuthorizedUser200Response result = apiInstance.getAuthorizedUser(customerId, authorizedUserId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthorizedUsersApi#getAuthorizedUser");
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
| **customerId** | **String**|  | |
| **authorizedUserId** | **String**|  | |

### Return type

[**GetAuthorizedUser200Response**](GetAuthorizedUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authorized user resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listAuthorizedUsers"></a>
# **listAuthorizedUsers**
> ListAuthorizedUsers200Response listAuthorizedUsers(customerId, filterJwtSubject, filterPhone)

List authorized users

List of authorized user resources. Filtering can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AuthorizedUsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthorizedUsersApi apiInstance = new AuthorizedUsersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    String filterJwtSubject = "filterJwtSubject_example"; // String | Optional. Filter authorized users by JWT subject.
    String filterPhone = "filterPhone_example"; // String | Optional. Filter authorized users by phone.
    try {
      ListAuthorizedUsers200Response result = apiInstance.listAuthorizedUsers(customerId, filterJwtSubject, filterPhone);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthorizedUsersApi#listAuthorizedUsers");
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
| **customerId** | **String**|  | |
| **filterJwtSubject** | **String**| Optional. Filter authorized users by JWT subject. | [optional] |
| **filterPhone** | **String**| Optional. Filter authorized users by phone. | [optional] |

### Return type

[**ListAuthorizedUsers200Response**](ListAuthorizedUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of authorized user resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="removeAuthorizedUsers"></a>
# **removeAuthorizedUsers**
> UpdateCustomer200Response removeAuthorizedUsers(customerId, removeAuthorizedUsersRequest)

Remove authorized users

Remove existing authorized users from a customer. The Customer Update webhook event will be fired.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.AuthorizedUsersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthorizedUsersApi apiInstance = new AuthorizedUsersApi(defaultClient);
    String customerId = "customerId_example"; // String | 
    RemoveAuthorizedUsersRequest removeAuthorizedUsersRequest = new RemoveAuthorizedUsersRequest(); // RemoveAuthorizedUsersRequest | 
    try {
      UpdateCustomer200Response result = apiInstance.removeAuthorizedUsers(customerId, removeAuthorizedUsersRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthorizedUsersApi#removeAuthorizedUsers");
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
| **customerId** | **String**|  | |
| **removeAuthorizedUsersRequest** | [**RemoveAuthorizedUsersRequest**](RemoveAuthorizedUsersRequest.md)|  | |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

