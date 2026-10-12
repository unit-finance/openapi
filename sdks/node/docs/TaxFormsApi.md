# TaxFormsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTaxFormById**](#gettaxformbyid) | **GET** /tax-forms/{id} | Get a tax form by id|
|[**getTaxFormPdfById**](#gettaxformpdfbyid) | **GET** /tax-forms/{id}/pdf | Get a tax form PDF by id|
|[**listTaxForms**](#listtaxforms) | **GET** /tax-forms | List tax forms|

# **getTaxFormById**
> GetTaxFormById200Response getTaxFormById()

Get a tax form by id.

### Example

```typescript
import {
    TaxFormsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new TaxFormsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getTaxFormById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GetTaxFormById200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tax form resource. Can be 1099-INT as indicated by the type field. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTaxFormPdfById**
> File getTaxFormPdfById()

Get a tax form PDF file by id.

### Example

```typescript
import {
    TaxFormsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new TaxFormsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getTaxFormPdfById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The tax form PDF file. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTaxForms**
> ListTaxForms200Response listTaxForms()

List tax form resources per tax year. Filtering and paging can be applied.

### Example

```typescript
import {
    TaxFormsApi,
    Configuration
} from 'unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new TaxFormsApi(configuration);

const { status, data } = await apiInstance.listTaxForms();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListTaxForms200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of tax form resources for a given tax year. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

