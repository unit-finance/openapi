# RewardsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createReward**](#createreward) | **POST** /rewards | Create a reward|
|[**getReward**](#getreward) | **GET** /rewards/{rewardId} | Get a reward by id|
|[**listRewards**](#listrewards) | **GET** /rewards | List rewards|

# **createReward**
> CreateReward201Response createReward(createRewardRequest)

Creates a reward resource.

### Example

```typescript
import {
    RewardsApi,
    Configuration,
    CreateRewardRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new RewardsApi(configuration);

let createRewardRequest: CreateRewardRequest; //

const { status, data } = await apiInstance.createReward(
    createRewardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRewardRequest** | **CreateRewardRequest**|  | |


### Return type

**CreateReward201Response**

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

# **getReward**
> GetReward200Response getReward()

Get a reward by id.

### Example

```typescript
import {
    RewardsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new RewardsApi(configuration);

let rewardId: string; // (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.getReward(
    rewardId,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rewardId** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**GetReward200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reward resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRewards**
> ListRewards200Response listRewards()

List rewards resources. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    RewardsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new RewardsApi(configuration);

let pageLimit: string; //Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Number of resources to skip. See Pagination. (optional) (default to '0')
let filterTransactionId: string; //Optional. Filters the results by the specified transaction id. (optional) (default to undefined)
let filterRewardedTransactionId: string; //Optional. Filters the results by the specified rewarded transaction id. (optional) (default to undefined)
let filterReceivingAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterCardId: string; //Optional. Filters the results by the specified card id. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter by reward Status. Usage example: filter[status][0]=Rejected. (optional) (default to undefined)
let filterSince: string; //Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional) (default to undefined)
let filterUntil: string; //Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional) (default to undefined)
let filterTags: string; //Optional. Filter rewards by Tags. (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.listRewards(
    pageLimit,
    pageOffset,
    filterTransactionId,
    filterRewardedTransactionId,
    filterReceivingAccountId,
    filterCustomerId,
    filterCardId,
    filterStatus,
    filterSince,
    filterUntil,
    filterTags,
    sort,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterTransactionId** | [**string**] | Optional. Filters the results by the specified transaction id. | (optional) defaults to undefined|
| **filterRewardedTransactionId** | [**string**] | Optional. Filters the results by the specified rewarded transaction id. | (optional) defaults to undefined|
| **filterReceivingAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterCardId** | [**string**] | Optional. Filters the results by the specified card id. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter by reward Status. Usage example: filter[status][0]&#x3D;Rejected. | (optional) defaults to undefined|
| **filterSince** | [**string**] | Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter rewards by Tags. | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**ListRewards200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of rewards resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

