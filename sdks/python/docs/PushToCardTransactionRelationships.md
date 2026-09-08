# PushToCardTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.push_to_card_transaction_relationships import PushToCardTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PushToCardTransactionRelationships from a JSON string
push_to_card_transaction_relationships_instance = PushToCardTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(PushToCardTransactionRelationships.to_json())

# convert the object into a dict
push_to_card_transaction_relationships_dict = push_to_card_transaction_relationships_instance.to_dict()
# create an instance of PushToCardTransactionRelationships from a dict
push_to_card_transaction_relationships_from_dict = PushToCardTransactionRelationships.from_dict(push_to_card_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


