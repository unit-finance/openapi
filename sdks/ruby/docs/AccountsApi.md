# UnitFinanceSdk::AccountsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_account_owners**](AccountsApi.md#add_account_owners) | **POST** /accounts/{accountId}/relationships/customers | Add account owners |
| [**close_account**](AccountsApi.md#close_account) | **POST** /accounts/{accountId}/close | Close an account |
| [**create_account**](AccountsApi.md#create_account) | **POST** /accounts | Create an account |
| [**create_account_hold**](AccountsApi.md#create_account_hold) | **POST** /account-holds | Create an account hold |
| [**freeze_account**](AccountsApi.md#freeze_account) | **POST** /accounts/{accountId}/freeze | Freeze an account |
| [**get_account**](AccountsApi.md#get_account) | **GET** /accounts/{accountId} | Get an account by id |
| [**get_account_balance_history**](AccountsApi.md#get_account_balance_history) | **GET** /account-end-of-day | List account end-of-day balances |
| [**get_account_hold_by_id**](AccountsApi.md#get_account_hold_by_id) | **GET** /account-holds/{id} | Get an account hold by id |
| [**get_account_limits**](AccountsApi.md#get_account_limits) | **GET** /accounts/{accountId}/limits | Get account limits |
| [**get_available_deposit_products**](AccountsApi.md#get_available_deposit_products) | **GET** /accounts/{accountId}/deposit-products | Get available deposit products |
| [**list_account_holds**](AccountsApi.md#list_account_holds) | **GET** /account-holds | List account holds |
| [**list_accounts**](AccountsApi.md#list_accounts) | **GET** /accounts | List accounts |
| [**release_account_hold**](AccountsApi.md#release_account_hold) | **POST** /account-holds/{id}/release | Release an account hold |
| [**remove_account_owners**](AccountsApi.md#remove_account_owners) | **DELETE** /accounts/{accountId}/relationships/customers | Remove account owners |
| [**reopen_account**](AccountsApi.md#reopen_account) | **POST** /accounts/{accountId}/reopen | Reopen an account |
| [**unfreeze_account**](AccountsApi.md#unfreeze_account) | **POST** /accounts/{accountId}/unfreeze | Unfreeze an account |
| [**update_account**](AccountsApi.md#update_account) | **PATCH** /accounts/{accountId} | Update an account |


## add_account_owners

> <AddAccountOwners200Response> add_account_owners(account_id, add_account_owners_request)

Add account owners

Add owner or owners to an existing deposit account.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
add_account_owners_request = UnitFinanceSdk::AddAccountOwnersRequest.new({data: [UnitFinanceSdk::ResourceIdentifier.new({type: 'type_example', id: 'id_example'})]}) # AddAccountOwnersRequest | 

begin
  # Add account owners
  result = api_instance.add_account_owners(account_id, add_account_owners_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->add_account_owners: #{e}"
end
```

#### Using the add_account_owners_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AddAccountOwners200Response>, Integer, Hash)> add_account_owners_with_http_info(account_id, add_account_owners_request)

```ruby
begin
  # Add account owners
  data, status_code, headers = api_instance.add_account_owners_with_http_info(account_id, add_account_owners_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AddAccountOwners200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->add_account_owners_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **add_account_owners_request** | [**AddAccountOwnersRequest**](AddAccountOwnersRequest.md) |  |  |

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## close_account

> <CreateAccount201Response> close_account(account_id, close_account_request)

Close an account

Closes an account. Closing an account is irreversible and can only be done by an Org user. An account.closed event is raised when the call was successful. The request body is one of CloseDepositAccountRequest, CloseCreditAccountRequest, or CloseWalletRequest.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
close_account_request = UnitFinanceSdk::CloseCreditAccountRequest.new({data: UnitFinanceSdk::CloseCreditAccountData.new({type: 'creditAccountClose', attributes: UnitFinanceSdk::CloseCreditAccountDataAttributes.new})}) # CloseAccountRequest | 

begin
  # Close an account
  result = api_instance.close_account(account_id, close_account_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->close_account: #{e}"
end
```

#### Using the close_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccount201Response>, Integer, Hash)> close_account_with_http_info(account_id, close_account_request)

```ruby
begin
  # Close an account
  data, status_code, headers = api_instance.close_account_with_http_info(account_id, close_account_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccount201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->close_account_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **close_account_request** | [**CloseAccountRequest**](CloseAccountRequest.md) |  |  |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_account

> <CreateAccount201Response> create_account(create_account_request)

Create an account

Creates an account. The request body is one of CreateDepositAccountRequest, CreateCreditAccountRequest, or CreateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
create_account_request = UnitFinanceSdk::CreateCreditAccountRequest.new({data: UnitFinanceSdk::CreateCreditAccountData.new({type: 'creditAccount', attributes: UnitFinanceSdk::CreateCreditAccountDataAttributes.new({credit_terms: 'credit_terms_1', credit_limit: 20000}), relationships: UnitFinanceSdk::CreateDepositAccountDataRelationships.new({customer: UnitFinanceSdk::Relationship.new})})}) # CreateAccountRequest | 

begin
  # Create an account
  result = api_instance.create_account(create_account_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->create_account: #{e}"
end
```

#### Using the create_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccount201Response>, Integer, Hash)> create_account_with_http_info(create_account_request)

```ruby
begin
  # Create an account
  data, status_code, headers = api_instance.create_account_with_http_info(create_account_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccount201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->create_account_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_account_request** | [**CreateAccountRequest**](CreateAccountRequest.md) |  |  |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_account_hold

> <CreateAccountHold201Response> create_account_hold(create_account_hold_request)

Create an account hold

Create an account hold resource.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
create_account_hold_request = UnitFinanceSdk::CreateAccountHoldRequest.new({data: UnitFinanceSdk::CreateAccountHoldData.new({type: 'accountHold', attributes: UnitFinanceSdk::CreateAccountHoldDataAttributes.new({amount: 6000, description: 'Hold reason'}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # CreateAccountHoldRequest | 

begin
  # Create an account hold
  result = api_instance.create_account_hold(create_account_hold_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->create_account_hold: #{e}"
end
```

#### Using the create_account_hold_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccountHold201Response>, Integer, Hash)> create_account_hold_with_http_info(create_account_hold_request)

```ruby
begin
  # Create an account hold
  data, status_code, headers = api_instance.create_account_hold_with_http_info(create_account_hold_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccountHold201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->create_account_hold_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_account_hold_request** | [**CreateAccountHoldRequest**](CreateAccountHoldRequest.md) |  |  |

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## freeze_account

> <CreateAccount201Response> freeze_account(account_id, freeze_account_request)

Freeze an account

Freezes an account. An account.frozen event is raised when the call was successful. A frozen account behaves like a closed account, with the primary difference being that a frozen state should be temporary. The request body is one of FreezeDepositAccountRequest, FreezeCreditAccountRequest, or FreezeWalletRequest.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
freeze_account_request = UnitFinanceSdk::FreezeCreditAccountRequest.new({data: UnitFinanceSdk::FreezeCreditAccountData.new({type: 'creditAccountFreeze', attributes: UnitFinanceSdk::FreezeDepositAccountDataAttributes.new({reason: 'Other'})})}) # FreezeAccountRequest | 

begin
  # Freeze an account
  result = api_instance.freeze_account(account_id, freeze_account_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->freeze_account: #{e}"
end
```

#### Using the freeze_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccount201Response>, Integer, Hash)> freeze_account_with_http_info(account_id, freeze_account_request)

```ruby
begin
  # Freeze an account
  data, status_code, headers = api_instance.freeze_account_with_http_info(account_id, freeze_account_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccount201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->freeze_account_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **freeze_account_request** | [**FreezeAccountRequest**](FreezeAccountRequest.md) |  |  |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_account

> <CreateAccount201Response> get_account(account_id, opts)

Get an account by id

Get an account resource (deposit account, credit account, or wallet) by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
opts = {
  include: 'include_example', # String | Optional. Related resource available to include: customer. See Getting Related Resources
  extra_fields_account: 'extra_fields_account_example' # String | Optional. Use extraFields[account]=interestTerms to include the interestTerms object in the account's attributes section of the response.
}

begin
  # Get an account by id
  result = api_instance.get_account(account_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account: #{e}"
end
```

#### Using the get_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccount201Response>, Integer, Hash)> get_account_with_http_info(account_id, opts)

```ruby
begin
  # Get an account by id
  data, status_code, headers = api_instance.get_account_with_http_info(account_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccount201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **include** | **String** | Optional. Related resource available to include: customer. See Getting Related Resources | [optional] |
| **extra_fields_account** | **String** | Optional. Use extraFields[account]&#x3D;interestTerms to include the interestTerms object in the account&#39;s attributes section of the response. | [optional] |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_account_balance_history

> <GetAccountBalanceHistory200Response> get_account_balance_history(opts)

List account end-of-day balances

List account end-of-day balances history (filtering and paging can be applied).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id. At least one of accountId and customerId is required.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required.
  filter_since: 'filter_since_example', # String | Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01
  filter_until: 'filter_until_example' # String | Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01
}

begin
  # List account end-of-day balances
  result = api_instance.get_account_balance_history(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account_balance_history: #{e}"
end
```

#### Using the get_account_balance_history_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAccountBalanceHistory200Response>, Integer, Hash)> get_account_balance_history_with_http_info(opts)

```ruby
begin
  # List account end-of-day balances
  data, status_code, headers = api_instance.get_account_balance_history_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAccountBalanceHistory200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account_balance_history_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. At least one of accountId and customerId is required. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. At least one of accountId and customerId is required. | [optional] |
| **filter_since** | **String** | Optional. Filters the account end-of-day balances on or after the specified date. e.g. 2021-06-01 | [optional] |
| **filter_until** | **String** | Optional. Filters the account end-of-day balances on or before the specified date. e.g. 2021-07-01 | [optional] |

### Return type

[**GetAccountBalanceHistory200Response**](GetAccountBalanceHistory200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_account_hold_by_id

> <CreateAccountHold201Response> get_account_hold_by_id(id)

Get an account hold by id

Get an account hold resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
id = 'id_example' # String | 

begin
  # Get an account hold by id
  result = api_instance.get_account_hold_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account_hold_by_id: #{e}"
end
```

#### Using the get_account_hold_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccountHold201Response>, Integer, Hash)> get_account_hold_by_id_with_http_info(id)

```ruby
begin
  # Get an account hold by id
  data, status_code, headers = api_instance.get_account_hold_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccountHold201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account_hold_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_account_limits

> <GetAccountLimits200Response> get_account_limits(account_id)

Get account limits

Get the limits of an account (deposit account, credit account, or wallet).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 

begin
  # Get account limits
  result = api_instance.get_account_limits(account_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account_limits: #{e}"
end
```

#### Using the get_account_limits_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAccountLimits200Response>, Integer, Hash)> get_account_limits_with_http_info(account_id)

```ruby
begin
  # Get account limits
  data, status_code, headers = api_instance.get_account_limits_with_http_info(account_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAccountLimits200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_account_limits_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |

### Return type

[**GetAccountLimits200Response**](GetAccountLimits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_available_deposit_products

> <GetAvailableDepositProducts200Response> get_available_deposit_products(account_id)

Get available deposit products

Get the deposit products available for an account.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 

begin
  # Get available deposit products
  result = api_instance.get_available_deposit_products(account_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_available_deposit_products: #{e}"
end
```

#### Using the get_available_deposit_products_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAvailableDepositProducts200Response>, Integer, Hash)> get_available_deposit_products_with_http_info(account_id)

```ruby
begin
  # Get available deposit products
  data, status_code, headers = api_instance.get_available_deposit_products_with_http_info(account_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAvailableDepositProducts200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->get_available_deposit_products_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |

### Return type

[**GetAvailableDepositProducts200Response**](GetAvailableDepositProducts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_account_holds

> <ListAccountHolds200Response> list_account_holds(opts)

List account holds

List account hold resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_status: 'filter_status_example', # String | Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased.
  filter_expired_at: 'filter_expired_at_example' # String | Optional. Date only (e.g. \"2001-08-15\"). the date the account hold will be automatically released at.
}

begin
  # List account holds
  result = api_instance.list_account_holds(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->list_account_holds: #{e}"
end
```

#### Using the list_account_holds_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListAccountHolds200Response>, Integer, Hash)> list_account_holds_with_http_info(opts)

```ruby
begin
  # List account holds
  data, status_code, headers = api_instance.list_account_holds_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListAccountHolds200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->list_account_holds_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_status** | **String** | Optional. Filter by status. Can be one of the following values: Active, Released, PartiallyReleased. | [optional] |
| **filter_expired_at** | **String** | Optional. Date only (e.g. \&quot;2001-08-15\&quot;). the date the account hold will be automatically released at. | [optional] |

### Return type

[**ListAccountHolds200Response**](ListAccountHolds200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_accounts

> <ListAccounts200Response> list_accounts(opts)

List accounts

List account resources (deposit accounts, credit accounts, and wallets). Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_deposit_product_id: 'filter_deposit_product_id_example', # String | Optional. Filters the results by the specified deposit product id.
  filter_tags: 'filter_tags_example', # String | Optional. Filter Accounts by Tags.
  filter_status: 'filter_status_example', # String | Optional. Filter Account by its status (Open, Frozen, or Closed). Usage example: filter[status][0]=Closed
  filter_from_balance: 'filter_from_balance_example', # String | Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000
  filter_to_balance: 'filter_to_balance_example', # String | Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000
  include: 'include_example' # String | Optional. Related resource available to include: customer. See Getting Related Resources
}

begin
  # List accounts
  result = api_instance.list_accounts(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->list_accounts: #{e}"
end
```

#### Using the list_accounts_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListAccounts200Response>, Integer, Hash)> list_accounts_with_http_info(opts)

```ruby
begin
  # List accounts
  data, status_code, headers = api_instance.list_accounts_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListAccounts200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->list_accounts_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_deposit_product_id** | **String** | Optional. Filters the results by the specified deposit product id. | [optional] |
| **filter_tags** | **String** | Optional. Filter Accounts by Tags. | [optional] |
| **filter_status** | **String** | Optional. Filter Account by its status (Open, Frozen, or Closed). Usage example: filter[status][0]&#x3D;Closed | [optional] |
| **filter_from_balance** | **String** | Optional. Filters Accounts that have balance higher or equal to the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_balance** | **String** | Optional. Filters Accounts that have balance lower or equal to the specified amount (in cents). e.g. 7000 | [optional] |
| **include** | **String** | Optional. Related resource available to include: customer. See Getting Related Resources | [optional] |

### Return type

[**ListAccounts200Response**](ListAccounts200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## release_account_hold

> <CreateAccountHold201Response> release_account_hold(id, release_account_hold_request)

Release an account hold

You can release an account hold fully (entire amount) or partially (a specified amount).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
id = 'id_example' # String | 
release_account_hold_request = UnitFinanceSdk::ReleaseAccountHoldRequest.new({data: UnitFinanceSdk::ReleaseAccountHoldData.new({type: 'accountHold', attributes: UnitFinanceSdk::ReleaseAccountHoldDataAttributes.new({amount: 2500})})}) # ReleaseAccountHoldRequest | 

begin
  # Release an account hold
  result = api_instance.release_account_hold(id, release_account_hold_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->release_account_hold: #{e}"
end
```

#### Using the release_account_hold_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccountHold201Response>, Integer, Hash)> release_account_hold_with_http_info(id, release_account_hold_request)

```ruby
begin
  # Release an account hold
  data, status_code, headers = api_instance.release_account_hold_with_http_info(id, release_account_hold_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccountHold201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->release_account_hold_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **release_account_hold_request** | [**ReleaseAccountHoldRequest**](ReleaseAccountHoldRequest.md) |  |  |

### Return type

[**CreateAccountHold201Response**](CreateAccountHold201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## remove_account_owners

> <AddAccountOwners200Response> remove_account_owners(account_id, remove_account_owners_request)

Remove account owners

Remove owner or owners from an existing joint deposit account.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
remove_account_owners_request = UnitFinanceSdk::RemoveAccountOwnersRequest.new({data: [UnitFinanceSdk::ResourceIdentifier.new({type: 'type_example', id: 'id_example'})]}) # RemoveAccountOwnersRequest | 

begin
  # Remove account owners
  result = api_instance.remove_account_owners(account_id, remove_account_owners_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->remove_account_owners: #{e}"
end
```

#### Using the remove_account_owners_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<AddAccountOwners200Response>, Integer, Hash)> remove_account_owners_with_http_info(account_id, remove_account_owners_request)

```ruby
begin
  # Remove account owners
  data, status_code, headers = api_instance.remove_account_owners_with_http_info(account_id, remove_account_owners_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AddAccountOwners200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->remove_account_owners_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **remove_account_owners_request** | [**RemoveAccountOwnersRequest**](RemoveAccountOwnersRequest.md) |  |  |

### Return type

[**AddAccountOwners200Response**](AddAccountOwners200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## reopen_account

> <ReopenAccount200Response> reopen_account(account_id, opts)

Reopen an account

Reopens a closed account. Applies to deposit accounts and wallets.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Reopen an account
  result = api_instance.reopen_account(account_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->reopen_account: #{e}"
end
```

#### Using the reopen_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ReopenAccount200Response>, Integer, Hash)> reopen_account_with_http_info(account_id, opts)

```ruby
begin
  # Reopen an account
  data, status_code, headers = api_instance.reopen_account_with_http_info(account_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ReopenAccount200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->reopen_account_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**ReopenAccount200Response**](ReopenAccount200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## unfreeze_account

> <CreateAccount201Response> unfreeze_account(account_id, opts)

Unfreeze an account

Unfreezes an account.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Unfreeze an account
  result = api_instance.unfreeze_account(account_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->unfreeze_account: #{e}"
end
```

#### Using the unfreeze_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccount201Response>, Integer, Hash)> unfreeze_account_with_http_info(account_id, opts)

```ruby
begin
  # Unfreeze an account
  data, status_code, headers = api_instance.unfreeze_account_with_http_info(account_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccount201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->unfreeze_account_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_account

> <CreateAccount201Response> update_account(account_id, update_account_request)

Update an account

Update an account. The request body is one of UpdateDepositAccountRequest, UpdateCreditAccountRequest, or UpdateWalletRequest, discriminated by data.type (depositAccount, creditAccount, walletAccount).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::AccountsApi.new
account_id = 'account_id_example' # String | 
update_account_request = UnitFinanceSdk::UpdateCreditAccountRequest.new({data: UnitFinanceSdk::UpdateCreditAccountData.new({type: 'creditAccount', attributes: UnitFinanceSdk::UpdateCreditAccountDataAttributes.new})}) # UpdateAccountRequest | 

begin
  # Update an account
  result = api_instance.update_account(account_id, update_account_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->update_account: #{e}"
end
```

#### Using the update_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateAccount201Response>, Integer, Hash)> update_account_with_http_info(account_id, update_account_request)

```ruby
begin
  # Update an account
  data, status_code, headers = api_instance.update_account_with_http_info(account_id, update_account_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateAccount201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling AccountsApi->update_account_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **update_account_request** | [**UpdateAccountRequest**](UpdateAccountRequest.md) |  |  |

### Return type

[**CreateAccount201Response**](CreateAccount201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

