# StatementsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBankVerificationPdf**](StatementsApi.md#getBankVerificationPdf) | **GET** /statements/{accountId}/bank/pdf | Get a bank verification PDF |
| [**getStatementHtml**](StatementsApi.md#getStatementHtml) | **GET** /statements/{id}/html | Get a statement HTML |
| [**getStatementPdf**](StatementsApi.md#getStatementPdf) | **GET** /statements/{id}/pdf | Get a statement PDF |
| [**listStatements**](StatementsApi.md#listStatements) | **GET** /statements | List statements |


<a id="getBankVerificationPdf"></a>
# **getBankVerificationPdf**
> File getBankVerificationPdf(accountId, includeProofOfFunds)

Get a bank verification PDF

Customers may be required, for various reasons, to provide proof that they hold a bank account with a certain financial institution. This is typically provided by the bank in a letter called \&quot;Bank verification letter\&quot;, which includes the customer, account and financial institution information. If the customer is required to prove availability of funds, the letter may also include the available balance on the account.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StatementsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StatementsApi apiInstance = new StatementsApi(defaultClient);
    String accountId = "accountId_example"; // String | 
    String includeProofOfFunds = "false"; // String | Optional. include customer proof of funds
    try {
      File result = apiInstance.getBankVerificationPdf(accountId, includeProofOfFunds);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StatementsApi#getBankVerificationPdf");
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
| **accountId** | **String**|  | |
| **includeProofOfFunds** | **String**| Optional. include customer proof of funds | [optional] [default to false] |

### Return type

[**File**](File.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The bank verification letter PDF. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getStatementHtml"></a>
# **getStatementHtml**
> String getStatementHtml(id, filterCustomerId, language)

Get a statement HTML

Get a statement HTML output by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StatementsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StatementsApi apiInstance = new StatementsApi(defaultClient);
    String id = "id_example"; // String | 
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Verify that the statements belongs to the customer.
    String language = "en"; // String | Optional. Select the statement language. en - English, es - Spanish
    try {
      String result = apiInstance.getStatementHtml(id, filterCustomerId, language);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StatementsApi#getStatementHtml");
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
| **filterCustomerId** | **String**| Optional. Verify that the statements belongs to the customer. | [optional] |
| **language** | **String**| Optional. Select the statement language. en - English, es - Spanish | [optional] [default to en] |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The statement HTML output. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="getStatementPdf"></a>
# **getStatementPdf**
> File getStatementPdf(id, filterCustomerId, language)

Get a statement PDF

Get a statement PDF output by id.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StatementsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StatementsApi apiInstance = new StatementsApi(defaultClient);
    String id = "id_example"; // String | 
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Verify that the statements belongs to the customer.
    String language = "en"; // String | Optional. Select the statement language. en - English, es - Spanish
    try {
      File result = apiInstance.getStatementPdf(id, filterCustomerId, language);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StatementsApi#getStatementPdf");
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
| **filterCustomerId** | **String**| Optional. Verify that the statements belongs to the customer. | [optional] |
| **language** | **String**| Optional. Select the statement language. en - English, es - Spanish | [optional] [default to en] |

### Return type

[**File**](File.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The statement PDF output. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listStatements"></a>
# **listStatements**
> ListStatements200Response listStatements(pageLimit, pageOffset, filterAccountId, filterAccountIds, filterCustomerId, filterPeriod, sort)

List statements

List statement resources. Filtering and paging can be applied.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.StatementsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    StatementsApi apiInstance = new StatementsApi(defaultClient);
    String pageLimit = "100"; // String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
    String pageOffset = "0"; // String | Number of resources to skip. See Pagination.
    String filterAccountId = "filterAccountId_example"; // String | Optional. Filters the results by the specified account id.
    String filterAccountIds = "filterAccountIds_example"; // String | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001*
    String filterCustomerId = "filterCustomerId_example"; // String | Optional. Filters the results by the specified customer id.
    String filterPeriod = "filterPeriod_example"; // String | Optional. Filters the results for a specific month. e.g. 2021-01
    String sort = "period"; // String | Optional. Leave empty or provide sort=period for ascending order. Provide sort=-period (leading minus sign) for descending order.
    try {
      ListStatements200Response result = apiInstance.listStatements(pageLimit, pageOffset, filterAccountId, filterAccountIds, filterCustomerId, filterPeriod, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StatementsApi#listStatements");
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
| **filterAccountId** | **String**| Optional. Filters the results by the specified account id. | [optional] |
| **filterAccountIds** | **String**| Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | [optional] |
| **filterCustomerId** | **String**| Optional. Filters the results by the specified customer id. | [optional] |
| **filterPeriod** | **String**| Optional. Filters the results for a specific month. e.g. 2021-01 | [optional] |
| **sort** | **String**| Optional. Leave empty or provide sort&#x3D;period for ascending order. Provide sort&#x3D;-period (leading minus sign) for descending order. | [optional] [default to period] |

### Return type

[**ListStatements200Response**](ListStatements200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of statement resources. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

