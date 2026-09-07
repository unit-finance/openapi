# CreateRecurringCreditACHPaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateRecurringCreditACHPaymentData**](CreateRecurringCreditACHPaymentData.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_credit_ach_payment_request import CreateRecurringCreditACHPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCreditACHPaymentRequest from a JSON string
create_recurring_credit_ach_payment_request_instance = CreateRecurringCreditACHPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCreditACHPaymentRequest.to_json())

# convert the object into a dict
create_recurring_credit_ach_payment_request_dict = create_recurring_credit_ach_payment_request_instance.to_dict()
# create an instance of CreateRecurringCreditACHPaymentRequest from a dict
create_recurring_credit_ach_payment_request_from_dict = CreateRecurringCreditACHPaymentRequest.from_dict(create_recurring_credit_ach_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


