# UpdateData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateDataAttributes**](UpdateDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_data import UpdateData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateData from a JSON string
update_data_instance = UpdateData.from_json(json)
# print the JSON string representation of the object
print(UpdateData.to_json())

# convert the object into a dict
update_data_dict = update_data_instance.to_dict()
# create an instance of UpdateData from a dict
update_data_from_dict = UpdateData.from_dict(update_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


