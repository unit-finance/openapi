# UnitFinanceSdk::RecurringCreditACHPaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RecurringCreditACHPaymentRelationships.new(
  account: null,
  org: null,
  customer: null,
  counterparty: null
)
```

