# ListWireDrawdowns200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[WireDrawdown]**](WireDrawdown.md) |  | 
**included** | **List[Dict[str, object]]** | Array of resources requested by the include query parameter. | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.list_wire_drawdowns200_response import ListWireDrawdowns200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListWireDrawdowns200Response from a JSON string
list_wire_drawdowns200_response_instance = ListWireDrawdowns200Response.from_json(json)
# print the JSON string representation of the object
print(ListWireDrawdowns200Response.to_json())

# convert the object into a dict
list_wire_drawdowns200_response_dict = list_wire_drawdowns200_response_instance.to_dict()
# create an instance of ListWireDrawdowns200Response from a dict
list_wire_drawdowns200_response_from_dict = ListWireDrawdowns200Response.from_dict(list_wire_drawdowns200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


