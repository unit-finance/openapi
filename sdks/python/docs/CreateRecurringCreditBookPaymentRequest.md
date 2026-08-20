# CreateRecurringCreditBookPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateRecurringCreditBookPaymentData**](CreateRecurringCreditBookPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_credit_book_payment_request import CreateRecurringCreditBookPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCreditBookPaymentRequest from a JSON string
create_recurring_credit_book_payment_request_instance = CreateRecurringCreditBookPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCreditBookPaymentRequest.to_json())

# convert the object into a dict
create_recurring_credit_book_payment_request_dict = create_recurring_credit_book_payment_request_instance.to_dict()
# create an instance of CreateRecurringCreditBookPaymentRequest from a dict
create_recurring_credit_book_payment_request_from_dict = CreateRecurringCreditBookPaymentRequest.from_dict(create_recurring_credit_book_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


