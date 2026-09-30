# CreateCheckStopPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateCheckStopPaymentData**](CreateCheckStopPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_stop_payment_request import CreateCheckStopPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckStopPaymentRequest from a JSON string
create_check_stop_payment_request_instance = CreateCheckStopPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCheckStopPaymentRequest.to_json())

# convert the object into a dict
create_check_stop_payment_request_dict = create_check_stop_payment_request_instance.to_dict()
# create an instance of CreateCheckStopPaymentRequest from a dict
create_check_stop_payment_request_from_dict = CreateCheckStopPaymentRequest.from_dict(create_check_stop_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


