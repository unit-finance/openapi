# CreateABookPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateABookPaymentData**](CreateABookPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_a_book_payment_request import CreateABookPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateABookPaymentRequest from a JSON string
create_a_book_payment_request_instance = CreateABookPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateABookPaymentRequest.to_json())

# convert the object into a dict
create_a_book_payment_request_dict = create_a_book_payment_request_instance.to_dict()
# create an instance of CreateABookPaymentRequest from a dict
create_a_book_payment_request_from_dict = CreateABookPaymentRequest.from_dict(create_a_book_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


