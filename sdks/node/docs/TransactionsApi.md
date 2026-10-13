# TransactionsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTransaction**](#gettransaction) | **GET** /accounts/{accountId}/transactions/{transactionId} | Get a transaction|
|[**listTransactions**](#listtransactions) | **GET** /transactions | List transactions|
|[**updateTransaction**](#updatetransaction) | **PATCH** /transactions/{transactionId} | Update a transaction|
|[**updateTransactionTags**](#updatetransactiontags) | **PATCH** /accounts/{accountId}/transactions/{transactionId} | Update transaction tags|

# **getTransaction**
> GetTransaction200Response getTransaction()

Get a transaction by transaction id and account id.

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let accountId: string; // (default to undefined)
let transactionId: string; // (default to undefined)
let filterCustomerId: string; //Optional. Filters the result by the specified customer id. (optional) (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.getTransaction(
    accountId,
    transactionId,
    filterCustomerId,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **transactionId** | [**string**] |  | defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the result by the specified customer id. | (optional) defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**GetTransaction200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A Transaction resource. |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTransactions**
> ListTransactions200Response listTransactions()

List transaction resources. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterAccountIds: string; //Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001* (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterQuery: string; //Optional. search term according to the Full-Text Search Rules. (optional) (default to undefined)
let filterTags: string; //Optional. Filter Transactions by Tags. (optional) (default to undefined)
let filterSince: string; //Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional) (default to undefined)
let filterUntil: string; //Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional) (default to undefined)
let filterCardId: string; //Optional. Filters the results by the specified card id. (optional) (default to undefined)
let filterType: string; //Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]=OriginatedAch&filter[type][1]=ReceivedAch* (optional) (default to undefined)
let filterFromAmount: string; //Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToAmount: string; //Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional) (default to undefined)
let filterDirection: string; //Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]=Debit* (optional) (default to undefined)
let filterExcludeFees: string; //Optional. Filter Fee type Transactions. (optional) (default to undefined)
let filterAccountType: string; //Optional. Filter Transactions by account type (deposit, credit). (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to 'createdAt')
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.listTransactions(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterAccountIds,
    filterCustomerId,
    filterQuery,
    filterTags,
    filterSince,
    filterUntil,
    filterCardId,
    filterType,
    filterFromAmount,
    filterToAmount,
    filterDirection,
    filterExcludeFees,
    filterAccountType,
    sort,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterAccountIds** | [**string**] | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterQuery** | [**string**] | Optional. search term according to the Full-Text Search Rules. | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter Transactions by Tags. | (optional) defaults to undefined|
| **filterSince** | [**string**] | Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | (optional) defaults to undefined|
| **filterCardId** | [**string**] | Optional. Filters the results by the specified card id. | (optional) defaults to undefined|
| **filterType** | [**string**] | Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]&#x3D;OriginatedAch&amp;filter[type][1]&#x3D;ReceivedAch* | (optional) defaults to undefined|
| **filterFromAmount** | [**string**] | Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToAmount** | [**string**] | Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|
| **filterDirection** | [**string**] | Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]&#x3D;Debit* | (optional) defaults to undefined|
| **filterExcludeFees** | [**string**] | Optional. Filter Fee type Transactions. | (optional) defaults to undefined|
| **filterAccountType** | [**string**] | Optional. Filter Transactions by account type (deposit, credit). | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to 'createdAt'|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**ListTransactions200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of transaction resources. |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTransaction**
> UpdateTransaction200Response updateTransaction(updateTransactionRequest)

Update a transaction. The request body is one of UpdateBookTransactionRequest (bookTransaction) or UpdateChargebackTransactionRequest (chargebackTransaction), discriminated by data.type.

### Example

```typescript
import {
    TransactionsApi,
    Configuration,
    UpdateTransactionRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let transactionId: string; // (default to undefined)
let updateTransactionRequest: UpdateTransactionRequest; //

const { status, data } = await apiInstance.updateTransaction(
    transactionId,
    updateTransactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTransactionRequest** | **UpdateTransactionRequest**|  | |
| **transactionId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateTransaction200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A Transaction resource. |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTransactionTags**
> UpdateTransaction200Response updateTransactionTags(updateTagsRequest)

Update Tags Transaction.

### Example

```typescript
import {
    TransactionsApi,
    Configuration,
    UpdateTagsRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let accountId: string; // (default to undefined)
let transactionId: string; // (default to undefined)
let updateTagsRequest: UpdateTagsRequest; //

const { status, data } = await apiInstance.updateTransactionTags(
    accountId,
    transactionId,
    updateTagsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTagsRequest** | **UpdateTagsRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|
| **transactionId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateTransaction200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A Transaction resource. |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

