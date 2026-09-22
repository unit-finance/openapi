# ATMLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | [optional] 
**attributes** | [**ATMLocationAttributes**](ATMLocationAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.atm_location import ATMLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ATMLocation from a JSON string
atm_location_instance = ATMLocation.from_json(json)
# print the JSON string representation of the object
print(ATMLocation.to_json())

# convert the object into a dict
atm_location_dict = atm_location_instance.to_dict()
# create an instance of ATMLocation from a dict
atm_location_from_dict = ATMLocation.from_dict(atm_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


