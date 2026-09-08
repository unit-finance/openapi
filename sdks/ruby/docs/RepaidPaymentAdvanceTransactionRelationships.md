# UnitFinanceSdk::RepaidPaymentAdvanceTransactionRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **received_payment** | [**Relationship**](Relationship.md) |  | [optional] |
| **payment_advance_transaction** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RepaidPaymentAdvanceTransactionRelationships.new(
  account: null,
  customer: null,
  received_payment: null,
  payment_advance_transaction: null
)
```

