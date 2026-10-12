# CardsAuthorizationRequestsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuthorizationRequestById**](#getauthorizationrequestbyid) | **GET** /authorization-requests/{id} | Get an authorization request by id|
|[**listAuthorizationRequests**](#listauthorizationrequests) | **GET** /authorization-requests | List authorization requests|

# **getAuthorizationRequestById**
> GetAuthorizationRequestById200Response getAuthorizationRequestById()

Get an authorization request resource by id.

### Example

```typescript
import {
    CardsAuthorizationRequestsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsAuthorizationRequestsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAuthorizationRequestById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetAuthorizationRequestById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authorization Request resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAuthorizationRequests**
> ListAuthorizationRequests200Response listAuthorizationRequests()

List authorization requests. Filtering and paging can be applied.

### Example

```typescript
import {
    CardsAuthorizationRequestsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsAuthorizationRequestsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterMerchantCategoryCode: string; //Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC). (optional) (default to undefined)
let filterFromAmount: string; //Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToAmount: string; //Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional) (default to undefined)

const { status, data } = await apiInstance.listAuthorizationRequests(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterMerchantCategoryCode,
    filterFromAmount,
    filterToAmount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterMerchantCategoryCode** | [**string**] | Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC). | (optional) defaults to undefined|
| **filterFromAmount** | [**string**] | Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToAmount** | [**string**] | Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|


### Return type

**ListAuthorizationRequests200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of authorization request resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

