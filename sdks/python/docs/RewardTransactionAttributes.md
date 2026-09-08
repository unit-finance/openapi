# RewardTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types, this will be the description of the reward. | 
**receiver_counterparty** | [**CounterpartyType**](CounterpartyType.md) | The receiving party of the transaction. Available only when the receiving party is a Deposit Account. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Inherited from the payment tags (see Tag Inheritance). | 

## Example

```python
from unit_finance_sdk.models.reward_transaction_attributes import RewardTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RewardTransactionAttributes from a JSON string
reward_transaction_attributes_instance = RewardTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(RewardTransactionAttributes.to_json())

# convert the object into a dict
reward_transaction_attributes_dict = reward_transaction_attributes_instance.to_dict()
# create an instance of RewardTransactionAttributes from a dict
reward_transaction_attributes_from_dict = RewardTransactionAttributes.from_dict(reward_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


