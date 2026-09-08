# UnitFinanceSdk::RewardTransactionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all transaction types. |  |
| **direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
| **amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
| **balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
| **summary** | **String** | Summary of the transaction. Common to all transaction types, this will be the description of the reward. |  |
| **receiver_counterparty** | [**CounterpartyType**](CounterpartyType.md) | The receiving party of the transaction. Available only when the receiving party is a Deposit Account. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Inherited from the payment tags (see Tag Inheritance). |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RewardTransactionAttributes.new(
  created_at: null,
  direction: null,
  amount: null,
  balance: null,
  summary: null,
  receiver_counterparty: null,
  tags: null
)
```

