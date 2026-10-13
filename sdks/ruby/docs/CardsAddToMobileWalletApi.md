# UnitFinanceSdk::CardsAddToMobileWalletApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_mobile_wallet_payload**](CardsAddToMobileWalletApi.md#get_mobile_wallet_payload) | **POST** /cards/{cardId}/mobile-wallet-payload | Get mobile wallet payload |


## get_mobile_wallet_payload

> <GetMobileWalletPayload200Response> get_mobile_wallet_payload(card_id, get_mobile_wallet_payload_request)

Get mobile wallet payload

Get the mobile wallet encrypted payload for the specified card. The encrypted payload is unique per issuance and is required as part of the SDK integration.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsAddToMobileWalletApi.new
card_id = 'card_id_example' # String | 
get_mobile_wallet_payload_request = UnitFinanceSdk::GetMobileWalletPayloadRequest.new({data: UnitFinanceSdk::GetMobileWalletPayloadData.new({attributes: UnitFinanceSdk::GetMobileWalletPayloadDataAttributes.new({signed_nonce: 'eyJle...'})})}) # GetMobileWalletPayloadRequest | 

begin
  # Get mobile wallet payload
  result = api_instance.get_mobile_wallet_payload(card_id, get_mobile_wallet_payload_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAddToMobileWalletApi->get_mobile_wallet_payload: #{e}"
end
```

#### Using the get_mobile_wallet_payload_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetMobileWalletPayload200Response>, Integer, Hash)> get_mobile_wallet_payload_with_http_info(card_id, get_mobile_wallet_payload_request)

```ruby
begin
  # Get mobile wallet payload
  data, status_code, headers = api_instance.get_mobile_wallet_payload_with_http_info(card_id, get_mobile_wallet_payload_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetMobileWalletPayload200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsAddToMobileWalletApi->get_mobile_wallet_payload_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **get_mobile_wallet_payload_request** | [**GetMobileWalletPayloadRequest**](GetMobileWalletPayloadRequest.md) |  |  |

### Return type

[**GetMobileWalletPayload200Response**](GetMobileWalletPayload200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

