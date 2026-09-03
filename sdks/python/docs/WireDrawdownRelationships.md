# WireDrawdownRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**drawdown_payment** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_drawdown_relationships import WireDrawdownRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of WireDrawdownRelationships from a JSON string
wire_drawdown_relationships_instance = WireDrawdownRelationships.from_json(json)
# print the JSON string representation of the object
print(WireDrawdownRelationships.to_json())

# convert the object into a dict
wire_drawdown_relationships_dict = wire_drawdown_relationships_instance.to_dict()
# create an instance of WireDrawdownRelationships from a dict
wire_drawdown_relationships_from_dict = WireDrawdownRelationships.from_dict(wire_drawdown_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


