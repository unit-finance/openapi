# RealtimeReceivedPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the received payment was created. Common to all receive payment types. | 
**status** | **str** | The status of the Received Payment. One of Pending, Completed, Returned, Rejected, or TimedOut. See Received Payment Statuses. | 
**amount** | **int** | The amount (cents) of the RTP received payment. | 
**description** | **str** | Payment description / remittance information. | 
**counterparty** | [**RealTimeCounterpartyType**](RealTimeCounterpartyType.md) | The party on the other end of the transaction. For RTP received payments, this is always the originator (in ISO20022 terminology this is referred to as the Debtor). | 
**return_reason** | **str** | Present when status is Returned. See RTP return reasons. | [optional] 
**reject_reason** | **str** | Present when status is Rejected. See RTP reject reasons. | [optional] 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.realtime_received_payment_attributes import RealtimeReceivedPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RealtimeReceivedPaymentAttributes from a JSON string
realtime_received_payment_attributes_instance = RealtimeReceivedPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(RealtimeReceivedPaymentAttributes.to_json())

# convert the object into a dict
realtime_received_payment_attributes_dict = realtime_received_payment_attributes_instance.to_dict()
# create an instance of RealtimeReceivedPaymentAttributes from a dict
realtime_received_payment_attributes_from_dict = RealtimeReceivedPaymentAttributes.from_dict(realtime_received_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


