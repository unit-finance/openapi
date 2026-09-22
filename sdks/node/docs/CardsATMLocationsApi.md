# CardsATMLocationsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listAtmLocations**](#listatmlocations) | **GET** /atm-locations | List ATM locations|

# **listAtmLocations**
> ListAtmLocations200Response listAtmLocations()

List ATM locations by address, by coordinates, or by postal code.

### Example

```typescript
import {
    CardsATMLocationsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsATMLocationsApi(configuration);

let filterAddress: string; //Filters the results by the specified address. (optional) (default to undefined)
let filterCoordinates: string; //Filters the results by the specified coordinates. (optional) (default to undefined)
let filterPostalCode: string; //Filters the results by the specified postal code. (optional) (default to undefined)
let filterSearchRadius: string; //Filters the results by the search radius (in miles). Default and max values are 100. (optional) (default to undefined)

const { status, data } = await apiInstance.listAtmLocations(
    filterAddress,
    filterCoordinates,
    filterPostalCode,
    filterSearchRadius
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterAddress** | [**string**] | Filters the results by the specified address. | (optional) defaults to undefined|
| **filterCoordinates** | [**string**] | Filters the results by the specified coordinates. | (optional) defaults to undefined|
| **filterPostalCode** | [**string**] | Filters the results by the specified postal code. | (optional) defaults to undefined|
| **filterSearchRadius** | [**string**] | Filters the results by the search radius (in miles). Default and max values are 100. | (optional) defaults to undefined|


### Return type

**ListAtmLocations200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of ATM Location resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

