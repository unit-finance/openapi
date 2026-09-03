# ScheduleType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **datetime** | Start time of the recurring payment. Date only (e.g. \&quot;2022-06-29\&quot;). | [optional] 
**end_time** | **datetime** | Optional. End time of the recurring payment. Date only (e.g. \&quot;2022-10-29\&quot;). | [optional] 
**interval** | **str** | Interval of the schedule. Can be Monthly or Weekly. | 
**day_of_month** | **int** | Scheduled day of the month. Present when Monthly interval is specified. Valid values can be between 1-28 or (-5)-(-1). Negative numbers represent relative day to the end of the month. -1 represents the last day of the month. | [optional] 
**day_of_week** | **str** | Scheduled day of the week. Present when Weekly interval is specified. Valid values are Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. | [optional] 
**total_number_of_payments** | **int** | Optional. Total number of payment repetitions. Positive integers only. | [optional] 
**next_scheduled_action** | **str** | The next scheduled date of the action. | [optional] 

## Example

```python
from unit_finance_sdk.models.schedule_type import ScheduleType

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleType from a JSON string
schedule_type_instance = ScheduleType.from_json(json)
# print the JSON string representation of the object
print(ScheduleType.to_json())

# convert the object into a dict
schedule_type_dict = schedule_type_instance.to_dict()
# create an instance of ScheduleType from a dict
schedule_type_from_dict = ScheduleType.from_dict(schedule_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


