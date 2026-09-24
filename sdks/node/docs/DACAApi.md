# DACAApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateControlAgreement**](#activatecontrolagreement) | **POST** /accounts/{accountId}/activate-daca | Activate control agreement|
|[**deactivateControlAgreement**](#deactivatecontrolagreement) | **POST** /accounts/{accountId}/deactivate-daca | Deactivate control agreement|
|[**enterControlAgreement**](#entercontrolagreement) | **POST** /accounts/{accountId}/enter-daca | Enter control agreement|

# **activateControlAgreement**
> EnterControlAgreement200Response activateControlAgreement()

Set an account with DACA `Activated` status. This action will:

### Example

```typescript
import {
    DACAApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new DACAApi(configuration);

let accountId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.activateControlAgreement(
    accountId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**EnterControlAgreement200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The deposit account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateControlAgreement**
> EnterControlAgreement200Response deactivateControlAgreement()

Deactivate an account with DACA `Activated` status. This action will:

### Example

```typescript
import {
    DACAApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new DACAApi(configuration);

let accountId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.deactivateControlAgreement(
    accountId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**EnterControlAgreement200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The deposit account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterControlAgreement**
> EnterControlAgreement200Response enterControlAgreement()

Set an account with DACA `Entered` status.

### Example

```typescript
import {
    DACAApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new DACAApi(configuration);

let accountId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.enterControlAgreement(
    accountId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**EnterControlAgreement200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The deposit account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

