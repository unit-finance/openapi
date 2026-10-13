# UnitFinanceSdk::ACHReceivedPaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **receive_payment_transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **payment_advance_transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **repay_payment_advance_transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **stop_payment** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ACHReceivedPaymentRelationships.new(
  account: null,
  customer: null,
  receive_payment_transaction: null,
  payment_advance_transaction: null,
  repay_payment_advance_transaction: null,
  stop_payment: null
)
```

