# CreateRecurringDebitACHPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateRecurringDebitACHPaymentData**](CreateRecurringDebitACHPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_debit_ach_payment_request import CreateRecurringDebitACHPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringDebitACHPaymentRequest from a JSON string
create_recurring_debit_ach_payment_request_instance = CreateRecurringDebitACHPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringDebitACHPaymentRequest.to_json())

# convert the object into a dict
create_recurring_debit_ach_payment_request_dict = create_recurring_debit_ach_payment_request_instance.to_dict()
# create an instance of CreateRecurringDebitACHPaymentRequest from a dict
create_recurring_debit_ach_payment_request_from_dict = CreateRecurringDebitACHPaymentRequest.from_dict(create_recurring_debit_ach_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


