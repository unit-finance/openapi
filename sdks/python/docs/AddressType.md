# AddressType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street** | **str** | First line of an address. | 
**street2** | **str** | Optional. Second line of an address. | [optional] 
**city** | **str** | City. | 
**state** | **str** | State. For US and CA addresses, two letters representing the state (US) or province (CA). | 
**postal_code** | **str** | Postal code. | 
**country** | **str** | Two letters representing the country. | 

## Example

```python
from unit_finance_sdk.models.address_type import AddressType

# TODO update the JSON string below
json = "{}"
# create an instance of AddressType from a JSON string
address_type_instance = AddressType.from_json(json)
# print the JSON string representation of the object
print(AddressType.to_json())

# convert the object into a dict
address_type_dict = address_type_instance.to_dict()
# create an instance of AddressType from a dict
address_type_from_dict = AddressType.from_dict(address_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


