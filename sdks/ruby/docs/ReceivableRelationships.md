# UnitFinanceSdk::ReceivableRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **lending_program** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReceivableRelationships.new(
  customer: null,
  account: null,
  transaction: null,
  lending_program: null
)
```

