# unit_finance_sdk.ApplicationDocumentsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_application_document**](ApplicationDocumentsApi.md#create_application_document) | **POST** /applications/{applicationId}/documents | Create an application document
[**download_application_document**](ApplicationDocumentsApi.md#download_application_document) | **GET** /applications/{applicationId}/documents/{documentId}/download | Download an application document
[**download_application_document_back_side**](ApplicationDocumentsApi.md#download_application_document_back_side) | **GET** /applications/{applicationId}/documents/{documentId}/download/back | Download an application document back-side
[**list_application_documents**](ApplicationDocumentsApi.md#list_application_documents) | **GET** /applications/{applicationId}/documents | List application documents
[**upload_application_document**](ApplicationDocumentsApi.md#upload_application_document) | **PUT** /applications/{applicationId}/documents/{documentId} | Upload an application document
[**upload_application_document_back_side**](ApplicationDocumentsApi.md#upload_application_document_back_side) | **PUT** /applications/{applicationId}/documents/{documentId}/back | Upload an application document back-side
[**verify_application_document**](ApplicationDocumentsApi.md#verify_application_document) | **POST** /application/{applicationId}/documents/{documentId}/verify | Verify document


# **create_application_document**
> CreateApplicationDocument200Response create_application_document(application_id, body=body)

Create an application document

Unit allows you to create (and store) **custom documents**. This feature allows you to run additional document verifications on your side - these are documents that are not required by Unit for the evaluation of the application. Once you create a custom document resource, you can upload and store the document by using the relevant endpoints.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_application_document200_response import CreateApplicationDocument200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.ApplicationDocumentsApi(api_client)
    application_id = 'application_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Create an application document
        api_response = api_instance.create_application_document(application_id, body=body)
        print("The response of ApplicationDocumentsApi->create_application_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationDocumentsApi->create_application_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**|  | 
 **body** | **object**|  | [optional] 

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
**200** | The target resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_application_document**
> bytes download_application_document(application_id, document_id)

Download an application document

Download the application document file.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.ApplicationDocumentsApi(api_client)
    application_id = 'application_id_example' # str | 
    document_id = 'document_id_example' # str | 

    try:
        # Download an application document
        api_response = api_instance.download_application_document(application_id, document_id)
        print("The response of ApplicationDocumentsApi->download_application_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationDocumentsApi->download_application_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**|  | 
 **document_id** | **str**|  | 

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application document file. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_application_document_back_side**
> bytes download_application_document_back_side(application_id, document_id)

Download an application document back-side

Download the application document back-side file.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.ApplicationDocumentsApi(api_client)
    application_id = 'application_id_example' # str | 
    document_id = 'document_id_example' # str | 

    try:
        # Download an application document back-side
        api_response = api_instance.download_application_document_back_side(application_id, document_id)
        print("The response of ApplicationDocumentsApi->download_application_document_back_side:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationDocumentsApi->download_application_document_back_side: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**|  | 
 **document_id** | **str**|  | 

### Return type

**bytes**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application document back-side file. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_application_documents**
> ListApplicationDocuments200Response list_application_documents(application_id)

List application documents

List application documents.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_application_documents200_response import ListApplicationDocuments200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.ApplicationDocumentsApi(api_client)
    application_id = 'application_id_example' # str | 

    try:
        # List application documents
        api_response = api_instance.list_application_documents(application_id)
        print("The response of ApplicationDocumentsApi->list_application_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationDocumentsApi->list_application_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**|  | 

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
**200** | Array of application documents. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_application_document**
> CreateApplicationDocument200Response upload_application_document(application_id, document_id, body)

Upload an application document

Uploads a document file. Supported file types are `pdf`, `jpeg` or `png`. This endpoint is not available when `archived`=`true`.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_application_document200_response import CreateApplicationDocument200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.ApplicationDocumentsApi(api_client)
    application_id = 'application_id_example' # str | 
    document_id = 'document_id_example' # str | 
    body = None # bytes | 

    try:
        # Upload an application document
        api_response = api_instance.upload_application_document(application_id, document_id, body)
        print("The response of ApplicationDocumentsApi->upload_application_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationDocumentsApi->upload_application_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**|  | 
 **document_id** | **str**|  | 
 **body** | **bytes**|  | 

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
**200** | The target resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_application_document_back_side**
> CreateApplicationDocument200Response upload_application_document_back_side(application_id, document_id, body)

Upload an application document back-side

Uploads the back-side of a document. Supported file types are `pdf`, `jpeg` or `png`. This endpoint is not available when `archived`=`true`.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_application_document200_response import CreateApplicationDocument200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.ApplicationDocumentsApi(api_client)
    application_id = 'application_id_example' # str | 
    document_id = 'document_id_example' # str | 
    body = None # bytes | 

    try:
        # Upload an application document back-side
        api_response = api_instance.upload_application_document_back_side(application_id, document_id, body)
        print("The response of ApplicationDocumentsApi->upload_application_document_back_side:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationDocumentsApi->upload_application_document_back_side: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**|  | 
 **document_id** | **str**|  | 
 **body** | **bytes**|  | 

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
**200** | The target resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_application_document**
> CreateApplicationDocument200Response verify_application_document(application_id, document_id, verify_document_request)

Verify document

Verify Selfie Verification document

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_application_document200_response import CreateApplicationDocument200Response
from unit_finance_sdk.models.verify_document_request import VerifyDocumentRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.ApplicationDocumentsApi(api_client)
    application_id = 'application_id_example' # str | 
    document_id = 'document_id_example' # str | 
    verify_document_request = unit_finance_sdk.VerifyDocumentRequest() # VerifyDocumentRequest | 

    try:
        # Verify document
        api_response = api_instance.verify_application_document(application_id, document_id, verify_document_request)
        print("The response of ApplicationDocumentsApi->verify_application_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationDocumentsApi->verify_application_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**|  | 
 **document_id** | **str**|  | 
 **verify_document_request** | [**VerifyDocumentRequest**](VerifyDocumentRequest.md)|  | 

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
**200** | The updated Document resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

