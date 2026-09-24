# GetByRoutingNumber200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Institution**](Institution.md) | Institution resource. | 

## Example

```python
from unit_finance_sdk.models.get_by_routing_number200_response import GetByRoutingNumber200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetByRoutingNumber200Response from a JSON string
get_by_routing_number200_response_instance = GetByRoutingNumber200Response.from_json(json)
# print the JSON string representation of the object
print(GetByRoutingNumber200Response.to_json())

# convert the object into a dict
get_by_routing_number200_response_dict = get_by_routing_number200_response_instance.to_dict()
# create an instance of GetByRoutingNumber200Response from a dict
get_by_routing_number200_response_from_dict = GetByRoutingNumber200Response.from_dict(get_by_routing_number200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


