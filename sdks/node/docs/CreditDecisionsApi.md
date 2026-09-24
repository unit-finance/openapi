# CreditDecisionsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCreditDecision**](#createcreditdecision) | **POST** /credit-decisions | Create a credit decision|
|[**getCreditDecision**](#getcreditdecision) | **GET** /credit-decisions/{id} | Get a credit decision by id|
|[**listCreditDecisions**](#listcreditdecisions) | **GET** /credit-decisions | List credit decisions|

# **createCreditDecision**
> CreateCreditDecision201Response createCreditDecision(createCreditDecisionRequest)

Create a credit decision for a credit application. The request body is one of CreateApprovedCreditLimitDecisionRequest (an approved decision for an existing customer), CreateDeniedCreditLimitDecisionRequest (a denied decision for an existing customer), CreateManualReviewCreditLimitDecisionRequest (a manual review decision for an existing customer), CreateDeniedCreditApplicationDecisionRequest (a denied decision before a customer exists) or CreateManualReviewCreditApplicationDecisionRequest (a manual review decision before a customer exists).

### Example

```typescript
import {
    CreditDecisionsApi,
    Configuration,
    CreateCreditDecisionRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CreditDecisionsApi(configuration);

let createCreditDecisionRequest: CreateCreditDecisionRequest; //

const { status, data } = await apiInstance.createCreditDecision(
    createCreditDecisionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCreditDecisionRequest** | **CreateCreditDecisionRequest**|  | |


### Return type

**CreateCreditDecision201Response**

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

# **getCreditDecision**
> CreateCreditDecision201Response getCreditDecision()

Get a credit decision resource by id.

### Example

```typescript
import {
    CreditDecisionsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CreditDecisionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getCreditDecision(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateCreditDecision201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A credit decision resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCreditDecisions**
> ListCreditDecisions200Response listCreditDecisions()

List credit decision resources. Paging can be applied.

### Example

```typescript
import {
    CreditDecisionsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CreditDecisionsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterOrgId: string; //Optional. Filters the results by the specified org id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterApplicationId: string; //Optional. Filters the results by the specified application id. (optional) (default to undefined)
let filterBankId: string; //Optional. Filters the results by the specified bank id. (optional) (default to undefined)
let filterDecision: string; //Optional. Filters the results by the specified decision (one of Approved or Denied). (optional) (default to undefined)
let filterEvaluationType: string; //Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication). (optional) (default to undefined)

const { status, data } = await apiInstance.listCreditDecisions(
    pageLimit,
    pageOffset,
    filterOrgId,
    filterCustomerId,
    filterAccountId,
    filterApplicationId,
    filterBankId,
    filterDecision,
    filterEvaluationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterOrgId** | [**string**] | Optional. Filters the results by the specified org id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterApplicationId** | [**string**] | Optional. Filters the results by the specified application id. | (optional) defaults to undefined|
| **filterBankId** | [**string**] | Optional. Filters the results by the specified bank id. | (optional) defaults to undefined|
| **filterDecision** | [**string**] | Optional. Filters the results by the specified decision (one of Approved or Denied). | (optional) defaults to undefined|
| **filterEvaluationType** | [**string**] | Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication). | (optional) defaults to undefined|


### Return type

**ListCreditDecisions200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of credit-decisions resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

