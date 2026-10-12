# PositivePayApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelPositivePay**](#cancelpositivepay) | **POST** /positive-pay/{positivePayId}/cancel | Cancel a positive pay rule|
|[**configurePositivePayPolicy**](#configurepositivepaypolicy) | **POST** /positive-pay-policy | Configure a positive pay policy|
|[**createPositivePay**](#createpositivepay) | **POST** /positive-pay | Create a positive pay rule|
|[**getPositivePayById**](#getpositivepaybyid) | **GET** /positive-pay/{positivePayId} | Get a positive pay rule by id|
|[**listPositivePay**](#listpositivepay) | **GET** /positive-pay | List positive pay rules|
|[**uploadPositivePayDocument**](#uploadpositivepaydocument) | **PUT** /positive-pay/{positivePayId}/documents | Upload a positive pay document|

# **cancelPositivePay**
> CancelPositivePay200Response cancelPositivePay()

Cancel a Positive Pay rule by ID. Cancelled rules stop authorizing payments.

### Example

```typescript
import {
    PositivePayApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new PositivePayApi(configuration);

let positivePayId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.cancelPositivePay(
    positivePayId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **positivePayId** | [**string**] |  | defaults to undefined|


### Return type

**CancelPositivePay200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cancelled Positive Pay rule. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configurePositivePayPolicy**
> configurePositivePayPolicy(configurePositivePayPolicyRequest)

Configure Positive Pay policy to control which payment types require matching Positive Pay rules before they can be processed.

### Example

```typescript
import {
    PositivePayApi,
    Configuration,
    ConfigurePositivePayPolicyRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new PositivePayApi(configuration);

let configurePositivePayPolicyRequest: ConfigurePositivePayPolicyRequest; //

const { status, data } = await apiInstance.configurePositivePayPolicy(
    configurePositivePayPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configurePositivePayPolicyRequest** | **ConfigurePositivePayPolicyRequest**|  | |


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
|**200** | The Positive Pay policy was configured. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPositivePay**
> CreatePositivePay201Response createPositivePay(createPositivePayRequest)

Create a Positive Pay rule. Variants: - **CreateCheckPaymentPositivePay** - **CreateReceivedACHDebitPositivePay** - **CreateWireDrawdownPositivePay**

### Example

```typescript
import {
    PositivePayApi,
    Configuration,
    CreatePositivePayRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new PositivePayApi(configuration);

let createPositivePayRequest: CreatePositivePayRequest; //

const { status, data } = await apiInstance.createPositivePay(
    createPositivePayRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPositivePayRequest** | **CreatePositivePayRequest**|  | |


### Return type

**CreatePositivePay201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created Positive Pay rule, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPositivePayById**
> GetPositivePayById200Response getPositivePayById()

Get a Positive Pay rule by ID.

### Example

```typescript
import {
    PositivePayApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new PositivePayApi(configuration);

let positivePayId: string; // (default to undefined)

const { status, data } = await apiInstance.getPositivePayById(
    positivePayId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **positivePayId** | [**string**] |  | defaults to undefined|


### Return type

**GetPositivePayById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Positive Pay rule. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPositivePay**
> ListPositivePay200Response listPositivePay()

List Positive Pay rules. Filtering, paging, and sorting can be applied.

### Example

```typescript
import {
    PositivePayApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new PositivePayApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterStatus: string; //Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled. (optional) (default to undefined)
let filterType: string; //Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay. (optional) (default to undefined)
let filterTags: string; //Optional. Filter positive pay by Tags. (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

const { status, data } = await apiInstance.listPositivePay(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterStatus,
    filterType,
    filterTags,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled. | (optional) defaults to undefined|
| **filterType** | [**string**] | Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay. | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter positive pay by Tags. | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|


### Return type

**ListPositivePay200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of positive pay rule resources. Each resource can be any of the listed rule types, as indicated by the type field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadPositivePayDocument**
> uploadPositivePayDocument(body)

Upload the authorization document required to activate a drawdown rule (Wire Drawdown Only).

### Example

```typescript
import {
    PositivePayApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new PositivePayApi(configuration);

let positivePayId: string; // (default to undefined)
let body: File; //

const { status, data } = await apiInstance.uploadPositivePayDocument(
    positivePayId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**|  | |
| **positivePayId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The authorization document was uploaded. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

