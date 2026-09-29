# LendingProgramExtendedInformationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**program_size_available** | **int** | The currently available size of the lending program, in cents. | [optional] 
**program_size_allocated** | **int** | The currently allocated size of the lending program, in cents. | [optional] 

## Example

```python
from unit_finance_sdk.models.lending_program_extended_information_attributes import LendingProgramExtendedInformationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of LendingProgramExtendedInformationAttributes from a JSON string
lending_program_extended_information_attributes_instance = LendingProgramExtendedInformationAttributes.from_json(json)
# print the JSON string representation of the object
print(LendingProgramExtendedInformationAttributes.to_json())

# convert the object into a dict
lending_program_extended_information_attributes_dict = lending_program_extended_information_attributes_instance.to_dict()
# create an instance of LendingProgramExtendedInformationAttributes from a dict
lending_program_extended_information_attributes_from_dict = LendingProgramExtendedInformationAttributes.from_dict(lending_program_extended_information_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


