# ReturnedReceivedACHTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**company_name** | **str** | The name by which the originator is known to the receiver. | 
**reason** | **str** | The reason for the transaction return. See ACH return reasons. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.returned_received_ach_transaction_attributes import ReturnedReceivedACHTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedReceivedACHTransactionAttributes from a JSON string
returned_received_ach_transaction_attributes_instance = ReturnedReceivedACHTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(ReturnedReceivedACHTransactionAttributes.to_json())

# convert the object into a dict
returned_received_ach_transaction_attributes_dict = returned_received_ach_transaction_attributes_instance.to_dict()
# create an instance of ReturnedReceivedACHTransactionAttributes from a dict
returned_received_ach_transaction_attributes_from_dict = ReturnedReceivedACHTransactionAttributes.from_dict(returned_received_ach_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


