# EnterDacaData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | **object** |  | [optional] 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.enter_daca_data import EnterDacaData

# TODO update the JSON string below
json = "{}"
# create an instance of EnterDacaData from a JSON string
enter_daca_data_instance = EnterDacaData.from_json(json)
# print the JSON string representation of the object
print(EnterDacaData.to_json())

# convert the object into a dict
enter_daca_data_dict = enter_daca_data_instance.to_dict()
# create an instance of EnterDacaData from a dict
enter_daca_data_from_dict = EnterDacaData.from_dict(enter_daca_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


