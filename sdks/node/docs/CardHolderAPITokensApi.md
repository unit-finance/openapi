# CardHolderAPITokensApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCardholderToken**](#createcardholdertoken) | **POST** /cards/{cardId}/cardholder/token | Create a cardholder token|
|[**createCardholderTokenVerification**](#createcardholdertokenverification) | **POST** /cards/{cardId}/cardholder/token/verification | Create a cardholder token verification|

# **createCardholderToken**
> CreateCardholderToken201Response createCardholderToken(createCardholderTokenRequest)

Create a bearer token for a specific card.

### Example

```typescript
import {
    CardHolderAPITokensApi,
    Configuration,
    CreateCardholderTokenRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardHolderAPITokensApi(configuration);

let cardId: string; // (default to undefined)
let createCardholderTokenRequest: CreateCardholderTokenRequest; //

const { status, data } = await apiInstance.createCardholderToken(
    cardId,
    createCardholderTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCardholderTokenRequest** | **CreateCardholderTokenRequest**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCardholderToken201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created cardholder token. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCardholderTokenVerification**
> CreateCardholderTokenVerification201Response createCardholderTokenVerification(createCardholderTokenVerificationRequest)

When creating a cardholder token that contains a scope which requires two-factor authentication (see Scopes), it is required to first create a verification challenge that will be sent to the customer.

### Example

```typescript
import {
    CardHolderAPITokensApi,
    Configuration,
    CreateCardholderTokenVerificationRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardHolderAPITokensApi(configuration);

let cardId: string; // (default to undefined)
let createCardholderTokenVerificationRequest: CreateCardholderTokenVerificationRequest; //

const { status, data } = await apiInstance.createCardholderTokenVerification(
    cardId,
    createCardholderTokenVerificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCardholderTokenVerificationRequest** | **CreateCardholderTokenVerificationRequest**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCardholderTokenVerification201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created cardholder token verification. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

