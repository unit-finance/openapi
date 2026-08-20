

# ScheduleType


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**startTime** | **OffsetDateTime** | Start time of the recurring payment. Date only (e.g. \&quot;2022-06-29\&quot;). |  [optional] |
|**endTime** | **OffsetDateTime** | Optional. End time of the recurring payment. Date only (e.g. \&quot;2022-10-29\&quot;). |  [optional] |
|**interval** | **String** | Interval of the schedule. Can be Monthly or Weekly. |  |
|**dayOfMonth** | **Integer** | Scheduled day of the month. Present when Monthly interval is specified. Valid values can be between 1-28 or (-5)-(-1). Negative numbers represent relative day to the end of the month. -1 represents the last day of the month. |  [optional] |
|**dayOfWeek** | **String** | Scheduled day of the week. Present when Weekly interval is specified. Valid values are Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. |  [optional] |
|**totalNumberOfPayments** | **Integer** | Optional. Total number of payment repetitions. Positive integers only. |  [optional] |
|**nextScheduledAction** | **String** | The next scheduled date of the action. |  [optional] |



