# UpdateRealtimeReceivedPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateRealtimeReceivedPaymentData**](UpdateRealtimeReceivedPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_realtime_received_payment_request import UpdateRealtimeReceivedPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRealtimeReceivedPaymentRequest from a JSON string
update_realtime_received_payment_request_instance = UpdateRealtimeReceivedPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateRealtimeReceivedPaymentRequest.to_json())

# convert the object into a dict
update_realtime_received_payment_request_dict = update_realtime_received_payment_request_instance.to_dict()
# create an instance of UpdateRealtimeReceivedPaymentRequest from a dict
update_realtime_received_payment_request_from_dict = UpdateRealtimeReceivedPaymentRequest.from_dict(update_realtime_received_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


