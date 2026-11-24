# ActivateDacaData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | **object** |  | [optional] 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.activate_daca_data import ActivateDacaData

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateDacaData from a JSON string
activate_daca_data_instance = ActivateDacaData.from_json(json)
# print the JSON string representation of the object
print(ActivateDacaData.to_json())

# convert the object into a dict
activate_daca_data_dict = activate_daca_data_instance.to_dict()
# create an instance of ActivateDacaData from a dict
activate_daca_data_from_dict = ActivateDacaData.from_dict(activate_daca_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


