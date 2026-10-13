# UnitFinanceSdk::InstitutionsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_by_routing_number**](InstitutionsApi.md#get_by_routing_number) | **GET** /institutions/{routingNumber} | Get by routing number |


## get_by_routing_number

> <GetByRoutingNumber200Response> get_by_routing_number(routing_number)

Get by routing number

Get an institution resource by routing number.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::InstitutionsApi.new
routing_number = 'routing_number_example' # String | 

begin
  # Get by routing number
  result = api_instance.get_by_routing_number(routing_number)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling InstitutionsApi->get_by_routing_number: #{e}"
end
```

#### Using the get_by_routing_number_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetByRoutingNumber200Response>, Integer, Hash)> get_by_routing_number_with_http_info(routing_number)

```ruby
begin
  # Get by routing number
  data, status_code, headers = api_instance.get_by_routing_number_with_http_info(routing_number)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetByRoutingNumber200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling InstitutionsApi->get_by_routing_number_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **routing_number** | **String** |  |  |

### Return type

[**GetByRoutingNumber200Response**](GetByRoutingNumber200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

