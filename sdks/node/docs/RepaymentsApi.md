# RepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRepayment**](#createrepayment) | **POST** /repayments | Create a repayment|
|[**getRepayment**](#getrepayment) | **GET** /repayments/{repaymentId} | Get a repayment by id|
|[**listRepayments**](#listrepayments) | **GET** /repayments | List repayments|
|[**returnExternalRepayment**](#returnexternalrepayment) | **POST** /repayments/{repaymentId}/return | Return an external repayment|

# **createRepayment**
> CreateRepayment201Response createRepayment(createRepaymentRequest)

Create a repayment for a credit account. The request body is one of CreateACHRepaymentRequest, CreateBookRepaymentRequest, CreateCapitalPartnerACHRepaymentRequest, CreateCapitalPartnerBookRepaymentRequest, or CreateExternalRepaymentRequest, discriminated by data.type (repayment, externalRepayment) together with the relationships supplied — the capital partner variants omit the account relationship, the book variants use counterpartyAccount instead of counterparty, and the external variant only takes creditAccount.

### Example

```typescript
import {
    RepaymentsApi,
    Configuration,
    CreateRepaymentRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new RepaymentsApi(configuration);

let createRepaymentRequest: CreateRepaymentRequest; //

const { status, data } = await apiInstance.createRepayment(
    createRepaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRepaymentRequest** | **CreateRepaymentRequest**|  | |


### Return type

**CreateRepayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The requested resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRepayment**
> GetRepayment200Response getRepayment()

Get a repayment by id.

### Example

```typescript
import {
    RepaymentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new RepaymentsApi(configuration);

let repaymentId: string; // (default to undefined)

const { status, data } = await apiInstance.getRepayment(
    repaymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repaymentId** | [**string**] |  | defaults to undefined|


### Return type

**GetRepayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Repayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRepayments**
> ListRepayments200Response listRepayments()

List repayments resources. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    RepaymentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new RepaymentsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCreditAccountId: string; //Optional. Filters the results by the specified credit account id. (optional) (default to undefined)
let filterRecurringRepaymentId: string; //Optional. Filters the result according to the associated Recurring Repayment id (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]=Active (optional) (default to undefined)
let filterType: string; //Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]=AchRepayment&filter[type][1]=BookRepayment* (optional) (default to undefined)
let filterSince: string; //Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional) (default to undefined)
let filterUntil: string; //Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional) (default to undefined)

const { status, data } = await apiInstance.listRepayments(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCreditAccountId,
    filterRecurringRepaymentId,
    filterCustomerId,
    filterStatus,
    filterType,
    filterSince,
    filterUntil
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCreditAccountId** | [**string**] | Optional. Filters the results by the specified credit account id. | (optional) defaults to undefined|
| **filterRecurringRepaymentId** | [**string**] | Optional. Filters the result according to the associated Recurring Repayment id | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]&#x3D;Active | (optional) defaults to undefined|
| **filterType** | [**string**] | Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]&#x3D;AchRepayment&amp;filter[type][1]&#x3D;BookRepayment* | (optional) defaults to undefined|
| **filterSince** | [**string**] | Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | (optional) defaults to undefined|


### Return type

**ListRepayments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of repayment resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnExternalRepayment**
> ReturnExternalRepayment200Response returnExternalRepayment(returnExternalRepaymentRequest)

Returns an external repayment that was previously created with `Sent` status. This is used when the external payment needs to be reversed. When an external repayment is returned, the credit account balance will increase and the available credit limit will decrease.

### Example

```typescript
import {
    RepaymentsApi,
    Configuration,
    ReturnExternalRepaymentRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new RepaymentsApi(configuration);

let repaymentId: string; // (default to undefined)
let returnExternalRepaymentRequest: ReturnExternalRepaymentRequest; //

const { status, data } = await apiInstance.returnExternalRepayment(
    repaymentId,
    returnExternalRepaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **returnExternalRepaymentRequest** | **ReturnExternalRepaymentRequest**|  | |
| **repaymentId** | [**string**] |  | defaults to undefined|


### Return type

**ReturnExternalRepayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

