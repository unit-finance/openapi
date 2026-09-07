# SendDrawdownPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**SendDrawdownPaymentData**](SendDrawdownPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.send_drawdown_payment_request import SendDrawdownPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendDrawdownPaymentRequest from a JSON string
send_drawdown_payment_request_instance = SendDrawdownPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(SendDrawdownPaymentRequest.to_json())

# convert the object into a dict
send_drawdown_payment_request_dict = send_drawdown_payment_request_instance.to_dict()
# create an instance of SendDrawdownPaymentRequest from a dict
send_drawdown_payment_request_from_dict = SendDrawdownPaymentRequest.from_dict(send_drawdown_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


