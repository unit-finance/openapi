# CardReversalTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**card_last4_digits** | **str** | The last 4 digits of the debit card involved in the transaction. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.card_reversal_transaction_attributes import CardReversalTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CardReversalTransactionAttributes from a JSON string
card_reversal_transaction_attributes_instance = CardReversalTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(CardReversalTransactionAttributes.to_json())

# convert the object into a dict
card_reversal_transaction_attributes_dict = card_reversal_transaction_attributes_instance.to_dict()
# create an instance of CardReversalTransactionAttributes from a dict
card_reversal_transaction_attributes_from_dict = CardReversalTransactionAttributes.from_dict(card_reversal_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


