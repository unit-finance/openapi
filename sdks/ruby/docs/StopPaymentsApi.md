# UnitFinanceSdk::StopPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_stop_payment**](StopPaymentsApi.md#create_stop_payment) | **POST** /stop-payments | Create a stop payment |
| [**disable_stop_payment**](StopPaymentsApi.md#disable_stop_payment) | **POST** /stop-payments/{stopPaymentId}/disable | Disable a stop payment |
| [**get_stop_payment**](StopPaymentsApi.md#get_stop_payment) | **GET** /stop-payments/{stopPaymentId} | Get a stop payment by id |
| [**list_stop_payments**](StopPaymentsApi.md#list_stop_payments) | **GET** /stop-payments | List stop payments |
| [**update_ach_stop_payment**](StopPaymentsApi.md#update_ach_stop_payment) | **PATCH** /stop-payments/{stopPaymentId} | Update an ACH stop payment |


## create_stop_payment

> <CreateStopPayment201Response> create_stop_payment(create_stop_payment_request)

Create a stop payment

Create a stop payment. The request body is one of CreateACHStopPaymentRequest or CreateCheckStopPaymentRequest, discriminated by data.type (achStopPayment, checkStopPayment). The stopPayment created webhook event will be fired.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StopPaymentsApi.new
create_stop_payment_request = UnitFinanceSdk::CreateACHStopPaymentRequest.new({data: UnitFinanceSdk::CreateACHStopPaymentData.new({type: 'achStopPayment', attributes: UnitFinanceSdk::CreateACHStopPaymentDataAttributes.new({direction: 'Debit', description: 'Stop subscription payments greater than $50 to the gym.'}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # CreateStopPaymentRequest | 

begin
  # Create a stop payment
  result = api_instance.create_stop_payment(create_stop_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->create_stop_payment: #{e}"
end
```

#### Using the create_stop_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateStopPayment201Response>, Integer, Hash)> create_stop_payment_with_http_info(create_stop_payment_request)

```ruby
begin
  # Create a stop payment
  data, status_code, headers = api_instance.create_stop_payment_with_http_info(create_stop_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateStopPayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->create_stop_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_stop_payment_request** | [**CreateStopPaymentRequest**](CreateStopPaymentRequest.md) |  |  |

### Return type

[**CreateStopPayment201Response**](CreateStopPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## disable_stop_payment

> <GetStopPayment200Response> disable_stop_payment(stop_payment_id, opts)

Disable a stop payment

Disable a Stop Payment by id. When a Stop Payment is disabled, the checkStopPayment disabled webhook event is fired and future check payments wont be stopped by this stop payment.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StopPaymentsApi.new
stop_payment_id = 'stop_payment_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Disable a stop payment
  result = api_instance.disable_stop_payment(stop_payment_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->disable_stop_payment: #{e}"
end
```

#### Using the disable_stop_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetStopPayment200Response>, Integer, Hash)> disable_stop_payment_with_http_info(stop_payment_id, opts)

```ruby
begin
  # Disable a stop payment
  data, status_code, headers = api_instance.disable_stop_payment_with_http_info(stop_payment_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetStopPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->disable_stop_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stop_payment_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**GetStopPayment200Response**](GetStopPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_stop_payment

> <GetStopPayment200Response> get_stop_payment(stop_payment_id)

Get a stop payment by id

Get a stop payment by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StopPaymentsApi.new
stop_payment_id = 'stop_payment_id_example' # String | 

begin
  # Get a stop payment by id
  result = api_instance.get_stop_payment(stop_payment_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->get_stop_payment: #{e}"
end
```

#### Using the get_stop_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetStopPayment200Response>, Integer, Hash)> get_stop_payment_with_http_info(stop_payment_id)

```ruby
begin
  # Get a stop payment by id
  data, status_code, headers = api_instance.get_stop_payment_with_http_info(stop_payment_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetStopPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->get_stop_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stop_payment_id** | **String** |  |  |

### Return type

[**GetStopPayment200Response**](GetStopPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_stop_payments

> <ListStopPayments200Response> list_stop_payments(opts)

List stop payments

List stop payment resources. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StopPaymentsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_tags: 'filter_tags_example', # String | Optional. Filter stop payments by Tags.
  sort: 'sort_example', # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
  filter_since: 'filter_since_example', # String | Optional. Filters *before* the specified date. e.g. 2021-06-01
  filter_until: 'filter_until_example', # String | Optional. Filters *after* the specified date. e.g. 2021-07-01
  filter_status: 'filter_status_example', # String | Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]=Disabled*
  filter_from_amount: 'filter_from_amount_example', # String | Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
  filter_to_amount: 'filter_to_amount_example', # String | Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
  filter_no_amount: 'filter_no_amount_example', # String | Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount
  filter_from_min_amount: 'filter_from_min_amount_example', # String | Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents).
  filter_to_min_amount: 'filter_to_min_amount_example', # String | Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents).
  filter_no_min_amount: 'filter_no_min_amount_example', # String | Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount
  filter_originator_name: 'filter_originator_name_example', # String | Optional.
  filter_no_originator_name: 'filter_no_originator_name_example', # String | Optional.
  filter_check_number: 'filter_check_number_example', # String | Optional. Filter Stop Payments by check number (trimming leading zeros).
  filter_type: 'filter_type_example' # String | Optional. Either checkStopPayment or achStopPayment
}

begin
  # List stop payments
  result = api_instance.list_stop_payments(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->list_stop_payments: #{e}"
end
```

#### Using the list_stop_payments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListStopPayments200Response>, Integer, Hash)> list_stop_payments_with_http_info(opts)

```ruby
begin
  # List stop payments
  data, status_code, headers = api_instance.list_stop_payments_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListStopPayments200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->list_stop_payments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_tags** | **String** | Optional. Filter stop payments by Tags. | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |
| **filter_since** | **String** | Optional. Filters *before* the specified date. e.g. 2021-06-01 | [optional] |
| **filter_until** | **String** | Optional. Filters *after* the specified date. e.g. 2021-07-01 | [optional] |
| **filter_status** | **String** | Optional. Filter by status (Active, Disabled). Usage example: *filter[status][0]&#x3D;Disabled* | [optional][default to &#39;Active&#39;] |
| **filter_from_amount** | **String** | Optional. Filters the Check Stop Payments that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_amount** | **String** | Optional. Filters the Stop Payments that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **filter_no_amount** | **String** | Optional. If set to true, returns only Stop Payments with no amount . If set to false only returns Stop Payments with amount | [optional] |
| **filter_from_min_amount** | **String** | Optional. Filters ACH stop Payments that have minAmount higher than the specified amount (cents). | [optional] |
| **filter_to_min_amount** | **String** | Optional. Filters ACH stop Payments that have minAmount lower than the specified amount (cents). | [optional] |
| **filter_no_min_amount** | **String** | Optional. If set to true, returns only ACH Stop Payments with no minAmount . If set to false only returns Stop Payments with minAmount | [optional] |
| **filter_originator_name** | **String** | Optional. | [optional] |
| **filter_no_originator_name** | **String** | Optional. | [optional] |
| **filter_check_number** | **String** | Optional. Filter Stop Payments by check number (trimming leading zeros). | [optional] |
| **filter_type** | **String** | Optional. Either checkStopPayment or achStopPayment | [optional] |

### Return type

[**ListStopPayments200Response**](ListStopPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## update_ach_stop_payment

> <UpdateAchStopPayment200Response> update_ach_stop_payment(stop_payment_id, update_ach_stop_payment_request)

Update an ACH stop payment

Update an AchStopPayment.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StopPaymentsApi.new
stop_payment_id = 'stop_payment_id_example' # String | 
update_ach_stop_payment_request = UnitFinanceSdk::UpdateAchStopPaymentRequest.new({data: UnitFinanceSdk::UpdateAchStopPaymentData.new({type: 'achStopPayment', attributes: UnitFinanceSdk::UpdateAchStopPaymentDataAttributes.new})}) # UpdateAchStopPaymentRequest | 

begin
  # Update an ACH stop payment
  result = api_instance.update_ach_stop_payment(stop_payment_id, update_ach_stop_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->update_ach_stop_payment: #{e}"
end
```

#### Using the update_ach_stop_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateAchStopPayment200Response>, Integer, Hash)> update_ach_stop_payment_with_http_info(stop_payment_id, update_ach_stop_payment_request)

```ruby
begin
  # Update an ACH stop payment
  data, status_code, headers = api_instance.update_ach_stop_payment_with_http_info(stop_payment_id, update_ach_stop_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateAchStopPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StopPaymentsApi->update_ach_stop_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **stop_payment_id** | **String** |  |  |
| **update_ach_stop_payment_request** | [**UpdateAchStopPaymentRequest**](UpdateAchStopPaymentRequest.md) |  |  |

### Return type

[**UpdateAchStopPayment200Response**](UpdateAchStopPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

