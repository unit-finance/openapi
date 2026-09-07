# PaymentsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelPayment**](#cancelpayment) | **POST** /payments/{paymentId}/cancel | Cancel a payment|
|[**clearAchDebitPayment**](#clearachdebitpayment) | **POST** /payments/{paymentId}/clear | Clear an ACH debit payment|
|[**createBatchReleases**](#createbatchreleases) | **POST** /batch-releases | Create batch releases|
|[**createBulkPayment**](#createbulkpayment) | **POST** /payments/bulk | Create a bulk payment|
|[**createPayment**](#createpayment) | **POST** /payments | Create a payment|
|[**createRecurringPayment**](#createrecurringpayment) | **POST** /recurring-payments | Create a recurring payment|
|[**deleteRecurringPayment**](#deleterecurringpayment) | **DELETE** /recurring-payments/{id} | Delete a recurring payment|
|[**disableRecurringPayment**](#disablerecurringpayment) | **POST** /recurring-payments/{id}/disable | Disable a recurring payment|
|[**enableRecurringPayment**](#enablerecurringpayment) | **POST** /recurring-payments/{id}/enable | Enable a recurring payment|
|[**generateCashDepositBarcode**](#generatecashdepositbarcode) | **POST** /cash-deposits/barcodes | Generate a cash deposit barcode|
|[**getCashDepositBarcodeImage**](#getcashdepositbarcodeimage) | **GET** /cash-deposits/barcodes/{barcodeNumber}/image | Get a cash deposit barcode image|
|[**getExpectedAchCompletionDate**](#getexpectedachcompletiondate) | **POST** /payments/ach/expected-completion-date | Get expected ACH completion date|
|[**getReceivedPayment**](#getreceivedpayment) | **GET** /received-payments/{id} | Get a received payment by id|
|[**getRecurringPayment**](#getrecurringpayment) | **GET** /recurring-payments/{id} | Get a recurring payment by id|
|[**getWireDrawdown**](#getwiredrawdown) | **GET** /wire-drawdowns/{id} | Get a wire drawdown by id|
|[**listReceivedPayments**](#listreceivedpayments) | **GET** /received-payments | List received payments|
|[**listRecurringPayments**](#listrecurringpayments) | **GET** /recurring-payments | List recurring payments|
|[**listStoreLocations**](#liststorelocations) | **GET** /store-locations | List cash deposit store locations|
|[**listWireDrawdowns**](#listwiredrawdowns) | **GET** /wire-drawdowns | List wire drawdowns|
|[**sendDrawdownPayment**](#senddrawdownpayment) | **POST** /wire-drawdowns/{id}/send | Send a drawdown payment|
|[**updatePayment**](#updatepayment) | **PATCH** /payments/{paymentId} | Update a payment|
|[**updateReceivedPayment**](#updatereceivedpayment) | **PATCH** /received-payments/{id} | Update a received payment|

# **cancelPayment**
> CancelPayment200Response cancelPayment()

Cancel a previously created ACH or Wire payment. Only payments with status Pending or PendingReview can be canceled. The response is one of ACHPayment or WirePayment, discriminated by data.type.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let paymentId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.cancelPayment(
    paymentId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**CancelPayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The canceled payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clearAchDebitPayment**
> ClearAchDebitPayment200Response clearAchDebitPayment()

Clears an ACH debit payment while in clearing status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let paymentId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.clearAchDebitPayment(
    paymentId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**ClearAchDebitPayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The cleared payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBatchReleases**
> CreateBatchReleases201Response createBatchReleases(createBatchReleasesRequest)

Release is the act of splitting a single batch payment between multiple customer accounts in your organization. When creating releases, you are required to provide compliance information for the original senders of the funds.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    CreateBatchReleasesRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let createBatchReleasesRequest: CreateBatchReleasesRequest; //

const { status, data } = await apiInstance.createBatchReleases(
    createBatchReleasesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBatchReleasesRequest** | **CreateBatchReleasesRequest**|  | |


### Return type

**CreateBatchReleases201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Array of batch release resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBulkPayment**
> CreateBulkPayment201Response createBulkPayment(createBulkPaymentRequest)

Creates multiple payments in a single asynchronous request. Each element of data is a payment creation payload — ACH, Book, and Wire types may be mixed in the same bulk.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    CreateBulkPaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let createBulkPaymentRequest: CreateBulkPaymentRequest; //

const { status, data } = await apiInstance.createBulkPayment(
    createBulkPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBulkPaymentRequest** | **CreateBulkPaymentRequest**|  | |


### Return type

**CreateBulkPayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The accepted bulk payment request. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPayment**
> CreatePayment201Response createPayment(createPaymentRequest)

Originate a payment. The request body is one of CreateACHPaymentRequest, CreateACHPaymentExistingCounterpartyRequest, CreateACHPaymentPlaidTokenRequest, CreateABookPaymentRequest, or CreateAWirePaymentRequest, discriminated by data.type (achPayment, bookPayment, wirePayment).

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    CreatePaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let createPaymentRequest: CreatePaymentRequest; //

const { status, data } = await apiInstance.createPayment(
    createPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPaymentRequest** | **CreatePaymentRequest**|  | |


### Return type

**CreatePayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRecurringPayment**
> CreateRecurringPayment201Response createRecurringPayment(createRecurringPaymentRequest)

Originate a recurring payment. The request body is one of CreateRecurringCreditACHPaymentRequest, CreateRecurringCreditBookPaymentRequest, or CreateRecurringDebitACHPaymentRequest, discriminated by data.type (recurringCreditAchPayment, recurringCreditBookPayment, recurringDebitAchPayment).

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    CreateRecurringPaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let createRecurringPaymentRequest: CreateRecurringPaymentRequest; //

const { status, data } = await apiInstance.createRecurringPayment(
    createRecurringPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRecurringPaymentRequest** | **CreateRecurringPaymentRequest**|  | |


### Return type

**CreateRecurringPayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created recurring payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecurringPayment**
> CreateRecurringPayment201Response deleteRecurringPayment()

Delete a Recurring Payment by id. When a Recurring Payment is deleted, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.deleteRecurringPayment(
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

**CreateRecurringPayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recurring Payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disableRecurringPayment**
> CreateRecurringPayment201Response disableRecurringPayment()

Disable a Recurring Payment by id. When a Recurring Payment is disabled, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.disableRecurringPayment(
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

**CreateRecurringPayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recurring Payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enableRecurringPayment**
> CreateRecurringPayment201Response enableRecurringPayment()

Enable a recurring payment by id. When a Recurring Payment is enabled, its status is set to Active/Completed according to the start date and end date that were defined in the schedule. See Recurring Payment Statuses. When enabled, the Recurring Payment Status Changed webhook event is fired.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.enableRecurringPayment(
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

**CreateRecurringPayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recurring Payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateCashDepositBarcode**
> GenerateCashDepositBarcode200Response generateCashDepositBarcode(generateCashDepositBarcodeRequest)

Generate a barcode for a Cash Deposit store location.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    GenerateCashDepositBarcodeRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let generateCashDepositBarcodeRequest: GenerateCashDepositBarcodeRequest; //

const { status, data } = await apiInstance.generateCashDepositBarcode(
    generateCashDepositBarcodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateCashDepositBarcodeRequest** | **GenerateCashDepositBarcodeRequest**|  | |


### Return type

**GenerateCashDepositBarcode200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cash Deposit Barcode resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCashDepositBarcodeImage**
> File getCashDepositBarcodeImage()

Get a cash deposit barcode image by barcode number.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let barcodeNumber: string; //The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint. (default to undefined)

const { status, data } = await apiInstance.getCashDepositBarcodeImage(
    barcodeNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **barcodeNumber** | [**string**] | The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint. | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The barcode image. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExpectedAchCompletionDate**
> GetExpectedAchCompletionDate200Response getExpectedAchCompletionDate(getExpectedAchCompletionDateRequest)

Returns the expected completion or settlement date for an ACH payment before creating it. Use this endpoint to display estimated timelines to end users without initiating a payment.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    GetExpectedAchCompletionDateRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let getExpectedAchCompletionDateRequest: GetExpectedAchCompletionDateRequest; //

const { status, data } = await apiInstance.getExpectedAchCompletionDate(
    getExpectedAchCompletionDateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getExpectedAchCompletionDateRequest** | **GetExpectedAchCompletionDateRequest**|  | |


### Return type

**GetExpectedAchCompletionDate200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The estimated date resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReceivedPayment**
> GetReceivedPayment200Response getReceivedPayment()

Get a received payment by id.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. (optional) (default to undefined)

const { status, data } = await apiInstance.getReceivedPayment(
    id,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | (optional) defaults to undefined|


### Return type

**GetReceivedPayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A ReceivedPayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRecurringPayment**
> CreateRecurringPayment201Response getRecurringPayment()

Get a recurring payment by id.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getRecurringPayment(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CreateRecurringPayment201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recurring Payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWireDrawdown**
> GetWireDrawdown200Response getWireDrawdown()

Get a wire drawdown by id.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. (optional) (default to undefined)

const { status, data } = await apiInstance.getWireDrawdown(
    id,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | (optional) defaults to undefined|


### Return type

**GetWireDrawdown200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Wire drawdown resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listReceivedPayments**
> ListReceivedPayments200Response listReceivedPayments()

List received payments. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let pageLimit: string; //Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterSince: string; //Optional. Filters before the specified date. e.g. 2021-06-01 (optional) (default to undefined)
let filterUntil: string; //Optional. Filters after the specified date. e.g. 2021-07-01 (optional) (default to undefined)
let filterStatus: string; //Optional. Filter Received Payments by status. Usage example: filter[status][0]=Pending&filter[status][1]=Advanced. Can\'t be stated with includeCompleted. (optional) (default to undefined)
let filterFromAmount: string; //Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToAmount: string; //Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000 (optional) (default to undefined)
let filterIncludeCompleted: string; //Optional. Filter to include ReceivedPayment with Status \'Completed\', default False. Can\'t be stated with filter[status][]. (optional) (default to undefined)
let filterCanBeReprocessed: string; //Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can\'t be reprocessed. (optional) (default to undefined)
let filterType: string; //Optional. Filter received payments by type. Valid values: Ach, Wire, Realtime. Defaults to Ach, Wire, and Realtime if not specified. (optional) (default to undefined)
let filterTags: string; //Optional. Filter received payments by Tags. (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to 'createdAt')
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. (optional) (default to undefined)

const { status, data } = await apiInstance.listReceivedPayments(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterSince,
    filterUntil,
    filterStatus,
    filterFromAmount,
    filterToAmount,
    filterIncludeCompleted,
    filterCanBeReprocessed,
    filterType,
    filterTags,
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
| **filterSince** | [**string**] | Optional. Filters before the specified date. e.g. 2021-06-01 | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters after the specified date. e.g. 2021-07-01 | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter Received Payments by status. Usage example: filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Advanced. Can\&#39;t be stated with includeCompleted. | (optional) defaults to undefined|
| **filterFromAmount** | [**string**] | Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToAmount** | [**string**] | Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|
| **filterIncludeCompleted** | [**string**] | Optional. Filter to include ReceivedPayment with Status \&#39;Completed\&#39;, default False. Can\&#39;t be stated with filter[status][]. | (optional) defaults to undefined|
| **filterCanBeReprocessed** | [**string**] | Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can\&#39;t be reprocessed. | (optional) defaults to undefined|
| **filterType** | [**string**] | Optional. Filter received payments by type. Valid values: Ach, Wire, Realtime. Defaults to Ach, Wire, and Realtime if not specified. | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter received payments by Tags. | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to 'createdAt'|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | (optional) defaults to undefined|


### Return type

**ListReceivedPayments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of received payment resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRecurringPayments**
> ListRecurringPayments200Response listRecurringPayments()

List recurring payments resources. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]=Active (optional) (default to undefined)
let filterType: string; //Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]=RecurringCreditAchPayment&filter[type][1]=RecurringCreditBookPayment (optional) (default to undefined)
let filterFromStartTime: string; //Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13 (optional) (default to undefined)
let filterToStartTime: string; //Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13 (optional) (default to undefined)
let filterFromEndTime: string; //Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13 (optional) (default to undefined)
let filterToEndTime: string; //Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13 (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

const { status, data } = await apiInstance.listRecurringPayments(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterStatus,
    filterType,
    filterFromStartTime,
    filterToStartTime,
    filterFromEndTime,
    filterToEndTime,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]&#x3D;Active | (optional) defaults to undefined|
| **filterType** | [**string**] | Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]&#x3D;RecurringCreditAchPayment&amp;filter[type][1]&#x3D;RecurringCreditBookPayment | (optional) defaults to undefined|
| **filterFromStartTime** | [**string**] | Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13 | (optional) defaults to undefined|
| **filterToStartTime** | [**string**] | Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13 | (optional) defaults to undefined|
| **filterFromEndTime** | [**string**] | Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13 | (optional) defaults to undefined|
| **filterToEndTime** | [**string**] | Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13 | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|


### Return type

**ListRecurringPayments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of recurring payment resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStoreLocations**
> ListStoreLocations200Response listStoreLocations()

List Cash Deposit store locations by coordinates or by postal code.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let filterCoordinates: string; //Filters the results by the specified coordinates. (optional) (default to undefined)
let filterPostalCode: string; //Filters the results by the specified postal code. (optional) (default to undefined)
let filterServiceType: string; //Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode. (optional) (default to 'Swipe')
let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')

const { status, data } = await apiInstance.listStoreLocations(
    filterCoordinates,
    filterPostalCode,
    filterServiceType,
    pageLimit,
    pageOffset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterCoordinates** | [**string**] | Filters the results by the specified coordinates. | (optional) defaults to undefined|
| **filterPostalCode** | [**string**] | Filters the results by the specified postal code. | (optional) defaults to undefined|
| **filterServiceType** | [**string**] | Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode. | (optional) defaults to 'Swipe'|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|


### Return type

**ListStoreLocations200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of Cash Deposit Store Location resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWireDrawdowns**
> ListWireDrawdowns200Response listWireDrawdowns()

List wire drawdowns resources. Filtering and paging can be applied.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. (optional) (default to undefined)

const { status, data } = await apiInstance.listWireDrawdowns(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | (optional) defaults to undefined|


### Return type

**ListWireDrawdowns200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of wire drawdown resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendDrawdownPayment**
> SendDrawdownPayment200Response sendDrawdownPayment(sendDrawdownPaymentRequest)

Send a wire payment in response to a drawdown request. The API will create a Wire Payment as a response to the drawdown request. You can observe the drawdownPayment relationship to retrieve the Payment Identifier.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    SendDrawdownPaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let sendDrawdownPaymentRequest: SendDrawdownPaymentRequest; //

const { status, data } = await apiInstance.sendDrawdownPayment(
    id,
    sendDrawdownPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendDrawdownPaymentRequest** | **SendDrawdownPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SendDrawdownPayment200Response**

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

# **updatePayment**
> UpdatePayment200Response updatePayment(updatePaymentRequest)

Update a payment. The request body is one of UpdateACHPaymentRequest or UpdateBookPaymentRequest, discriminated by data.type (achPayment, bookPayment).

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    UpdatePaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let paymentId: string; // (default to undefined)
let updatePaymentRequest: UpdatePaymentRequest; //

const { status, data } = await apiInstance.updatePayment(
    paymentId,
    updatePaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePaymentRequest** | **UpdatePaymentRequest**|  | |
| **paymentId** | [**string**] |  | defaults to undefined|


### Return type

**UpdatePayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateReceivedPayment**
> UpdateReceivedPayment200Response updateReceivedPayment(updateReceivedPaymentRequest)

Update a Received Payment. The request body is one of UpdateACHReceivedPaymentRequest or UpdateRealtimeReceivedPaymentRequest, discriminated by data.type (achReceivedPayment, realtimeReceivedPayment).

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    UpdateReceivedPaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let id: string; // (default to undefined)
let updateReceivedPaymentRequest: UpdateReceivedPaymentRequest; //

const { status, data } = await apiInstance.updateReceivedPayment(
    id,
    updateReceivedPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateReceivedPaymentRequest** | **UpdateReceivedPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UpdateReceivedPayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated Received Payment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

