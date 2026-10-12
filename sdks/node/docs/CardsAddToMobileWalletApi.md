# CardsAddToMobileWalletApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMobileWalletPayload**](#getmobilewalletpayload) | **POST** /cards/{cardId}/mobile-wallet-payload | Get mobile wallet payload|

# **getMobileWalletPayload**
> GetMobileWalletPayload200Response getMobileWalletPayload(getMobileWalletPayloadRequest)

Get the mobile wallet encrypted payload for the specified card. The encrypted payload is unique per issuance and is required as part of the SDK integration.

### Example

```typescript
import {
    CardsAddToMobileWalletApi,
    Configuration,
    GetMobileWalletPayloadRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsAddToMobileWalletApi(configuration);

let cardId: string; // (default to undefined)
let getMobileWalletPayloadRequest: GetMobileWalletPayloadRequest; //

const { status, data } = await apiInstance.getMobileWalletPayload(
    cardId,
    getMobileWalletPayloadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getMobileWalletPayloadRequest** | **GetMobileWalletPayloadRequest**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**GetMobileWalletPayload200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A JSON object containing the encrypted payload. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

