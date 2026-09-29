# WireDrawdownPositivePay

`Drawdown Positive Pay` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**WireDrawdownPositivePayAttributes**](WireDrawdownPositivePayAttributes.md) |  | 
**relationships** | [**FeeRelationships**](FeeRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.wire_drawdown_positive_pay import WireDrawdownPositivePay

# TODO update the JSON string below
json = "{}"
# create an instance of WireDrawdownPositivePay from a JSON string
wire_drawdown_positive_pay_instance = WireDrawdownPositivePay.from_json(json)
# print the JSON string representation of the object
print(WireDrawdownPositivePay.to_json())

# convert the object into a dict
wire_drawdown_positive_pay_dict = wire_drawdown_positive_pay_instance.to_dict()
# create an instance of WireDrawdownPositivePay from a dict
wire_drawdown_positive_pay_from_dict = WireDrawdownPositivePay.from_dict(wire_drawdown_positive_pay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


