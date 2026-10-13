# UnitFinanceSdk::PushToCardReversalTransactionRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **customers** | [**Relationship**](Relationship.md) |  | [optional] |
| **payment** | [**Relationship**](Relationship.md) |  | [optional] |
| **org** | [**Relationship**](Relationship.md) |  | [optional] |
| **original_transaction** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::PushToCardReversalTransactionRelationships.new(
  account: null,
  customer: null,
  customers: null,
  payment: null,
  org: null,
  original_transaction: null
)
```

