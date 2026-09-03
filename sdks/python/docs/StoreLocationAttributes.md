# StoreLocationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store_id** | **str** | Identifier of the retail store that supports Cash Deposits. This field will be used as storeId when Creating a Cash Deposit Barcode. | 
**retailer_name** | **str** | Name of the retail store that supports Cash Deposits. | 
**phone** | [**PhoneType**](PhoneType.md) | Phone of the retail store. | 
**address** | [**AddressType**](AddressType.md) | Address of the retail store. | 
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of the retail store. | 
**distance** | **float** | Distance to the retail store (in miles). | 

## Example

```python
from unit_finance_sdk.models.store_location_attributes import StoreLocationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of StoreLocationAttributes from a JSON string
store_location_attributes_instance = StoreLocationAttributes.from_json(json)
# print the JSON string representation of the object
print(StoreLocationAttributes.to_json())

# convert the object into a dict
store_location_attributes_dict = store_location_attributes_instance.to_dict()
# create an instance of StoreLocationAttributes from a dict
store_location_attributes_from_dict = StoreLocationAttributes.from_dict(store_location_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


