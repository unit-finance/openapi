# UnitFinanceSdk::RecurringCreditBookPaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RecurringCreditBookPaymentRelationships.new(
  account: null,
  counterparty_account: null,
  org: null,
  customer: null
)
```

