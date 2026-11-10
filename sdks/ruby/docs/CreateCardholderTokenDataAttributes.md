# UnitFinanceSdk::CreateCardholderTokenDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **scope** | **String** | list of Scopes separated by spaces. Only cards (cards cards-sensitive cards-write cards-sensitive-write) scopes are allowed. |  |
| **verification_token** | **String** | Required if scope includes a scope which requires two-factor authentication. Received as a response from Create Cardholder Token Verification. | [optional] |
| **verification_code** | **String** | Required if scope includes a scope which requires two-factor authentication. 6 digit code sent to the card holder through the desired channel. | [optional] |
| **expires_in** | **Integer** | The lifetime of the token (in seconds). Maximum value is 86400 (24 hours). Default value is also 24 hours. | [optional] |
| **upgradable_scope** | **String** | list of Scopes separated by spaces. The card holder will be able to upgrade the token to the scopes you provide here. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCardholderTokenDataAttributes.new(
  scope: cards,
  verification_token: null,
  verification_code: null,
  expires_in: null,
  upgradable_scope: null
)
```

