# CreateACHStopPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateACHStopPaymentData**](CreateACHStopPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_ach_stop_payment_request import CreateACHStopPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHStopPaymentRequest from a JSON string
create_ach_stop_payment_request_instance = CreateACHStopPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateACHStopPaymentRequest.to_json())

# convert the object into a dict
create_ach_stop_payment_request_dict = create_ach_stop_payment_request_instance.to_dict()
# create an instance of CreateACHStopPaymentRequest from a dict
create_ach_stop_payment_request_from_dict = CreateACHStopPaymentRequest.from_dict(create_ach_stop_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


