# Relationship


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**RelationshipData**](RelationshipData.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.relationship import Relationship

# TODO update the JSON string below
json = "{}"
# create an instance of Relationship from a JSON string
relationship_instance = Relationship.from_json(json)
# print the JSON string representation of the object
print(Relationship.to_json())

# convert the object into a dict
relationship_dict = relationship_instance.to_dict()
# create an instance of Relationship from a dict
relationship_from_dict = Relationship.from_dict(relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


