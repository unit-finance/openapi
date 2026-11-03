# AddSecondaryRoutingNumberRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AddSecondaryRoutingNumberData**](AddSecondaryRoutingNumberData.md) |  | 

## Example

```python
from unit_finance_sdk.models.add_secondary_routing_number_request import AddSecondaryRoutingNumberRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddSecondaryRoutingNumberRequest from a JSON string
add_secondary_routing_number_request_instance = AddSecondaryRoutingNumberRequest.from_json(json)
# print the JSON string representation of the object
print(AddSecondaryRoutingNumberRequest.to_json())

# convert the object into a dict
add_secondary_routing_number_request_dict = add_secondary_routing_number_request_instance.to_dict()
# create an instance of AddSecondaryRoutingNumberRequest from a dict
add_secondary_routing_number_request_from_dict = AddSecondaryRoutingNumberRequest.from_dict(add_secondary_routing_number_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


