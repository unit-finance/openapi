# IndividualApplication

`IndividualApplication` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**IndividualApplicationAttributes**](IndividualApplicationAttributes.md) |  | 
**relationships** | [**IndividualApplicationRelationships**](IndividualApplicationRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.individual_application import IndividualApplication

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualApplication from a JSON string
individual_application_instance = IndividualApplication.from_json(json)
# print the JSON string representation of the object
print(IndividualApplication.to_json())

# convert the object into a dict
individual_application_dict = individual_application_instance.to_dict()
# create an instance of IndividualApplication from a dict
individual_application_from_dict = IndividualApplication.from_dict(individual_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


