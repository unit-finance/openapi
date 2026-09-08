# UnitFinanceSdk::ReturnedACHTransactionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all transaction types. |  |
| **direction** | **String** | The direction in which the funds flow. Common to all transaction types. |  |
| **amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
| **balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
| **summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
| **company_name** | **String** | The name by which the originator is known to the receiver. |  |
| **counterparty_name** | **String** | The name of the party that originated the ACH payment. |  |
| **counterparty_routing_number** | **String** | The routing number of the party that originated the ACH payment. |  |
| **reason** | **String** | The reason for the transaction return. See ACH return reasons. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReturnedACHTransactionAttributes.new(
  created_at: null,
  direction: null,
  amount: null,
  balance: null,
  summary: null,
  company_name: null,
  counterparty_name: null,
  counterparty_routing_number: null,
  reason: null,
  tags: null
)
```

