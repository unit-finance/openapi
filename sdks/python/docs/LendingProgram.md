# LendingProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The lending program type, e.g. &#x60;bankSponsoredChargeCardProgram&#x60;. The set of program types is open-ended and is not enumerated here. | 
**id** | **str** |  | 
**attributes** | [**LendingProgramAttributes**](LendingProgramAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.lending_program import LendingProgram

# TODO update the JSON string below
json = "{}"
# create an instance of LendingProgram from a JSON string
lending_program_instance = LendingProgram.from_json(json)
# print the JSON string representation of the object
print(LendingProgram.to_json())

# convert the object into a dict
lending_program_dict = lending_program_instance.to_dict()
# create an instance of LendingProgram from a dict
lending_program_from_dict = LendingProgram.from_dict(lending_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


