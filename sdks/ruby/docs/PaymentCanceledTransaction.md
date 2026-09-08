# UnitFinanceSdk::PaymentCanceledTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** |  |  |
| **id** | **String** |  |  |
| **attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  |  |
| **relationships** | [**PaymentCanceledTransactionRelationships**](PaymentCanceledTransactionRelationships.md) |  | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::PaymentCanceledTransaction.new(
  type: null,
  id: null,
  attributes: null,
  relationships: null
)
```

