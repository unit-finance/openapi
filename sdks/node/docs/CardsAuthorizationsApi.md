# CardsAuthorizationsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAuthorization**](#getauthorization) | **GET** /authorizations/{id} | Get an authorization|
|[**listAuthorizations**](#listauthorizations) | **GET** /authorizations | List authorizations|
|[**releaseAuthorization**](#releaseauthorization) | **POST** /authorizations/{id}/release | Release an authorization|

# **getAuthorization**
> GetAuthorization200Response getAuthorization()

Get an authorization resource by id.

### Example

```typescript
import {
    CardsAuthorizationsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsAuthorizationsApi(configuration);

let id: string; // (default to undefined)
let filterIncludeNonAuthorized: string; //Optional. Include authorizations from all statuses. (optional) (default to 'false')

const { status, data } = await apiInstance.getAuthorization(
    id,
    filterIncludeNonAuthorized
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **filterIncludeNonAuthorized** | [**string**] | Optional. Include authorizations from all statuses. | (optional) defaults to 'false'|


### Return type

**GetAuthorization200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authorization resource. |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAuthorizations**
> ListAuthorizations200Response listAuthorizations()

List authorizations. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Example

```typescript
import {
    CardsAuthorizationsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsAuthorizationsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterAccountType: string; //Optional. Filter the results by account type (deposit, credit). (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterCardId: string; //Optional. Filters the results by the specified card id. (optional) (default to undefined)
let filterSince: string; //Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional) (default to undefined)
let filterUntil: string; //Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional) (default to undefined)
let filterIncludeNonAuthorized: string; //Optional. Include authorizations from all statuses. (optional) (default to 'false')
let filterStatus: string; //Optional. Filter authorizations by Authorization Status. (optional) (default to 'Authorized')
let filterMerchantCategoryCode: string; //Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC). (optional) (default to undefined)
let filterFromAmount: string; //Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToAmount: string; //Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

const { status, data } = await apiInstance.listAuthorizations(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterAccountType,
    filterCustomerId,
    filterCardId,
    filterSince,
    filterUntil,
    filterIncludeNonAuthorized,
    filterStatus,
    filterMerchantCategoryCode,
    filterFromAmount,
    filterToAmount,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterAccountType** | [**string**] | Optional. Filter the results by account type (deposit, credit). | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterCardId** | [**string**] | Optional. Filters the results by the specified card id. | (optional) defaults to undefined|
| **filterSince** | [**string**] | Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | (optional) defaults to undefined|
| **filterIncludeNonAuthorized** | [**string**] | Optional. Include authorizations from all statuses. | (optional) defaults to 'false'|
| **filterStatus** | [**string**] | Optional. Filter authorizations by Authorization Status. | (optional) defaults to 'Authorized'|
| **filterMerchantCategoryCode** | [**string**] | Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC). | (optional) defaults to undefined|
| **filterFromAmount** | [**string**] | Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToAmount** | [**string**] | Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|


### Return type

**ListAuthorizations200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of authorization resources. |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releaseAuthorization**
> GetAuthorization200Response releaseAuthorization()

Manually release an authorization that is in `Authorized` status. This removes the authorization hold from the account so the **available** balance increases by the authorization amount (subject to other pending activity).

### Example

```typescript
import {
    CardsAuthorizationsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsAuthorizationsApi(configuration);

let id: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.releaseAuthorization(
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

**GetAuthorization200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Updated authorization. |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

