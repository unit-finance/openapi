# UnitFinanceSdk::CardsAuthorizationRequestsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_authorization_request_by_id**](CardsAuthorizationRequestsApi.md#get_authorization_request_by_id) | **GET** /authorization-requests/{id} | Get an authorization request by id |
| [**list_authorization_requests**](CardsAuthorizationRequestsApi.md#list_authorization_requests) | **GET** /authorization-requests | List authorization requests |


## get_authorization_request_by_id

> <GetAuthorizationRequestById200Response> get_authorization_request_by_id(id)

Get an authorization request by id

Get an authorization request resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsAuthorizationRequestsApi.new
id = 'id_example' # String | 

begin
  # Get an authorization request by id
  result = api_instance.get_authorization_request_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationRequestsApi->get_authorization_request_by_id: #{e}"
end
```

#### Using the get_authorization_request_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAuthorizationRequestById200Response>, Integer, Hash)> get_authorization_request_by_id_with_http_info(id)

```ruby
begin
  # Get an authorization request by id
  data, status_code, headers = api_instance.get_authorization_request_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAuthorizationRequestById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationRequestsApi->get_authorization_request_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**GetAuthorizationRequestById200Response**](GetAuthorizationRequestById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_authorization_requests

> <ListAuthorizationRequests200Response> list_authorization_requests(opts)

List authorization requests

List authorization requests. Filtering and paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsAuthorizationRequestsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_merchant_category_code: 'filter_merchant_category_code_example', # String | Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC).
  filter_from_amount: 'filter_from_amount_example', # String | Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
  filter_to_amount: 'filter_to_amount_example' # String | Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
}

begin
  # List authorization requests
  result = api_instance.list_authorization_requests(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationRequestsApi->list_authorization_requests: #{e}"
end
```

#### Using the list_authorization_requests_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListAuthorizationRequests200Response>, Integer, Hash)> list_authorization_requests_with_http_info(opts)

```ruby
begin
  # List authorization requests
  data, status_code, headers = api_instance.list_authorization_requests_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListAuthorizationRequests200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationRequestsApi->list_authorization_requests_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_merchant_category_code** | **String** | Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC). | [optional] |
| **filter_from_amount** | **String** | Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_amount** | **String** | Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |

### Return type

[**ListAuthorizationRequests200Response**](ListAuthorizationRequests200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

