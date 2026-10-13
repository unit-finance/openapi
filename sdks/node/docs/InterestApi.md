# InterestApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTotalAccruedInterest**](#gettotalaccruedinterest) | **GET** /accrued-interest/total | Get total accrued interest|

# **getTotalAccruedInterest**
> GetTotalAccruedInterest200Response getTotalAccruedInterest()

The response to this API call includes the sum of customer accrued interest (in cents) for a given period of time.

### Example

```typescript
import {
    InterestApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new InterestApi(configuration);

let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterSince: string; //Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z (optional) (default to undefined)
let filterUntil: string; //Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z (optional) (default to undefined)
let filterSinceInterestMonth: string; //Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03 (optional) (default to undefined)
let filterUntilInterestMonth: string; //Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07 (optional) (default to undefined)

const { status, data } = await apiInstance.getTotalAccruedInterest(
    filterAccountId,
    filterSince,
    filterUntil,
    filterSinceInterestMonth,
    filterUntilInterestMonth
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterSince** | [**string**] | Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z | (optional) defaults to undefined|
| **filterSinceInterestMonth** | [**string**] | Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03 | (optional) defaults to undefined|
| **filterUntilInterestMonth** | [**string**] | Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07 | (optional) defaults to undefined|


### Return type

**GetTotalAccruedInterest200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Total accrued interest. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

