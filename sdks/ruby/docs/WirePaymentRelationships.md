# UnitFinanceSdk::WirePaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **customers** | [**Relationship**](Relationship.md) |  | [optional] |
| **transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **wire_drawdown** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::WirePaymentRelationships.new(
  account: null,
  customer: null,
  customers: null,
  transaction: null,
  wire_drawdown: null
)
```

