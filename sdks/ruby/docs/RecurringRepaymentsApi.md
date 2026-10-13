# UnitFinanceSdk::RecurringRepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_recurring_repayment**](RecurringRepaymentsApi.md#create_recurring_repayment) | **POST** /recurring-repayments | Create a recurring repayment |
| [**disable_recurring_repayment**](RecurringRepaymentsApi.md#disable_recurring_repayment) | **POST** /recurring-repayments/{id}/disable | Disable a recurring repayment |
| [**enable_recurring_repayment**](RecurringRepaymentsApi.md#enable_recurring_repayment) | **POST** /recurring-repayments/{id}/enable | Enable a recurring repayment |
| [**get_recurring_repayment**](RecurringRepaymentsApi.md#get_recurring_repayment) | **GET** /recurring-repayments/{id} | Get a recurring repayment by id |
| [**list_recurring_repayments**](RecurringRepaymentsApi.md#list_recurring_repayments) | **GET** /recurring-repayments | List recurring repayments |


## create_recurring_repayment

> <CreateRecurringRepayment201Response> create_recurring_repayment(create_recurring_repayment_request)

Create a recurring repayment

Originate a recurring repayment. The request body is one of CreateRecurringACHRepaymentRequest, CreateRecurringBookRepaymentRequest, CreateRecurringCapitalPartnerACHRepaymentRequest, or CreateRecurringCapitalPartnerBookRepaymentRequest, discriminated by data.type (recurringAchRepayment, recurringBookRepayment) together with the relationships supplied — the capital partner variants omit the account relationship.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RecurringRepaymentsApi.new
create_recurring_repayment_request = UnitFinanceSdk::CreateRecurringACHRepaymentRequest.new({data: UnitFinanceSdk::CreateRecurringACHRepaymentData.new({type: 'recurringAchRepayment', attributes: UnitFinanceSdk::CreateRecurringACHRepaymentDataAttributes.new({description: 'ACH Repayments'}), relationships: UnitFinanceSdk::CreateRecurringACHRepaymentDataRelationships.new({account: UnitFinanceSdk::Relationship.new, credit_account: UnitFinanceSdk::Relationship.new, counterparty: })})}) # CreateRecurringRepaymentRequest | 

begin
  # Create a recurring repayment
  result = api_instance.create_recurring_repayment(create_recurring_repayment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->create_recurring_repayment: #{e}"
end
```

#### Using the create_recurring_repayment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringRepayment201Response>, Integer, Hash)> create_recurring_repayment_with_http_info(create_recurring_repayment_request)

```ruby
begin
  # Create a recurring repayment
  data, status_code, headers = api_instance.create_recurring_repayment_with_http_info(create_recurring_repayment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringRepayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->create_recurring_repayment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_recurring_repayment_request** | [**CreateRecurringRepaymentRequest**](CreateRecurringRepaymentRequest.md) |  |  |

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## disable_recurring_repayment

> <CreateRecurringRepayment201Response> disable_recurring_repayment(id, opts)

Disable a recurring repayment

Disable a Recurring Repayment by id. When a Recurring Repayment is disabled, the Recurring Repayment Status Changed webhook event is fired and future repayments will no longer be created according to the defined schedule.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RecurringRepaymentsApi.new
id = 'id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Disable a recurring repayment
  result = api_instance.disable_recurring_repayment(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->disable_recurring_repayment: #{e}"
end
```

#### Using the disable_recurring_repayment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringRepayment201Response>, Integer, Hash)> disable_recurring_repayment_with_http_info(id, opts)

```ruby
begin
  # Disable a recurring repayment
  data, status_code, headers = api_instance.disable_recurring_repayment_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringRepayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->disable_recurring_repayment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## enable_recurring_repayment

> <CreateRecurringRepayment201Response> enable_recurring_repayment(id, opts)

Enable a recurring repayment

Enable a recurring repayment by id. When a Recurring Repayment is enabled, its status is set to Active according to the start date and end date that were defined in the schedule. See Recurring Repayment Statuses. When enabled, the Recurring Repayment Status Changed webhook event is fired.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RecurringRepaymentsApi.new
id = 'id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Enable a recurring repayment
  result = api_instance.enable_recurring_repayment(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->enable_recurring_repayment: #{e}"
end
```

#### Using the enable_recurring_repayment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringRepayment201Response>, Integer, Hash)> enable_recurring_repayment_with_http_info(id, opts)

```ruby
begin
  # Enable a recurring repayment
  data, status_code, headers = api_instance.enable_recurring_repayment_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringRepayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->enable_recurring_repayment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_recurring_repayment

> <CreateRecurringRepayment201Response> get_recurring_repayment(id)

Get a recurring repayment by id

Get a recurring repayment by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RecurringRepaymentsApi.new
id = 'id_example' # String | 

begin
  # Get a recurring repayment by id
  result = api_instance.get_recurring_repayment(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->get_recurring_repayment: #{e}"
end
```

#### Using the get_recurring_repayment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringRepayment201Response>, Integer, Hash)> get_recurring_repayment_with_http_info(id)

```ruby
begin
  # Get a recurring repayment by id
  data, status_code, headers = api_instance.get_recurring_repayment_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringRepayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->get_recurring_repayment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_recurring_repayments

> <ListRecurringRepayments200Response> list_recurring_repayments(opts)

List recurring repayments

List recurring repayments resources. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RecurringRepaymentsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_credit_account_id: 'filter_credit_account_id_example', # String | Optional. Filters the results by the specified credit account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_status: 'filter_status_example', # String | Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]=Active
  filter_from_start_time: 'filter_from_start_time_example', # String | Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13
  filter_to_start_time: 'filter_to_start_time_example', # String | Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13
  sort: 'sort_example' # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List recurring repayments
  result = api_instance.list_recurring_repayments(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->list_recurring_repayments: #{e}"
end
```

#### Using the list_recurring_repayments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListRecurringRepayments200Response>, Integer, Hash)> list_recurring_repayments_with_http_info(opts)

```ruby
begin
  # List recurring repayments
  data, status_code, headers = api_instance.list_recurring_repayments_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListRecurringRepayments200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RecurringRepaymentsApi->list_recurring_repayments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_credit_account_id** | **String** | Optional. Filters the results by the specified credit account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_status** | **String** | Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]&#x3D;Active | [optional] |
| **filter_from_start_time** | **String** | Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13 | [optional] |
| **filter_to_start_time** | **String** | Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13 | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |

### Return type

[**ListRecurringRepayments200Response**](ListRecurringRepayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

