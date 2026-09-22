# AtmAuthorizationRequestRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**card** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.atm_authorization_request_relationships import AtmAuthorizationRequestRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AtmAuthorizationRequestRelationships from a JSON string
atm_authorization_request_relationships_instance = AtmAuthorizationRequestRelationships.from_json(json)
# print the JSON string representation of the object
print(AtmAuthorizationRequestRelationships.to_json())

# convert the object into a dict
atm_authorization_request_relationships_dict = atm_authorization_request_relationships_instance.to_dict()
# create an instance of AtmAuthorizationRequestRelationships from a dict
atm_authorization_request_relationships_from_dict = AtmAuthorizationRequestRelationships.from_dict(atm_authorization_request_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


