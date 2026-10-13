# UnitFinanceSdk::RecurringACHRepaymentAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | The date the resource was updated. | [optional] |
| **schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. |  |
| **description** | **String** | Repayment description (maximum of 50 characters). this will show up on the statement of the counterparty. |  |
| **addenda** | **String** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] |
| **same_day** | **Boolean** | Optional, default is false. See Same Day ACH. | [optional] |
| **sec_code** | **String** | See Use a custom SEC Code. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] |
| **number_of_repayments** | **Integer** | Represents the number of repayments that were created by this recurring payment. |  |
| **status** | **String** | Status of the recurring repayment, one of: Active, Disabled. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::RecurringACHRepaymentAttributes.new(
  created_at: null,
  updated_at: null,
  schedule: null,
  description: null,
  addenda: null,
  same_day: null,
  sec_code: null,
  tags: null,
  number_of_repayments: null,
  status: null
)
```

