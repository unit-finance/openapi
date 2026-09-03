# GetExpectedACHCompletionDateData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**GetExpectedACHCompletionDateDataAttributes**](GetExpectedACHCompletionDateDataAttributes.md) |  | 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_expected_ach_completion_date_data import GetExpectedACHCompletionDateData

# TODO update the JSON string below
json = "{}"
# create an instance of GetExpectedACHCompletionDateData from a JSON string
get_expected_ach_completion_date_data_instance = GetExpectedACHCompletionDateData.from_json(json)
# print the JSON string representation of the object
print(GetExpectedACHCompletionDateData.to_json())

# convert the object into a dict
get_expected_ach_completion_date_data_dict = get_expected_ach_completion_date_data_instance.to_dict()
# create an instance of GetExpectedACHCompletionDateData from a dict
get_expected_ach_completion_date_data_from_dict = GetExpectedACHCompletionDateData.from_dict(get_expected_ach_completion_date_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


