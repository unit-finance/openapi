# UnitFinanceSdk::PositivePayApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cancel_positive_pay**](PositivePayApi.md#cancel_positive_pay) | **POST** /positive-pay/{positivePayId}/cancel | Cancel a positive pay rule |
| [**configure_positive_pay_policy**](PositivePayApi.md#configure_positive_pay_policy) | **POST** /positive-pay-policy | Configure a positive pay policy |
| [**create_positive_pay**](PositivePayApi.md#create_positive_pay) | **POST** /positive-pay | Create a positive pay rule |
| [**get_positive_pay_by_id**](PositivePayApi.md#get_positive_pay_by_id) | **GET** /positive-pay/{positivePayId} | Get a positive pay rule by id |
| [**list_positive_pay**](PositivePayApi.md#list_positive_pay) | **GET** /positive-pay | List positive pay rules |
| [**upload_positive_pay_document**](PositivePayApi.md#upload_positive_pay_document) | **PUT** /positive-pay/{positivePayId}/documents | Upload a positive pay document |


## cancel_positive_pay

> <CancelPositivePay200Response> cancel_positive_pay(positive_pay_id, opts)

Cancel a positive pay rule

Cancel a Positive Pay rule by ID. Cancelled rules stop authorizing payments.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PositivePayApi.new
positive_pay_id = 'positive_pay_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Cancel a positive pay rule
  result = api_instance.cancel_positive_pay(positive_pay_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->cancel_positive_pay: #{e}"
end
```

#### Using the cancel_positive_pay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CancelPositivePay200Response>, Integer, Hash)> cancel_positive_pay_with_http_info(positive_pay_id, opts)

```ruby
begin
  # Cancel a positive pay rule
  data, status_code, headers = api_instance.cancel_positive_pay_with_http_info(positive_pay_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CancelPositivePay200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->cancel_positive_pay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **positive_pay_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CancelPositivePay200Response**](CancelPositivePay200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## configure_positive_pay_policy

> configure_positive_pay_policy(configure_positive_pay_policy_request)

Configure a positive pay policy

Configure Positive Pay policy to control which payment types require matching Positive Pay rules before they can be processed.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PositivePayApi.new
configure_positive_pay_policy_request = UnitFinanceSdk::ConfigurePositivePayPolicyRequest.new({data: UnitFinanceSdk::ConfigurePositivePayPolicyData.new({type: 'positivePayPolicy', attributes: UnitFinanceSdk::ConfigurePositivePayPolicyDataAttributes.new({opt_in_types: ["CheckPayment", "ReceivedAchDebit", "ReceivedAchCredit"]}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # ConfigurePositivePayPolicyRequest | 

begin
  # Configure a positive pay policy
  api_instance.configure_positive_pay_policy(configure_positive_pay_policy_request)
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->configure_positive_pay_policy: #{e}"
end
```

#### Using the configure_positive_pay_policy_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> configure_positive_pay_policy_with_http_info(configure_positive_pay_policy_request)

```ruby
begin
  # Configure a positive pay policy
  data, status_code, headers = api_instance.configure_positive_pay_policy_with_http_info(configure_positive_pay_policy_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->configure_positive_pay_policy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **configure_positive_pay_policy_request** | [**ConfigurePositivePayPolicyRequest**](ConfigurePositivePayPolicyRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_positive_pay

> <CreatePositivePay201Response> create_positive_pay(create_positive_pay_request)

Create a positive pay rule

Create a Positive Pay rule. Variants: - **CreateCheckPaymentPositivePay** - **CreateReceivedACHDebitPositivePay** - **CreateWireDrawdownPositivePay**

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PositivePayApi.new
create_positive_pay_request = UnitFinanceSdk::CreateCheckPaymentPositivePayRequest.new({data: UnitFinanceSdk::CreateCheckPaymentPositivePayData.new({type: 'checkPaymentPositivePay', attributes: UnitFinanceSdk::CreateCheckPaymentPositivePayDataAttributes.new({check_number: '10045', amount: 250000}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # CreatePositivePayRequest | 

begin
  # Create a positive pay rule
  result = api_instance.create_positive_pay(create_positive_pay_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->create_positive_pay: #{e}"
end
```

#### Using the create_positive_pay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreatePositivePay201Response>, Integer, Hash)> create_positive_pay_with_http_info(create_positive_pay_request)

```ruby
begin
  # Create a positive pay rule
  data, status_code, headers = api_instance.create_positive_pay_with_http_info(create_positive_pay_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreatePositivePay201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->create_positive_pay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_positive_pay_request** | [**CreatePositivePayRequest**](CreatePositivePayRequest.md) |  |  |

### Return type

[**CreatePositivePay201Response**](CreatePositivePay201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_positive_pay_by_id

> <GetPositivePayById200Response> get_positive_pay_by_id(positive_pay_id)

Get a positive pay rule by id

Get a Positive Pay rule by ID.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PositivePayApi.new
positive_pay_id = 'positive_pay_id_example' # String | 

begin
  # Get a positive pay rule by id
  result = api_instance.get_positive_pay_by_id(positive_pay_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->get_positive_pay_by_id: #{e}"
end
```

#### Using the get_positive_pay_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetPositivePayById200Response>, Integer, Hash)> get_positive_pay_by_id_with_http_info(positive_pay_id)

```ruby
begin
  # Get a positive pay rule by id
  data, status_code, headers = api_instance.get_positive_pay_by_id_with_http_info(positive_pay_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetPositivePayById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->get_positive_pay_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **positive_pay_id** | **String** |  |  |

### Return type

[**GetPositivePayById200Response**](GetPositivePayById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_positive_pay

> <ListPositivePay200Response> list_positive_pay(opts)

List positive pay rules

List Positive Pay rules. Filtering, paging, and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PositivePayApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_status: 'filter_status_example', # String | Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled.
  filter_type: 'filter_type_example', # String | Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay.
  filter_tags: 'filter_tags_example', # String | Optional. Filter positive pay by Tags.
  sort: 'sort_example' # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List positive pay rules
  result = api_instance.list_positive_pay(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->list_positive_pay: #{e}"
end
```

#### Using the list_positive_pay_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListPositivePay200Response>, Integer, Hash)> list_positive_pay_with_http_info(opts)

```ruby
begin
  # List positive pay rules
  data, status_code, headers = api_instance.list_positive_pay_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListPositivePay200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->list_positive_pay_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_status** | **String** | Optional. Filters by rule status. One of: AwaitingDocuments, Active, Expired, Cancelled. | [optional] |
| **filter_type** | **String** | Optional. Filters by rule type. One of: receivedAchDebitPositivePay, checkPaymentPositivePay, drawdownPositivePay. | [optional] |
| **filter_tags** | **String** | Optional. Filter positive pay by Tags. | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |

### Return type

[**ListPositivePay200Response**](ListPositivePay200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## upload_positive_pay_document

> upload_positive_pay_document(positive_pay_id, body)

Upload a positive pay document

Upload the authorization document required to activate a drawdown rule (Wire Drawdown Only).

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PositivePayApi.new
positive_pay_id = 'positive_pay_id_example' # String | 
body = File.new('/path/to/some/file') # File | 

begin
  # Upload a positive pay document
  api_instance.upload_positive_pay_document(positive_pay_id, body)
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->upload_positive_pay_document: #{e}"
end
```

#### Using the upload_positive_pay_document_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> upload_positive_pay_document_with_http_info(positive_pay_id, body)

```ruby
begin
  # Upload a positive pay document
  data, status_code, headers = api_instance.upload_positive_pay_document_with_http_info(positive_pay_id, body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PositivePayApi->upload_positive_pay_document_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **positive_pay_id** | **String** |  |  |
| **body** | **File** |  |  |

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/pdf, image/jpeg, image/png
- **Accept**: application/vnd.api+json

