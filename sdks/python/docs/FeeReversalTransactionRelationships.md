# FeeReversalTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**related_transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.fee_reversal_transaction_relationships import FeeReversalTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of FeeReversalTransactionRelationships from a JSON string
fee_reversal_transaction_relationships_instance = FeeReversalTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(FeeReversalTransactionRelationships.to_json())

# convert the object into a dict
fee_reversal_transaction_relationships_dict = fee_reversal_transaction_relationships_instance.to_dict()
# create an instance of FeeReversalTransactionRelationships from a dict
fee_reversal_transaction_relationships_from_dict = FeeReversalTransactionRelationships.from_dict(fee_reversal_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


