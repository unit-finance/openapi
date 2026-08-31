# AccountsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addAccountOwners**](#addaccountowners) | **POST** /accounts/{accountId}/relationships/customers | Add account owners|
|[**closeAccount**](#closeaccount) | **POST** /accounts/{accountId}/close | Close an account|
|[**createAccount**](#createaccount) | **POST** /accounts | Create an account|
|[**createAccountHold**](#createaccounthold) | **POST** /account-holds | Create an account hold|
|[**freezeAccount**](#freezeaccount) | **POST** /accounts/{accountId}/freeze | Freeze an account|
|[**getAccount**](#getaccount) | **GET** /accounts/{accountId} | Get an account by id|
|[**getAccountBalanceHistory**](#getaccountbalancehistory) | **GET** /account-end-of-day | List account end-of-day balances|
|[**getAccountHoldById**](#getaccountholdbyid) | **GET** /account-holds/{id} | Get an account hold by id|
|[**getAccountLimits**](#getaccountlimits) | **GET** /accounts/{accountId}/limits | Get account limits|
|[**getAvailableDepositProducts**](#getavailabledepositproducts) | **GET** /accounts/{accountId}/deposit-products | Get available deposit products|
|[**listAccountHolds**](#listaccountholds) | **GET** /account-holds | List account holds|
|[**listAccounts**](#listaccounts) | **GET** /accounts | List accounts|
|[**releaseAccountHold**](#releaseaccounthold) | **POST** /account-holds/{id}/release | Release an account hold|
|[**removeAccountOwners**](#removeaccountowners) | **DELETE** /accounts/{accountId}/relationships/customers | Remove account owners|
|[**reopenAccount**](#reopenaccount) | **POST** /accounts/{accountId}/reopen | Reopen an account|
|[**unfreezeAccount**](#unfreezeaccount) | **POST** /accounts/{accountId}/unfreeze | Unfreeze an account|
|[**updateAccount**](#updateaccount) | **PATCH** /accounts/{accountId} | Update an account|

# **addAccountOwners**
> AddAccountOwners200Response addAccountOwners(addAccountOwnersRequest)

Add owner or owners to an existing deposit account.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    AddAccountOwnersRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let addAccountOwnersRequest: AddAccountOwnersRequest; //

const { status, data } = await apiInstance.addAccountOwners(
    accountId,
    addAccountOwnersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addAccountOwnersRequest** | **AddAccountOwnersRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**AddAccountOwners200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated deposit account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **closeAccount**
> CreateAccount201Response closeAccount(closeAccountRequest)

Closes an account. Closing an account is irreversible and can only be done by an Org user. An account.closed event is raised when the call was successful. The request body is one of CloseDepositAccountRequest, CloseCreditAccountRequest, or CloseWalletRequest.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    CloseAccountRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let closeAccountRequest: CloseAccountRequest; //

const { status, data } = await apiInstance.closeAccount(
    accountId,
    closeAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **closeAccountRequest** | **CloseAccountRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CreateAccount201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The closed account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAccount**
> CreateAccount201Response createAccount(createAccountRequest)

Creates an account. The request body is one of CreateDepositAccountRequest, CreateCreditAccountRequest, or CreateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    CreateAccountRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let createAccountRequest: CreateAccountRequest; //

const { status, data } = await apiInstance.createAccount(
    createAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAccountRequest** | **CreateAccountRequest**|  | |


### Return type

**CreateAccount201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAccountHold**
> CreateAccountHold201Response createAccountHold(createAccountHoldRequest)

Create an account hold resource.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    CreateAccountHoldRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let createAccountHoldRequest: CreateAccountHoldRequest; //

const { status, data } = await apiInstance.createAccountHold(
    createAccountHoldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAccountHoldRequest** | **CreateAccountHoldRequest**|  | |


### Return type

**CreateAccountHold201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created AccountHold resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **freezeAccount**
> CreateAccount201Response freezeAccount(freezeAccountRequest)

Freezes an account. An account.frozen event is raised when the call was successful. A frozen account behaves like a closed account, with the primary difference being that a frozen state should be temporary. The request body is one of FreezeDepositAccountRequest, FreezeCreditAccountRequest, or FreezeWalletRequest.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    FreezeAccountRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let freezeAccountRequest: FreezeAccountRequest; //

const { status, data } = await apiInstance.freezeAccount(
    accountId,
    freezeAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **freezeAccountRequest** | **FreezeAccountRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CreateAccount201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The frozen account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAccount**
> CreateAccount201Response getAccount()

Get an account resource (deposit account, credit account, or wallet) by id.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let include: string; //Optional. Related resource available to include: customer. See Getting Related Resources (optional) (default to undefined)
let extraFieldsAccount: string; //Optional. Use extraFields[account]=interestTerms to include the interestTerms object in the account\'s attributes section of the response. (optional) (default to undefined)

const { status, data } = await apiInstance.getAccount(
    accountId,
    include,
    extraFieldsAccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. Related resource available to include: customer. See Getting Related Resources | (optional) defaults to undefined|
| **extraFieldsAccount** | [**string**] | Optional. Use extraFields[account]&#x3D;interestTerms to include the interestTerms object in the account\&#39;s attributes section of the response. | (optional) defaults to undefined|


### Return type

**CreateAccount201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAccountBalanceHistory**
> GetAccountBalanceHistory200Response getAccountBalanceHistory()

List account end-of-day balances history (filtering and paging can be applied).

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. At least one of accountId and customerId is required. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required. (optional) (default to undefined)
let filterSince: string; //Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01 (optional) (default to undefined)
let filterUntil: string; //Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01 (optional) (default to undefined)

const { status, data } = await apiInstance.getAccountBalanceHistory(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterSince,
    filterUntil
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. At least one of accountId and customerId is required. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required. | (optional) defaults to undefined|
| **filterSince** | [**string**] | Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01 | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01 | (optional) defaults to undefined|


### Return type

**GetAccountBalanceHistory200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of account end-of-day resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAccountHoldById**
> CreateAccountHold201Response getAccountHoldById()

Get an account hold resource by id.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAccountHoldById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateAccountHold201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The AccountHold resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAccountLimits**
> GetAccountLimits200Response getAccountLimits()

Get the limits of an account (deposit account, credit account, or wallet).

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.getAccountLimits(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**GetAccountLimits200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The account limits resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAvailableDepositProducts**
> GetAvailableDepositProducts200Response getAvailableDepositProducts()

Get the deposit products available for an account.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.getAvailableDepositProducts(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**GetAvailableDepositProducts200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of available deposit products. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAccountHolds**
> ListAccountHolds200Response listAccountHolds()

List account hold resources. Paging can be applied.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterStatus: string; //Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased. (optional) (default to undefined)
let filterExpiredAt: string; //Optional. Date only (e.g. \"2001-08-15\"). the date the account hold will be automatically released at. (optional) (default to undefined)

const { status, data } = await apiInstance.listAccountHolds(
    pageLimit,
    pageOffset,
    filterStatus,
    filterExpiredAt
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterStatus** | [**string**] | Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased. | (optional) defaults to undefined|
| **filterExpiredAt** | [**string**] | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. | (optional) defaults to undefined|


### Return type

**ListAccountHolds200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of account hold resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAccounts**
> ListAccounts200Response listAccounts()

List account resources (deposit accounts, credit accounts, and wallets). Paging can be applied.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterDepositProductId: string; //Optional. Filters the results by the specified deposit product id. (optional) (default to undefined)
let filterTags: string; //Optional. Filter Accounts by Tags. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter Account by its status (Open, Frozen, or Closed). Usage example: filter[status][0]=Closed (optional) (default to undefined)
let filterFromBalance: string; //Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToBalance: string; //Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000 (optional) (default to undefined)
let include: string; //Optional. Related resource available to include: customer. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.listAccounts(
    pageLimit,
    pageOffset,
    filterCustomerId,
    filterDepositProductId,
    filterTags,
    filterStatus,
    filterFromBalance,
    filterToBalance,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterDepositProductId** | [**string**] | Optional. Filters the results by the specified deposit product id. | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter Accounts by Tags. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter Account by its status (Open, Frozen, or Closed). Usage example: filter[status][0]&#x3D;Closed | (optional) defaults to undefined|
| **filterFromBalance** | [**string**] | Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToBalance** | [**string**] | Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|
| **include** | [**string**] | Optional. Related resource available to include: customer. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**ListAccounts200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of account resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releaseAccountHold**
> CreateAccountHold201Response releaseAccountHold(releaseAccountHoldRequest)

You can release an account hold fully (entire amount) or partially (a specified amount).

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    ReleaseAccountHoldRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)
let releaseAccountHoldRequest: ReleaseAccountHoldRequest; //

const { status, data } = await apiInstance.releaseAccountHold(
    id,
    releaseAccountHoldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseAccountHoldRequest** | **ReleaseAccountHoldRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateAccountHold201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The released AccountHold resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeAccountOwners**
> AddAccountOwners200Response removeAccountOwners(removeAccountOwnersRequest)

Remove owner or owners from an existing joint deposit account.

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    RemoveAccountOwnersRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let removeAccountOwnersRequest: RemoveAccountOwnersRequest; //

const { status, data } = await apiInstance.removeAccountOwners(
    accountId,
    removeAccountOwnersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeAccountOwnersRequest** | **RemoveAccountOwnersRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**AddAccountOwners200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated deposit account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reopenAccount**
> ReopenAccount200Response reopenAccount()

Reopens a closed account. Applies to deposit accounts and wallets.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.reopenAccount(
    accountId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**ReopenAccount200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The reopened account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfreezeAccount**
> CreateAccount201Response unfreezeAccount()

Unfreezes an account.

### Example

```typescript
import {
    AccountsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.unfreezeAccount(
    accountId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CreateAccount201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The unfrozen account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateAccount**
> CreateAccount201Response updateAccount(updateAccountRequest)

Update an account. The request body is one of UpdateDepositAccountRequest, UpdateCreditAccountRequest, or UpdateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Example

```typescript
import {
    AccountsApi,
    Configuration,
    UpdateAccountRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let accountId: string; // (default to undefined)
let updateAccountRequest: UpdateAccountRequest; //

const { status, data } = await apiInstance.updateAccount(
    accountId,
    updateAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountRequest** | **UpdateAccountRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CreateAccount201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated account resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

