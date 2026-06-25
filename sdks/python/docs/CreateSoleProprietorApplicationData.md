# CreateSoleProprietorApplicationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateSoleProprietorApplicationDataAttributes**](CreateSoleProprietorApplicationDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_sole_proprietor_application_data import CreateSoleProprietorApplicationData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSoleProprietorApplicationData from a JSON string
create_sole_proprietor_application_data_instance = CreateSoleProprietorApplicationData.from_json(json)
# print the JSON string representation of the object
print(CreateSoleProprietorApplicationData.to_json())

# convert the object into a dict
create_sole_proprietor_application_data_dict = create_sole_proprietor_application_data_instance.to_dict()
# create an instance of CreateSoleProprietorApplicationData from a dict
create_sole_proprietor_application_data_from_dict = CreateSoleProprietorApplicationData.from_dict(create_sole_proprietor_application_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


