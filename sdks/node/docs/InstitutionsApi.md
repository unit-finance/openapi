# InstitutionsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getByRoutingNumber**](#getbyroutingnumber) | **GET** /institutions/{routingNumber} | Get by routing number|

# **getByRoutingNumber**
> GetByRoutingNumber200Response getByRoutingNumber()

Get an institution resource by routing number.

### Example

```typescript
import {
    InstitutionsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new InstitutionsApi(configuration);

let routingNumber: string; // (default to undefined)

const { status, data } = await apiInstance.getByRoutingNumber(
    routingNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **routingNumber** | [**string**] |  | defaults to undefined|


### Return type

**GetByRoutingNumber200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Institution resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

