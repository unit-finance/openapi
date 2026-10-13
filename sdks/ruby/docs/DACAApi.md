# UnitFinanceSdk::DACAApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**activate_control_agreement**](DACAApi.md#activate_control_agreement) | **POST** /accounts/{accountId}/activate-daca | Activate control agreement |
| [**deactivate_control_agreement**](DACAApi.md#deactivate_control_agreement) | **POST** /accounts/{accountId}/deactivate-daca | Deactivate control agreement |
| [**enter_control_agreement**](DACAApi.md#enter_control_agreement) | **POST** /accounts/{accountId}/enter-daca | Enter control agreement |


## activate_control_agreement

> <EnterControlAgreement200Response> activate_control_agreement(account_id, opts)

Activate control agreement

Set an account with DACA `Activated` status. This action will:

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::DACAApi.new
account_id = 'account_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Activate control agreement
  result = api_instance.activate_control_agreement(account_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DACAApi->activate_control_agreement: #{e}"
end
```

#### Using the activate_control_agreement_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnterControlAgreement200Response>, Integer, Hash)> activate_control_agreement_with_http_info(account_id, opts)

```ruby
begin
  # Activate control agreement
  data, status_code, headers = api_instance.activate_control_agreement_with_http_info(account_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnterControlAgreement200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DACAApi->activate_control_agreement_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deactivate_control_agreement

> <EnterControlAgreement200Response> deactivate_control_agreement(account_id, opts)

Deactivate control agreement

Deactivate an account with DACA `Activated` status. This action will:

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::DACAApi.new
account_id = 'account_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Deactivate control agreement
  result = api_instance.deactivate_control_agreement(account_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DACAApi->deactivate_control_agreement: #{e}"
end
```

#### Using the deactivate_control_agreement_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnterControlAgreement200Response>, Integer, Hash)> deactivate_control_agreement_with_http_info(account_id, opts)

```ruby
begin
  # Deactivate control agreement
  data, status_code, headers = api_instance.deactivate_control_agreement_with_http_info(account_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnterControlAgreement200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DACAApi->deactivate_control_agreement_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## enter_control_agreement

> <EnterControlAgreement200Response> enter_control_agreement(account_id, opts)

Enter control agreement

Set an account with DACA `Entered` status.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::DACAApi.new
account_id = 'account_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Enter control agreement
  result = api_instance.enter_control_agreement(account_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DACAApi->enter_control_agreement: #{e}"
end
```

#### Using the enter_control_agreement_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnterControlAgreement200Response>, Integer, Hash)> enter_control_agreement_with_http_info(account_id, opts)

```ruby
begin
  # Enter control agreement
  data, status_code, headers = api_instance.enter_control_agreement_with_http_info(account_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnterControlAgreement200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling DACAApi->enter_control_agreement_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

