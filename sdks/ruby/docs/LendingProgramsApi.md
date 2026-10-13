# UnitFinanceSdk::LendingProgramsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_lending_program_by_id**](LendingProgramsApi.md#get_lending_program_by_id) | **GET** /lending-programs/{id} | Get lending program by id |
| [**get_lending_program_extended_information_by_id**](LendingProgramsApi.md#get_lending_program_extended_information_by_id) | **GET** /lending-programs/{id}/extended | Get lending program extended information by id |
| [**list_lending_programs**](LendingProgramsApi.md#list_lending_programs) | **GET** /lending-programs | List lending programs |


## get_lending_program_by_id

> <GetLendingProgramById200Response> get_lending_program_by_id(id)

Get lending program by id

Get a lending program resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::LendingProgramsApi.new
id = 'id_example' # String | 

begin
  # Get lending program by id
  result = api_instance.get_lending_program_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling LendingProgramsApi->get_lending_program_by_id: #{e}"
end
```

#### Using the get_lending_program_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetLendingProgramById200Response>, Integer, Hash)> get_lending_program_by_id_with_http_info(id)

```ruby
begin
  # Get lending program by id
  data, status_code, headers = api_instance.get_lending_program_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetLendingProgramById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling LendingProgramsApi->get_lending_program_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**GetLendingProgramById200Response**](GetLendingProgramById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_lending_program_extended_information_by_id

> <GetLendingProgramExtendedInformationById200Response> get_lending_program_extended_information_by_id(id)

Get lending program extended information by id

Get lending program extended information resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::LendingProgramsApi.new
id = 'id_example' # String | 

begin
  # Get lending program extended information by id
  result = api_instance.get_lending_program_extended_information_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling LendingProgramsApi->get_lending_program_extended_information_by_id: #{e}"
end
```

#### Using the get_lending_program_extended_information_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetLendingProgramExtendedInformationById200Response>, Integer, Hash)> get_lending_program_extended_information_by_id_with_http_info(id)

```ruby
begin
  # Get lending program extended information by id
  data, status_code, headers = api_instance.get_lending_program_extended_information_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetLendingProgramExtendedInformationById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling LendingProgramsApi->get_lending_program_extended_information_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**GetLendingProgramExtendedInformationById200Response**](GetLendingProgramExtendedInformationById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_lending_programs

> <ListLendingPrograms200Response> list_lending_programs(opts)

List lending programs

List lending program resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::LendingProgramsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_name: 'filter_name_example', # String | Optional. Filters the results by the specified program name.
  filter_program_type: 'filter_program_type_example', # String | Optional. Filters the results by the specified Lending Program Type.
  filter_min_program_limit: 'filter_min_program_limit_example', # String | Optional. Filters the results by a maximum value of programSizeLimit.
  filter_org_id: 'filter_org_id_example', # String | Optional. Filters the results by the specified org id.
  filter_bank_id: 'filter_bank_id_example' # String | Optional. Filters the results by the specified bank id.
}

begin
  # List lending programs
  result = api_instance.list_lending_programs(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling LendingProgramsApi->list_lending_programs: #{e}"
end
```

#### Using the list_lending_programs_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListLendingPrograms200Response>, Integer, Hash)> list_lending_programs_with_http_info(opts)

```ruby
begin
  # List lending programs
  data, status_code, headers = api_instance.list_lending_programs_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListLendingPrograms200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling LendingProgramsApi->list_lending_programs_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_name** | **String** | Optional. Filters the results by the specified program name. | [optional] |
| **filter_program_type** | **String** | Optional. Filters the results by the specified Lending Program Type. | [optional] |
| **filter_min_program_limit** | **String** | Optional. Filters the results by a maximum value of programSizeLimit. | [optional] |
| **filter_org_id** | **String** | Optional. Filters the results by the specified org id. | [optional] |
| **filter_bank_id** | **String** | Optional. Filters the results by the specified bank id. | [optional] |

### Return type

[**ListLendingPrograms200Response**](ListLendingPrograms200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

