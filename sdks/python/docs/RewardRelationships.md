# RewardRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiving_account** | [**Relationship**](Relationship.md) |  | [optional] 
**funding_account** | [**Relationship**](Relationship.md) |  | [optional] 
**rewarded_transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.reward_relationships import RewardRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RewardRelationships from a JSON string
reward_relationships_instance = RewardRelationships.from_json(json)
# print the JSON string representation of the object
print(RewardRelationships.to_json())

# convert the object into a dict
reward_relationships_dict = reward_relationships_instance.to_dict()
# create an instance of RewardRelationships from a dict
reward_relationships_from_dict = RewardRelationships.from_dict(reward_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


