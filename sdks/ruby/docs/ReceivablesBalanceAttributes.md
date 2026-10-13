# UnitFinanceSdk::ReceivablesBalanceAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pending_purchase_receivables_amount** | **Integer** | The remaining amount to be purchased. |  |
| **purchase_due_date** | **Date** | The date the receivables are supposed to be purchased e.g. 2024-12-31. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ReceivablesBalanceAttributes.new(
  pending_purchase_receivables_amount: null,
  purchase_due_date: null
)
```

