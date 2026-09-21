# UnitFinanceSdk::AuthorizationCardFraudCaseRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card** | [**Relationship**](Relationship.md) |  | [optional] |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **transaction** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::AuthorizationCardFraudCaseRelationships.new(
  card: null,
  account: null,
  customer: null,
  transaction: null
)
```

