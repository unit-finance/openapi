# UnitFinanceSdk::ReplaceCardDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **shipping_address** | [**AddressType**](AddressType.md) | Temporary address to ship the replacement card to. If not specified, the address provided during card creation is reused. This will now effect the default shippingAddress. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ReplaceCardDataAttributes.new(
  shipping_address: null
)
```

