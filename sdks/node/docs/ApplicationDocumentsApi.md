# ApplicationDocumentsApi

All URIs are relative to *https://api.s.unit.sh*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApplicationDocument**](#createapplicationdocument) | **POST** /applications/{applicationId}/documents | Create an application document|
|[**downloadApplicationDocument**](#downloadapplicationdocument) | **GET** /applications/{applicationId}/documents/{documentId}/download | Download an application document|
|[**downloadApplicationDocumentBackSide**](#downloadapplicationdocumentbackside) | **GET** /applications/{applicationId}/documents/{documentId}/download/back | Download an application document back-side|
|[**listApplicationDocuments**](#listapplicationdocuments) | **GET** /applications/{applicationId}/documents | List application documents|
|[**uploadApplicationDocument**](#uploadapplicationdocument) | **PUT** /applications/{applicationId}/documents/{documentId} | Upload an application document|
|[**uploadApplicationDocumentBackSide**](#uploadapplicationdocumentbackside) | **PUT** /applications/{applicationId}/documents/{documentId}/back | Upload an application document back-side|
|[**verifyApplicationDocument**](#verifyapplicationdocument) | **POST** /application/{applicationId}/documents/{documentId}/verify | Verify document|

# **createApplicationDocument**
> CreateApplicationDocument200Response createApplicationDocument()

Unit allows you to create (and store) **custom documents**. This feature allows you to run additional document verifications on your side - these are documents that are not required by Unit for the evaluation of the application. Once you create a custom document resource, you can upload and store the document by using the relevant endpoints.

### Example

```typescript
import {
    ApplicationDocumentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationDocumentsApi(configuration);

let applicationId: string; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.createApplicationDocument(
    applicationId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **applicationId** | [**string**] |  | defaults to undefined|


### Return type

**CreateApplicationDocument200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The target resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadApplicationDocument**
> File downloadApplicationDocument()

Download the application document file.

### Example

```typescript
import {
    ApplicationDocumentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationDocumentsApi(configuration);

let applicationId: string; // (default to undefined)
let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadApplicationDocument(
    applicationId,
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The application document file. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadApplicationDocumentBackSide**
> File downloadApplicationDocumentBackSide()

Download the application document back-side file.

### Example

```typescript
import {
    ApplicationDocumentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationDocumentsApi(configuration);

let applicationId: string; // (default to undefined)
let documentId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadApplicationDocumentBackSide(
    applicationId,
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The application document back-side file. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listApplicationDocuments**
> ListApplicationDocuments200Response listApplicationDocuments()

List application documents.

### Example

```typescript
import {
    ApplicationDocumentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationDocumentsApi(configuration);

let applicationId: string; // (default to undefined)

const { status, data } = await apiInstance.listApplicationDocuments(
    applicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationId** | [**string**] |  | defaults to undefined|


### Return type

**ListApplicationDocuments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Array of application documents. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadApplicationDocument**
> CreateApplicationDocument200Response uploadApplicationDocument(body)

Uploads a document file. Supported file types are `pdf`, `jpeg` or `png`. This endpoint is not available when `archived`=`true`.

### Example

```typescript
import {
    ApplicationDocumentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationDocumentsApi(configuration);

let applicationId: string; // (default to undefined)
let documentId: string; // (default to undefined)
let body: File; //

const { status, data } = await apiInstance.uploadApplicationDocument(
    applicationId,
    documentId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**|  | |
| **applicationId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**CreateApplicationDocument200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The target resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadApplicationDocumentBackSide**
> CreateApplicationDocument200Response uploadApplicationDocumentBackSide(body)

Uploads the back-side of a document. Supported file types are `pdf`, `jpeg` or `png`. This endpoint is not available when `archived`=`true`.

### Example

```typescript
import {
    ApplicationDocumentsApi,
    Configuration
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationDocumentsApi(configuration);

let applicationId: string; // (default to undefined)
let documentId: string; // (default to undefined)
let body: File; //

const { status, data } = await apiInstance.uploadApplicationDocumentBackSide(
    applicationId,
    documentId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**|  | |
| **applicationId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**CreateApplicationDocument200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The target resource after the operation was completed. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyApplicationDocument**
> CreateApplicationDocument200Response verifyApplicationDocument(verifyDocumentRequest)

Verify Selfie Verification document

### Example

```typescript
import {
    ApplicationDocumentsApi,
    Configuration,
    VerifyDocumentRequest
} from '@unit-finance/unit-openapi-node-sdk';

const configuration = new Configuration();
const apiInstance = new ApplicationDocumentsApi(configuration);

let applicationId: string; // (default to undefined)
let documentId: string; // (default to undefined)
let verifyDocumentRequest: VerifyDocumentRequest; //

const { status, data } = await apiInstance.verifyApplicationDocument(
    applicationId,
    documentId,
    verifyDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyDocumentRequest** | **VerifyDocumentRequest**|  | |
| **applicationId** | [**string**] |  | defaults to undefined|
| **documentId** | [**string**] |  | defaults to undefined|


### Return type

**CreateApplicationDocument200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The updated Document resource. |  -  |
|**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
|**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
|**404** | Not found. No resource matches the supplied identifier. |  -  |
|**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

