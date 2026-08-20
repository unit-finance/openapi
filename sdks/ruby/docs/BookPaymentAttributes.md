# UnitFinanceSdk::BookPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **status** | **String** | Either Sent or Rejected (see reason for details). |  |
| **reason** | **String** | Optional. More information about the status. | [optional] |
| **direction** | **String** | The direction in which the funds flow (either Debit or Credit). |  |
| **description** | **String** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
| **transaction_summary_override** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] |
| **amount** | **Integer** | The amount (cents) of the payment. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BookPaymentAttributes.new(
  created_at: null,
  status: null,
  reason: null,
  direction: null,
  description: null,
  transaction_summary_override: null,
  amount: null,
  tags: null
)
```

