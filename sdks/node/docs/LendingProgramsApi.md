# LendingProgramsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getLendingProgramById**](#getlendingprogrambyid) | **GET** /lending-programs/{id} | Get lending program by id|
|[**getLendingProgramExtendedInformationById**](#getlendingprogramextendedinformationbyid) | **GET** /lending-programs/{id}/extended | Get lending program extended information by id|
|[**listLendingPrograms**](#listlendingprograms) | **GET** /lending-programs | List lending programs|

# **getLendingProgramById**
> GetLendingProgramById200Response getLendingProgramById()

Get a lending program resource by id.

### Example

```typescript
import {
    LendingProgramsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new LendingProgramsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getLendingProgramById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetLendingProgramById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A lending-program resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLendingProgramExtendedInformationById**
> GetLendingProgramExtendedInformationById200Response getLendingProgramExtendedInformationById()

Get lending program extended information resource by id.

### Example

```typescript
import {
    LendingProgramsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new LendingProgramsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getLendingProgramExtendedInformationById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetLendingProgramExtendedInformationById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A lending-program extended information resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listLendingPrograms**
> ListLendingPrograms200Response listLendingPrograms()

List lending program resources. Paging can be applied.

### Example

```typescript
import {
    LendingProgramsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new LendingProgramsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterName: string; //Optional. Filters the results by the specified program name. (optional) (default to undefined)
let filterProgramType: string; //Optional. Filters the results by the specified Lending Program Type. (optional) (default to undefined)
let filterMinProgramLimit: string; //Optional. Filters the results by a maximum value of programSizeLimit. (optional) (default to undefined)
let filterOrgId: string; //Optional. Filters the results by the specified org id. (optional) (default to undefined)
let filterBankId: string; //Optional. Filters the results by the specified bank id. (optional) (default to undefined)

const { status, data } = await apiInstance.listLendingPrograms(
    pageLimit,
    pageOffset,
    filterName,
    filterProgramType,
    filterMinProgramLimit,
    filterOrgId,
    filterBankId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterName** | [**string**] | Optional. Filters the results by the specified program name. | (optional) defaults to undefined|
| **filterProgramType** | [**string**] | Optional. Filters the results by the specified Lending Program Type. | (optional) defaults to undefined|
| **filterMinProgramLimit** | [**string**] | Optional. Filters the results by a maximum value of programSizeLimit. | (optional) defaults to undefined|
| **filterOrgId** | [**string**] | Optional. Filters the results by the specified org id. | (optional) defaults to undefined|
| **filterBankId** | [**string**] | Optional. Filters the results by the specified bank id. | (optional) defaults to undefined|


### Return type

**ListLendingPrograms200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of lending-program resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

