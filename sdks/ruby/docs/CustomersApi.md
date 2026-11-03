# UnitFinanceSdk::CustomersApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**archive_customer**](CustomersApi.md#archive_customer) | **POST** /customers/{customerId}/archive | Archive a customer |
| [**create_business_wallet_customer**](CustomersApi.md#create_business_wallet_customer) | **POST** /customers | Create a business wallet customer |
| [**get_customer**](CustomersApi.md#get_customer) | **GET** /customers/{customerId} | Get a customer |
| [**list_customers**](CustomersApi.md#list_customers) | **GET** /customers | List customers |
| [**update_business_customer_officer**](CustomersApi.md#update_business_customer_officer) | **PATCH** /customers/{customerId}/officers/{officerId} | Update a business customer officer |
| [**update_customer**](CustomersApi.md#update_customer) | **PATCH** /customers/{customerId} | Update a customer |


## archive_customer

> <UpdateCustomer200Response> archive_customer(customer_id, archive_customer_request)

Archive a customer

Archive a customer. The Customer Archived webhook event will be fired.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CustomersApi.new
customer_id = 'customer_id_example' # String | 
archive_customer_request = UnitFinanceSdk::ArchiveCustomerRequest.new({data: UnitFinanceSdk::ArchiveCustomerData.new({type: 'archiveCustomer', attributes: UnitFinanceSdk::ArchiveCustomerDataAttributes.new({reason: 'FraudCardActivity'})})}) # ArchiveCustomerRequest | 

begin
  # Archive a customer
  result = api_instance.archive_customer(customer_id, archive_customer_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->archive_customer: #{e}"
end
```

#### Using the archive_customer_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateCustomer200Response>, Integer, Hash)> archive_customer_with_http_info(customer_id, archive_customer_request)

```ruby
begin
  # Archive a customer
  data, status_code, headers = api_instance.archive_customer_with_http_info(customer_id, archive_customer_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateCustomer200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->archive_customer_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **archive_customer_request** | [**ArchiveCustomerRequest**](ArchiveCustomerRequest.md) |  |  |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_business_wallet_customer

> <CreateBusinessWalletCustomer201Response> create_business_wallet_customer(create_business_wallet_customer_request)

Create a business wallet customer

Create a business wallet customer.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CustomersApi.new
create_business_wallet_customer_request = UnitFinanceSdk::CreateBusinessWalletCustomerRequest.new({data: UnitFinanceSdk::CreateBusinessWalletCustomerData.new({type: 'businessWalletCustomer', attributes: UnitFinanceSdk::CreateBusinessWalletCustomerDataAttributes.new({bank_name: 'myBankName', business_name: 'Sirius & Snape Inc.', address: UnitFinanceSdk::AddressType.new({street: 'street_example', city: 'city_example', state: 'state_example', postal_code: 'postal_code_example', country: 'country_example'}), ein: '123456789', business_vertical: UnitFinanceSdk::BusinessVerticalType::ADULT_ENTERTAINMENT_DATING_OR_ESCORT_SERVICES, number_of_employees: UnitFinanceSdk::BusinessNumberOfEmployeesType::UP_TO10})})}) # CreateBusinessWalletCustomerRequest | 

begin
  # Create a business wallet customer
  result = api_instance.create_business_wallet_customer(create_business_wallet_customer_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->create_business_wallet_customer: #{e}"
end
```

#### Using the create_business_wallet_customer_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateBusinessWalletCustomer201Response>, Integer, Hash)> create_business_wallet_customer_with_http_info(create_business_wallet_customer_request)

```ruby
begin
  # Create a business wallet customer
  data, status_code, headers = api_instance.create_business_wallet_customer_with_http_info(create_business_wallet_customer_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateBusinessWalletCustomer201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->create_business_wallet_customer_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_business_wallet_customer_request** | [**CreateBusinessWalletCustomerRequest**](CreateBusinessWalletCustomerRequest.md) |  |  |

### Return type

[**CreateBusinessWalletCustomer201Response**](CreateBusinessWalletCustomer201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_customer

> <GetCustomer200Response> get_customer(customer_id, opts)

Get a customer

Get a customer resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CustomersApi.new
customer_id = 'customer_id_example' # String | 
opts = {
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources
}

begin
  # Get a customer
  result = api_instance.get_customer(customer_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->get_customer: #{e}"
end
```

#### Using the get_customer_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCustomer200Response>, Integer, Hash)> get_customer_with_http_info(customer_id, opts)

```ruby
begin
  # Get a customer
  data, status_code, headers = api_instance.get_customer_with_http_info(customer_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCustomer200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->get_customer_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resource include: authorizedUser. See Getting Related Resources | [optional] |

### Return type

[**GetCustomer200Response**](GetCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_customers

> <ListCustomers200Response> list_customers(opts)

List customers

List customer resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CustomersApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_query: 'filter_query_example', # String | Optional. Search term according to the Full-Text Search Rules.
  filter_email: 'filter_email_example', # String | Optional. Filter customers by email address (case sensitive).
  filter_tags: 'filter_tags_example', # String | Optional. Filter Customers by Tags.
  filter_status: 'filter_status_example', # String | Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]=Active
  sort: 'sort_example' # String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List customers
  result = api_instance.list_customers(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->list_customers: #{e}"
end
```

#### Using the list_customers_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCustomers200Response>, Integer, Hash)> list_customers_with_http_info(opts)

```ruby
begin
  # List customers
  data, status_code, headers = api_instance.list_customers_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCustomers200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->list_customers_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_query** | **String** | Optional. Search term according to the Full-Text Search Rules. | [optional] |
| **filter_email** | **String** | Optional. Filter customers by email address (case sensitive). | [optional] |
| **filter_tags** | **String** | Optional. Filter Customers by Tags. | [optional] |
| **filter_status** | **String** | Optional. Filter customers by status (Active, Archived). Usage example: *filter[status][0]&#x3D;Active | [optional] |
| **sort** | **String** | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |

### Return type

[**ListCustomers200Response**](ListCustomers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## update_business_customer_officer

> <UpdateBusinessCustomerOfficer200Response> update_business_customer_officer(customer_id, officer_id, update_business_customer_officer_request)

Update a business customer officer

Update an officer of a business customer.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CustomersApi.new
customer_id = 'customer_id_example' # String | 
officer_id = 'officer_id_example' # String | 
update_business_customer_officer_request = UnitFinanceSdk::UpdateBusinessCustomerOfficerRequest.new({data: UnitFinanceSdk::UpdateBusinessCustomerOfficerData.new({type: 'officer', attributes: UnitFinanceSdk::UpdateBusinessCustomerOfficerDataAttributes.new})}) # UpdateBusinessCustomerOfficerRequest | 

begin
  # Update a business customer officer
  result = api_instance.update_business_customer_officer(customer_id, officer_id, update_business_customer_officer_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->update_business_customer_officer: #{e}"
end
```

#### Using the update_business_customer_officer_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateBusinessCustomerOfficer200Response>, Integer, Hash)> update_business_customer_officer_with_http_info(customer_id, officer_id, update_business_customer_officer_request)

```ruby
begin
  # Update a business customer officer
  data, status_code, headers = api_instance.update_business_customer_officer_with_http_info(customer_id, officer_id, update_business_customer_officer_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateBusinessCustomerOfficer200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->update_business_customer_officer_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **officer_id** | **String** |  |  |
| **update_business_customer_officer_request** | [**UpdateBusinessCustomerOfficerRequest**](UpdateBusinessCustomerOfficerRequest.md) |  |  |

### Return type

[**UpdateBusinessCustomerOfficer200Response**](UpdateBusinessCustomerOfficer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_customer

> <UpdateCustomer200Response> update_customer(customer_id, update_customer_request)

Update a customer

Update a customer. The Customer Updated webhook event will be fired. Variants: - **UpdateBusinessCustomer** - **UpdateIndividualCustomer**

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CustomersApi.new
customer_id = 'customer_id_example' # String | 
update_customer_request = UnitFinanceSdk::UpdateBusinessCustomerRequest.new({data: UnitFinanceSdk::UpdateBusinessCustomerData.new({type: 'businessCustomer', attributes: UnitFinanceSdk::UpdateBusinessCustomerDataAttributes.new})}) # UpdateCustomerRequest | 

begin
  # Update a customer
  result = api_instance.update_customer(customer_id, update_customer_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->update_customer: #{e}"
end
```

#### Using the update_customer_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateCustomer200Response>, Integer, Hash)> update_customer_with_http_info(customer_id, update_customer_request)

```ruby
begin
  # Update a customer
  data, status_code, headers = api_instance.update_customer_with_http_info(customer_id, update_customer_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateCustomer200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CustomersApi->update_customer_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **update_customer_request** | [**UpdateCustomerRequest**](UpdateCustomerRequest.md) |  |  |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

