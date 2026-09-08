# RewardTransaction

A `rewardTransaction` represents a successful reward creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RewardTransactionAttributes**](RewardTransactionAttributes.md) |  | 
**relationships** | [**RewardTransactionRelationships**](RewardTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.reward_transaction import RewardTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of RewardTransaction from a JSON string
reward_transaction_instance = RewardTransaction.from_json(json)
# print the JSON string representation of the object
print(RewardTransaction.to_json())

# convert the object into a dict
reward_transaction_dict = reward_transaction_instance.to_dict()
# create an instance of RewardTransaction from a dict
reward_transaction_from_dict = RewardTransaction.from_dict(reward_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


