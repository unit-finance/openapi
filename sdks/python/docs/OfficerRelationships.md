# OfficerRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.officer_relationships import OfficerRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of OfficerRelationships from a JSON string
officer_relationships_instance = OfficerRelationships.from_json(json)
# print the JSON string representation of the object
print(OfficerRelationships.to_json())

# convert the object into a dict
officer_relationships_dict = officer_relationships_instance.to_dict()
# create an instance of OfficerRelationships from a dict
officer_relationships_from_dict = OfficerRelationships.from_dict(officer_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


