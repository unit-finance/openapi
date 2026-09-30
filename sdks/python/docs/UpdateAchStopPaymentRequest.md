# UpdateAchStopPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateAchStopPaymentData**](UpdateAchStopPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_ach_stop_payment_request import UpdateAchStopPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAchStopPaymentRequest from a JSON string
update_ach_stop_payment_request_instance = UpdateAchStopPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAchStopPaymentRequest.to_json())

# convert the object into a dict
update_ach_stop_payment_request_dict = update_ach_stop_payment_request_instance.to_dict()
# create an instance of UpdateAchStopPaymentRequest from a dict
update_ach_stop_payment_request_from_dict = UpdateAchStopPaymentRequest.from_dict(update_ach_stop_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


