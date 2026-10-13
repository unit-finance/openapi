# UnitFinanceSdk::CreateCardholderToken201ResponseDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token** | **String** | The token issued for the card. | [optional] |
| **expires_in** | **Integer** | The lifetime of the token (in seconds). | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateCardholderToken201ResponseDataAttributes.new(
  token: null,
  expires_in: null
)
```

