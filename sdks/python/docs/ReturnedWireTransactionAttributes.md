# ReturnedWireTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**reason** | **str** | The reason for the return. | 
**imad** | **str** | Input Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | 
**omad** | **str** | Output Message Accountability Data. It&#39;s a unique number given to each FedWire payment in case of payment has been sent and fully processed. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.returned_wire_transaction_attributes import ReturnedWireTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedWireTransactionAttributes from a JSON string
returned_wire_transaction_attributes_instance = ReturnedWireTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(ReturnedWireTransactionAttributes.to_json())

# convert the object into a dict
returned_wire_transaction_attributes_dict = returned_wire_transaction_attributes_instance.to_dict()
# create an instance of ReturnedWireTransactionAttributes from a dict
returned_wire_transaction_attributes_from_dict = ReturnedWireTransactionAttributes.from_dict(returned_wire_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


