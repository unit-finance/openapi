# UpdateSoleProprietorApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateSoleProprietorApplicationDataAttributes**](UpdateSoleProprietorApplicationDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_sole_proprietor_application_data import UpdateSoleProprietorApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSoleProprietorApplicationData from a JSON string
update_sole_proprietor_application_data_instance = UpdateSoleProprietorApplicationData.from_json(json)
# print the JSON string representation of the object
print(UpdateSoleProprietorApplicationData.to_json())

# convert the object into a dict
update_sole_proprietor_application_data_dict = update_sole_proprietor_application_data_instance.to_dict()
# create an instance of UpdateSoleProprietorApplicationData from a dict
update_sole_proprietor_application_data_from_dict = UpdateSoleProprietorApplicationData.from_dict(update_sole_proprietor_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


