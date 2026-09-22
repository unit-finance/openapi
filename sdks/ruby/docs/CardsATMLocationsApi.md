# UnitFinanceSdk::CardsATMLocationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**list_atm_locations**](CardsATMLocationsApi.md#list_atm_locations) | **GET** /atm-locations | List ATM locations |


## list_atm_locations

> <ListAtmLocations200Response> list_atm_locations(opts)

List ATM locations

List ATM locations by address, by coordinates, or by postal code.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsATMLocationsApi.new
opts = {
  filter_address: 'filter_address_example', # String | Filters the results by the specified address.
  filter_coordinates: 'filter_coordinates_example', # String | Filters the results by the specified coordinates.
  filter_postal_code: 'filter_postal_code_example', # String | Filters the results by the specified postal code.
  filter_search_radius: 'filter_search_radius_example' # String | Filters the results by the search radius (in miles). Default and max values are 100.
}

begin
  # List ATM locations
  result = api_instance.list_atm_locations(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsATMLocationsApi->list_atm_locations: #{e}"
end
```

#### Using the list_atm_locations_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListAtmLocations200Response>, Integer, Hash)> list_atm_locations_with_http_info(opts)

```ruby
begin
  # List ATM locations
  data, status_code, headers = api_instance.list_atm_locations_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListAtmLocations200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsATMLocationsApi->list_atm_locations_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **filter_address** | **String** | Filters the results by the specified address. | [optional] |
| **filter_coordinates** | **String** | Filters the results by the specified coordinates. | [optional] |
| **filter_postal_code** | **String** | Filters the results by the specified postal code. | [optional] |
| **filter_search_radius** | **String** | Filters the results by the search radius (in miles). Default and max values are 100. | [optional] |

### Return type

[**ListAtmLocations200Response**](ListAtmLocations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

