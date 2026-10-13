# UnitFinanceSdk::DisputeRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **card** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::DisputeRelationships.new(
  account: null,
  customer: null,
  transaction: null,
  card: null
)
```

