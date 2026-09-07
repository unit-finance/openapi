# UpdateRealtimeReceivedPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**UpdateACHReceivedPaymentDataAttributes**](UpdateACHReceivedPaymentDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_realtime_received_payment_data import UpdateRealtimeReceivedPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRealtimeReceivedPaymentData from a JSON string
update_realtime_received_payment_data_instance = UpdateRealtimeReceivedPaymentData.from_json(json)
# print the JSON string representation of the object
print(UpdateRealtimeReceivedPaymentData.to_json())

# convert the object into a dict
update_realtime_received_payment_data_dict = update_realtime_received_payment_data_instance.to_dict()
# create an instance of UpdateRealtimeReceivedPaymentData from a dict
update_realtime_received_payment_data_from_dict = UpdateRealtimeReceivedPaymentData.from_dict(update_realtime_received_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


