# UnitFinanceSdk::RepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_repayment**](RepaymentsApi.md#create_repayment) | **POST** /repayments | Create a repayment |
| [**get_repayment**](RepaymentsApi.md#get_repayment) | **GET** /repayments/{repaymentId} | Get a repayment by id |
| [**list_repayments**](RepaymentsApi.md#list_repayments) | **GET** /repayments | List repayments |
| [**return_external_repayment**](RepaymentsApi.md#return_external_repayment) | **POST** /repayments/{repaymentId}/return | Return an external repayment |


## create_repayment

> <CreateRepayment201Response> create_repayment(create_repayment_request)

Create a repayment

Create a repayment for a credit account. The request body is one of CreateACHRepaymentRequest, CreateBookRepaymentRequest, CreateCapitalPartnerACHRepaymentRequest, CreateCapitalPartnerBookRepaymentRequest, or CreateExternalRepaymentRequest, discriminated by data.type (repayment, externalRepayment) together with the relationships supplied — the capital partner variants omit the account relationship, the book variants use counterpartyAccount instead of counterparty, and the external variant only takes creditAccount.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RepaymentsApi.new
create_repayment_request = UnitFinanceSdk::CreateACHRepaymentRequest.new({data: UnitFinanceSdk::CreateACHRepaymentData.new({type: 'repayment', attributes: UnitFinanceSdk::CreateACHRepaymentDataAttributes.new({description: 'test', amount: 200}), relationships: UnitFinanceSdk::CreateRecurringACHRepaymentDataRelationships.new({account: UnitFinanceSdk::Relationship.new, credit_account: UnitFinanceSdk::Relationship.new, counterparty: })})}) # CreateRepaymentRequest | 

begin
  # Create a repayment
  result = api_instance.create_repayment(create_repayment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->create_repayment: #{e}"
end
```

#### Using the create_repayment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRepayment201Response>, Integer, Hash)> create_repayment_with_http_info(create_repayment_request)

```ruby
begin
  # Create a repayment
  data, status_code, headers = api_instance.create_repayment_with_http_info(create_repayment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRepayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->create_repayment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_repayment_request** | [**CreateRepaymentRequest**](CreateRepaymentRequest.md) |  |  |

### Return type

[**CreateRepayment201Response**](CreateRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_repayment

> <GetRepayment200Response> get_repayment(repayment_id)

Get a repayment by id

Get a repayment by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RepaymentsApi.new
repayment_id = 'repayment_id_example' # String | 

begin
  # Get a repayment by id
  result = api_instance.get_repayment(repayment_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->get_repayment: #{e}"
end
```

#### Using the get_repayment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetRepayment200Response>, Integer, Hash)> get_repayment_with_http_info(repayment_id)

```ruby
begin
  # Get a repayment by id
  data, status_code, headers = api_instance.get_repayment_with_http_info(repayment_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetRepayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->get_repayment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **repayment_id** | **String** |  |  |

### Return type

[**GetRepayment200Response**](GetRepayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_repayments

> <ListRepayments200Response> list_repayments(opts)

List repayments

List repayments resources. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RepaymentsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_credit_account_id: 'filter_credit_account_id_example', # String | Optional. Filters the results by the specified credit account id.
  filter_recurring_repayment_id: 'filter_recurring_repayment_id_example', # String | Optional. Filters the result according to the associated Recurring Repayment id
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_status: 'filter_status_example', # String | Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]=Active
  filter_type: 'filter_type_example', # String | Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]=AchRepayment&filter[type][1]=BookRepayment*
  filter_since: 'filter_since_example', # String | Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
  filter_until: 'filter_until_example' # String | Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
}

begin
  # List repayments
  result = api_instance.list_repayments(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->list_repayments: #{e}"
end
```

#### Using the list_repayments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListRepayments200Response>, Integer, Hash)> list_repayments_with_http_info(opts)

```ruby
begin
  # List repayments
  data, status_code, headers = api_instance.list_repayments_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListRepayments200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->list_repayments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_credit_account_id** | **String** | Optional. Filters the results by the specified credit account id. | [optional] |
| **filter_recurring_repayment_id** | **String** | Optional. Filters the result according to the associated Recurring Repayment id | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_status** | **String** | Optional. Filter repayments by status (Pending, PendingReview, Returned, Sent or Rejected). Usage example: *filter[status][0]&#x3D;Active | [optional] |
| **filter_type** | **String** | Optional. Filter repayments by Repayment type. such as (AchRepayment, BookRepayment, ExternalRepayment). Usage example: *filter[type][0]&#x3D;AchRepayment&amp;filter[type][1]&#x3D;BookRepayment* | [optional] |
| **filter_since** | **String** | Optional. Filters Repayments that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filter_until** | **String** | Optional. Filters the Repayments that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |

### Return type

[**ListRepayments200Response**](ListRepayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## return_external_repayment

> <ReturnExternalRepayment200Response> return_external_repayment(repayment_id, return_external_repayment_request)

Return an external repayment

Returns an external repayment that was previously created with `Sent` status. This is used when the external payment needs to be reversed. When an external repayment is returned, the credit account balance will increase and the available credit limit will decrease.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RepaymentsApi.new
repayment_id = 'repayment_id_example' # String | 
return_external_repayment_request = UnitFinanceSdk::ReturnExternalRepaymentRequest.new({data: UnitFinanceSdk::ReturnExternalRepaymentData.new({type: 'externalRepaymentReturn', attributes: 3.56, relationships: UnitFinanceSdk::ReturnExternalRepaymentDataRelationships.new({repayment: UnitFinanceSdk::Relationship.new})})}) # ReturnExternalRepaymentRequest | 

begin
  # Return an external repayment
  result = api_instance.return_external_repayment(repayment_id, return_external_repayment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->return_external_repayment: #{e}"
end
```

#### Using the return_external_repayment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ReturnExternalRepayment200Response>, Integer, Hash)> return_external_repayment_with_http_info(repayment_id, return_external_repayment_request)

```ruby
begin
  # Return an external repayment
  data, status_code, headers = api_instance.return_external_repayment_with_http_info(repayment_id, return_external_repayment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ReturnExternalRepayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RepaymentsApi->return_external_repayment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **repayment_id** | **String** |  |  |
| **return_external_repayment_request** | [**ReturnExternalRepaymentRequest**](ReturnExternalRepaymentRequest.md) |  |  |

### Return type

[**ReturnExternalRepayment200Response**](ReturnExternalRepayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

