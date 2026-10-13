# UnitFinanceSdk::CardsAuthorizationsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_authorization**](CardsAuthorizationsApi.md#get_authorization) | **GET** /authorizations/{id} | Get an authorization |
| [**list_authorizations**](CardsAuthorizationsApi.md#list_authorizations) | **GET** /authorizations | List authorizations |
| [**release_authorization**](CardsAuthorizationsApi.md#release_authorization) | **POST** /authorizations/{id}/release | Release an authorization |


## get_authorization

> <GetAuthorization200Response> get_authorization(id, opts)

Get an authorization

Get an authorization resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsAuthorizationsApi.new
id = 'id_example' # String | 
opts = {
  filter_include_non_authorized: 'filter_include_non_authorized_example' # String | Optional. Include authorizations from all statuses.
}

begin
  # Get an authorization
  result = api_instance.get_authorization(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationsApi->get_authorization: #{e}"
end
```

#### Using the get_authorization_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAuthorization200Response>, Integer, Hash)> get_authorization_with_http_info(id, opts)

```ruby
begin
  # Get an authorization
  data, status_code, headers = api_instance.get_authorization_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAuthorization200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationsApi->get_authorization_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **filter_include_non_authorized** | **String** | Optional. Include authorizations from all statuses. | [optional][default to &#39;false&#39;] |

### Return type

[**GetAuthorization200Response**](GetAuthorization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_authorizations

> <ListAuthorizations200Response> list_authorizations(opts)

List authorizations

List authorizations. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsAuthorizationsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_account_type: 'filter_account_type_example', # String | Optional. Filter the results by account type (deposit, credit).
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_card_id: 'filter_card_id_example', # String | Optional. Filters the results by the specified card id.
  filter_since: 'filter_since_example', # String | Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
  filter_until: 'filter_until_example', # String | Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
  filter_include_non_authorized: 'filter_include_non_authorized_example', # String | Optional. Include authorizations from all statuses.
  filter_status: 'filter_status_example', # String | Optional. Filter authorizations by Authorization Status.
  filter_merchant_category_code: 'filter_merchant_category_code_example', # String | Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC).
  filter_from_amount: 'filter_from_amount_example', # String | Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
  filter_to_amount: 'filter_to_amount_example', # String | Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
  sort: 'sort_example' # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List authorizations
  result = api_instance.list_authorizations(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationsApi->list_authorizations: #{e}"
end
```

#### Using the list_authorizations_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListAuthorizations200Response>, Integer, Hash)> list_authorizations_with_http_info(opts)

```ruby
begin
  # List authorizations
  data, status_code, headers = api_instance.list_authorizations_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListAuthorizations200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationsApi->list_authorizations_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_account_type** | **String** | Optional. Filter the results by account type (deposit, credit). | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_card_id** | **String** | Optional. Filters the results by the specified card id. | [optional] |
| **filter_since** | **String** | Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filter_until** | **String** | Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |
| **filter_include_non_authorized** | **String** | Optional. Include authorizations from all statuses. | [optional][default to &#39;false&#39;] |
| **filter_status** | **String** | Optional. Filter authorizations by Authorization Status. | [optional][default to &#39;Authorized&#39;] |
| **filter_merchant_category_code** | **String** | Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC). | [optional] |
| **filter_from_amount** | **String** | Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_amount** | **String** | Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |

### Return type

[**ListAuthorizations200Response**](ListAuthorizations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## release_authorization

> <GetAuthorization200Response> release_authorization(id, opts)

Release an authorization

Manually release an authorization that is in `Authorized` status. This removes the authorization hold from the account so the **available** balance increases by the authorization amount (subject to other pending activity).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsAuthorizationsApi.new
id = 'id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Release an authorization
  result = api_instance.release_authorization(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationsApi->release_authorization: #{e}"
end
```

#### Using the release_authorization_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAuthorization200Response>, Integer, Hash)> release_authorization_with_http_info(id, opts)

```ruby
begin
  # Release an authorization
  data, status_code, headers = api_instance.release_authorization_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAuthorization200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAuthorizationsApi->release_authorization_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**GetAuthorization200Response**](GetAuthorization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

