# DisputeRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.dispute_relationships import DisputeRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeRelationships from a JSON string
dispute_relationships_instance = DisputeRelationships.from_json(json)
# print the JSON string representation of the object
print(DisputeRelationships.to_json())

# convert the object into a dict
dispute_relationships_dict = dispute_relationships_instance.to_dict()
# create an instance of DisputeRelationships from a dict
dispute_relationships_from_dict = DisputeRelationships.from_dict(dispute_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


