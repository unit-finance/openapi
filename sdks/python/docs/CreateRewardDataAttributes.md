# CreateRewardDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents) to reward the account. | 
**description** | **str** | Description of the reward (maximum of 50 characters). | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**idempotency_key** | **str** | Optional, but **strongly recommended**. See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_reward_data_attributes import CreateRewardDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardDataAttributes from a JSON string
create_reward_data_attributes_instance = CreateRewardDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateRewardDataAttributes.to_json())

# convert the object into a dict
create_reward_data_attributes_dict = create_reward_data_attributes_instance.to_dict()
# create an instance of CreateRewardDataAttributes from a dict
create_reward_data_attributes_from_dict = CreateRewardDataAttributes.from_dict(create_reward_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


