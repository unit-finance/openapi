# CreateRewardDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiving_account** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_reward_data_relationships import CreateRewardDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRewardDataRelationships from a JSON string
create_reward_data_relationships_instance = CreateRewardDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateRewardDataRelationships.to_json())

# convert the object into a dict
create_reward_data_relationships_dict = create_reward_data_relationships_instance.to_dict()
# create an instance of CreateRewardDataRelationships from a dict
create_reward_data_relationships_from_dict = CreateRewardDataRelationships.from_dict(create_reward_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


