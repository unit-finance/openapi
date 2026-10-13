# UnitFinanceSdk::ApplicationDocumentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_application_document**](ApplicationDocumentsApi.md#create_application_document) | **POST** /applications/{applicationId}/documents | Create an application document |
| [**download_application_document**](ApplicationDocumentsApi.md#download_application_document) | **GET** /applications/{applicationId}/documents/{documentId}/download | Download an application document |
| [**download_application_document_back_side**](ApplicationDocumentsApi.md#download_application_document_back_side) | **GET** /applications/{applicationId}/documents/{documentId}/download/back | Download an application document back-side |
| [**list_application_documents**](ApplicationDocumentsApi.md#list_application_documents) | **GET** /applications/{applicationId}/documents | List application documents |
| [**upload_application_document**](ApplicationDocumentsApi.md#upload_application_document) | **PUT** /applications/{applicationId}/documents/{documentId} | Upload an application document |
| [**upload_application_document_back_side**](ApplicationDocumentsApi.md#upload_application_document_back_side) | **PUT** /applications/{applicationId}/documents/{documentId}/back | Upload an application document back-side |
| [**verify_application_document**](ApplicationDocumentsApi.md#verify_application_document) | **POST** /application/{applicationId}/documents/{documentId}/verify | Verify document |


## create_application_document

> <CreateApplicationDocument200Response> create_application_document(application_id, opts)

Create an application document

Unit allows you to create (and store) **custom documents**. This feature allows you to run additional document verifications on your side - these are documents that are not required by Unit for the evaluation of the application. Once you create a custom document resource, you can upload and store the document by using the relevant endpoints.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationDocumentsApi.new
application_id = 'application_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Create an application document
  result = api_instance.create_application_document(application_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->create_application_document: #{e}"
end
```

#### Using the create_application_document_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateApplicationDocument200Response>, Integer, Hash)> create_application_document_with_http_info(application_id, opts)

```ruby
begin
  # Create an application document
  data, status_code, headers = api_instance.create_application_document_with_http_info(application_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateApplicationDocument200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->create_application_document_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## download_application_document

> File download_application_document(application_id, document_id)

Download an application document

Download the application document file.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationDocumentsApi.new
application_id = 'application_id_example' # String | 
document_id = 'document_id_example' # String | 

begin
  # Download an application document
  result = api_instance.download_application_document(application_id, document_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->download_application_document: #{e}"
end
```

#### Using the download_application_document_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> download_application_document_with_http_info(application_id, document_id)

```ruby
begin
  # Download an application document
  data, status_code, headers = api_instance.download_application_document_with_http_info(application_id, document_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->download_application_document_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** |  |  |
| **document_id** | **String** |  |  |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json


## download_application_document_back_side

> File download_application_document_back_side(application_id, document_id)

Download an application document back-side

Download the application document back-side file.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationDocumentsApi.new
application_id = 'application_id_example' # String | 
document_id = 'document_id_example' # String | 

begin
  # Download an application document back-side
  result = api_instance.download_application_document_back_side(application_id, document_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->download_application_document_back_side: #{e}"
end
```

#### Using the download_application_document_back_side_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> download_application_document_back_side_with_http_info(application_id, document_id)

```ruby
begin
  # Download an application document back-side
  data, status_code, headers = api_instance.download_application_document_back_side_with_http_info(application_id, document_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->download_application_document_back_side_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** |  |  |
| **document_id** | **String** |  |  |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, image/jpeg, image/png, application/vnd.api+json


## list_application_documents

> <ListApplicationDocuments200Response> list_application_documents(application_id)

List application documents

List application documents.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationDocumentsApi.new
application_id = 'application_id_example' # String | 

begin
  # List application documents
  result = api_instance.list_application_documents(application_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->list_application_documents: #{e}"
end
```

#### Using the list_application_documents_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListApplicationDocuments200Response>, Integer, Hash)> list_application_documents_with_http_info(application_id)

```ruby
begin
  # List application documents
  data, status_code, headers = api_instance.list_application_documents_with_http_info(application_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListApplicationDocuments200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->list_application_documents_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** |  |  |

### Return type

[**ListApplicationDocuments200Response**](ListApplicationDocuments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## upload_application_document

> <CreateApplicationDocument200Response> upload_application_document(application_id, document_id, body)

Upload an application document

Uploads a document file. Supported file types are `pdf`, `jpeg` or `png`. This endpoint is not available when `archived`=`true`.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationDocumentsApi.new
application_id = 'application_id_example' # String | 
document_id = 'document_id_example' # String | 
body = File.new('/path/to/some/file') # File | 

begin
  # Upload an application document
  result = api_instance.upload_application_document(application_id, document_id, body)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->upload_application_document: #{e}"
end
```

#### Using the upload_application_document_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateApplicationDocument200Response>, Integer, Hash)> upload_application_document_with_http_info(application_id, document_id, body)

```ruby
begin
  # Upload an application document
  data, status_code, headers = api_instance.upload_application_document_with_http_info(application_id, document_id, body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateApplicationDocument200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->upload_application_document_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** |  |  |
| **document_id** | **String** |  |  |
| **body** | **File** |  |  |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/pdf, image/jpeg, image/png
- **Accept**: application/vnd.api+json


## upload_application_document_back_side

> <CreateApplicationDocument200Response> upload_application_document_back_side(application_id, document_id, body)

Upload an application document back-side

Uploads the back-side of a document. Supported file types are `pdf`, `jpeg` or `png`. This endpoint is not available when `archived`=`true`.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationDocumentsApi.new
application_id = 'application_id_example' # String | 
document_id = 'document_id_example' # String | 
body = File.new('/path/to/some/file') # File | 

begin
  # Upload an application document back-side
  result = api_instance.upload_application_document_back_side(application_id, document_id, body)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->upload_application_document_back_side: #{e}"
end
```

#### Using the upload_application_document_back_side_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateApplicationDocument200Response>, Integer, Hash)> upload_application_document_back_side_with_http_info(application_id, document_id, body)

```ruby
begin
  # Upload an application document back-side
  data, status_code, headers = api_instance.upload_application_document_back_side_with_http_info(application_id, document_id, body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateApplicationDocument200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->upload_application_document_back_side_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** |  |  |
| **document_id** | **String** |  |  |
| **body** | **File** |  |  |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/pdf, image/jpeg, image/png
- **Accept**: application/vnd.api+json


## verify_application_document

> <CreateApplicationDocument200Response> verify_application_document(application_id, document_id, verify_document_request)

Verify document

Verify Selfie Verification document

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationDocumentsApi.new
application_id = 'application_id_example' # String | 
document_id = 'document_id_example' # String | 
verify_document_request = UnitFinanceSdk::VerifyDocumentRequest.new({data: UnitFinanceSdk::VerifyDocumentData.new({type: 'selfieVerification', attributes: UnitFinanceSdk::VerifyDocumentDataAttributes.new({job_id: 'X16krjAN1'})})}) # VerifyDocumentRequest | 

begin
  # Verify document
  result = api_instance.verify_application_document(application_id, document_id, verify_document_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->verify_application_document: #{e}"
end
```

#### Using the verify_application_document_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateApplicationDocument200Response>, Integer, Hash)> verify_application_document_with_http_info(application_id, document_id, verify_document_request)

```ruby
begin
  # Verify document
  data, status_code, headers = api_instance.verify_application_document_with_http_info(application_id, document_id, verify_document_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateApplicationDocument200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationDocumentsApi->verify_application_document_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **application_id** | **String** |  |  |
| **document_id** | **String** |  |  |
| **verify_document_request** | [**VerifyDocumentRequest**](VerifyDocumentRequest.md) |  |  |

### Return type

[**CreateApplicationDocument200Response**](CreateApplicationDocument200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

