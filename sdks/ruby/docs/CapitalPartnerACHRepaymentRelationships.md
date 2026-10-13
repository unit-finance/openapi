# UnitFinanceSdk::CapitalPartnerACHRepaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **credit_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty** | [**Relationship**](Relationship.md) |  | [optional] |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **payment** | [**Relationship**](Relationship.md) |  | [optional] |
| **recurring_repayment** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CapitalPartnerACHRepaymentRelationships.new(
  credit_account: null,
  counterparty: null,
  org: null,
  customer: null,
  payment: null,
  recurring_repayment: null
)
```

