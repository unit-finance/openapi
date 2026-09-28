# ReceivablesManagementApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getReceivableById**](ReceivablesManagementApi.md#getReceivableById) | **GET** /receivables/{id} | Get receivable by id |
| [**listReceivables**](ReceivablesManagementApi.md#listReceivables) | **GET** /receivables | List receivables |


<a id="getReceivableById"></a>
# **getReceivableById**
> GetReceivableById200Response getReceivableById(id)

Get receivable by id

Get a receivable resource by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ReceivablesManagementApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ReceivablesManagementApi apiInstance = new ReceivablesManagementApi(defaultClient);
    String id = "id_example"; // String | 
    try {
      GetReceivableById200Response result = apiInstance.getReceivableById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivablesManagementApi#getReceivableById");
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

[**GetReceivableById200Response**](GetReceivableById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A receivable resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listReceivables"></a>
# **listReceivables**
> ListReceivables200Response listReceivables(pageLimit, pageOffset, filterCustomerId, filterReceivableType, filterRepaymentStatusType, filterPurchaseDueDate, filterDaysUntilPurchase)

List receivables

List receivables resources. Paging can be applied.  The same endpoint also serves the receivables balance report: when &#x60;filter[purchaseDueDate]&#x60; or &#x60;filter[daysUntilPurchase]&#x60; is supplied, the response &#x60;data&#x60; is a single receivables balance resource holding the receivables balance that is due to be purchased by the specified date, or within the specified number of days from today.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ReceivablesManagementApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ReceivablesManagementApi apiInstance = new ReceivablesManagementApi(defaultClient);
    String pageLimit = "100"; // String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Optional. Number of resources to skip. See Pagination.
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterReceivableType = "filterReceivableType_example"; // String | Optional. Filters the results by one of the following receivable types [\"bankReceivable\", \"orgReceivable\", \"capitalPartnerReceivable\"]
    String filterRepaymentStatusType = "filterRepaymentStatusType_example"; // String | Optional. Filters the results by one of the following repayment status types [\"notRepaid\", \"partiallyRepaid\", \"fullyRepaid\"]
    String filterPurchaseDueDate = "filterPurchaseDueDate_example"; // String | Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables.
    String filterDaysUntilPurchase = "filterDaysUntilPurchase_example"; // String | Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables.
    try {
      ListReceivables200Response result = apiInstance.listReceivables(pageLimit, pageOffset, filterCustomerId, filterReceivableType, filterRepaymentStatusType, filterPurchaseDueDate, filterDaysUntilPurchase);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReceivablesManagementApi#listReceivables");
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
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterReceivableType** | **String**| Optional. Filters the results by one of the following receivable types [\&quot;bankReceivable\&quot;, \&quot;orgReceivable\&quot;, \&quot;capitalPartnerReceivable\&quot;] | [optional] |
| **filterRepaymentStatusType** | **String**| Optional. Filters the results by one of the following repayment status types [\&quot;notRepaid\&quot;, \&quot;partiallyRepaid\&quot;, \&quot;fullyRepaid\&quot;] | [optional] |
| **filterPurchaseDueDate** | **String**| Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables. | [optional] |
| **filterDaysUntilPurchase** | **String**| Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables. | [optional] |

### Return type

[**ListReceivables200Response**](ListReceivables200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of receivable resources, or a receivables balance resource when a balance-report filter is supplied. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **0** | Error response |  -  |

