# StoreLocation

`StoreLocation` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | [optional] 
**attributes** | [**StoreLocationAttributes**](StoreLocationAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.store_location import StoreLocation

# TODO update the JSON string below
json = "{}"
# create an instance of StoreLocation from a JSON string
store_location_instance = StoreLocation.from_json(json)
# print the JSON string representation of the object
print(StoreLocation.to_json())

# convert the object into a dict
store_location_dict = store_location_instance.to_dict()
# create an instance of StoreLocation from a dict
store_location_from_dict = StoreLocation.from_dict(store_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


