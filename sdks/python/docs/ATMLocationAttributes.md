# ATMLocationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Name of the ATM network. | 
**location_name** | **str** | Name of the ATM&#39;s location. | 
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the ATM. | 
**address** | [**AddressType**](AddressType.md) | Address of the ATM. | 
**distance** | **float** | Distance to the ATM (in miles). | 
**surcharge_free** | **bool** | Indicates if the ATM is surcharge free. | 
**accept_deposits** | **bool** | Indicates if the ATM accepts deposits. | 

## Example

```python
from unit_finance_sdk.models.atm_location_attributes import ATMLocationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ATMLocationAttributes from a JSON string
atm_location_attributes_instance = ATMLocationAttributes.from_json(json)
# print the JSON string representation of the object
print(ATMLocationAttributes.to_json())

# convert the object into a dict
atm_location_attributes_dict = atm_location_attributes_instance.to_dict()
# create an instance of ATMLocationAttributes from a dict
atm_location_attributes_from_dict = ATMLocationAttributes.from_dict(atm_location_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


