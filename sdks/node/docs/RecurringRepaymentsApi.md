# RecurringRepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRecurringRepayment**](#createrecurringrepayment) | **POST** /recurring-repayments | Create a recurring repayment|
|[**disableRecurringRepayment**](#disablerecurringrepayment) | **POST** /recurring-repayments/{id}/disable | Disable a recurring repayment|
|[**enableRecurringRepayment**](#enablerecurringrepayment) | **POST** /recurring-repayments/{id}/enable | Enable a recurring repayment|
|[**getRecurringRepayment**](#getrecurringrepayment) | **GET** /recurring-repayments/{id} | Get a recurring repayment by id|
|[**listRecurringRepayments**](#listrecurringrepayments) | **GET** /recurring-repayments | List recurring repayments|

# **createRecurringRepayment**
> CreateRecurringRepayment201Response createRecurringRepayment(createRecurringRepaymentRequest)

Originate a recurring repayment. The request body is one of CreateRecurringACHRepaymentRequest, CreateRecurringBookRepaymentRequest, CreateRecurringCapitalPartnerACHRepaymentRequest, or CreateRecurringCapitalPartnerBookRepaymentRequest, discriminated by data.type (recurringAchRepayment, recurringBookRepayment) together with the relationships supplied — the capital partner variants omit the account relationship.

### Example

```typescript
import {
    RecurringRepaymentsApi,
    Configuration,
    CreateRecurringRepaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new RecurringRepaymentsApi(configuration);

let createRecurringRepaymentRequest: CreateRecurringRepaymentRequest; //

const { status, data } = await apiInstance.createRecurringRepayment(
    createRecurringRepaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRecurringRepaymentRequest** | **CreateRecurringRepaymentRequest**|  | |


### Return type

**CreateRecurringRepayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created recurring repayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disableRecurringRepayment**
> CreateRecurringRepayment201Response disableRecurringRepayment()

Disable a Recurring Repayment by id. When a Recurring Repayment is disabled, the Recurring Repayment Status Changed webhook event is fired and future repayments will no longer be created according to the defined schedule.

### Example

```typescript
import {
    RecurringRepaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new RecurringRepaymentsApi(configuration);

let id: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.disableRecurringRepayment(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateRecurringRepayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recurring Repayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enableRecurringRepayment**
> CreateRecurringRepayment201Response enableRecurringRepayment()

Enable a recurring repayment by id. When a Recurring Repayment is enabled, its status is set to Active according to the start date and end date that were defined in the schedule. See Recurring Repayment Statuses. When enabled, the Recurring Repayment Status Changed webhook event is fired.

### Example

```typescript
import {
    RecurringRepaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new RecurringRepaymentsApi(configuration);

let id: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.enableRecurringRepayment(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateRecurringRepayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recurring Repayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecurringRepayment**
> CreateRecurringRepayment201Response getRecurringRepayment()

Get a recurring repayment by id.

### Example

```typescript
import {
    RecurringRepaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new RecurringRepaymentsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getRecurringRepayment(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateRecurringRepayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recurring Repayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRecurringRepayments**
> ListRecurringRepayments200Response listRecurringRepayments()

List recurring repayments resources. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    RecurringRepaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new RecurringRepaymentsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterCreditAccountId: string; //Optional. Filters the results by the specified credit account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]=Active (optional) (default to undefined)
let filterFromStartTime: string; //Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13 (optional) (default to undefined)
let filterToStartTime: string; //Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13 (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

const { status, data } = await apiInstance.listRecurringRepayments(
    pageLimit,
    pageOffset,
    filterCreditAccountId,
    filterCustomerId,
    filterStatus,
    filterFromStartTime,
    filterToStartTime,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterCreditAccountId** | [**string**] | Optional. Filters the results by the specified credit account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]&#x3D;Active | (optional) defaults to undefined|
| **filterFromStartTime** | [**string**] | Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13 | (optional) defaults to undefined|
| **filterToStartTime** | [**string**] | Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13 | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|


### Return type

**ListRecurringRepayments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of recurring repayment resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

