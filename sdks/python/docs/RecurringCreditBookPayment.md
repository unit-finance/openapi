# RecurringCreditBookPayment

`RecurringCreditBookPayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RecurringCreditBookPaymentAttributes**](RecurringCreditBookPaymentAttributes.md) |  | 
**relationships** | [**RecurringCreditBookPaymentRelationships**](RecurringCreditBookPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_credit_book_payment import RecurringCreditBookPayment

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCreditBookPayment from a JSON string
recurring_credit_book_payment_instance = RecurringCreditBookPayment.from_json(json)
# print the JSON string representation of the object
print(RecurringCreditBookPayment.to_json())

# convert the object into a dict
recurring_credit_book_payment_dict = recurring_credit_book_payment_instance.to_dict()
# create an instance of RecurringCreditBookPayment from a dict
recurring_credit_book_payment_from_dict = RecurringCreditBookPayment.from_dict(recurring_credit_book_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


