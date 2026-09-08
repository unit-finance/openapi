# AdjustmentTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**description** | **str** | Description of the transaction. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.adjustment_transaction_attributes import AdjustmentTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AdjustmentTransactionAttributes from a JSON string
adjustment_transaction_attributes_instance = AdjustmentTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(AdjustmentTransactionAttributes.to_json())

# convert the object into a dict
adjustment_transaction_attributes_dict = adjustment_transaction_attributes_instance.to_dict()
# create an instance of AdjustmentTransactionAttributes from a dict
adjustment_transaction_attributes_from_dict = AdjustmentTransactionAttributes.from_dict(adjustment_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


