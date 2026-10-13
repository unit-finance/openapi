# UnitFinanceSdk::DisputesApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_dispute_by_id**](DisputesApi.md#get_dispute_by_id) | **GET** /disputes/{id} | Get dispute by id |
| [**list_disputes**](DisputesApi.md#list_disputes) | **GET** /disputes | List disputes |


## get_dispute_by_id

> <GetDisputeById200Response> get_dispute_by_id(id)

Get dispute by id

Get a dispute resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::DisputesApi.new
id = 'id_example' # String | 

begin
  # Get dispute by id
  result = api_instance.get_dispute_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DisputesApi->get_dispute_by_id: #{e}"
end
```

#### Using the get_dispute_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetDisputeById200Response>, Integer, Hash)> get_dispute_by_id_with_http_info(id)

```ruby
begin
  # Get dispute by id
  data, status_code, headers = api_instance.get_dispute_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetDisputeById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DisputesApi->get_dispute_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**GetDisputeById200Response**](GetDisputeById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_disputes

> <ListDisputes200Response> list_disputes(opts)

List disputes

List dispute resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::DisputesApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_query: 'filter_query_example' # String | Optional. Search term according to the Full-Text Search Rules.
}

begin
  # List disputes
  result = api_instance.list_disputes(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DisputesApi->list_disputes: #{e}"
end
```

#### Using the list_disputes_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListDisputes200Response>, Integer, Hash)> list_disputes_with_http_info(opts)

```ruby
begin
  # List disputes
  data, status_code, headers = api_instance.list_disputes_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListDisputes200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DisputesApi->list_disputes_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_query** | **String** | Optional. Search term according to the Full-Text Search Rules. | [optional] |

### Return type

[**ListDisputes200Response**](ListDisputes200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

