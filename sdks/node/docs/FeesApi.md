# FeesApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFee**](#createfee) | **POST** /fees | Create a fee|
|[**reverseFee**](#reversefee) | **POST** /fees/reverse | Reverse a fee|

# **createFee**
> CreateFee201Response createFee(createFeeRequest)

Creates a fee for an `Account`.

### Example

```typescript
import {
    FeesApi,
    Configuration,
    CreateFeeRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let createFeeRequest: CreateFeeRequest; //

const { status, data } = await apiInstance.createFee(
    createFeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFeeRequest** | **CreateFeeRequest**|  | |


### Return type

**CreateFee201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created fee resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reverseFee**
> ReverseFee201Response reverseFee(reverseFeeRequest)

Reverse a fee for an `Account`.

### Example

```typescript
import {
    FeesApi,
    Configuration,
    ReverseFeeRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new FeesApi(configuration);

let reverseFeeRequest: ReverseFeeRequest; //

const { status, data } = await apiInstance.reverseFee(
    reverseFeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseFeeRequest** | **ReverseFeeRequest**|  | |


### Return type

**ReverseFee201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created fee reversal resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

