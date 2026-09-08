# UnitFinanceSdk::RepaidPaymentAdvanceTransactionAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the transaction was created. Common to all transaction types. |  |
| **direction** | **String** | The direction in which the funds flow. Common to all transaction types. The value is always Credit. |  |
| **amount** | **Integer** | The amount (cents) of the transaction. Common to all transaction types. |  |
| **balance** | **Integer** | The account balance (cents) after the transaction. Common to all transaction types. |  |
| **summary** | **String** | Summary of the transaction. Common to all transaction types. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RepaidPaymentAdvanceTransactionAttributes.new(
  created_at: null,
  direction: null,
  amount: null,
  balance: null,
  summary: null,
  tags: null
)
```

