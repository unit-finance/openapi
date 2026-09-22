# ListAtmLocations200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ATMLocation]**](ATMLocation.md) | Array of ATM Location resources. | 

## Example

```python
from unit_finance_sdk.models.list_atm_locations200_response import ListAtmLocations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAtmLocations200Response from a JSON string
list_atm_locations200_response_instance = ListAtmLocations200Response.from_json(json)
# print the JSON string representation of the object
print(ListAtmLocations200Response.to_json())

# convert the object into a dict
list_atm_locations200_response_dict = list_atm_locations200_response_instance.to_dict()
# create an instance of ListAtmLocations200Response from a dict
list_atm_locations200_response_from_dict = ListAtmLocations200Response.from_dict(list_atm_locations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


