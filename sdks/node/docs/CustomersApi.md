# CustomersApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**archiveCustomer**](#archivecustomer) | **POST** /customers/{customerId}/archive | Archive a customer|
|[**createBusinessWalletCustomer**](#createbusinesswalletcustomer) | **POST** /customers | Create a business wallet customer|
|[**getCustomer**](#getcustomer) | **GET** /customers/{customerId} | Get a customer|
|[**listCustomers**](#listcustomers) | **GET** /customers | List customers|
|[**updateBusinessCustomerOfficer**](#updatebusinesscustomerofficer) | **PATCH** /customers/{customerId}/officers/{officerId} | Update a business customer officer|
|[**updateCustomer**](#updatecustomer) | **PATCH** /customers/{customerId} | Update a customer|

# **archiveCustomer**
> UpdateCustomer200Response archiveCustomer(archiveCustomerRequest)

Archive a customer. The Customer Archived webhook event will be fired.

### Example

```typescript
import {
    CustomersApi,
    Configuration,
    ArchiveCustomerRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let customerId: string; // (default to undefined)
let archiveCustomerRequest: ArchiveCustomerRequest; //

const { status, data } = await apiInstance.archiveCustomer(
    customerId,
    archiveCustomerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **archiveCustomerRequest** | **ArchiveCustomerRequest**|  | |
| **customerId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateCustomer200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The archived customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBusinessWalletCustomer**
> CreateBusinessWalletCustomer201Response createBusinessWalletCustomer(createBusinessWalletCustomerRequest)

Create a business wallet customer.

### Example

```typescript
import {
    CustomersApi,
    Configuration,
    CreateBusinessWalletCustomerRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let createBusinessWalletCustomerRequest: CreateBusinessWalletCustomerRequest; //

const { status, data } = await apiInstance.createBusinessWalletCustomer(
    createBusinessWalletCustomerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBusinessWalletCustomerRequest** | **CreateBusinessWalletCustomerRequest**|  | |


### Return type

**CreateBusinessWalletCustomer201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created business wallet customer resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomer**
> GetCustomer200Response getCustomer()

Get a customer resource by id.

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let customerId: string; // (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomer(
    customerId,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerId** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**GetCustomer200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCustomers**
> ListCustomers200Response listCustomers()

List customer resources. Paging can be applied.

### Example

```typescript
import {
    CustomersApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterQuery: string; //Optional. Search term according to the Full-Text Search Rules. (optional) (default to undefined)
let filterEmail: string; //Optional. Filter customers by email address (case sensitive). (optional) (default to undefined)
let filterTags: string; //Optional. Filter Customers by Tags. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]=Active (optional) (default to undefined)
let sort: string; //Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

const { status, data } = await apiInstance.listCustomers(
    pageLimit,
    pageOffset,
    filterQuery,
    filterEmail,
    filterTags,
    filterStatus,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterQuery** | [**string**] | Optional. Search term according to the Full-Text Search Rules. | (optional) defaults to undefined|
| **filterEmail** | [**string**] | Optional. Filter customers by email address (case sensitive). | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter Customers by Tags. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]&#x3D;Active | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|


### Return type

**ListCustomers200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of customer resources, each a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBusinessCustomerOfficer**
> UpdateBusinessCustomerOfficer200Response updateBusinessCustomerOfficer(updateBusinessCustomerOfficerRequest)

Update an officer of a business customer.

### Example

```typescript
import {
    CustomersApi,
    Configuration,
    UpdateBusinessCustomerOfficerRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let customerId: string; // (default to undefined)
let officerId: string; // (default to undefined)
let updateBusinessCustomerOfficerRequest: UpdateBusinessCustomerOfficerRequest; //

const { status, data } = await apiInstance.updateBusinessCustomerOfficer(
    customerId,
    officerId,
    updateBusinessCustomerOfficerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBusinessCustomerOfficerRequest** | **UpdateBusinessCustomerOfficerRequest**|  | |
| **customerId** | [**string**] |  | defaults to undefined|
| **officerId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateBusinessCustomerOfficer200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated officer resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCustomer**
> UpdateCustomer200Response updateCustomer(updateCustomerRequest)

Update a customer. The Customer Updated webhook event will be fired. Variants: - **UpdateBusinessCustomer** - **UpdateIndividualCustomer**

### Example

```typescript
import {
    CustomersApi,
    Configuration,
    UpdateCustomerRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CustomersApi(configuration);

let customerId: string; // (default to undefined)
let updateCustomerRequest: UpdateCustomerRequest; //

const { status, data } = await apiInstance.updateCustomer(
    customerId,
    updateCustomerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCustomerRequest** | **UpdateCustomerRequest**|  | |
| **customerId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateCustomer200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated customer resource - a business or individual customer, indicated by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

