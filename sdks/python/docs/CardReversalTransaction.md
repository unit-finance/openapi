# CardReversalTransaction

`CardReversalTransaction` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**CardReversalTransactionAttributes**](CardReversalTransactionAttributes.md) |  | 
**relationships** | [**CardReversalTransactionRelationships**](CardReversalTransactionRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.card_reversal_transaction import CardReversalTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of CardReversalTransaction from a JSON string
card_reversal_transaction_instance = CardReversalTransaction.from_json(json)
# print the JSON string representation of the object
print(CardReversalTransaction.to_json())

# convert the object into a dict
card_reversal_transaction_dict = card_reversal_transaction_instance.to_dict()
# create an instance of CardReversalTransaction from a dict
card_reversal_transaction_from_dict = CardReversalTransaction.from_dict(card_reversal_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


