# RealtimeReceivedPayment

`RealtimeReceivedPayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RealtimeReceivedPaymentAttributes**](RealtimeReceivedPaymentAttributes.md) |  | 
**relationships** | [**RealtimeReceivedPaymentRelationships**](RealtimeReceivedPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.realtime_received_payment import RealtimeReceivedPayment

# TODO update the JSON string below
json = "{}"
# create an instance of RealtimeReceivedPayment from a JSON string
realtime_received_payment_instance = RealtimeReceivedPayment.from_json(json)
# print the JSON string representation of the object
print(RealtimeReceivedPayment.to_json())

# convert the object into a dict
realtime_received_payment_dict = realtime_received_payment_instance.to_dict()
# create an instance of RealtimeReceivedPayment from a dict
realtime_received_payment_from_dict = RealtimeReceivedPayment.from_dict(realtime_received_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


