# CreateRecurringCreditBookPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateRecurringCreditBookPaymentDataAttributes**](CreateRecurringCreditBookPaymentDataAttributes.md) |  | 
**relationships** | [**CreateABookPaymentDataRelationships**](CreateABookPaymentDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_credit_book_payment_data import CreateRecurringCreditBookPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCreditBookPaymentData from a JSON string
create_recurring_credit_book_payment_data_instance = CreateRecurringCreditBookPaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCreditBookPaymentData.to_json())

# convert the object into a dict
create_recurring_credit_book_payment_data_dict = create_recurring_credit_book_payment_data_instance.to_dict()
# create an instance of CreateRecurringCreditBookPaymentData from a dict
create_recurring_credit_book_payment_data_from_dict = CreateRecurringCreditBookPaymentData.from_dict(create_recurring_credit_book_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


