# UnitFinanceSdk::BookPaymentRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **customers** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty_customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **transaction** | [**Relationship**](Relationship.md) |  | [optional] |
| **recurring_payment** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::BookPaymentRelationships.new(
  account: null,
  customer: null,
  customers: null,
  counterparty_account: null,
  counterparty_customer: null,
  transaction: null,
  recurring_payment: null
)
```

