# ReceivableRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**lending_program** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.receivable_relationships import ReceivableRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivableRelationships from a JSON string
receivable_relationships_instance = ReceivableRelationships.from_json(json)
# print the JSON string representation of the object
print(ReceivableRelationships.to_json())

# convert the object into a dict
receivable_relationships_dict = receivable_relationships_instance.to_dict()
# create an instance of ReceivableRelationships from a dict
receivable_relationships_from_dict = ReceivableRelationships.from_dict(receivable_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


