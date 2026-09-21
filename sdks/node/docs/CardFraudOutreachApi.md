# CardFraudOutreachApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPolicy**](#createpolicy) | **POST** /fraud-outreach-policies | Create a card fraud outreach policy|
|[**getCardFraudCaseById**](#getcardfraudcasebyid) | **GET** /card-fraud-cases/{id} | Get a card fraud case by id|
|[**getPolicyById**](#getpolicybyid) | **GET** /fraud-outreach-policies/{policyId} | Get a card fraud outreach policy by id|
|[**listCardFraudCases**](#listcardfraudcases) | **GET** /card-fraud-cases | List card fraud cases|
|[**markCardFraudCaseAsFraud**](#markcardfraudcaseasfraud) | **POST** /card-fraud-cases/{id}/fraud | Mark a card fraud case as fraud|
|[**markCardFraudCaseAsNoFraud**](#markcardfraudcaseasnofraud) | **POST** /card-fraud-cases/{id}/no-fraud | Mark a card fraud case as no fraud|
|[**updatePolicy**](#updatepolicy) | **PATCH** /fraud-outreach-policies/{policyId} | Update a card fraud outreach policy|

# **createPolicy**
> CreatePolicy201Response createPolicy(createPolicyRequest)

Create a card fraud outreach policy.

### Example

```typescript
import {
    CardFraudOutreachApi,
    Configuration,
    CreatePolicyRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardFraudOutreachApi(configuration);

let createPolicyRequest: CreatePolicyRequest; //

const { status, data } = await apiInstance.createPolicy(
    createPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPolicyRequest** | **CreatePolicyRequest**|  | |


### Return type

**CreatePolicy201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created CardFraudOutreachPolicy resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardFraudCaseById**
> GetCardFraudCaseById200Response getCardFraudCaseById()

Get a card fraud case by id.

### Example

```typescript
import {
    CardFraudOutreachApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardFraudOutreachApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getCardFraudCaseById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetCardFraudCaseById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Card Fraud Case resource. Can be either Authorization or Transaction as indicated by the type field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPolicyById**
> CreatePolicy201Response getPolicyById()

Get a card fraud outreach policy by id.

### Example

```typescript
import {
    CardFraudOutreachApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardFraudOutreachApi(configuration);

let policyId: string; // (default to undefined)

const { status, data } = await apiInstance.getPolicyById(
    policyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **policyId** | [**string**] |  | defaults to undefined|


### Return type

**CreatePolicy201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested CardFraudOutreachPolicy resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCardFraudCases**
> ListCardFraudCases200Response listCardFraudCases()

List card fraud case resources. Paging can be applied.

### Example

```typescript
import {
    CardFraudOutreachApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardFraudOutreachApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterCardId: string; //Optional. Filter by card id. (optional) (default to undefined)
let filterAccountId: string; //Optional. Filter by account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filter by customer id. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired. (optional) (default to undefined)
let filterDecision: string; //Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud. (optional) (default to undefined)
let sort: string; //Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

const { status, data } = await apiInstance.listCardFraudCases(
    pageLimit,
    pageOffset,
    filterCardId,
    filterAccountId,
    filterCustomerId,
    filterStatus,
    filterDecision,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterCardId** | [**string**] | Optional. Filter by card id. | (optional) defaults to undefined|
| **filterAccountId** | [**string**] | Optional. Filter by account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filter by customer id. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired. | (optional) defaults to undefined|
| **filterDecision** | [**string**] | Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud. | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|


### Return type

**ListCardFraudCases200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of card fraud case resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markCardFraudCaseAsFraud**
> GetCardFraudCaseById200Response markCardFraudCaseAsFraud(markCardFraudCaseAsFraudRequest)

Mark a card fraud case as fraud.

### Example

```typescript
import {
    CardFraudOutreachApi,
    Configuration,
    MarkCardFraudCaseAsFraudRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardFraudOutreachApi(configuration);

let id: string; // (default to undefined)
let markCardFraudCaseAsFraudRequest: MarkCardFraudCaseAsFraudRequest; //

const { status, data } = await apiInstance.markCardFraudCaseAsFraud(
    id,
    markCardFraudCaseAsFraudRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markCardFraudCaseAsFraudRequest** | **MarkCardFraudCaseAsFraudRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetCardFraudCaseById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Card Fraud Case resource updated as Fraud. Can be either Authorization or Transaction as indicated by the type field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markCardFraudCaseAsNoFraud**
> GetCardFraudCaseById200Response markCardFraudCaseAsNoFraud()

Mark a card fraud case as no fraud.

### Example

```typescript
import {
    CardFraudOutreachApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardFraudOutreachApi(configuration);

let id: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.markCardFraudCaseAsNoFraud(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetCardFraudCaseById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The Card Fraud Case resource updated as No Fraud. Can be either Authorization or Transaction as indicated by the type field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePolicy**
> CreatePolicy201Response updatePolicy(updatePolicyRequest)

Update a card fraud outreach policy.

### Example

```typescript
import {
    CardFraudOutreachApi,
    Configuration,
    UpdatePolicyRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardFraudOutreachApi(configuration);

let policyId: string; // (default to undefined)
let updatePolicyRequest: UpdatePolicyRequest; //

const { status, data } = await apiInstance.updatePolicy(
    policyId,
    updatePolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePolicyRequest** | **UpdatePolicyRequest**|  | |
| **policyId** | [**string**] |  | defaults to undefined|


### Return type

**CreatePolicy201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated CardFraudOutreachPolicy resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

