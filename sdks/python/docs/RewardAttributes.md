# RewardAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the reward was created. | 
**amount** | **int** | The amount (in cents) of the reward. | 
**description** | **str** | Description of the reward. | 
**status** | **str** | Either Sent or Rejected (see rejectReason for details). | 
**reject_reason** | **str** | More information about the status. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.reward_attributes import RewardAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RewardAttributes from a JSON string
reward_attributes_instance = RewardAttributes.from_json(json)
# print the JSON string representation of the object
print(RewardAttributes.to_json())

# convert the object into a dict
reward_attributes_dict = reward_attributes_instance.to_dict()
# create an instance of RewardAttributes from a dict
reward_attributes_from_dict = RewardAttributes.from_dict(reward_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


