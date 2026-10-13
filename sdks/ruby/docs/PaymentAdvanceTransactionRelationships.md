# UnitFinanceSdk::PaymentAdvanceTransactionRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **received_payment** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::PaymentAdvanceTransactionRelationships.new(
  account: null,
  customer: null,
  received_payment: null
)
```

