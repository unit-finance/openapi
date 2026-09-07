# UnitFinanceSdk::SendDrawdownPaymentDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **idempotency_key** | **String** | See Idempotency. |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags for the Wire Payment. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::SendDrawdownPaymentDataAttributes.new(
  idempotency_key: 6a1a33be-4e12-4603-9ed0-820922389fb9,
  tags: null
)
```

