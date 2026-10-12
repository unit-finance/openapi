# StatementsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBankVerificationPdf**](#getbankverificationpdf) | **GET** /statements/{accountId}/bank/pdf | Get a bank verification PDF|
|[**getStatementHtml**](#getstatementhtml) | **GET** /statements/{id}/html | Get a statement HTML|
|[**getStatementPdf**](#getstatementpdf) | **GET** /statements/{id}/pdf | Get a statement PDF|
|[**listStatements**](#liststatements) | **GET** /statements | List statements|

# **getBankVerificationPdf**
> File getBankVerificationPdf()

Customers may be required, for various reasons, to provide proof that they hold a bank account with a certain financial institution. This is typically provided by the bank in a letter called \"Bank verification letter\", which includes the customer, account and financial institution information. If the customer is required to prove availability of funds, the letter may also include the available balance on the account.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let accountId: string; // (default to undefined)
let includeProofOfFunds: string; //Optional. include customer proof of funds (optional) (default to 'false')

const { status, data } = await apiInstance.getBankVerificationPdf(
    accountId,
    includeProofOfFunds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **includeProofOfFunds** | [**string**] | Optional. include customer proof of funds | (optional) defaults to 'false'|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The bank verification letter PDF. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatementHtml**
> string getStatementHtml()

Get a statement HTML output by id.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let id: string; // (default to undefined)
let filterCustomerId: string; //Optional. Verify that the statements belongs to the customer. (optional) (default to undefined)
let language: string; //Optional. Select the statement language. en - English, es - Spanish (optional) (default to 'en')

const { status, data } = await apiInstance.getStatementHtml(
    id,
    filterCustomerId,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Verify that the statements belongs to the customer. | (optional) defaults to undefined|
| **language** | [**string**] | Optional. Select the statement language. en - English, es - Spanish | (optional) defaults to 'en'|


### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The statement HTML output. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatementPdf**
> File getStatementPdf()

Get a statement PDF output by id.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let id: string; // (default to undefined)
let filterCustomerId: string; //Optional. Verify that the statements belongs to the customer. (optional) (default to undefined)
let language: string; //Optional. Select the statement language. en - English, es - Spanish (optional) (default to 'en')

const { status, data } = await apiInstance.getStatementPdf(
    id,
    filterCustomerId,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Verify that the statements belongs to the customer. | (optional) defaults to undefined|
| **language** | [**string**] | Optional. Select the statement language. en - English, es - Spanish | (optional) defaults to 'en'|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The statement PDF output. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStatements**
> ListStatements200Response listStatements()

List statement resources. Filtering and paging can be applied.

### Example

```typescript
import {
    StatementsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new StatementsApi(configuration);

let pageLimit: string; //Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterAccountIds: string; //Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001* (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterPeriod: string; //Optional. Filters the results for a specific month. e.g. 2021-01 (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=period for ascending order. Provide sort=-period (leading minus sign) for descending order. (optional) (default to 'period')

const { status, data } = await apiInstance.listStatements(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterAccountIds,
    filterCustomerId,
    filterPeriod,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterAccountIds** | [**string**] | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterPeriod** | [**string**] | Optional. Filters the results for a specific month. e.g. 2021-01 | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;period for ascending order. Provide sort&#x3D;-period (leading minus sign) for descending order. | (optional) defaults to 'period'|


### Return type

**ListStatements200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of statement resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

