# RecurringDebitACHPayment

`RecurringDebitAchPayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RecurringCreditACHPaymentAttributes**](RecurringCreditACHPaymentAttributes.md) |  | 
**relationships** | [**RecurringCreditACHPaymentRelationships**](RecurringCreditACHPaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_debit_ach_payment import RecurringDebitACHPayment

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringDebitACHPayment from a JSON string
recurring_debit_ach_payment_instance = RecurringDebitACHPayment.from_json(json)
# print the JSON string representation of the object
print(RecurringDebitACHPayment.to_json())

# convert the object into a dict
recurring_debit_ach_payment_dict = recurring_debit_ach_payment_instance.to_dict()
# create an instance of RecurringDebitACHPayment from a dict
recurring_debit_ach_payment_from_dict = RecurringDebitACHPayment.from_dict(recurring_debit_ach_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


