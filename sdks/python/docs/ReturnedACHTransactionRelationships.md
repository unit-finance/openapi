# ReturnedACHTransactionRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.returned_ach_transaction_relationships import ReturnedACHTransactionRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnedACHTransactionRelationships from a JSON string
returned_ach_transaction_relationships_instance = ReturnedACHTransactionRelationships.from_json(json)
# print the JSON string representation of the object
print(ReturnedACHTransactionRelationships.to_json())

# convert the object into a dict
returned_ach_transaction_relationships_dict = returned_ach_transaction_relationships_instance.to_dict()
# create an instance of ReturnedACHTransactionRelationships from a dict
returned_ach_transaction_relationships_from_dict = ReturnedACHTransactionRelationships.from_dict(returned_ach_transaction_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


