# CounterpartiesApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCounterparty**](#createcounterparty) | **POST** /counterparties | Create a counterparty|
|[**deleteCounterparty**](#deletecounterparty) | **DELETE** /counterparties/{counterpartyId} | Delete a counterparty|
|[**getCounterparty**](#getcounterparty) | **GET** /counterparties/{counterpartyId} | Get a counterparty by id|
|[**getCounterpartyBalance**](#getcounterpartybalance) | **GET** /counterparties/{counterpartyId}/balance | Get a counterparty balance by id|
|[**listCounterparties**](#listcounterparties) | **GET** /counterparties | List counterparties|
|[**updateCounterparty**](#updatecounterparty) | **PATCH** /counterparties/{counterpartyId} | Update a counterparty|

# **createCounterparty**
> CreateCounterparty201Response createCounterparty(createCounterpartyBody)

Creates an ACH counterparty for a specific customer. The request body is one of CreateCounterpartyRequest (account/routing number) or CreateCounterpartyWithPlaidTokenRequest (Plaid processor token).

### Example

```typescript
import {
    CounterpartiesApi,
    Configuration,
    CreateCounterpartyBody
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CounterpartiesApi(configuration);

let createCounterpartyBody: CreateCounterpartyBody; //

const { status, data } = await apiInstance.createCounterparty(
    createCounterpartyBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCounterpartyBody** | **CreateCounterpartyBody**|  | |


### Return type

**CreateCounterparty201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created counterparty resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCounterparty**
> deleteCounterparty()

Delete a counterparty resource by id.

### Example

```typescript
import {
    CounterpartiesApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CounterpartiesApi(configuration);

let counterpartyId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.deleteCounterparty(
    counterpartyId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **counterpartyId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | The counterparty was deleted successfully. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCounterparty**
> CreateCounterparty201Response getCounterparty()

Get a counterparty resource by id.

### Example

```typescript
import {
    CounterpartiesApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CounterpartiesApi(configuration);

let counterpartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getCounterparty(
    counterpartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **counterpartyId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCounterparty201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Counterparty resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCounterpartyBalance**
> GetCounterpartyBalance200Response getCounterpartyBalance()

Get a counterparty balance resource by id.

### Example

```typescript
import {
    CounterpartiesApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CounterpartiesApi(configuration);

let counterpartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getCounterpartyBalance(
    counterpartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **counterpartyId** | [**string**] |  | defaults to undefined|


### Return type

**GetCounterpartyBalance200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Counterparty Balance resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCounterparties**
> ListCounterparties200Response listCounterparties()

List counterparties. Filtering and paging can be applied.

### Example

```typescript
import {
    CounterpartiesApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CounterpartiesApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterAccountNumber: string; //Optional. Filters the results by the specified account number. (optional) (default to undefined)
let filterRoutingNumber: string; //Optional. Filters the results by the specified routing number. (optional) (default to undefined)
let filterTags: string; //Optional. Filter Counterparties by Tags. (optional) (default to undefined)
let filterPermissions: string; //Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]=CreditOnly&filter[permissions][1]=CreditAndDebit* (optional) (default to undefined)
let sort: string; //Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to 'createdAt')

const { status, data } = await apiInstance.listCounterparties(
    pageLimit,
    pageOffset,
    filterCustomerId,
    filterAccountNumber,
    filterRoutingNumber,
    filterTags,
    filterPermissions,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterAccountNumber** | [**string**] | Optional. Filters the results by the specified account number. | (optional) defaults to undefined|
| **filterRoutingNumber** | [**string**] | Optional. Filters the results by the specified routing number. | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter Counterparties by Tags. | (optional) defaults to undefined|
| **filterPermissions** | [**string**] | Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]&#x3D;CreditOnly&amp;filter[permissions][1]&#x3D;CreditAndDebit* | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to 'createdAt'|


### Return type

**ListCounterparties200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of counterparty resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCounterparty**
> UpdateCounterparty200Response updateCounterparty(updateCounterpartyRequest)

Update a Counterparty. Relink existing counterparty with a new Plaid processor token.

### Example

```typescript
import {
    CounterpartiesApi,
    Configuration,
    UpdateCounterpartyRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CounterpartiesApi(configuration);

let counterpartyId: string; // (default to undefined)
let updateCounterpartyRequest: UpdateCounterpartyRequest; //

const { status, data } = await apiInstance.updateCounterparty(
    counterpartyId,
    updateCounterpartyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCounterpartyRequest** | **UpdateCounterpartyRequest**|  | |
| **counterpartyId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateCounterparty200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The target resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

