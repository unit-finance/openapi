# CardFraudOutreachApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPolicy**](CardFraudOutreachApi.md#createPolicy) | **POST** /fraud-outreach-policies | Create a card fraud outreach policy |
| [**getCardFraudCaseById**](CardFraudOutreachApi.md#getCardFraudCaseById) | **GET** /card-fraud-cases/{id} | Get a card fraud case by id |
| [**getPolicyById**](CardFraudOutreachApi.md#getPolicyById) | **GET** /fraud-outreach-policies/{policyId} | Get a card fraud outreach policy by id |
| [**listCardFraudCases**](CardFraudOutreachApi.md#listCardFraudCases) | **GET** /card-fraud-cases | List card fraud cases |
| [**markCardFraudCaseAsFraud**](CardFraudOutreachApi.md#markCardFraudCaseAsFraud) | **POST** /card-fraud-cases/{id}/fraud | Mark a card fraud case as fraud |
| [**markCardFraudCaseAsNoFraud**](CardFraudOutreachApi.md#markCardFraudCaseAsNoFraud) | **POST** /card-fraud-cases/{id}/no-fraud | Mark a card fraud case as no fraud |
| [**updatePolicy**](CardFraudOutreachApi.md#updatePolicy) | **PATCH** /fraud-outreach-policies/{policyId} | Update a card fraud outreach policy |


<a id="createPolicy"></a>
# **createPolicy**
> CreatePolicy201Response createPolicy(createPolicyRequest)

Create a card fraud outreach policy

Create a card fraud outreach policy.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardFraudOutreachApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardFraudOutreachApi apiInstance = new CardFraudOutreachApi(defaultClient);
    CreatePolicyRequest createPolicyRequest = new CreatePolicyRequest(); // CreatePolicyRequest | 
    try {
      CreatePolicy201Response result = apiInstance.createPolicy(createPolicyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardFraudOutreachApi#createPolicy");
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
| **createPolicyRequest** | [**CreatePolicyRequest**](CreatePolicyRequest.md)|  | |

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created CardFraudOutreachPolicy resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCardFraudCaseById"></a>
# **getCardFraudCaseById**
> GetCardFraudCaseById200Response getCardFraudCaseById(id)

Get a card fraud case by id

Get a card fraud case by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardFraudOutreachApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardFraudOutreachApi apiInstance = new CardFraudOutreachApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      GetCardFraudCaseById200Response result = apiInstance.getCardFraudCaseById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardFraudOutreachApi#getCardFraudCaseById");
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

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Card Fraud Case resource. Can be either Authorization or Transaction as indicated by the type field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getPolicyById"></a>
# **getPolicyById**
> CreatePolicy201Response getPolicyById(policyId)

Get a card fraud outreach policy by id

Get a card fraud outreach policy by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardFraudOutreachApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardFraudOutreachApi apiInstance = new CardFraudOutreachApi(defaultClient);
    String policyId = "policyId_example"; // String | 
    try {
      CreatePolicy201Response result = apiInstance.getPolicyById(policyId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardFraudOutreachApi#getPolicyById");
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
| **policyId** | **String**|  | |

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested CardFraudOutreachPolicy resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCardFraudCases"></a>
# **listCardFraudCases**
> ListCardFraudCases200Response listCardFraudCases(pageLimit, pageOffset, filterCardId, filterAccountId, filterCustomerId, filterStatus, filterDecision, sort)

List card fraud cases

List card fraud case resources. Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardFraudOutreachApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardFraudOutreachApi apiInstance = new CardFraudOutreachApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterCardId = "filterCardId_example"; // String | Optional. Filter by card id.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filter by account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filter by customer id.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired.
    String filterDecision = "filterDecision_example"; // String | Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud.
    String sort = "-createdAt"; // String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
    try {
      ListCardFraudCases200Response result = apiInstance.listCardFraudCases(pageLimit, pageOffset, filterCardId, filterAccountId, filterCustomerId, filterStatus, filterDecision, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardFraudOutreachApi#listCardFraudCases");
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
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterCardId** | **String**| Optional. Filter by card id. | [optional] |
| **filterAccountId** | **String**| Optional. Filter by account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filter by customer id. | [optional] |
| **filterStatus** | **String**| Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired. | [optional] |
| **filterDecision** | **String**| Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud. | [optional] |
| **sort** | **String**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |

### Return type

[**ListCardFraudCases200Response**](ListCardFraudCases200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of card fraud case resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="markCardFraudCaseAsFraud"></a>
# **markCardFraudCaseAsFraud**
> GetCardFraudCaseById200Response markCardFraudCaseAsFraud(id, markCardFraudCaseAsFraudRequest)

Mark a card fraud case as fraud

Mark a card fraud case as fraud.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardFraudOutreachApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardFraudOutreachApi apiInstance = new CardFraudOutreachApi(defaultClient);
    String id = "id_example"; // String | 
    MarkCardFraudCaseAsFraudRequest markCardFraudCaseAsFraudRequest = new MarkCardFraudCaseAsFraudRequest(); // MarkCardFraudCaseAsFraudRequest | 
    try {
      GetCardFraudCaseById200Response result = apiInstance.markCardFraudCaseAsFraud(id, markCardFraudCaseAsFraudRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardFraudOutreachApi#markCardFraudCaseAsFraud");
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
| **markCardFraudCaseAsFraudRequest** | [**MarkCardFraudCaseAsFraudRequest**](MarkCardFraudCaseAsFraudRequest.md)|  | |

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Card Fraud Case resource updated as Fraud. Can be either Authorization or Transaction as indicated by the type field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="markCardFraudCaseAsNoFraud"></a>
# **markCardFraudCaseAsNoFraud**
> GetCardFraudCaseById200Response markCardFraudCaseAsNoFraud(id, body)

Mark a card fraud case as no fraud

Mark a card fraud case as no fraud.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardFraudOutreachApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardFraudOutreachApi apiInstance = new CardFraudOutreachApi(defaultClient);
    String id = "id_example"; // String | 
    Object body = null; // Object | 
    try {
      GetCardFraudCaseById200Response result = apiInstance.markCardFraudCaseAsNoFraud(id, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardFraudOutreachApi#markCardFraudCaseAsNoFraud");
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
| **body** | **Object**|  | [optional] |

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Card Fraud Case resource updated as No Fraud. Can be either Authorization or Transaction as indicated by the type field. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="updatePolicy"></a>
# **updatePolicy**
> CreatePolicy201Response updatePolicy(policyId, updatePolicyRequest)

Update a card fraud outreach policy

Update a card fraud outreach policy.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CardFraudOutreachApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CardFraudOutreachApi apiInstance = new CardFraudOutreachApi(defaultClient);
    String policyId = "policyId_example"; // String | 
    UpdatePolicyRequest updatePolicyRequest = new UpdatePolicyRequest(); // UpdatePolicyRequest | 
    try {
      CreatePolicy201Response result = apiInstance.updatePolicy(policyId, updatePolicyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CardFraudOutreachApi#updatePolicy");
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
| **policyId** | **String**|  | |
| **updatePolicyRequest** | [**UpdatePolicyRequest**](UpdatePolicyRequest.md)|  | |

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated CardFraudOutreachPolicy resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

