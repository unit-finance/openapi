# UpdateTagsDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, object]** | See Updating Tags. | [optional] 

## Example

```python
from unit_finance_sdk.models.update_tags_data_attributes import UpdateTagsDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTagsDataAttributes from a JSON string
update_tags_data_attributes_instance = UpdateTagsDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateTagsDataAttributes.to_json())

# convert the object into a dict
update_tags_data_attributes_dict = update_tags_data_attributes_instance.to_dict()
# create an instance of UpdateTagsDataAttributes from a dict
update_tags_data_attributes_from_dict = UpdateTagsDataAttributes.from_dict(update_tags_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


