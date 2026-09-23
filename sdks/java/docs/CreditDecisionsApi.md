# CreditDecisionsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCreditDecision**](CreditDecisionsApi.md#createCreditDecision) | **POST** /credit-decisions | Create a credit decision |
| [**getCreditDecision**](CreditDecisionsApi.md#getCreditDecision) | **GET** /credit-decisions/{id} | Get a credit decision by id |
| [**listCreditDecisions**](CreditDecisionsApi.md#listCreditDecisions) | **GET** /credit-decisions | List credit decisions |


<a id="createCreditDecision"></a>
# **createCreditDecision**
> CreateCreditDecision201Response createCreditDecision(createCreditDecisionRequest)

Create a credit decision

Create a credit decision for a credit application. The request body is one of CreateApprovedCreditLimitDecisionRequest (an approved decision for an existing customer), CreateDeniedCreditLimitDecisionRequest (a denied decision for an existing customer), CreateManualReviewCreditLimitDecisionRequest (a manual review decision for an existing customer), CreateDeniedCreditApplicationDecisionRequest (a denied decision before a customer exists) or CreateManualReviewCreditApplicationDecisionRequest (a manual review decision before a customer exists).

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CreditDecisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditDecisionsApi apiInstance = new CreditDecisionsApi(defaultClient);
    CreateCreditDecisionRequest createCreditDecisionRequest = new CreateCreditDecisionRequest(); // CreateCreditDecisionRequest | 
    try {
      CreateCreditDecision201Response result = apiInstance.createCreditDecision(createCreditDecisionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditDecisionsApi#createCreditDecision");
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
| **createCreditDecisionRequest** | [**CreateCreditDecisionRequest**](CreateCreditDecisionRequest.md)|  | |

### Return type

[**CreateCreditDecision201Response**](CreateCreditDecision201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The returned resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getCreditDecision"></a>
# **getCreditDecision**
> CreateCreditDecision201Response getCreditDecision(id)

Get a credit decision by id

Get a credit decision resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CreditDecisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditDecisionsApi apiInstance = new CreditDecisionsApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      CreateCreditDecision201Response result = apiInstance.getCreditDecision(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditDecisionsApi#getCreditDecision");
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

[**CreateCreditDecision201Response**](CreateCreditDecision201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A credit decision resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listCreditDecisions"></a>
# **listCreditDecisions**
> ListCreditDecisions200Response listCreditDecisions(pageLimit, pageOffset, filterOrgId, filterCustomerId, filterAccountId, filterApplicationId, filterBankId, filterDecision, filterEvaluationType)

List credit decisions

List credit decision resources. Paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.CreditDecisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    CreditDecisionsApi apiInstance = new CreditDecisionsApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterOrgId = "filterOrgId_example"; // String | Optional. Filters the results by the specified org id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterApplicationId = "filterApplicationId_example"; // String | Optional. Filters the results by the specified application id.
    String filterBankId = "filterBankId_example"; // String | Optional. Filters the results by the specified bank id.
    String filterDecision = "filterDecision_example"; // String | Optional. Filters the results by the specified decision (one of Approved or Denied).
    String filterEvaluationType = "filterEvaluationType_example"; // String | Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication).
    try {
      ListCreditDecisions200Response result = apiInstance.listCreditDecisions(pageLimit, pageOffset, filterOrgId, filterCustomerId, filterAccountId, filterApplicationId, filterBankId, filterDecision, filterEvaluationType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling CreditDecisionsApi#listCreditDecisions");
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
| **pageLimit** | **String**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Optional. Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterOrgId** | **String**| Optional. Filters the results by the specified org id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterApplicationId** | **String**| Optional. Filters the results by the specified application id. | [optional] |
| **filterBankId** | **String**| Optional. Filters the results by the specified bank id. | [optional] |
| **filterDecision** | **String**| Optional. Filters the results by the specified decision (one of Approved or Denied). | [optional] |
| **filterEvaluationType** | **String**| Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication). | [optional] |

### Return type

[**ListCreditDecisions200Response**](ListCreditDecisions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of credit-decisions resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

