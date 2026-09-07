# WireDrawdown

`WireDrawdown` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WireDrawdownAttributes**](WireDrawdownAttributes.md) |  | 
**relationships** | [**WireDrawdownRelationships**](WireDrawdownRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_drawdown import WireDrawdown

# TODO update the JSON string below
json = "{}"
# create an instance of WireDrawdown from a JSON string
wire_drawdown_instance = WireDrawdown.from_json(json)
# print the JSON string representation of the object
print(WireDrawdown.to_json())

# convert the object into a dict
wire_drawdown_dict = wire_drawdown_instance.to_dict()
# create an instance of WireDrawdown from a dict
wire_drawdown_from_dict = WireDrawdown.from_dict(wire_drawdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


