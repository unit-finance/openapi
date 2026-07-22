# UnitFinanceSdk::VerifyAccountDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **routing_number** | **String** | Required. Routing number (exactly 9 digits). |  |
| **account_number** | **String** | Required. Account number (1-17 digits). |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::VerifyAccountDataAttributes.new(
  routing_number: 051000017,
  account_number: 10000123
)
```

