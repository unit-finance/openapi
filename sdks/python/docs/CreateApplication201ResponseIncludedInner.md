# CreateApplication201ResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**BeneficialOwnerAttributes**](BeneficialOwnerAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_application201_response_included_inner import CreateApplication201ResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateApplication201ResponseIncludedInner from a JSON string
create_application201_response_included_inner_instance = CreateApplication201ResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(CreateApplication201ResponseIncludedInner.to_json())

# convert the object into a dict
create_application201_response_included_inner_dict = create_application201_response_included_inner_instance.to_dict()
# create an instance of CreateApplication201ResponseIncludedInner from a dict
create_application201_response_included_inner_from_dict = CreateApplication201ResponseIncludedInner.from_dict(create_application201_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


