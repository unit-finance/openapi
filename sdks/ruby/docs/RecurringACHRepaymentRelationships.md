# UnitFinanceSdk::RecurringACHRepaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **credit_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RecurringACHRepaymentRelationships.new(
  account: null,
  credit_account: null,
  counterparty: null,
  customer: null,
  org: null
)
```

