# UnitFinanceSdk::RecurringCreditBookPaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. |  |
| **amount** | **Integer** | The amount (cents) of the payment. |  |
| **description** | **String** | Payment description (maximum of 80 characters), this will show up on statement of the counterparty. |  |
| **status** | **String** | Status of the recurring payment, one of: Active, Completed, Disabled, Deleted. |  |
| **number_of_payments** | **Integer** | Represents the number of payments that were created by this recurring payment. |  |
| **schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. |  |
| **transaction_summary_override** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RecurringCreditBookPaymentAttributes.new(
  created_at: null,
  updated_at: null,
  amount: null,
  description: null,
  status: null,
  number_of_payments: null,
  schedule: null,
  transaction_summary_override: null,
  tags: null
)
```

