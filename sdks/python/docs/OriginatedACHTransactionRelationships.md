# OriginatedACHTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 
**recurring_payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.originated_ach_transaction_relationships import OriginatedACHTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of OriginatedACHTransactionRelationships from a JSON string
originated_ach_transaction_relationships_instance = OriginatedACHTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(OriginatedACHTransactionRelationships.to_json())

# convert the object into a dict
originated_ach_transaction_relationships_dict = originated_ach_transaction_relationships_instance.to_dict()
# create an instance of OriginatedACHTransactionRelationships from a dict
originated_ach_transaction_relationships_from_dict = OriginatedACHTransactionRelationships.from_dict(originated_ach_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


