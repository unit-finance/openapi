# CardReversalTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**related_transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.card_reversal_transaction_relationships import CardReversalTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CardReversalTransactionRelationships from a JSON string
card_reversal_transaction_relationships_instance = CardReversalTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(CardReversalTransactionRelationships.to_json())

# convert the object into a dict
card_reversal_transaction_relationships_dict = card_reversal_transaction_relationships_instance.to_dict()
# create an instance of CardReversalTransactionRelationships from a dict
card_reversal_transaction_relationships_from_dict = CardReversalTransactionRelationships.from_dict(card_reversal_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


