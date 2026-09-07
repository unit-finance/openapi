# UpdateBookPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UpdateBookPaymentData**](UpdateBookPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.update_book_payment_request import UpdateBookPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBookPaymentRequest from a JSON string
update_book_payment_request_instance = UpdateBookPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBookPaymentRequest.to_json())

# convert the object into a dict
update_book_payment_request_dict = update_book_payment_request_instance.to_dict()
# create an instance of UpdateBookPaymentRequest from a dict
update_book_payment_request_from_dict = UpdateBookPaymentRequest.from_dict(update_book_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


