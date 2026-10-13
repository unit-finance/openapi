# UnitFinanceSdk::ChargebackTransactionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all transaction types. |  |
| **direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
| **amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
| **balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
| **summary** | **String** | Summary of the transaction. Common to all transaction types, this will be the description of the chargeback. |  |
| **counterparty** | [**CounterpartyType**](CounterpartyType.md) | The party on the other end of the transaction. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Inherited from the payment tags (see Tag Inheritance). |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ChargebackTransactionAttributes.new(
  created_at: null,
  direction: null,
  amount: null,
  balance: null,
  summary: null,
  counterparty: null,
  tags: null
)
```

