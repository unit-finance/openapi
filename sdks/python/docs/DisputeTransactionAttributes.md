# DisputeTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**dispute_id** | **str** | Unique ID of the dispute that is related to the transaction. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**reason** | **str** | The reason for the dispute transaction, one of: ProvisionalCredit, ProvisionalCreditReversalDenied, ProvisionalCreditReversalResolved, FinalCredit. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.dispute_transaction_attributes import DisputeTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeTransactionAttributes from a JSON string
dispute_transaction_attributes_instance = DisputeTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(DisputeTransactionAttributes.to_json())

# convert the object into a dict
dispute_transaction_attributes_dict = dispute_transaction_attributes_instance.to_dict()
# create an instance of DisputeTransactionAttributes from a dict
dispute_transaction_attributes_from_dict = DisputeTransactionAttributes.from_dict(dispute_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


