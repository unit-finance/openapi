# UnitFinanceSdk::CounterpartiesApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_counterparty**](CounterpartiesApi.md#create_counterparty) | **POST** /counterparties | Create a counterparty |
| [**delete_counterparty**](CounterpartiesApi.md#delete_counterparty) | **DELETE** /counterparties/{counterpartyId} | Delete a counterparty |
| [**get_counterparty**](CounterpartiesApi.md#get_counterparty) | **GET** /counterparties/{counterpartyId} | Get a counterparty by id |
| [**get_counterparty_balance**](CounterpartiesApi.md#get_counterparty_balance) | **GET** /counterparties/{counterpartyId}/balance | Get a counterparty balance by id |
| [**list_counterparties**](CounterpartiesApi.md#list_counterparties) | **GET** /counterparties | List counterparties |
| [**update_counterparty**](CounterpartiesApi.md#update_counterparty) | **PATCH** /counterparties/{counterpartyId} | Update a counterparty |


## create_counterparty

> <CreateCounterparty201Response> create_counterparty(create_counterparty_body)

Create a counterparty

Creates an ACH counterparty for a specific customer. The request body is one of CreateCounterpartyRequest (account/routing number) or CreateCounterpartyWithPlaidTokenRequest (Plaid processor token).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CounterpartiesApi.new
create_counterparty_body = UnitFinanceSdk::CreateCounterpartyRequest.new({data: UnitFinanceSdk::CreateCounterpartyData.new({type: 'achCounterparty', attributes: UnitFinanceSdk::CreateCounterpartyDataAttributes.new({name: 'Joe Doe', routing_number: '011000133', account_number: '123', account_type: 'Checking', type: 'Person'}), relationships: UnitFinanceSdk::CreateDepositAccountDataRelationships.new({customer: UnitFinanceSdk::Relationship.new})})}) # CreateCounterpartyBody | 

begin
  # Create a counterparty
  result = api_instance.create_counterparty(create_counterparty_body)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->create_counterparty: #{e}"
end
```

#### Using the create_counterparty_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCounterparty201Response>, Integer, Hash)> create_counterparty_with_http_info(create_counterparty_body)

```ruby
begin
  # Create a counterparty
  data, status_code, headers = api_instance.create_counterparty_with_http_info(create_counterparty_body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCounterparty201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->create_counterparty_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_counterparty_body** | [**CreateCounterpartyBody**](CreateCounterpartyBody.md) |  |  |

### Return type

[**CreateCounterparty201Response**](CreateCounterparty201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## delete_counterparty

> delete_counterparty(counterparty_id, opts)

Delete a counterparty

Delete a counterparty resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CounterpartiesApi.new
counterparty_id = 'counterparty_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Delete a counterparty
  api_instance.delete_counterparty(counterparty_id, opts)
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->delete_counterparty: #{e}"
end
```

#### Using the delete_counterparty_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_counterparty_with_http_info(counterparty_id, opts)

```ruby
begin
  # Delete a counterparty
  data, status_code, headers = api_instance.delete_counterparty_with_http_info(counterparty_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->delete_counterparty_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **counterparty_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_counterparty

> <CreateCounterparty201Response> get_counterparty(counterparty_id)

Get a counterparty by id

Get a counterparty resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CounterpartiesApi.new
counterparty_id = 'counterparty_id_example' # String | 

begin
  # Get a counterparty by id
  result = api_instance.get_counterparty(counterparty_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->get_counterparty: #{e}"
end
```

#### Using the get_counterparty_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCounterparty201Response>, Integer, Hash)> get_counterparty_with_http_info(counterparty_id)

```ruby
begin
  # Get a counterparty by id
  data, status_code, headers = api_instance.get_counterparty_with_http_info(counterparty_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCounterparty201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->get_counterparty_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **counterparty_id** | **String** |  |  |

### Return type

[**CreateCounterparty201Response**](CreateCounterparty201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_counterparty_balance

> <GetCounterpartyBalance200Response> get_counterparty_balance(counterparty_id)

Get a counterparty balance by id

Get a counterparty balance resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CounterpartiesApi.new
counterparty_id = 'counterparty_id_example' # String | 

begin
  # Get a counterparty balance by id
  result = api_instance.get_counterparty_balance(counterparty_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->get_counterparty_balance: #{e}"
end
```

#### Using the get_counterparty_balance_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCounterpartyBalance200Response>, Integer, Hash)> get_counterparty_balance_with_http_info(counterparty_id)

```ruby
begin
  # Get a counterparty balance by id
  data, status_code, headers = api_instance.get_counterparty_balance_with_http_info(counterparty_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCounterpartyBalance200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->get_counterparty_balance_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **counterparty_id** | **String** |  |  |

### Return type

[**GetCounterpartyBalance200Response**](GetCounterpartyBalance200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_counterparties

> <ListCounterparties200Response> list_counterparties(opts)

List counterparties

List counterparties. Filtering and paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CounterpartiesApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_account_number: 'filter_account_number_example', # String | Optional. Filters the results by the specified account number.
  filter_routing_number: 'filter_routing_number_example', # String | Optional. Filters the results by the specified routing number.
  filter_tags: 'filter_tags_example', # String | Optional. Filter Counterparties by Tags.
  filter_permissions: 'filter_permissions_example', # String | Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]=CreditOnly&filter[permissions][1]=CreditAndDebit*
  sort: 'sort_example' # String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List counterparties
  result = api_instance.list_counterparties(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->list_counterparties: #{e}"
end
```

#### Using the list_counterparties_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCounterparties200Response>, Integer, Hash)> list_counterparties_with_http_info(opts)

```ruby
begin
  # List counterparties
  data, status_code, headers = api_instance.list_counterparties_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCounterparties200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->list_counterparties_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_account_number** | **String** | Optional. Filters the results by the specified account number. | [optional] |
| **filter_routing_number** | **String** | Optional. Filters the results by the specified routing number. | [optional] |
| **filter_tags** | **String** | Optional. Filter Counterparties by Tags. | [optional] |
| **filter_permissions** | **String** | Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]&#x3D;CreditOnly&amp;filter[permissions][1]&#x3D;CreditAndDebit* | [optional] |
| **sort** | **String** | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;createdAt&#39;] |

### Return type

[**ListCounterparties200Response**](ListCounterparties200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## update_counterparty

> <UpdateCounterparty200Response> update_counterparty(counterparty_id, update_counterparty_request)

Update a counterparty

Update a Counterparty. Relink existing counterparty with a new Plaid processor token.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CounterpartiesApi.new
counterparty_id = 'counterparty_id_example' # String | 
update_counterparty_request = UnitFinanceSdk::UpdateCounterpartyRequest.new({data: UnitFinanceSdk::UpdateCounterpartyData.new({type: 'counterparty', attributes: UnitFinanceSdk::UpdateCounterpartyDataAttributes.new})}) # UpdateCounterpartyRequest | 

begin
  # Update a counterparty
  result = api_instance.update_counterparty(counterparty_id, update_counterparty_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->update_counterparty: #{e}"
end
```

#### Using the update_counterparty_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateCounterparty200Response>, Integer, Hash)> update_counterparty_with_http_info(counterparty_id, update_counterparty_request)

```ruby
begin
  # Update a counterparty
  data, status_code, headers = api_instance.update_counterparty_with_http_info(counterparty_id, update_counterparty_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateCounterparty200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CounterpartiesApi->update_counterparty_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **counterparty_id** | **String** |  |  |
| **update_counterparty_request** | [**UpdateCounterpartyRequest**](UpdateCounterpartyRequest.md) |  |  |

### Return type

[**UpdateCounterparty200Response**](UpdateCounterparty200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

