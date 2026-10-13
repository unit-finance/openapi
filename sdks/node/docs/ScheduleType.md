# ScheduleType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **string** | Start time of the recurring payment. Date only (e.g. \&quot;2022-06-29\&quot;). | [optional] [default to undefined]
**endTime** | **string** | Optional. End time of the recurring payment. Date only (e.g. \&quot;2022-10-29\&quot;). | [optional] [default to undefined]
**interval** | **string** | Interval of the schedule. Can be Monthly or Weekly. | [default to undefined]
**dayOfMonth** | **number** | Scheduled day of the month. Present when Monthly interval is specified. Valid values can be between 1-28 or (-5)-(-1). Negative numbers represent relative day to the end of the month. -1 represents the last day of the month. | [optional] [default to undefined]
**dayOfWeek** | **string** | Scheduled day of the week. Present when Weekly interval is specified. Valid values are Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. | [optional] [default to undefined]
**totalNumberOfPayments** | **number** | Optional. Total number of payment repetitions. Positive integers only. | [optional] [default to undefined]
**nextScheduledAction** | **string** | The next scheduled date of the action. | [optional] [default to undefined]

## Example

```typescript
import { ScheduleType } from '@unit-finance/unit-openapi-node-sdk';

const instance: ScheduleType = {
    startTime,
    endTime,
    interval,
    dayOfMonth,
    dayOfWeek,
    totalNumberOfPayments,
    nextScheduledAction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
