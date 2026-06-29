# UnitFinanceSdk::FeesApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_fee**](FeesApi.md#create_fee) | **POST** /fees | Create a fee |
| [**reverse_fee**](FeesApi.md#reverse_fee) | **POST** /fees/reverse | Reverse a fee |


## create_fee

> <CreateFee201Response> create_fee(create_fee_request)

Create a fee

Creates a fee for an `Account`.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::FeesApi.new
create_fee_request = UnitFinanceSdk::CreateFeeRequest.new({data: UnitFinanceSdk::CreateFeeData.new({type: 'fee', attributes: UnitFinanceSdk::CreateFeeDataAttributes.new({amount: 1000, description: 'Monthly Subscription'}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # CreateFeeRequest | 

begin
  # Create a fee
  result = api_instance.create_fee(create_fee_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling FeesApi->create_fee: #{e}"
end
```

#### Using the create_fee_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateFee201Response>, Integer, Hash)> create_fee_with_http_info(create_fee_request)

```ruby
begin
  # Create a fee
  data, status_code, headers = api_instance.create_fee_with_http_info(create_fee_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateFee201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling FeesApi->create_fee_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_fee_request** | [**CreateFeeRequest**](CreateFeeRequest.md) |  |  |

### Return type

[**CreateFee201Response**](CreateFee201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## reverse_fee

> <ReverseFee201Response> reverse_fee(reverse_fee_request)

Reverse a fee

Reverse a fee for an `Account`.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::FeesApi.new
reverse_fee_request = UnitFinanceSdk::ReverseFeeRequest.new({data: UnitFinanceSdk::ReverseFeeData.new({type: 'feeReversal', attributes: UnitFinanceSdk::ReverseFeeDataAttributes.new({description: 'Monthly Subscription - reverse'}), relationships: UnitFinanceSdk::ReverseFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new, transaction: UnitFinanceSdk::Relationship.new})})}) # ReverseFeeRequest | 

begin
  # Reverse a fee
  result = api_instance.reverse_fee(reverse_fee_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling FeesApi->reverse_fee: #{e}"
end
```

#### Using the reverse_fee_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ReverseFee201Response>, Integer, Hash)> reverse_fee_with_http_info(reverse_fee_request)

```ruby
begin
  # Reverse a fee
  data, status_code, headers = api_instance.reverse_fee_with_http_info(reverse_fee_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ReverseFee201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling FeesApi->reverse_fee_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reverse_fee_request** | [**ReverseFeeRequest**](ReverseFeeRequest.md) |  |  |

### Return type

[**ReverseFee201Response**](ReverseFee201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

