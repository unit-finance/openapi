# UnitFinanceSdk::CardHolderAPITokensApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_cardholder_token**](CardHolderAPITokensApi.md#create_cardholder_token) | **POST** /cards/{cardId}/cardholder/token | Create a cardholder token |
| [**create_cardholder_token_verification**](CardHolderAPITokensApi.md#create_cardholder_token_verification) | **POST** /cards/{cardId}/cardholder/token/verification | Create a cardholder token verification |


## create_cardholder_token

> <CreateCardholderToken201Response> create_cardholder_token(card_id, create_cardholder_token_request)

Create a cardholder token

Create a bearer token for a specific card.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardHolderAPITokensApi.new
card_id = 'card_id_example' # String | 
create_cardholder_token_request = UnitFinanceSdk::CreateCardholderTokenRequest.new({data: UnitFinanceSdk::CreateCardholderTokenData.new({type: 'cardholderToken', attributes: UnitFinanceSdk::CreateCardholderTokenDataAttributes.new({scope: 'cards'})})}) # CreateCardholderTokenRequest | 

begin
  # Create a cardholder token
  result = api_instance.create_cardholder_token(card_id, create_cardholder_token_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardHolderAPITokensApi->create_cardholder_token: #{e}"
end
```

#### Using the create_cardholder_token_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCardholderToken201Response>, Integer, Hash)> create_cardholder_token_with_http_info(card_id, create_cardholder_token_request)

```ruby
begin
  # Create a cardholder token
  data, status_code, headers = api_instance.create_cardholder_token_with_http_info(card_id, create_cardholder_token_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCardholderToken201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardHolderAPITokensApi->create_cardholder_token_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **create_cardholder_token_request** | [**CreateCardholderTokenRequest**](CreateCardholderTokenRequest.md) |  |  |

### Return type

[**CreateCardholderToken201Response**](CreateCardholderToken201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_cardholder_token_verification

> <CreateCardholderTokenVerification201Response> create_cardholder_token_verification(card_id, create_cardholder_token_verification_request)

Create a cardholder token verification

When creating a cardholder token that contains a scope which requires two-factor authentication (see Scopes), it is required to first create a verification challenge that will be sent to the customer.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardHolderAPITokensApi.new
card_id = 'card_id_example' # String | 
create_cardholder_token_verification_request = UnitFinanceSdk::CreateCardholderTokenVerificationRequest.new({data: UnitFinanceSdk::CreateCardholderTokenVerificationData.new({type: 'cardholderTokenVerification', attributes: UnitFinanceSdk::CreateCardholderTokenVerificationDataAttributes.new({channel: 'sms'})})}) # CreateCardholderTokenVerificationRequest | 

begin
  # Create a cardholder token verification
  result = api_instance.create_cardholder_token_verification(card_id, create_cardholder_token_verification_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardHolderAPITokensApi->create_cardholder_token_verification: #{e}"
end
```

#### Using the create_cardholder_token_verification_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCardholderTokenVerification201Response>, Integer, Hash)> create_cardholder_token_verification_with_http_info(card_id, create_cardholder_token_verification_request)

```ruby
begin
  # Create a cardholder token verification
  data, status_code, headers = api_instance.create_cardholder_token_verification_with_http_info(card_id, create_cardholder_token_verification_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCardholderTokenVerification201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardHolderAPITokensApi->create_cardholder_token_verification_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **create_cardholder_token_verification_request** | [**CreateCardholderTokenVerificationRequest**](CreateCardholderTokenVerificationRequest.md) |  |  |

### Return type

[**CreateCardholderTokenVerification201Response**](CreateCardholderTokenVerification201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

