# UnitFinanceSdk::FreezeCreditAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reason** | **String** | The reason for freezing the account. Either Fraud or Other, with a specified reasonText. |  |
| **reason_text** | **String** | Optional. The free-text reason for freezing the account (up to 255 characters) when Other is specified. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::FreezeCreditAccountDataAttributes.new(
  reason: Other,
  reason_text: Per request from customer
)
```

