# StopPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createStopPayment**](#createstoppayment) | **POST** /stop-payments | Create a stop payment|
|[**disableStopPayment**](#disablestoppayment) | **POST** /stop-payments/{stopPaymentId}/disable | Disable a stop payment|
|[**getStopPayment**](#getstoppayment) | **GET** /stop-payments/{stopPaymentId} | Get a stop payment by id|
|[**listStopPayments**](#liststoppayments) | **GET** /stop-payments | List stop payments|
|[**updateAchStopPayment**](#updateachstoppayment) | **PATCH** /stop-payments/{stopPaymentId} | Update an ACH stop payment|

# **createStopPayment**
> CreateStopPayment201Response createStopPayment(createStopPaymentRequest)

Create a stop payment. The request body is one of CreateACHStopPaymentRequest or CreateCheckStopPaymentRequest, discriminated by data.type (achStopPayment, checkStopPayment). The stopPayment created webhook event will be fired.

### Example

```typescript
import {
    StopPaymentsApi,
    Configuration,
    CreateStopPaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new StopPaymentsApi(configuration);

let createStopPaymentRequest: CreateStopPaymentRequest; //

const { status, data } = await apiInstance.createStopPayment(
    createStopPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStopPaymentRequest** | **CreateStopPaymentRequest**|  | |


### Return type

**CreateStopPayment201Response**

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

# **disableStopPayment**
> GetStopPayment200Response disableStopPayment()

Disable a Stop Payment by id. When a Stop Payment is disabled, the checkStopPayment disabled webhook event is fired and future check payments wont be stopped by this stop payment.

### Example

```typescript
import {
    StopPaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new StopPaymentsApi(configuration);

let stopPaymentId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.disableStopPayment(
    stopPaymentId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **stopPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**GetStopPayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | checkStopPayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStopPayment**
> GetStopPayment200Response getStopPayment()

Get a stop payment by id.

### Example

```typescript
import {
    StopPaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new StopPaymentsApi(configuration);

let stopPaymentId: string; // (default to undefined)

const { status, data } = await apiInstance.getStopPayment(
    stopPaymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stopPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**GetStopPayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | checkStopPayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStopPayments**
> ListStopPayments200Response listStopPayments()

List stop payment resources. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    StopPaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new StopPaymentsApi(configuration);

let pageLimit: string; //Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterTags: string; //Optional. Filter stop payments by Tags. (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
let filterSince: string; //Optional. Filters *before* the specified date. e.g. 2021-06-01 (optional) (default to undefined)
let filterUntil: string; //Optional. Filters *after* the specified date. e.g. 2021-07-01 (optional) (default to undefined)
let filterStatus: string; //Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]=Disabled* (optional) (default to 'Active')
let filterFromAmount: string; //Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToAmount: string; //Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional) (default to undefined)
let filterNoAmount: string; //Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount (optional) (default to undefined)
let filterFromMinAmount: string; //Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents). (optional) (default to undefined)
let filterToMinAmount: string; //Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents). (optional) (default to undefined)
let filterNoMinAmount: string; //Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount (optional) (default to undefined)
let filterOriginatorName: string; //Optional. (optional) (default to undefined)
let filterNoOriginatorName: string; //Optional. (optional) (default to undefined)
let filterCheckNumber: string; //Optional. Filter Stop Payments by check number (trimming leading zeros). (optional) (default to undefined)
let filterType: string; //Optional. Either checkStopPayment or achStopPayment (optional) (default to undefined)

const { status, data } = await apiInstance.listStopPayments(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterTags,
    sort,
    filterSince,
    filterUntil,
    filterStatus,
    filterFromAmount,
    filterToAmount,
    filterNoAmount,
    filterFromMinAmount,
    filterToMinAmount,
    filterNoMinAmount,
    filterOriginatorName,
    filterNoOriginatorName,
    filterCheckNumber,
    filterType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter stop payments by Tags. | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|
| **filterSince** | [**string**] | Optional. Filters *before* the specified date. e.g. 2021-06-01 | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters *after* the specified date. e.g. 2021-07-01 | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]&#x3D;Disabled* | (optional) defaults to 'Active'|
| **filterFromAmount** | [**string**] | Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToAmount** | [**string**] | Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|
| **filterNoAmount** | [**string**] | Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount | (optional) defaults to undefined|
| **filterFromMinAmount** | [**string**] | Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents). | (optional) defaults to undefined|
| **filterToMinAmount** | [**string**] | Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents). | (optional) defaults to undefined|
| **filterNoMinAmount** | [**string**] | Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount | (optional) defaults to undefined|
| **filterOriginatorName** | [**string**] | Optional. | (optional) defaults to undefined|
| **filterNoOriginatorName** | [**string**] | Optional. | (optional) defaults to undefined|
| **filterCheckNumber** | [**string**] | Optional. Filter Stop Payments by check number (trimming leading zeros). | (optional) defaults to undefined|
| **filterType** | [**string**] | Optional. Either checkStopPayment or achStopPayment | (optional) defaults to undefined|


### Return type

**ListStopPayments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of check stop payments resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAchStopPayment**
> UpdateAchStopPayment200Response updateAchStopPayment(updateAchStopPaymentRequest)

Update an AchStopPayment.

### Example

```typescript
import {
    StopPaymentsApi,
    Configuration,
    UpdateAchStopPaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new StopPaymentsApi(configuration);

let stopPaymentId: string; // (default to undefined)
let updateAchStopPaymentRequest: UpdateAchStopPaymentRequest; //

const { status, data } = await apiInstance.updateAchStopPayment(
    stopPaymentId,
    updateAchStopPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAchStopPaymentRequest** | **UpdateAchStopPaymentRequest**|  | |
| **stopPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateAchStopPayment200Response**

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

