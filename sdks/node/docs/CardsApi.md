# CardsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**closeCard**](#closecard) | **POST** /cards/{cardId}/close | Close a card|
|[**createCard**](#createcard) | **POST** /cards | Create a card|
|[**freezeCard**](#freezecard) | **POST** /cards/{cardId}/freeze | Freeze a card|
|[**getCard**](#getcard) | **GET** /cards/{cardId} | Get a card|
|[**getCardLimits**](#getcardlimits) | **GET** /cards/{cardId}/limits | Get card limits|
|[**getCardPinStatus**](#getcardpinstatus) | **GET** /cards/{cardId}/secure-data/pin/status | Get card PIN status|
|[**listCards**](#listcards) | **GET** /cards | List cards|
|[**replaceCard**](#replacecard) | **POST** /cards/{cardId}/replace | Replace a card|
|[**reportCardLost**](#reportcardlost) | **POST** /cards/{cardId}/report-lost | Report card lost|
|[**reportCardStolen**](#reportcardstolen) | **POST** /cards/{cardId}/report-stolen | Report card stolen|
|[**unfreezeCard**](#unfreezecard) | **POST** /cards/{cardId}/unfreeze | Unfreeze a card|
|[**updateCard**](#updatecard) | **PATCH** /cards/{cardId} | Update a card|

# **closeCard**
> CloseCard200Response closeCard()

Close a card.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.closeCard(
    cardId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**CloseCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The closed card resource, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCard**
> CreateCard201Response createCard(createCardRequest)

Create a card. Variants: - **CreateBusinessCreditCard** - **CreateBusinessDebitCard** - **CreateBusinessVirtualCreditCard** - **CreateBusinessVirtualDebitCard** - **CreateIndividualDebitCard** - **CreateIndividualVirtualDebitCard**

### Example

```typescript
import {
    CardsApi,
    Configuration,
    CreateCardRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let createCardRequest: CreateCardRequest; //

const { status, data } = await apiInstance.createCard(
    createCardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCardRequest** | **CreateCardRequest**|  | |


### Return type

**CreateCard201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The created card resource, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **freezeCard**
> CloseCard200Response freezeCard(freezeCardRequest)

Freeze a card (temporarily block a card).

### Example

```typescript
import {
    CardsApi,
    Configuration,
    FreezeCardRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let freezeCardRequest: FreezeCardRequest; //

const { status, data } = await apiInstance.freezeCard(
    cardId,
    freezeCardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **freezeCardRequest** | **FreezeCardRequest**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**CloseCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The frozen card resource, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCard**
> GetCard200Response getCard()

Get a card resource by id.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources (optional) (default to undefined)

const { status, data } = await apiInstance.getCard(
    cardId,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardId** | [**string**] |  | defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | (optional) defaults to undefined|


### Return type

**GetCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested card resource, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardLimits**
> GetAccountLimits200Response getCardLimits()

Get the limits of a card.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)

const { status, data } = await apiInstance.getCardLimits(
    cardId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardId** | [**string**] |  | defaults to undefined|


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
|**200** | The card limits resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCardPinStatus**
> GetCardPinStatus200Response getCardPinStatus()

Gets the PIN status for the specified card.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)

const { status, data } = await apiInstance.getCardPinStatus(
    cardId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**GetCardPinStatus200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The PIN status resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCards**
> ListCards200Response listCards()

List cards. Filtering and paging can be applied.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let pageLimit: string; //Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). (optional) (default to '100')
let pageOffset: string; //Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). (optional) (default to '0')
let filterAccountId: string; //Optional. Filters the results by the specified account id. (optional) (default to undefined)
let filterCustomerId: string; //Optional. Filters the results by the specified customer id. (optional) (default to undefined)
let filterTags: string; //Optional. Filter Cards by Tags. (optional) (default to undefined)
let filterStatus: string; //Optional. Filter cards by Card Status. Usage example: *filter[status][0]=Stolen&filter[status][1]=Lost* (optional) (default to undefined)
let include: string; //Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources (optional) (default to undefined)
let sort: string; //Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to 'createdAt')

const { status, data } = await apiInstance.listCards(
    pageLimit,
    pageOffset,
    filterAccountId,
    filterCustomerId,
    filterTags,
    filterStatus,
    include,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageLimit** | [**string**] | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | (optional) defaults to '100'|
| **pageOffset** | [**string**] | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | (optional) defaults to '0'|
| **filterAccountId** | [**string**] | Optional. Filters the results by the specified account id. | (optional) defaults to undefined|
| **filterCustomerId** | [**string**] | Optional. Filters the results by the specified customer id. | (optional) defaults to undefined|
| **filterTags** | [**string**] | Optional. Filter Cards by Tags. | (optional) defaults to undefined|
| **filterStatus** | [**string**] | Optional. Filter cards by Card Status. Usage example: *filter[status][0]&#x3D;Stolen&amp;filter[status][1]&#x3D;Lost* | (optional) defaults to undefined|
| **include** | [**string**] | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | (optional) defaults to undefined|
| **sort** | [**string**] | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | (optional) defaults to 'createdAt'|


### Return type

**ListCards200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A page of card resources, optionally filtered and sorted. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceCard**
> ReplaceCard200Response replaceCard(replaceCardRequest)

Creates and ships a replacement physical debit card to an individual or business card holder. The replacement card has the same card number, expiration date and PIN as the original card, and does not require additional activation.

### Example

```typescript
import {
    CardsApi,
    Configuration,
    ReplaceCardRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let replaceCardRequest: ReplaceCardRequest; //

const { status, data } = await apiInstance.replaceCard(
    cardId,
    replaceCardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **replaceCardRequest** | **ReplaceCardRequest**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**ReplaceCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The replacement card resource, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportCardLost**
> CloseCard200Response reportCardLost()

Report card as lost.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.reportCardLost(
    cardId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**CloseCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The card resource marked as lost, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportCardStolen**
> CloseCard200Response reportCardStolen()

Report card as stolen.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.reportCardStolen(
    cardId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**CloseCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The card resource marked as stolen, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfreezeCard**
> CloseCard200Response unfreezeCard()

Unfreeze a frozen card.

### Example

```typescript
import {
    CardsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.unfreezeCard(
    cardId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**CloseCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The unfrozen card resource, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCard**
> UpdateCard200Response updateCard(updateCardRequest)

Update a debit card.

### Example

```typescript
import {
    CardsApi,
    Configuration,
    UpdateCardRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new CardsApi(configuration);

let cardId: string; // (default to undefined)
let updateCardRequest: UpdateCardRequest; //

const { status, data } = await apiInstance.updateCard(
    cardId,
    updateCardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCardRequest** | **UpdateCardRequest**|  | |
| **cardId** | [**string**] |  | defaults to undefined|


### Return type

**UpdateCard200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated card resource, distinguished by the &#x60;type&#x60; field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

