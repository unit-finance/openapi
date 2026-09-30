# UnitFinanceSdk::ACHRepaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **credit_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty** | [**Relationship**](Relationship.md) |  | [optional] |
| **payment** | [**Relationship**](Relationship.md) |  | [optional] |
| **recurring_repayment** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ACHRepaymentRelationships.new(
  account: null,
  credit_account: null,
  org: null,
  customer: null,
  counterparty: null,
  payment: null,
  recurring_repayment: null
)
```

