# RewardsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createReward**](RewardsApi.md#createReward) | **POST** /rewards | Create a reward |
| [**getReward**](RewardsApi.md#getReward) | **GET** /rewards/{rewardId} | Get a reward by id |
| [**listRewards**](RewardsApi.md#listRewards) | **GET** /rewards | List rewards |


<a id="createReward"></a>
# **createReward**
> CreateReward201Response createReward(createRewardRequest)

Create a reward

Creates a reward resource.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RewardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RewardsApi apiInstance = new RewardsApi(defaultClient);
    CreateRewardRequest createRewardRequest = new CreateRewardRequest(); // CreateRewardRequest | 
    try {
      CreateReward201Response result = apiInstance.createReward(createRewardRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RewardsApi#createReward");
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
| **createRewardRequest** | [**CreateRewardRequest**](CreateRewardRequest.md)|  | |

### Return type

[**CreateReward201Response**](CreateReward201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The requested resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getReward"></a>
# **getReward**
> GetReward200Response getReward(rewardId, include)

Get a reward by id

Get a reward by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RewardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RewardsApi apiInstance = new RewardsApi(defaultClient);
    String rewardId = "rewardId_example"; // String | 
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
    try {
      GetReward200Response result = apiInstance.getReward(rewardId, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RewardsApi#getReward");
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
| **rewardId** | **String**|  | |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**GetReward200Response**](GetReward200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reward resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listRewards"></a>
# **listRewards**
> ListRewards200Response listRewards(pageLimit, pageOffset, filterTransactionId, filterRewardedTransactionId, filterReceivingAccountId, filterCustomerId, filterCardId, filterStatus, filterSince, filterUntil, filterTags, sort, include)

List rewards

List rewards resources. Filtering, paging and sorting can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.RewardsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    RewardsApi apiInstance = new RewardsApi(defaultClient);
    String pageLimit = "100"; // String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Number of resources to skip. See Pagination.
    String filterTransactionId = "filterTransactionId_example"; // String | Optional. Filters the results by the specified transaction id.
    String filterRewardedTransactionId = "filterRewardedTransactionId_example"; // String | Optional. Filters the results by the specified rewarded transaction id.
    String filterReceivingAccountId = "filterReceivingAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterCardId = "filterCardId_example"; // String | Optional. Filters the results by the specified card id.
    String filterStatus = "filterStatus_example"; // String | Optional. Filter by reward Status. Usage example: filter[status][0]=Rejected.
    String filterSince = "filterSince_example"; // String | Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
    String filterUntil = "filterUntil_example"; // String | Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
    String filterTags = "filterTags_example"; // String | Optional. Filter rewards by Tags.
    String sort = "-createdAt"; // String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
    String include = "include_example"; // String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
    try {
      ListRewards200Response result = apiInstance.listRewards(pageLimit, pageOffset, filterTransactionId, filterRewardedTransactionId, filterReceivingAccountId, filterCustomerId, filterCardId, filterStatus, filterSince, filterUntil, filterTags, sort, include);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RewardsApi#listRewards");
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
| **pageLimit** | **String**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to 100] |
| **pageOffset** | **String**| Number of resources to skip. See Pagination. | [optional] [default to 0] |
| **filterTransactionId** | **String**| Optional. Filters the results by the specified transaction id. | [optional] |
| **filterRewardedTransactionId** | **String**| Optional. Filters the results by the specified rewarded transaction id. | [optional] |
| **filterReceivingAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterCardId** | **String**| Optional. Filters the results by the specified card id. | [optional] |
| **filterStatus** | **String**| Optional. Filter by reward Status. Usage example: filter[status][0]&#x3D;Rejected. | [optional] |
| **filterSince** | **String**| Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filterUntil** | **String**| Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |
| **filterTags** | **String**| Optional. Filter rewards by Tags. | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to -createdAt] |
| **include** | **String**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**ListRewards200Response**](ListRewards200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of rewards resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

