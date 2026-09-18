# UnitFinanceSdk::AuthorizedUsersApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_authorized_users**](AuthorizedUsersApi.md#add_authorized_users) | **POST** /customers/{customerId}/authorized-users | Add authorized users |
| [**get_authorized_user**](AuthorizedUsersApi.md#get_authorized_user) | **GET** /customers/{customerId}/authorized-users/{authorizedUserId} | Get an authorized user |
| [**list_authorized_users**](AuthorizedUsersApi.md#list_authorized_users) | **GET** /customers/{customerId}/authorized-users | List authorized users |
| [**remove_authorized_users**](AuthorizedUsersApi.md#remove_authorized_users) | **DELETE** /customers/{customerId}/authorized-users | Remove authorized users |


## add_authorized_users

> <UpdateCustomer200Response> add_authorized_users(customer_id, add_authorized_users_request)

Add authorized users

Add authorized users for a customer. The Customer Update webhook event will be fired.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AuthorizedUsersApi.new
customer_id = 'customer_id_example' # String | 
add_authorized_users_request = UnitFinanceSdk::AddAuthorizedUsersRequest.new({data: UnitFinanceSdk::AddAuthorizedUsersData.new({type: 'addAuthorizedUsers', attributes: UnitFinanceSdk::AddAuthorizedUsersDataAttributes.new({authorized_users: [{"fullName": {"first": "Erlich", "last": "Backman"}, "email": "erlich@piedpiper.com", "phone": {"countryCode": "1", "number": "1234567890"}, "canConnectWithAuthVendor": true}]})})}) # AddAuthorizedUsersRequest | 

begin
  # Add authorized users
  result = api_instance.add_authorized_users(customer_id, add_authorized_users_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->add_authorized_users: #{e}"
end
```

#### Using the add_authorized_users_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateCustomer200Response>, Integer, Hash)> add_authorized_users_with_http_info(customer_id, add_authorized_users_request)

```ruby
begin
  # Add authorized users
  data, status_code, headers = api_instance.add_authorized_users_with_http_info(customer_id, add_authorized_users_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateCustomer200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->add_authorized_users_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **add_authorized_users_request** | [**AddAuthorizedUsersRequest**](AddAuthorizedUsersRequest.md) |  |  |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_authorized_user

> <GetAuthorizedUser200Response> get_authorized_user(customer_id, authorized_user_id)

Get an authorized user

Get an authorized user resource by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AuthorizedUsersApi.new
customer_id = 'customer_id_example' # String | 
authorized_user_id = 'authorized_user_id_example' # String | 

begin
  # Get an authorized user
  result = api_instance.get_authorized_user(customer_id, authorized_user_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->get_authorized_user: #{e}"
end
```

#### Using the get_authorized_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAuthorizedUser200Response>, Integer, Hash)> get_authorized_user_with_http_info(customer_id, authorized_user_id)

```ruby
begin
  # Get an authorized user
  data, status_code, headers = api_instance.get_authorized_user_with_http_info(customer_id, authorized_user_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAuthorizedUser200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->get_authorized_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **authorized_user_id** | **String** |  |  |

### Return type

[**GetAuthorizedUser200Response**](GetAuthorizedUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_authorized_users

> <ListAuthorizedUsers200Response> list_authorized_users(customer_id, opts)

List authorized users

List of authorized user resources. Filtering can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AuthorizedUsersApi.new
customer_id = 'customer_id_example' # String | 
opts = {
  filter_jwt_subject: 'filter_jwt_subject_example', # String | Optional. Filter authorized users by JWT subject.
  filter_phone: 'filter_phone_example' # String | Optional. Filter authorized users by phone.
}

begin
  # List authorized users
  result = api_instance.list_authorized_users(customer_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->list_authorized_users: #{e}"
end
```

#### Using the list_authorized_users_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListAuthorizedUsers200Response>, Integer, Hash)> list_authorized_users_with_http_info(customer_id, opts)

```ruby
begin
  # List authorized users
  data, status_code, headers = api_instance.list_authorized_users_with_http_info(customer_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListAuthorizedUsers200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->list_authorized_users_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **filter_jwt_subject** | **String** | Optional. Filter authorized users by JWT subject. | [optional] |
| **filter_phone** | **String** | Optional. Filter authorized users by phone. | [optional] |

### Return type

[**ListAuthorizedUsers200Response**](ListAuthorizedUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## remove_authorized_users

> <UpdateCustomer200Response> remove_authorized_users(customer_id, remove_authorized_users_request)

Remove authorized users

Remove existing authorized users from a customer. The Customer Update webhook event will be fired.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AuthorizedUsersApi.new
customer_id = 'customer_id_example' # String | 
remove_authorized_users_request = UnitFinanceSdk::RemoveAuthorizedUsersRequest.new({data: UnitFinanceSdk::RemoveAuthorizedUsersData.new({type: 'removeAuthorizedUsers', attributes: UnitFinanceSdk::RemoveAuthorizedUsersDataAttributes.new({authorized_users_emails: ["jared@piedpiper.com"]})})}) # RemoveAuthorizedUsersRequest | 

begin
  # Remove authorized users
  result = api_instance.remove_authorized_users(customer_id, remove_authorized_users_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->remove_authorized_users: #{e}"
end
```

#### Using the remove_authorized_users_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateCustomer200Response>, Integer, Hash)> remove_authorized_users_with_http_info(customer_id, remove_authorized_users_request)

```ruby
begin
  # Remove authorized users
  data, status_code, headers = api_instance.remove_authorized_users_with_http_info(customer_id, remove_authorized_users_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateCustomer200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AuthorizedUsersApi->remove_authorized_users_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer_id** | **String** |  |  |
| **remove_authorized_users_request** | [**RemoveAuthorizedUsersRequest**](RemoveAuthorizedUsersRequest.md) |  |  |

### Return type

[**UpdateCustomer200Response**](UpdateCustomer200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

