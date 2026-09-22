# AuthorizationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**authorization_request** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.authorization_relationships import AuthorizationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationRelationships from a JSON string
authorization_relationships_instance = AuthorizationRelationships.from_json(json)
# print the JSON string representation of the object
print(AuthorizationRelationships.to_json())

# convert the object into a dict
authorization_relationships_dict = authorization_relationships_instance.to_dict()
# create an instance of AuthorizationRelationships from a dict
authorization_relationships_from_dict = AuthorizationRelationships.from_dict(authorization_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


