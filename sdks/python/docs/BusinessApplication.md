# BusinessApplication

`BusinessApplication` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BusinessApplicationAttributes**](BusinessApplicationAttributes.md) |  | 
**relationships** | [**BusinessApplicationRelationships**](BusinessApplicationRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.business_application import BusinessApplication

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessApplication from a JSON string
business_application_instance = BusinessApplication.from_json(json)
# print the JSON string representation of the object
print(BusinessApplication.to_json())

# convert the object into a dict
business_application_dict = business_application_instance.to_dict()
# create an instance of BusinessApplication from a dict
business_application_from_dict = BusinessApplication.from_dict(business_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


