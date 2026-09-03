# UpdateACHPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateACHPaymentData**](UpdateACHPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_ach_payment_request import UpdateACHPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateACHPaymentRequest from a JSON string
update_ach_payment_request_instance = UpdateACHPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateACHPaymentRequest.to_json())

# convert the object into a dict
update_ach_payment_request_dict = update_ach_payment_request_instance.to_dict()
# create an instance of UpdateACHPaymentRequest from a dict
update_ach_payment_request_from_dict = UpdateACHPaymentRequest.from_dict(update_ach_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


