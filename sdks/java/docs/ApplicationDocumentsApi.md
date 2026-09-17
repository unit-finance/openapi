# ApplicationDocumentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApplicationDocument**](ApplicationDocumentsApi.md#createApplicationDocument) | **POST** /applications/{applicationId}/documents | Create an application document |
| [**downloadApplicationDocument**](ApplicationDocumentsApi.md#downloadApplicationDocument) | **GET** /applications/{applicationId}/documents/{documentId}/download | Download an application document |
| [**downloadApplicationDocumentBackSide**](ApplicationDocumentsApi.md#downloadApplicationDocumentBackSide) | **GET** /applications/{applicationId}/documents/{documentId}/download/back | Download an application document back-side |
| [**listApplicationDocuments**](ApplicationDocumentsApi.md#listApplicationDocuments) | **GET** /applications/{applicationId}/documents | List application documents |
| [**uploadApplicationDocument**](ApplicationDocumentsApi.md#uploadApplicationDocument) | **PUT** /applications/{applicationId}/documents/{documentId} | Upload an application document |
| [**uploadApplicationDocumentBackSide**](ApplicationDocumentsApi.md#uploadApplicationDocumentBackSide) | **PUT** /applications/{applicationId}/documents/{documentId}/back | Upload an application document back-side |
| [**verifyApplicationDocument**](ApplicationDocumentsApi.md#verifyApplicationDocument) | **POST** /application/{applicationId}/documents/{documentId}/verify | Verify document |


<a id="createApplicationDocument"></a>
# **createApplicationDocument**
> CreateApplicationDocument200Response createApplicationDocument(applicationId, body)

Create an application document

Unit allows you to create (and store) **custom documents**. This feature allows you to run additional document verifications on your side - these are documents that are not required by Unit for the evaluation of the application. Once you create a custom document resource, you can upload and store the document by using the relevant endpoints.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationDocumentsApi apiInstance = new ApplicationDocumentsApi(defaultClient);
    String applicationId = "applicationId_example"; // String | 
    Object body = null; // Object | 
    try {
      CreateApplicationDocument200Response result = apiInstance.createApplicationDocument(applicationId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationDocumentsApi#createApplicationDocument");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | **String**|  | |
| **body** | **Object**|  | [optional] |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The target resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="downloadApplicationDocument"></a>
# **downloadApplicationDocument**
> File downloadApplicationDocument(applicationId, documentId)

Download an application document

Download the application document file.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationDocumentsApi apiInstance = new ApplicationDocumentsApi(defaultClient);
    String applicationId = "applicationId_example"; // String | 
    String documentId = "documentId_example"; // String | 
    try {
      File result = apiInstance.downloadApplicationDocument(applicationId, documentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationDocumentsApi#downloadApplicationDocument");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | **String**|  | |
| **documentId** | **String**|  | |

### Return type

[**File**](File.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The application document file. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="downloadApplicationDocumentBackSide"></a>
# **downloadApplicationDocumentBackSide**
> File downloadApplicationDocumentBackSide(applicationId, documentId)

Download an application document back-side

Download the application document back-side file.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationDocumentsApi apiInstance = new ApplicationDocumentsApi(defaultClient);
    String applicationId = "applicationId_example"; // String | 
    String documentId = "documentId_example"; // String | 
    try {
      File result = apiInstance.downloadApplicationDocumentBackSide(applicationId, documentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationDocumentsApi#downloadApplicationDocumentBackSide");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | **String**|  | |
| **documentId** | **String**|  | |

### Return type

[**File**](File.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The application document back-side file. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="listApplicationDocuments"></a>
# **listApplicationDocuments**
> ListApplicationDocuments200Response listApplicationDocuments(applicationId)

List application documents

List application documents.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationDocumentsApi apiInstance = new ApplicationDocumentsApi(defaultClient);
    String applicationId = "applicationId_example"; // String | 
    try {
      ListApplicationDocuments200Response result = apiInstance.listApplicationDocuments(applicationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationDocumentsApi#listApplicationDocuments");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | **String**|  | |

### Return type

[**ListApplicationDocuments200Response**](ListApplicationDocuments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of application documents. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="uploadApplicationDocument"></a>
# **uploadApplicationDocument**
> CreateApplicationDocument200Response uploadApplicationDocument(applicationId, documentId, body)

Upload an application document

Uploads a document file. Supported file types are &#x60;pdf&#x60;, &#x60;jpeg&#x60; or &#x60;png&#x60;. This endpoint is not available when &#x60;archived&#x60;&#x3D;&#x60;true&#x60;.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationDocumentsApi apiInstance = new ApplicationDocumentsApi(defaultClient);
    String applicationId = "applicationId_example"; // String | 
    String documentId = "documentId_example"; // String | 
    File body = new File("/path/to/file"); // File | 
    try {
      CreateApplicationDocument200Response result = apiInstance.uploadApplicationDocument(applicationId, documentId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationDocumentsApi#uploadApplicationDocument");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | **String**|  | |
| **documentId** | **String**|  | |
| **body** | **File**|  | |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The target resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="uploadApplicationDocumentBackSide"></a>
# **uploadApplicationDocumentBackSide**
> CreateApplicationDocument200Response uploadApplicationDocumentBackSide(applicationId, documentId, body)

Upload an application document back-side

Uploads the back-side of a document. Supported file types are &#x60;pdf&#x60;, &#x60;jpeg&#x60; or &#x60;png&#x60;. This endpoint is not available when &#x60;archived&#x60;&#x3D;&#x60;true&#x60;.

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationDocumentsApi apiInstance = new ApplicationDocumentsApi(defaultClient);
    String applicationId = "applicationId_example"; // String | 
    String documentId = "documentId_example"; // String | 
    File body = new File("/path/to/file"); // File | 
    try {
      CreateApplicationDocument200Response result = apiInstance.uploadApplicationDocumentBackSide(applicationId, documentId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationDocumentsApi#uploadApplicationDocumentBackSide");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | **String**|  | |
| **documentId** | **String**|  | |
| **body** | **File**|  | |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The target resource after the operation was completed. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

<a id="verifyApplicationDocument"></a>
# **verifyApplicationDocument**
> CreateApplicationDocument200Response verifyApplicationDocument(applicationId, documentId, verifyDocumentRequest)

Verify document

Verify Selfie Verification document

### Example
```java
// Import classes:
import com.unit.finance.sdk.ApiClient;
import com.unit.finance.sdk.ApiException;
import com.unit.finance.sdk.Configuration;
import com.unit.finance.sdk.auth.*;
import com.unit.finance.sdk.models.*;
import com.unit.finance.sdk.api.ApplicationDocumentsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.s.unit.sh");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    ApplicationDocumentsApi apiInstance = new ApplicationDocumentsApi(defaultClient);
    String applicationId = "applicationId_example"; // String | 
    String documentId = "documentId_example"; // String | 
    VerifyDocumentRequest verifyDocumentRequest = new VerifyDocumentRequest(); // VerifyDocumentRequest | 
    try {
      CreateApplicationDocument200Response result = apiInstance.verifyApplicationDocument(applicationId, documentId, verifyDocumentRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ApplicationDocumentsApi#verifyApplicationDocument");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | **String**|  | |
| **documentId** | **String**|  | |
| **verifyDocumentRequest** | [**VerifyDocumentRequest**](VerifyDocumentRequest.md)|  | |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated Document resource. |  -  |
| **400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
| **401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
| **404** | Not found. No resource matches the supplied identifier. |  -  |
| **0** | Error response |  -  |

