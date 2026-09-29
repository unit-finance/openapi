# UnitFinanceSdk::ReceivableAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **original_amount** | **Integer** | The original amount of the receivable that need to be repaid. |  |
| **remaining_amount** | **Integer** | The remaining amount of the receivable that need to be repaid. |  |
| **repayment_status** | [**ReceivableAttributesRepaymentStatus**](ReceivableAttributesRepaymentStatus.md) |  |  |
| **purchase_due_date** | **Date** | The date the receivable is due e.g. 2024-12-31. | [optional] |
| **purchased_timestamp** | **Time** | The date the receivable was purchased | [optional] |
| **capital_partner_id** | **String** | The capital partner id | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ReceivableAttributes.new(
  created_at: null,
  updated_at: null,
  original_amount: null,
  remaining_amount: null,
  repayment_status: null,
  purchase_due_date: null,
  purchased_timestamp: null,
  capital_partner_id: null
)
```

