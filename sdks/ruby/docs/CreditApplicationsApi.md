# UnitFinanceSdk::CreditApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_credit_application**](CreditApplicationsApi.md#create_credit_application) | **POST** /credit-applications | Create a credit application |
| [**get_credit_application**](CreditApplicationsApi.md#get_credit_application) | **GET** /credit-applications/{creditApplicationId} | Get a credit application by id |
| [**list_credit_applications**](CreditApplicationsApi.md#list_credit_applications) | **GET** /credit-applications | List credit applications |
| [**update_credit_application**](CreditApplicationsApi.md#update_credit_application) | **PATCH** /credit-applications/{creditApplicationId} | Update a credit application |


## create_credit_application

> <CreateCreditApplication201Response> create_credit_application(create_credit_application_request)

Create a credit application

Create a credit application. The request body is one of CreateExistingCreditApplicationRequest (an existing customer, related to a customer) or CreateOnboardingCreditApplicationRequest (a customer being onboarded, related to an application).

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CreditApplicationsApi.new
create_credit_application_request = UnitFinanceSdk::CreateExistingCreditApplicationRequest.new({data: UnitFinanceSdk::CreateExistingCreditApplicationData.new({type: 'createExistingCustomerCreditApplication', attributes: UnitFinanceSdk::CreateExistingCreditApplicationDataAttributes.new, relationships: UnitFinanceSdk::CreateExistingCreditApplicationDataRelationships.new({customer: UnitFinanceSdk::Relationship.new, lending_program: UnitFinanceSdk::Relationship.new})})}) # CreateCreditApplicationRequest | 

begin
  # Create a credit application
  result = api_instance.create_credit_application(create_credit_application_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->create_credit_application: #{e}"
end
```

#### Using the create_credit_application_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCreditApplication201Response>, Integer, Hash)> create_credit_application_with_http_info(create_credit_application_request)

```ruby
begin
  # Create a credit application
  data, status_code, headers = api_instance.create_credit_application_with_http_info(create_credit_application_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCreditApplication201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->create_credit_application_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_credit_application_request** | [**CreateCreditApplicationRequest**](CreateCreditApplicationRequest.md) |  |  |

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_credit_application

> <CreateCreditApplication201Response> get_credit_application(credit_application_id)

Get a credit application by id

Get a credit application resource by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CreditApplicationsApi.new
credit_application_id = 'credit_application_id_example' # String | 

begin
  # Get a credit application by id
  result = api_instance.get_credit_application(credit_application_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->get_credit_application: #{e}"
end
```

#### Using the get_credit_application_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCreditApplication201Response>, Integer, Hash)> get_credit_application_with_http_info(credit_application_id)

```ruby
begin
  # Get a credit application by id
  data, status_code, headers = api_instance.get_credit_application_with_http_info(credit_application_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCreditApplication201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->get_credit_application_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **credit_application_id** | **String** |  |  |

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_credit_applications

> <ListCreditApplications200Response> list_credit_applications(opts)

List credit applications

List credit applications resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CreditApplicationsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_lending_program_id: 'filter_lending_program_id_example', # String | Optional. Search resources by lending program id.
  filter_org_id: 'filter_org_id_example', # String | Optional. Search resources by organization id.
  filter_bank_id: 'filter_bank_id_example', # String | Optional. Search resources by bank id.
  filter_application_id: 'filter_application_id_example', # String | Optional. Search resources by application id.
  filter_customer_id: 'filter_customer_id_example' # String | Optional. Search resources by customer id.
}

begin
  # List credit applications
  result = api_instance.list_credit_applications(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->list_credit_applications: #{e}"
end
```

#### Using the list_credit_applications_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCreditApplications200Response>, Integer, Hash)> list_credit_applications_with_http_info(opts)

```ruby
begin
  # List credit applications
  data, status_code, headers = api_instance.list_credit_applications_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCreditApplications200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->list_credit_applications_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_lending_program_id** | **String** | Optional. Search resources by lending program id. | [optional] |
| **filter_org_id** | **String** | Optional. Search resources by organization id. | [optional] |
| **filter_bank_id** | **String** | Optional. Search resources by bank id. | [optional] |
| **filter_application_id** | **String** | Optional. Search resources by application id. | [optional] |
| **filter_customer_id** | **String** | Optional. Search resources by customer id. | [optional] |

### Return type

[**ListCreditApplications200Response**](ListCreditApplications200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## update_credit_application

> <CreateCreditApplication201Response> update_credit_application(credit_application_id, update_credit_application_request)

Update a credit application

Update a credit application.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CreditApplicationsApi.new
credit_application_id = 'credit_application_id_example' # String | 
update_credit_application_request = UnitFinanceSdk::UpdateCreditApplicationRequest.new({data: UnitFinanceSdk::UpdateCreditApplicationData.new({type: 'patchCreditApplication', attributes: UnitFinanceSdk::UpdateCreditApplicationDataAttributes.new})}) # UpdateCreditApplicationRequest | 

begin
  # Update a credit application
  result = api_instance.update_credit_application(credit_application_id, update_credit_application_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->update_credit_application: #{e}"
end
```

#### Using the update_credit_application_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCreditApplication201Response>, Integer, Hash)> update_credit_application_with_http_info(credit_application_id, update_credit_application_request)

```ruby
begin
  # Update a credit application
  data, status_code, headers = api_instance.update_credit_application_with_http_info(credit_application_id, update_credit_application_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCreditApplication201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditApplicationsApi->update_credit_application_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **credit_application_id** | **String** |  |  |
| **update_credit_application_request** | [**UpdateCreditApplicationRequest**](UpdateCreditApplicationRequest.md) |  |  |

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

