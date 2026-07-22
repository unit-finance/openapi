# UnitFinanceSdk::ReleaseAccountHoldDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Integer** | The amount (in cents) to release from the hold. The hold status will become PartiallyReleased. |  |
| **idempotency_key** | **String** | See Idempotency. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReleaseAccountHoldDataAttributes.new(
  amount: 2500,
  idempotency_key: null
)
```

