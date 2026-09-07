# GetExpectedACHCompletionDateDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | The direction of the ACH payment. One of Credit or Debit. | 
**amount** | **int** | The payment amount (in cents). Must be &gt;&#x3D; 1. | 
**same_day** | **bool** | Optional, default is false. Whether same-day ACH processing is requested. See Same Day ACH. | [optional] 
**submission_at** | **datetime** | Optional, defaults to the current time. Hypothetical submission time used for the estimate. | [optional] 

## Example

```python
from unit_finance_sdk.models.get_expected_ach_completion_date_data_attributes import GetExpectedACHCompletionDateDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GetExpectedACHCompletionDateDataAttributes from a JSON string
get_expected_ach_completion_date_data_attributes_instance = GetExpectedACHCompletionDateDataAttributes.from_json(json)
# print the JSON string representation of the object
print(GetExpectedACHCompletionDateDataAttributes.to_json())

# convert the object into a dict
get_expected_ach_completion_date_data_attributes_dict = get_expected_ach_completion_date_data_attributes_instance.to_dict()
# create an instance of GetExpectedACHCompletionDateDataAttributes from a dict
get_expected_ach_completion_date_data_attributes_from_dict = GetExpectedACHCompletionDateDataAttributes.from_dict(get_expected_ach_completion_date_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


