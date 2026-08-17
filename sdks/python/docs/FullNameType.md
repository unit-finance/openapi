# FullNameType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **str** | Individual first name. | 
**last** | **str** | Individual last name. | 

## Example

```python
from unit_finance_sdk.models.full_name_type import FullNameType

# TODO update the JSON string below
json = "{}"
# create an instance of FullNameType from a JSON string
full_name_type_instance = FullNameType.from_json(json)
# print the JSON string representation of the object
print(FullNameType.to_json())

# convert the object into a dict
full_name_type_dict = full_name_type_instance.to_dict()
# create an instance of FullNameType from a dict
full_name_type_from_dict = FullNameType.from_dict(full_name_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


