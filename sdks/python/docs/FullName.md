# FullName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **str** | Individual first name. | 
**last** | **str** | Individual last name. | 

## Example

```python
from unit_finance_sdk.models.full_name import FullName

# TODO update the JSON string below
json = "{}"
# create an instance of FullName from a JSON string
full_name_instance = FullName.from_json(json)
# print the JSON string representation of the object
print(FullName.to_json())

# convert the object into a dict
full_name_dict = full_name_instance.to_dict()
# create an instance of FullName from a dict
full_name_from_dict = FullName.from_dict(full_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


