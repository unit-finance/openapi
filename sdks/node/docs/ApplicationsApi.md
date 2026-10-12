# ApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelApplication**](#cancelapplication) | **POST** /applications/{id}/cancel | Cancel an application|
|[**createApplication**](#createapplication) | **POST** /applications | Create an application|
|[**getById**](#getbyid) | **GET** /applications/{id} | Get an application|
|[**list**](#list) | **GET** /applications | List applications|
|[**updateApplication**](#updateapplication) | **PATCH** /applications/{id} | Update an application|
|[**updateBusinessBeneficialOwner**](#updatebusinessbeneficialowner) | **PATCH** /beneficial-owner/{id} | Update a business beneficial owner|

# **cancelApplication**
> CancelApplication201Response cancelApplication(cancelApplicationRequest)

Cancel an Application under `PendingReview` or `AwaitingDocuments` status. The application.canceled webhook event will be fired.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    CancelApplicationRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: string; // (default to undefined)
let cancelApplicationRequest: CancelApplicationRequest; //

const { status, data } = await apiInstance.cancelApplication(
    id,
    cancelApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelApplicationRequest** | **CancelApplicationRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CancelApplication201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The canceled application resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createApplication**
> CreateApplication201Response createApplication(createApplicationRequest)

Create an application. Variants: - **CreateBusinessApplication** - **CreateIndividualApplication** - **CreateSoleProprietorApplication**

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    CreateApplicationRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let createApplicationRequest: CreateApplicationRequest; //

const { status, data } = await apiInstance.createApplication(
    createApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createApplicationRequest** | **CreateApplicationRequest**|  | |


### Return type

**CreateApplication201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created application resource - a business or individual application, indicated by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getById**
> CreateApplication201Response getById()

Get an application resource by id.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateApplication201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested application resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> List200Response list()

List application resources. Paging can be applied.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). (optional) (default to '0')
let filterQuery: string; //Optional. Search term according to the Full-Text Search Rules. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter applications by Application Status. Usage example: *filter[status][0]=Pending&filter[status][1]=Approved* (optional) (default to undefined)
let filterEmail: string; //Optional. Filter applications by email address (case sensitive). (optional) (default to undefined)
let filterTags: string; //Optional. Filter Applications by Tags. (optional) (default to undefined)
let sort: string; //Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

const { status, data } = await apiInstance.list(
    pageLimit,
    pageOffset,
    filterQuery,
    filterStatus,
    filterEmail,
    filterTags,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | (optional) defaults to '0'|
| **filterQuery** | [**string**] | Optional. Search term according to the Full-Text Search Rules. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter applications by Application Status. Usage example: *filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Approved* | (optional) defaults to undefined|
| **filterEmail** | [**string**] | Optional. Filter applications by email address (case sensitive). | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter Applications by Tags. | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|


### Return type

**List200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of application resources, optionally filtered and sorted. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateApplication**
> CreateApplication201Response updateApplication(updateApplicationRequest)

Update an application. Variants: - **UpdateBusiness** - **UpdateBusinessOfficer** - **UpdateIndividual** - **UpdateSoleProprietor**

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    UpdateApplicationRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: string; // (default to undefined)
let updateApplicationRequest: UpdateApplicationRequest; //

const { status, data } = await apiInstance.updateApplication(
    id,
    updateApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateApplicationRequest** | **UpdateApplicationRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateApplication201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Returns the updated application resource, which is a business or individual application as indicated by the &#x60;type&#x60; field. Note: this endpoint responds with HTTP 201 (not 200) for a successful update; this reflects the live Unit API behavior (verified against the sandbox at https://api.s.unit.sh). |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBusinessBeneficialOwner**
> UpdateBusinessBeneficialOwner201Response updateBusinessBeneficialOwner(updateBusinessBeneficialOwnerRequest)

Update a business application\'s beneficial owner. The application id associated with the beneficial owner must be passed as a relationship in the request body.

### Example

```typescript
import {
    ApplicationsApi,
    Configuration,
    UpdateBusinessBeneficialOwnerRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationsApi(configuration);

let id: string; // (default to undefined)
let updateBusinessBeneficialOwnerRequest: UpdateBusinessBeneficialOwnerRequest; //

const { status, data } = await apiInstance.updateBusinessBeneficialOwner(
    id,
    updateBusinessBeneficialOwnerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBusinessBeneficialOwnerRequest** | **UpdateBusinessBeneficialOwnerRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UpdateBusinessBeneficialOwner201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The updated beneficial owner resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

