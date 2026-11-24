# UnitFinanceSdk::ReceivableAttributesTotalInterest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **charged** | **Integer** | The interest charged so far, in cents. | [optional] |
| **accrued** | **String** | The interest accrued so far, in cents, as a decimal string. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ReceivableAttributesTotalInterest.new(
  charged: null,
  accrued: null
)
```

