# UnitFinanceSdk::RecurringCapitalPartnerBookRepaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. | [optional] |
| **schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. |  |
| **description** | **String** | Repayment description (maximum of 50 characters). this will show up on the statement of the counterparty. |  |
| **transaction_summary_override** | **String** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |
| **number_of_repayments** | **Integer** | Represents the number of repayments that were created by this recurring payment. |  |
| **status** | **String** | Status of the recurring repayment, one of: Active, Disabled. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::RecurringCapitalPartnerBookRepaymentAttributes.new(
  created_at: null,
  updated_at: null,
  schedule: null,
  description: null,
  transaction_summary_override: null,
  tags: null,
  number_of_repayments: null,
  status: null
)
```

