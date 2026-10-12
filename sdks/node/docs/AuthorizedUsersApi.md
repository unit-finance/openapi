# AuthorizedUsersApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addAuthorizedUsers**](#addauthorizedusers) | **POST** /customers/{customerId}/authorized-users | Add authorized users|
|[**getAuthorizedUser**](#getauthorizeduser) | **GET** /customers/{customerId}/authorized-users/{authorizedUserId} | Get an authorized user|
|[**listAuthorizedUsers**](#listauthorizedusers) | **GET** /customers/{customerId}/authorized-users | List authorized users|
|[**removeAuthorizedUsers**](#removeauthorizedusers) | **DELETE** /customers/{customerId}/authorized-users | Remove authorized users|

# **addAuthorizedUsers**
> UpdateCustomer200Response addAuthorizedUsers(addAuthorizedUsersRequest)

Add authorized users for a customer. The Customer Update webhook event will be fired.

### Example

```typescript
import {
    AuthorizedUsersApi,
    Configuration,
    AddAuthorizedUsersRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthorizedUsersApi(configuration);

let customerId: string; // (default to undefined)
let addAuthorizedUsersRequest: AddAuthorizedUsersRequest; //

const { status, data } = await apiInstance.addAuthorizedUsers(
    customerId,
    addAuthorizedUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addAuthorizedUsersRequest** | **AddAuthorizedUsersRequest**|  | |
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

# **getAuthorizedUser**
> GetAuthorizedUser200Response getAuthorizedUser()

Get an authorized user resource by id.

### Example

```typescript
import {
    AuthorizedUsersApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthorizedUsersApi(configuration);

let customerId: string; // (default to undefined)
let authorizedUserId: string; // (default to undefined)

const { status, data } = await apiInstance.getAuthorizedUser(
    customerId,
    authorizedUserId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerId** | [**string**] |  | defaults to undefined|
| **authorizedUserId** | [**string**] |  | defaults to undefined|


### Return type

**GetAuthorizedUser200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authorized user resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAuthorizedUsers**
> ListAuthorizedUsers200Response listAuthorizedUsers()

List of authorized user resources. Filtering can be applied.

### Example

```typescript
import {
    AuthorizedUsersApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthorizedUsersApi(configuration);

let customerId: string; // (default to undefined)
let filterJwtSubject: string; //Optional. Filter authorized users by JWT subject. (optional) (default to undefined)
let filterPhone: string; //Optional. Filter authorized users by phone. (optional) (default to undefined)

const { status, data } = await apiInstance.listAuthorizedUsers(
    customerId,
    filterJwtSubject,
    filterPhone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerId** | [**string**] |  | defaults to undefined|
| **filterJwtSubject** | [**string**] | Optional. Filter authorized users by JWT subject. | (optional) defaults to undefined|
| **filterPhone** | [**string**] | Optional. Filter authorized users by phone. | (optional) defaults to undefined|


### Return type

**ListAuthorizedUsers200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of authorized user resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeAuthorizedUsers**
> UpdateCustomer200Response removeAuthorizedUsers(removeAuthorizedUsersRequest)

Remove existing authorized users from a customer. The Customer Update webhook event will be fired.

### Example

```typescript
import {
    AuthorizedUsersApi,
    Configuration,
    RemoveAuthorizedUsersRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthorizedUsersApi(configuration);

let customerId: string; // (default to undefined)
let removeAuthorizedUsersRequest: RemoveAuthorizedUsersRequest; //

const { status, data } = await apiInstance.removeAuthorizedUsers(
    customerId,
    removeAuthorizedUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeAuthorizedUsersRequest** | **RemoveAuthorizedUsersRequest**|  | |
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

