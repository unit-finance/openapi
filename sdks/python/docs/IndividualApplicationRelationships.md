# IndividualApplicationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**documents** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] 
**application_form** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.individual_application_relationships import IndividualApplicationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualApplicationRelationships from a JSON string
individual_application_relationships_instance = IndividualApplicationRelationships.from_json(json)
# print the JSON string representation of the object
print(IndividualApplicationRelationships.to_json())

# convert the object into a dict
individual_application_relationships_dict = individual_application_relationships_instance.to_dict()
# create an instance of IndividualApplicationRelationships from a dict
individual_application_relationships_from_dict = IndividualApplicationRelationships.from_dict(individual_application_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


