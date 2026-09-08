# UpdateTagsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateTagsDataAttributes**](UpdateTagsDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_tags_data import UpdateTagsData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTagsData from a JSON string
update_tags_data_instance = UpdateTagsData.from_json(json)
# print the JSON string representation of the object
print(UpdateTagsData.to_json())

# convert the object into a dict
update_tags_data_dict = update_tags_data_instance.to_dict()
# create an instance of UpdateTagsData from a dict
update_tags_data_from_dict = UpdateTagsData.from_dict(update_tags_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


