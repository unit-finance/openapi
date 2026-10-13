# CreditApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCreditApplication**](#createcreditapplication) | **POST** /credit-applications | Create a credit application|
|[**getCreditApplication**](#getcreditapplication) | **GET** /credit-applications/{creditApplicationId} | Get a credit application by id|
|[**listCreditApplications**](#listcreditapplications) | **GET** /credit-applications | List credit applications|
|[**updateCreditApplication**](#updatecreditapplication) | **PATCH** /credit-applications/{creditApplicationId} | Update a credit application|

# **createCreditApplication**
> CreateCreditApplication201Response createCreditApplication(createCreditApplicationRequest)

Create a credit application. The request body is one of CreateExistingCreditApplicationRequest (an existing customer, related to a customer) or CreateOnboardingCreditApplicationRequest (a customer being onboarded, related to an application).

### Example

```typescript
import {
    CreditApplicationsApi,
    Configuration,
    CreateCreditApplicationRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CreditApplicationsApi(configuration);

let createCreditApplicationRequest: CreateCreditApplicationRequest; //

const { status, data } = await apiInstance.createCreditApplication(
    createCreditApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCreditApplicationRequest** | **CreateCreditApplicationRequest**|  | |


### Return type

**CreateCreditApplication201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The returned resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCreditApplication**
> CreateCreditApplication201Response getCreditApplication()

Get a credit application resource by id.

### Example

```typescript
import {
    CreditApplicationsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CreditApplicationsApi(configuration);

let creditApplicationId: string; // (default to undefined)

const { status, data } = await apiInstance.getCreditApplication(
    creditApplicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **creditApplicationId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCreditApplication201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A credit application resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCreditApplications**
> ListCreditApplications200Response listCreditApplications()

List credit applications resources. Paging can be applied.

### Example

```typescript
import {
    CreditApplicationsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CreditApplicationsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterLendingProgramId: string; //Optional. Search resources by lending program id. (optional) (default to undefined)
let filterOrgId: string; //Optional. Search resources by organization id. (optional) (default to undefined)
let filterBankId: string; //Optional. Search resources by bank id. (optional) (default to undefined)
let filterApplicationId: string; //Optional. Search resources by application id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Search resources by customer id. (optional) (default to undefined)

const { status, data } = await apiInstance.listCreditApplications(
    pageLimit,
    pageOffset,
    filterLendingProgramId,
    filterOrgId,
    filterBankId,
    filterApplicationId,
    filterCustomerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterLendingProgramId** | [**string**] | Optional. Search resources by lending program id. | (optional) defaults to undefined|
| **filterOrgId** | [**string**] | Optional. Search resources by organization id. | (optional) defaults to undefined|
| **filterBankId** | [**string**] | Optional. Search resources by bank id. | (optional) defaults to undefined|
| **filterApplicationId** | [**string**] | Optional. Search resources by application id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Search resources by customer id. | (optional) defaults to undefined|


### Return type

**ListCreditApplications200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of credit application resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCreditApplication**
> CreateCreditApplication201Response updateCreditApplication(updateCreditApplicationRequest)

Update a credit application.

### Example

```typescript
import {
    CreditApplicationsApi,
    Configuration,
    UpdateCreditApplicationRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CreditApplicationsApi(configuration);

let creditApplicationId: string; // (default to undefined)
let updateCreditApplicationRequest: UpdateCreditApplicationRequest; //

const { status, data } = await apiInstance.updateCreditApplication(
    creditApplicationId,
    updateCreditApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCreditApplicationRequest** | **UpdateCreditApplicationRequest**|  | |
| **creditApplicationId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCreditApplication201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

