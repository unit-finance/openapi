# LendingProgramAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**name** | **str** | The name of the lending program | 
**program_size_limit** | **int** | The size limit of the lending program, in cents. | 

## Example

```python
from unit_finance_sdk.models.lending_program_attributes import LendingProgramAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of LendingProgramAttributes from a JSON string
lending_program_attributes_instance = LendingProgramAttributes.from_json(json)
# print the JSON string representation of the object
print(LendingProgramAttributes.to_json())

# convert the object into a dict
lending_program_attributes_dict = lending_program_attributes_instance.to_dict()
# create an instance of LendingProgramAttributes from a dict
lending_program_attributes_from_dict = LendingProgramAttributes.from_dict(lending_program_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


