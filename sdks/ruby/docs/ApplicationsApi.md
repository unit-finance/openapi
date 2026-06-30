# UnitFinanceSdk::ApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cancel_application**](ApplicationsApi.md#cancel_application) | **POST** /applications/{id}/cancel | Cancel an application |
| [**check_registered_agent_address**](ApplicationsApi.md#check_registered_agent_address) | **POST** /applications/check-registered-agent-address | Check a registered agent address |
| [**create_application**](ApplicationsApi.md#create_application) | **POST** /applications | Create an application |
| [**get_by_id**](ApplicationsApi.md#get_by_id) | **GET** /applications/{id} | Get an application |
| [**list**](ApplicationsApi.md#list) | **GET** /applications | List applications |
| [**update_application**](ApplicationsApi.md#update_application) | **PATCH** /applications/{id} | Update an application |
| [**update_business_beneficial_owner**](ApplicationsApi.md#update_business_beneficial_owner) | **PATCH** /beneficial-owner/{id} | Update a business beneficial owner |


## cancel_application

> <CancelApplication201Response> cancel_application(id, cancel_application_request)

Cancel an application

Cancel an Application under `PendingReview` or `AwaitingDocuments` status. The application.canceled webhook event will be fired.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationsApi.new
id = 'id_example' # String | 
cancel_application_request = UnitFinanceSdk::CancelApplicationRequest.new({data: UnitFinanceSdk::CancelApplicationData.new({type: 'applicationCancel', attributes: UnitFinanceSdk::CancelApplicationDataAttributes.new({reason: 'By Org'})})}) # CancelApplicationRequest | 

begin
  # Cancel an application
  result = api_instance.cancel_application(id, cancel_application_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->cancel_application: #{e}"
end
```

#### Using the cancel_application_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CancelApplication201Response>, Integer, Hash)> cancel_application_with_http_info(id, cancel_application_request)

```ruby
begin
  # Cancel an application
  data, status_code, headers = api_instance.cancel_application_with_http_info(id, cancel_application_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CancelApplication201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->cancel_application_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **cancel_application_request** | [**CancelApplicationRequest**](CancelApplicationRequest.md) |  |  |

### Return type

[**CancelApplication201Response**](CancelApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## check_registered_agent_address

> <CheckRegisteredAgentAddress200Response> check_registered_agent_address(check_registered_agent_address_request)

Check a registered agent address

Checks if an address is a registered agent address.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationsApi.new
check_registered_agent_address_request = UnitFinanceSdk::CheckRegisteredAgentAddressRequest.new({data: UnitFinanceSdk::CheckRegisteredAgentAddressData.new({type: 'checkRegisteredAgentAddress', attributes: UnitFinanceSdk::CheckRegisteredAgentAddressDataAttributes.new({address: UnitFinanceSdk::AddressType.new({street: 'street_example', city: 'city_example', state: 'state_example', postal_code: 'postal_code_example', country: 'country_example'})})})}) # CheckRegisteredAgentAddressRequest | 

begin
  # Check a registered agent address
  result = api_instance.check_registered_agent_address(check_registered_agent_address_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->check_registered_agent_address: #{e}"
end
```

#### Using the check_registered_agent_address_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CheckRegisteredAgentAddress200Response>, Integer, Hash)> check_registered_agent_address_with_http_info(check_registered_agent_address_request)

```ruby
begin
  # Check a registered agent address
  data, status_code, headers = api_instance.check_registered_agent_address_with_http_info(check_registered_agent_address_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CheckRegisteredAgentAddress200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->check_registered_agent_address_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_registered_agent_address_request** | [**CheckRegisteredAgentAddressRequest**](CheckRegisteredAgentAddressRequest.md) |  |  |

### Return type

[**CheckRegisteredAgentAddress200Response**](CheckRegisteredAgentAddress200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_application

> <CreateApplication201Response> create_application(create_application_request)

Create an application

Create an application. Variants: - **CreateBusinessApplication** - **CreateIndividualApplication** - **CreateSoleProprietorApplication**

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationsApi.new
create_application_request = UnitFinanceSdk::CreateBusinessApplicationRequest.new({data: UnitFinanceSdk::CreateBusinessApplicationData.new({type: 'businessApplication', attributes: UnitFinanceSdk::CreateBusinessApplicationDataAttributes.new({name: 'Pied Piper', address: UnitFinanceSdk::AddressType.new({street: 'street_example', city: 'city_example', state: 'state_example', postal_code: 'postal_code_example', country: 'country_example'}), phone: UnitFinanceSdk::PhoneType.new({country_code: 'country_code_example', number: 'number_example'}), state_of_incorporation: 'DE', ein: '123456789', entity_type: 'Corporation', website: 'https://www.piedpiper.com', contact: UnitFinanceSdk::BusinessContactType.new({full_name: UnitFinanceSdk::FullNameType.new({first: 'first_example', last: 'last_example'}), email: 'email_example', phone: UnitFinanceSdk::PhoneType.new({country_code: 'country_code_example', number: 'number_example'})}), officer: UnitFinanceSdk::OfficerRequestType.new({full_name: UnitFinanceSdk::FullNameType.new({first: 'first_example', last: 'last_example'}), title: 'title_example', date_of_birth: 'date_of_birth_example', address: UnitFinanceSdk::AddressType.new({street: 'street_example', city: 'city_example', state: 'state_example', postal_code: 'postal_code_example', country: 'country_example'}), phone: , email: 'email_example'}), beneficial_owners: [UnitFinanceSdk::BeneficialOwnerRequestType.new({full_name: , date_of_birth: 'date_of_birth_example', address: , phone: , email: 'email_example'})], annual_revenue: UnitFinanceSdk::BusinessAnnualRevenueType::UP_TO250K, number_of_employees: UnitFinanceSdk::BusinessNumberOfEmployeesType::UP_TO10, cash_flow: UnitFinanceSdk::CashFlowType::UNPREDICTABLE, year_of_incorporation: '2014', countries_of_operation: ["US", "CA"], business_vertical: UnitFinanceSdk::BusinessVerticalType::ADULT_ENTERTAINMENT_DATING_OR_ESCORT_SERVICES})})}) # CreateApplicationRequest | 

begin
  # Create an application
  result = api_instance.create_application(create_application_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->create_application: #{e}"
end
```

#### Using the create_application_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateApplication201Response>, Integer, Hash)> create_application_with_http_info(create_application_request)

```ruby
begin
  # Create an application
  data, status_code, headers = api_instance.create_application_with_http_info(create_application_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateApplication201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->create_application_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_application_request** | [**CreateApplicationRequest**](CreateApplicationRequest.md) |  |  |

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_by_id

> <CreateApplication201Response> get_by_id(id)

Get an application

Get an application resource by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationsApi.new
id = 'id_example' # String | 

begin
  # Get an application
  result = api_instance.get_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->get_by_id: #{e}"
end
```

#### Using the get_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateApplication201Response>, Integer, Hash)> get_by_id_with_http_info(id)

```ruby
begin
  # Get an application
  data, status_code, headers = api_instance.get_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateApplication201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->get_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list

> <List200Response> list(opts)

List applications

List application resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
  filter_query: 'filter_query_example', # String | Optional. Search term according to the Full-Text Search Rules.
  filter_status: 'filter_status_example', # String | Optional. Filter applications by Application Status. Usage example: *filter[status][0]=Pending&filter[status][1]=Approved*
  filter_email: 'filter_email_example', # String | Optional. Filter applications by email address (case sensitive).
  filter_tags: 'filter_tags_example', # String | Optional. Filter Applications by Tags.
  sort: 'sort_example' # String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List applications
  result = api_instance.list(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->list: #{e}"
end
```

#### Using the list_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<List200Response>, Integer, Hash)> list_with_http_info(opts)

```ruby
begin
  # List applications
  data, status_code, headers = api_instance.list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <List200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional][default to &#39;0&#39;] |
| **filter_query** | **String** | Optional. Search term according to the Full-Text Search Rules. | [optional] |
| **filter_status** | **String** | Optional. Filter applications by Application Status. Usage example: *filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Approved* | [optional] |
| **filter_email** | **String** | Optional. Filter applications by email address (case sensitive). | [optional] |
| **filter_tags** | **String** | Optional. Filter Applications by Tags. | [optional] |
| **sort** | **String** | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |

### Return type

[**List200Response**](List200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## update_application

> <CreateApplication201Response> update_application(id, update_application_request)

Update an application

Update an application. Variants: - **UpdateBusiness** - **UpdateBusinessOfficer** - **UpdateIndividual** - **UpdateSoleProprietor**

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationsApi.new
id = 'id_example' # String | 
update_application_request = UnitFinanceSdk::UpdateBusinessApplicationRequest.new({data: UnitFinanceSdk::UpdateBusinessApplicationData.new({type: 'businessApplication', attributes: UnitFinanceSdk::UpdateBusinessApplicationDataAttributes.new({tags: { key: 3.56}})})}) # UpdateApplicationRequest | 

begin
  # Update an application
  result = api_instance.update_application(id, update_application_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->update_application: #{e}"
end
```

#### Using the update_application_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateApplication201Response>, Integer, Hash)> update_application_with_http_info(id, update_application_request)

```ruby
begin
  # Update an application
  data, status_code, headers = api_instance.update_application_with_http_info(id, update_application_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateApplication201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->update_application_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **update_application_request** | [**UpdateApplicationRequest**](UpdateApplicationRequest.md) |  |  |

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_business_beneficial_owner

> <UpdateBusinessBeneficialOwner201Response> update_business_beneficial_owner(id, update_business_beneficial_owner_request)

Update a business beneficial owner

Update a business application's beneficial owner. The application id associated with the beneficial owner must be passed as a relationship in the request body.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ApplicationsApi.new
id = 'id_example' # String | 
update_business_beneficial_owner_request = UnitFinanceSdk::UpdateBusinessBeneficialOwnerRequest.new({data: UnitFinanceSdk::UpdateBusinessBeneficialOwnerData.new({type: 'beneficialOwner', attributes: UnitFinanceSdk::UpdateBusinessBeneficialOwnerDataAttributes.new})}) # UpdateBusinessBeneficialOwnerRequest | 

begin
  # Update a business beneficial owner
  result = api_instance.update_business_beneficial_owner(id, update_business_beneficial_owner_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->update_business_beneficial_owner: #{e}"
end
```

#### Using the update_business_beneficial_owner_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateBusinessBeneficialOwner201Response>, Integer, Hash)> update_business_beneficial_owner_with_http_info(id, update_business_beneficial_owner_request)

```ruby
begin
  # Update a business beneficial owner
  data, status_code, headers = api_instance.update_business_beneficial_owner_with_http_info(id, update_business_beneficial_owner_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateBusinessBeneficialOwner201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ApplicationsApi->update_business_beneficial_owner_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **update_business_beneficial_owner_request** | [**UpdateBusinessBeneficialOwnerRequest**](UpdateBusinessBeneficialOwnerRequest.md) |  |  |

### Return type

[**UpdateBusinessBeneficialOwner201Response**](UpdateBusinessBeneficialOwner201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

