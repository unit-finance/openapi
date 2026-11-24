# DeactivateDacaData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | **object** |  | [optional] 
**relationships** | [**CreateFeeDataRelationships**](CreateFeeDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.deactivate_daca_data import DeactivateDacaData

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateDacaData from a JSON string
deactivate_daca_data_instance = DeactivateDacaData.from_json(json)
# print the JSON string representation of the object
print(DeactivateDacaData.to_json())

# convert the object into a dict
deactivate_daca_data_dict = deactivate_daca_data_instance.to_dict()
# create an instance of DeactivateDacaData from a dict
deactivate_daca_data_from_dict = DeactivateDacaData.from_dict(deactivate_daca_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


