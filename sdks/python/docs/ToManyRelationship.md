# ToManyRelationship


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ResourceIdentifier]**](ResourceIdentifier.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.to_many_relationship import ToManyRelationship

# TODO update the JSON string below
json = "{}"
# create an instance of ToManyRelationship from a JSON string
to_many_relationship_instance = ToManyRelationship.from_json(json)
# print the JSON string representation of the object
print(ToManyRelationship.to_json())

# convert the object into a dict
to_many_relationship_dict = to_many_relationship_instance.to_dict()
# create an instance of ToManyRelationship from a dict
to_many_relationship_from_dict = ToManyRelationship.from_dict(to_many_relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


