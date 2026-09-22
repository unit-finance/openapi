# CheckPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveCheckPaymentAdditionalVerification**](#approvecheckpaymentadditionalverification) | **POST** /check-payments/{checkPaymentId}/approve | Approve check payment additional verification|
|[**cancelCheckPayment**](#cancelcheckpayment) | **POST** /check-payments/{checkPaymentId}/cancel | Cancel a check payment|
|[**getCheckImage**](#getcheckimage) | **GET** /check-payments/{checkPaymentId}/{side}/{type} | Get a check payment image|
|[**getCheckPayment**](#getcheckpayment) | **GET** /check-payments/{checkPaymentId} | Get a check payment by id|
|[**listCheckPayments**](#listcheckpayments) | **GET** /check-payments | List check payments|
|[**originateCheckPaymentMailPhysicalCheck**](#originatecheckpaymentmailphysicalcheck) | **POST** /check-payments | Originate a check payment|
|[**returnCheckPayment**](#returncheckpayment) | **POST** /check-payments/{checkPaymentId}/return | Return a check payment|

# **approveCheckPaymentAdditionalVerification**
> OriginateCheckPaymentMailPhysicalCheck201Response approveCheckPaymentAdditionalVerification(approveCheckPaymentAdditionalVerificationRequest)

When a Check Payment requires additional verification, its `additionalVerificationStatus` will be set to `Required`. In this case, a CheckPayment.additionalVerificationRequired event will be triggered.

### Example

```typescript
import {
    CheckPaymentsApi,
    Configuration,
    ApproveCheckPaymentAdditionalVerificationRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckPaymentsApi(configuration);

let checkPaymentId: string; // (default to undefined)
let approveCheckPaymentAdditionalVerificationRequest: ApproveCheckPaymentAdditionalVerificationRequest; //

const { status, data } = await apiInstance.approveCheckPaymentAdditionalVerification(
    checkPaymentId,
    approveCheckPaymentAdditionalVerificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approveCheckPaymentAdditionalVerificationRequest** | **ApproveCheckPaymentAdditionalVerificationRequest**|  | |
| **checkPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**OriginateCheckPaymentMailPhysicalCheck201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CheckPayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelCheckPayment**
> OriginateCheckPaymentMailPhysicalCheck201Response cancelCheckPayment()

Cancels a previously processed check payment. Only check payments in status `Pending` can be canceled. If cancelation was successful, the check status will change to `Canceled` and a checkPayment.canceled will be fired.

### Example

```typescript
import {
    CheckPaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckPaymentsApi(configuration);

let checkPaymentId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.cancelCheckPayment(
    checkPaymentId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **checkPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**OriginateCheckPaymentMailPhysicalCheck201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The canceled payment. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCheckImage**
> File getCheckImage()

Get a check payment image by check payment id, side (front or back), and type (printed or deposited).

### Example

```typescript
import {
    CheckPaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckPaymentsApi(configuration);

let checkPaymentId: string; // (default to undefined)
let side: string; //Check side: front or back. (default to undefined)
let type: string; //Image type: printed or deposited. (default to undefined)

const { status, data } = await apiInstance.getCheckImage(
    checkPaymentId,
    side,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkPaymentId** | [**string**] |  | defaults to undefined|
| **side** | [**string**] | Check side: front or back. | defaults to undefined|
| **type** | [**string**] | Image type: printed or deposited. | defaults to undefined|


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
|**200** | The check payment image. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCheckPayment**
> GetCheckPayment200Response getCheckPayment()

Get a check payment by id.

### Example

```typescript
import {
    CheckPaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckPaymentsApi(configuration);

let checkPaymentId: string; // (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.getCheckPayment(
    checkPaymentId,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkPaymentId** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**GetCheckPayment200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CheckPayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCheckPayments**
> ListCheckPayments200Response listCheckPayments()

List check payments resources. Filtering, paging and sorting can be applied.

### Example

```typescript
import {
    CheckPaymentsApi,
    Configuration
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckPaymentsApi(configuration);

let pageLimit: string; //Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
let pageOffset: string; //Number of resources to skip. See Pagination. (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterTags: string; //Optional. Filter check payments by Tags. (optional) (default to undefined)
let sort: string; //Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
let filterSince: string; //Optional. Filters *before* the specified date. e.g. 2021-06-01 (optional) (default to undefined)
let filterUntil: string; //Optional. Filters *after* the specified date. e.g. 2021-07-01 (optional) (default to undefined)
let filterStatus: string; //Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, `). Usage example: *filter[status][0]=Processed* (optional) (default to undefined)
let filterFromAmount: string; //Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional) (default to undefined)
let filterToAmount: string; //Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional) (default to undefined)
let filterCheckNumber: string; //Optional. Filter Check Payments by check number (trimming leading zeros). (optional) (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.listCheckPayments(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterTags,
    sort,
    filterSince,
    filterUntil,
    filterStatus,
    filterFromAmount,
    filterToAmount,
    filterCheckNumber,
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
| **filterTags** | [**string**] | Optional. Filter check payments by Tags. | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to '-createdAt'|
| **filterSince** | [**string**] | Optional. Filters *before* the specified date. e.g. 2021-06-01 | (optional) defaults to undefined|
| **filterUntil** | [**string**] | Optional. Filters *after* the specified date. e.g. 2021-07-01 | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, &#x60;). Usage example: *filter[status][0]&#x3D;Processed* | (optional) defaults to undefined|
| **filterFromAmount** | [**string**] | Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | (optional) defaults to undefined|
| **filterToAmount** | [**string**] | Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | (optional) defaults to undefined|
| **filterCheckNumber** | [**string**] | Optional. Filter Check Payments by check number (trimming leading zeros). | (optional) defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**ListCheckPayments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of check payment resources. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **originateCheckPaymentMailPhysicalCheck**
> OriginateCheckPaymentMailPhysicalCheck201Response originateCheckPaymentMailPhysicalCheck(originateCheckPaymentMailPhysicalCheckRequest)

Creates a physical check. The check will be printed and mailed to the US recipient specified in the request. Originated check payments can be set to be sent immediately or scheduled for a future date.

### Example

```typescript
import {
    CheckPaymentsApi,
    Configuration,
    OriginateCheckPaymentMailPhysicalCheckRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckPaymentsApi(configuration);

let originateCheckPaymentMailPhysicalCheckRequest: OriginateCheckPaymentMailPhysicalCheckRequest; //

const { status, data } = await apiInstance.originateCheckPaymentMailPhysicalCheck(
    originateCheckPaymentMailPhysicalCheckRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **originateCheckPaymentMailPhysicalCheckRequest** | **OriginateCheckPaymentMailPhysicalCheckRequest**|  | |


### Return type

**OriginateCheckPaymentMailPhysicalCheck201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Creates a physical check. The check will be printed and mailed to the US recipient specified in the request. Originated check payments can be set to be sent immediately or scheduled for a future date. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnCheckPayment**
> OriginateCheckPaymentMailPhysicalCheck201Response returnCheckPayment(returnCheckPaymentRequest)

Create a return as long as it happens before the `returnCutoffTime`, the Check Payment status will be set to `MarkedForReturn`. A CheckPayment.markedForReturn event is raised when the request is completed successfully.

### Example

```typescript
import {
    CheckPaymentsApi,
    Configuration,
    ReturnCheckPaymentRequest
} from '@unit-finance/unit-node-sdk';

const configuration = new Configuration();
const apiInstance = new CheckPaymentsApi(configuration);

let checkPaymentId: string; // (default to undefined)
let returnCheckPaymentRequest: ReturnCheckPaymentRequest; //

const { status, data } = await apiInstance.returnCheckPayment(
    checkPaymentId,
    returnCheckPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **returnCheckPaymentRequest** | **ReturnCheckPaymentRequest**|  | |
| **checkPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**OriginateCheckPaymentMailPhysicalCheck201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | CheckPayment resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

