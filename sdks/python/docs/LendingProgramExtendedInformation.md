# LendingProgramExtendedInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**LendingProgramExtendedInformationAttributes**](LendingProgramExtendedInformationAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.lending_program_extended_information import LendingProgramExtendedInformation

# TODO update the JSON string below
json = "{}"
# create an instance of LendingProgramExtendedInformation from a JSON string
lending_program_extended_information_instance = LendingProgramExtendedInformation.from_json(json)
# print the JSON string representation of the object
print(LendingProgramExtendedInformation.to_json())

# convert the object into a dict
lending_program_extended_information_dict = lending_program_extended_information_instance.to_dict()
# create an instance of LendingProgramExtendedInformation from a dict
lending_program_extended_information_from_dict = LendingProgramExtendedInformation.from_dict(lending_program_extended_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


