# UpdateReceivedPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateReceivedPaymentData**](UpdateReceivedPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_received_payment_request import UpdateReceivedPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReceivedPaymentRequest from a JSON string
update_received_payment_request_instance = UpdateReceivedPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateReceivedPaymentRequest.to_json())

# convert the object into a dict
update_received_payment_request_dict = update_received_payment_request_instance.to_dict()
# create an instance of UpdateReceivedPaymentRequest from a dict
update_received_payment_request_from_dict = UpdateReceivedPaymentRequest.from_dict(update_received_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


