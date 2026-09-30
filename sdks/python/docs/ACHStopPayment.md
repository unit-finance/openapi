# ACHStopPayment

`achStopPayment` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ACHStopPaymentAttributes**](ACHStopPaymentAttributes.md) |  | 
**relationships** | [**AccountEndOfDayRelationships**](AccountEndOfDayRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_stop_payment import ACHStopPayment

# TODO update the JSON string below
json = "{}"
# create an instance of ACHStopPayment from a JSON string
ach_stop_payment_instance = ACHStopPayment.from_json(json)
# print the JSON string representation of the object
print(ACHStopPayment.to_json())

# convert the object into a dict
ach_stop_payment_dict = ach_stop_payment_instance.to_dict()
# create an instance of ACHStopPayment from a dict
ach_stop_payment_from_dict = ACHStopPayment.from_dict(ach_stop_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


