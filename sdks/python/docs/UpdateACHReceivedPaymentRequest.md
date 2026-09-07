# UpdateACHReceivedPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateACHReceivedPaymentData**](UpdateACHReceivedPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_ach_received_payment_request import UpdateACHReceivedPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateACHReceivedPaymentRequest from a JSON string
update_ach_received_payment_request_instance = UpdateACHReceivedPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateACHReceivedPaymentRequest.to_json())

# convert the object into a dict
update_ach_received_payment_request_dict = update_ach_received_payment_request_instance.to_dict()
# create an instance of UpdateACHReceivedPaymentRequest from a dict
update_ach_received_payment_request_from_dict = UpdateACHReceivedPaymentRequest.from_dict(update_ach_received_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


