# Institution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | [optional] 
**attributes** | [**InstitutionAttributes**](InstitutionAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.institution import Institution

# TODO update the JSON string below
json = "{}"
# create an instance of Institution from a JSON string
institution_instance = Institution.from_json(json)
# print the JSON string representation of the object
print(Institution.to_json())

# convert the object into a dict
institution_dict = institution_instance.to_dict()
# create an instance of Institution from a dict
institution_from_dict = Institution.from_dict(institution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


