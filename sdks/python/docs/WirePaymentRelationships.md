# WirePaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**customers** | [**Relationship**](Relationship.md) |  | [optional] 
**transaction** | [**Relationship**](Relationship.md) |  | [optional] 
**wire_drawdown** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_payment_relationships import WirePaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of WirePaymentRelationships from a JSON string
wire_payment_relationships_instance = WirePaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(WirePaymentRelationships.to_json())

# convert the object into a dict
wire_payment_relationships_dict = wire_payment_relationships_instance.to_dict()
# create an instance of WirePaymentRelationships from a dict
wire_payment_relationships_from_dict = WirePaymentRelationships.from_dict(wire_payment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


