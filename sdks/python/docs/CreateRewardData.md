# CreateRewardData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateRewardDataAttributes**](CreateRewardDataAttributes.md) |  | 
**relationships** | [**CreateRewardDataRelationships**](CreateRewardDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_reward_data import CreateRewardData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardData from a JSON string
create_reward_data_instance = CreateRewardData.from_json(json)
# print the JSON string representation of the object
print(CreateRewardData.to_json())

# convert the object into a dict
create_reward_data_dict = create_reward_data_instance.to_dict()
# create an instance of CreateRewardData from a dict
create_reward_data_from_dict = CreateRewardData.from_dict(create_reward_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


