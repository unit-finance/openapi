# UnitFinanceSdk::RealtimeReceivedPaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **receive_payment_transaction** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RealtimeReceivedPaymentRelationships.new(
  account: null,
  customer: null,
  receive_payment_transaction: null
)
```

