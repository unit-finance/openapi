# UnitFinanceSdk::RewardRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **receiving_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **funding_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **rewarded_transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **card** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RewardRelationships.new(
  receiving_account: null,
  funding_account: null,
  rewarded_transaction: null,
  customer: null,
  transaction: null,
  card: null
)
```

