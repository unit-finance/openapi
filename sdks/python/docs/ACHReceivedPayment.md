# ACHReceivedPayment

`AchReceivedPayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**ACHReceivedPaymentAttributes**](ACHReceivedPaymentAttributes.md) |  | 
**relationships** | [**ACHReceivedPaymentRelationships**](ACHReceivedPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.ach_received_payment import ACHReceivedPayment

# TODO update the JSON string below
json = "{}"
# create an instance of ACHReceivedPayment from a JSON string
ach_received_payment_instance = ACHReceivedPayment.from_json(json)
# print the JSON string representation of the object
print(ACHReceivedPayment.to_json())

# convert the object into a dict
ach_received_payment_dict = ach_received_payment_instance.to_dict()
# create an instance of ACHReceivedPayment from a dict
ach_received_payment_from_dict = ACHReceivedPayment.from_dict(ach_received_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


