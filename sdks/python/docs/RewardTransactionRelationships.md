# RewardTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**reward** | [**Relationship**](Relationship.md) |  | [optional] 
**receiver_account** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.reward_transaction_relationships import RewardTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RewardTransactionRelationships from a JSON string
reward_transaction_relationships_instance = RewardTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(RewardTransactionRelationships.to_json())

# convert the object into a dict
reward_transaction_relationships_dict = reward_transaction_relationships_instance.to_dict()
# create an instance of RewardTransactionRelationships from a dict
reward_transaction_relationships_from_dict = RewardTransactionRelationships.from_dict(reward_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


