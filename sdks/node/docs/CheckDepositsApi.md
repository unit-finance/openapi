# CheckDepositsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clearCheckDeposit**](#clearcheckdeposit) | **POST** /check-deposits/{checkDepositId}/clear | Clear a check deposit|
|[**confirmCheckDepositDetails**](#confirmcheckdepositdetails) | **POST** /check-deposits/{checkDepositId}/confirm | Confirm check deposit details|
|[**createCheckDeposit**](#createcheckdeposit) | **POST** /check-deposits | Create a check deposit|
|[**createCheckDepositSendLink**](#createcheckdepositsendlink) | **POST** /white-label/send-link | Create a check deposit send link|
|[**getCheckDeposit**](#getcheckdeposit) | **GET** /check-deposits/{checkDepositId} | Get a check deposit by id|
|[**getCheckDepositBackImage**](#getcheckdepositbackimage) | **GET** /check-deposits/{checkDepositId}/back | Get a check deposit back image|
|[**getCheckDepositFrontImage**](#getcheckdepositfrontimage) | **GET** /check-deposits/{checkDepositId}/front | Get a check deposit front image|
|[**listCheckDeposits**](#listcheckdeposits) | **GET** /check-deposits | List check deposits|
|[**updateCheckDeposit**](#updatecheckdeposit) | **PATCH** /check-deposits/{checkDepositId} | Update a check deposit|
|[**uploadCheckDepositBackImage**](#uploadcheckdepositbackimage) | **PUT** /check-deposits/{checkDepositId}/back | Upload a check deposit back image|
|[**uploadCheckDepositFrontImage**](#uploadcheckdepositfrontimage) | **PUT** /check-deposits/{checkDepositId}/front | Upload a check deposit front image|

# **clearCheckDeposit**
> CreateCheckDeposit201Response clearCheckDeposit()

Clears a check deposit while in `Clearing` status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.clearCheckDeposit(
    checkDepositId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **checkDepositId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCheckDeposit201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cleared check deposit. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmCheckDepositDetails**
> confirmCheckDepositDetails()

Confirms a check deposit details when it\'s in `AwaitingCustomerConfirmation` status

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.confirmCheckDepositDetails(
    checkDepositId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **checkDepositId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The check deposit details were confirmed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCheckDeposit**
> CreateCheckDeposit201Response createCheckDeposit(createCheckDepositRequest)

Creates a check deposit for an `Account`.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration,
    CreateCheckDepositRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let createCheckDepositRequest: CreateCheckDepositRequest; //

const { status, data } = await apiInstance.createCheckDeposit(
    createCheckDepositRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCheckDepositRequest** | **CreateCheckDepositRequest**|  | |


### Return type

**CreateCheckDeposit201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The requested resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCheckDepositSendLink**
> CreateCheckDepositSendLink201Response createCheckDepositSendLink(createCheckDepositSendLinkRequest)

Creates a shareable link for the Check Deposit component for an `Account`. The link can be sent to an end user via SMS or email and used to complete a check deposit. Unless a White Label Theme is customized, the component uses the default theme. Unless an Email Domain is customized the link will be created under a default domain starting in `https://application-form.sh`.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration,
    CreateCheckDepositSendLinkRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let createCheckDepositSendLinkRequest: CreateCheckDepositSendLinkRequest; //

const { status, data } = await apiInstance.createCheckDepositSendLink(
    createCheckDepositSendLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCheckDepositSendLinkRequest** | **CreateCheckDepositSendLinkRequest**|  | |


### Return type

**CreateCheckDepositSendLink201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The requested resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCheckDeposit**
> GetCheckDeposit200Response getCheckDeposit()

Get a check deposit by id.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.getCheckDeposit(
    checkDepositId,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkDepositId** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**GetCheckDeposit200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CheckDeposit resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCheckDepositBackImage**
> File getCheckDepositBackImage()

Get a check deposit back image by check deposit id.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)

const { status, data } = await apiInstance.getCheckDepositBackImage(
    checkDepositId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkDepositId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The check deposit back image. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCheckDepositFrontImage**
> File getCheckDepositFrontImage()

Get a check deposit front image by check deposit id.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)

const { status, data } = await apiInstance.getCheckDepositFrontImage(
    checkDepositId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkDepositId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The check deposit front image. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCheckDeposits**
> ListCheckDeposits200Response listCheckDeposits()

List check deposit resources. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let pageLimit: string; //Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]=PendingReview&filter[status][1]=AwaitingImages (optional) (default to undefined)
let filterTags: string; //Optional. Filter check deposits by Tags. (optional) (default to undefined)
let filterFromAmount: string; //Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToAmount: string; //Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.listCheckDeposits(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterStatus,
    filterTags,
    filterFromAmount,
    filterToAmount,
    sort,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]&#x3D;PendingReview&amp;filter[status][1]&#x3D;AwaitingImages | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter check deposits by Tags. | (optional) defaults to undefined|
| **filterFromAmount** | [**string**] | Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToAmount** | [**string**] | Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**ListCheckDeposits200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of check deposit resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCheckDeposit**
> CreateCheckDeposit201Response updateCheckDeposit(updateCheckDepositRequest)

Update a check deposit.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration,
    UpdateCheckDepositRequest
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)
let updateCheckDepositRequest: UpdateCheckDepositRequest; //

const { status, data } = await apiInstance.updateCheckDeposit(
    checkDepositId,
    updateCheckDepositRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCheckDepositRequest** | **UpdateCheckDepositRequest**|  | |
| **checkDepositId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCheckDeposit201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated CheckDeposit resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadCheckDepositBackImage**
> CreateCheckDeposit201Response uploadCheckDepositBackImage(body)

Uploads a check back-side image file. Currently only `jpeg` file type is supported.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)
let body: File; //

const { status, data } = await apiInstance.uploadCheckDepositBackImage(
    checkDepositId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**|  | |
| **checkDepositId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCheckDeposit201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: image/jpeg
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated CheckDeposit resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadCheckDepositFrontImage**
> CreateCheckDeposit201Response uploadCheckDepositFrontImage(body)

Uploads a check front-side image file. Currently only `jpeg` file type is supported.

### Example

```typescript
import {
    CheckDepositsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckDepositsApi(configuration);

let checkDepositId: string; // (default to undefined)
let body: File; //

const { status, data } = await apiInstance.uploadCheckDepositFrontImage(
    checkDepositId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**|  | |
| **checkDepositId** | [**string**] |  | defaults to undefined|


### Return type

**CreateCheckDeposit201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: image/jpeg
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated CheckDeposit resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

