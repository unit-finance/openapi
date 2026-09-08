# PurchaseTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 
**authorization** | [**Relationship**](Relationship.md) |  | [optional] 
**authorization_request** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.purchase_transaction_relationships import PurchaseTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseTransactionRelationships from a JSON string
purchase_transaction_relationships_instance = PurchaseTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(PurchaseTransactionRelationships.to_json())

# convert the object into a dict
purchase_transaction_relationships_dict = purchase_transaction_relationships_instance.to_dict()
# create an instance of PurchaseTransactionRelationships from a dict
purchase_transaction_relationships_from_dict = PurchaseTransactionRelationships.from_dict(purchase_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


