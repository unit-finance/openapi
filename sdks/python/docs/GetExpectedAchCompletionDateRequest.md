# GetExpectedAchCompletionDateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GetExpectedACHCompletionDateData**](GetExpectedACHCompletionDateData.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_expected_ach_completion_date_request import GetExpectedAchCompletionDateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetExpectedAchCompletionDateRequest from a JSON string
get_expected_ach_completion_date_request_instance = GetExpectedAchCompletionDateRequest.from_json(json)
# print the JSON string representation of the object
print(GetExpectedAchCompletionDateRequest.to_json())

# convert the object into a dict
get_expected_ach_completion_date_request_dict = get_expected_ach_completion_date_request_instance.to_dict()
# create an instance of GetExpectedAchCompletionDateRequest from a dict
get_expected_ach_completion_date_request_from_dict = GetExpectedAchCompletionDateRequest.from_dict(get_expected_ach_completion_date_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


