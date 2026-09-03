# RealtimeReceivedPaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**receive_payment_transaction** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.realtime_received_payment_relationships import RealtimeReceivedPaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RealtimeReceivedPaymentRelationships from a JSON string
realtime_received_payment_relationships_instance = RealtimeReceivedPaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(RealtimeReceivedPaymentRelationships.to_json())

# convert the object into a dict
realtime_received_payment_relationships_dict = realtime_received_payment_relationships_instance.to_dict()
# create an instance of RealtimeReceivedPaymentRelationships from a dict
realtime_received_payment_relationships_from_dict = RealtimeReceivedPaymentRelationships.from_dict(realtime_received_payment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


