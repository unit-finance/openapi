# ReceivablesManagementApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getReceivableById**](#getreceivablebyid) | **GET** /receivables/{id} | Get receivable by id|
|[**listReceivables**](#listreceivables) | **GET** /receivables | List receivables|

# **getReceivableById**
> GetReceivableById200Response getReceivableById()

Get a receivable resource by id.

### Example

```typescript
import {
    ReceivablesManagementApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ReceivablesManagementApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getReceivableById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetReceivableById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A receivable resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listReceivables**
> ListReceivables200Response listReceivables()

List receivables resources. Paging can be applied.  The same endpoint also serves the receivables balance report: when `filter[purchaseDueDate]` or `filter[daysUntilPurchase]` is supplied, the response `data` is a single receivables balance resource holding the receivables balance that is due to be purchased by the specified date, or within the specified number of days from today.

### Example

```typescript
import {
    ReceivablesManagementApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ReceivablesManagementApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterReceivableType: string; //Optional. Filters the results by one of the following receivable types [\"bankReceivable\", \"orgReceivable\", \"capitalPartnerReceivable\"] (optional) (default to undefined)
let filterRepaymentStatusType: string; //Optional. Filters the results by one of the following repayment status types [\"notRepaid\", \"partiallyRepaid\", \"fullyRepaid\"] (optional) (default to undefined)
let filterPurchaseDueDate: string; //Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables. (optional) (default to undefined)
let filterDaysUntilPurchase: string; //Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables. (optional) (default to undefined)

const { status, data } = await apiInstance.listReceivables(
    pageLimit,
    pageOffset,
    filterCustomerId,
    filterReceivableType,
    filterRepaymentStatusType,
    filterPurchaseDueDate,
    filterDaysUntilPurchase
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterReceivableType** | [**string**] | Optional. Filters the results by one of the following receivable types [\&quot;bankReceivable\&quot;, \&quot;orgReceivable\&quot;, \&quot;capitalPartnerReceivable\&quot;] | (optional) defaults to undefined|
| **filterRepaymentStatusType** | [**string**] | Optional. Filters the results by one of the following repayment status types [\&quot;notRepaid\&quot;, \&quot;partiallyRepaid\&quot;, \&quot;fullyRepaid\&quot;] | (optional) defaults to undefined|
| **filterPurchaseDueDate** | [**string**] | Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables. | (optional) defaults to undefined|
| **filterDaysUntilPurchase** | [**string**] | Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables. | (optional) defaults to undefined|


### Return type

**ListReceivables200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of receivable resources, or a receivables balance resource when a balance-report filter is supplied. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

