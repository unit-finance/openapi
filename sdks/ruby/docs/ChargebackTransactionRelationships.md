# UnitFinanceSdk::ChargebackTransactionRelationships

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Relationship**](Relationship.md) |  | [optional] |
| **customer** | [**Relationship**](Relationship.md) |  | [optional] |
| **customers** | [**Relationship**](Relationship.md) |  | [optional] |
| **counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] |
| **chargeback** | [**Relationship**](Relationship.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ChargebackTransactionRelationships.new(
  account: null,
  customer: null,
  customers: null,
  counterparty_account: null,
  chargeback: null
)
```

