# UnitFinanceSdk::ScheduleType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **start_time** | **Date** | Start time of the recurring payment. Date only (e.g. \&quot;2022-06-29\&quot;). | [optional] |
| **end_time** | **Date** | Optional. End time of the recurring payment. Date only (e.g. \&quot;2022-10-29\&quot;). | [optional] |
| **interval** | **String** | Interval of the schedule. Can be Monthly or Weekly. |  |
| **day_of_month** | **Integer** | Scheduled day of the month. Present when Monthly interval is specified. Valid values can be between 1-28 or (-5)-(-1). Negative numbers represent relative day to the end of the month. -1 represents the last day of the month. | [optional] |
| **day_of_week** | **String** | Scheduled day of the week. Present when Weekly interval is specified. Valid values are Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. | [optional] |
| **total_number_of_payments** | **Integer** | Optional. Total number of payment repetitions. Positive integers only. | [optional] |
| **next_scheduled_action** | **String** | The next scheduled date of the action. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::ScheduleType.new(
  start_time: null,
  end_time: null,
  interval: null,
  day_of_month: null,
  day_of_week: null,
  total_number_of_payments: null,
  next_scheduled_action: null
)
```

