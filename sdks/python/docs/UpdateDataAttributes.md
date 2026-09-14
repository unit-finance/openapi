# UpdateDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clearing_days_override** | **float** | See Dynamic Clearing Period. | [optional] 
**tags** | **Dict[str, object]** | See Updating Tags. | 

## Example

```python
from unit_finance_sdk.models.update_data_attributes import UpdateDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataAttributes from a JSON string
update_data_attributes_instance = UpdateDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UpdateDataAttributes.to_json())

# convert the object into a dict
update_data_attributes_dict = update_data_attributes_instance.to_dict()
# create an instance of UpdateDataAttributes from a dict
update_data_attributes_from_dict = UpdateDataAttributes.from_dict(update_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


