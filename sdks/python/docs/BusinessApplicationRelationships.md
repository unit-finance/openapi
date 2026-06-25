# BusinessApplicationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**officer** | [**Relationship**](Relationship.md) |  | [optional] 
**beneficial_owners** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] 
**documents** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] 
**application_form** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_application_relationships import BusinessApplicationRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessApplicationRelationships from a JSON string
business_application_relationships_instance = BusinessApplicationRelationships.from_json(json)
# print the JSON string representation of the object
print(BusinessApplicationRelationships.to_json())

# convert the object into a dict
business_application_relationships_dict = business_application_relationships_instance.to_dict()
# create an instance of BusinessApplicationRelationships from a dict
business_application_relationships_from_dict = BusinessApplicationRelationships.from_dict(business_application_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


