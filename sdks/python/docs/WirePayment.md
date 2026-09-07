# WirePayment

`WirePayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WirePaymentAttributes**](WirePaymentAttributes.md) |  | 
**relationships** | [**WirePaymentRelationships**](WirePaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_payment import WirePayment

# TODO update the JSON string below
json = "{}"
# create an instance of WirePayment from a JSON string
wire_payment_instance = WirePayment.from_json(json)
# print the JSON string representation of the object
print(WirePayment.to_json())

# convert the object into a dict
wire_payment_dict = wire_payment_instance.to_dict()
# create an instance of WirePayment from a dict
wire_payment_from_dict = WirePayment.from_dict(wire_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


