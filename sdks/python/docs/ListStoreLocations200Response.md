# ListStoreLocations200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[StoreLocation]**](StoreLocation.md) |  | 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_store_locations200_response import ListStoreLocations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListStoreLocations200Response from a JSON string
list_store_locations200_response_instance = ListStoreLocations200Response.from_json(json)
# print the JSON string representation of the object
print(ListStoreLocations200Response.to_json())

# convert the object into a dict
list_store_locations200_response_dict = list_store_locations200_response_instance.to_dict()
# create an instance of ListStoreLocations200Response from a dict
list_store_locations200_response_from_dict = ListStoreLocations200Response.from_dict(list_store_locations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


