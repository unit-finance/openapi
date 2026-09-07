# CreateRecurringDebitACHPaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateRecurringDebitACHPaymentDataAttributes**](CreateRecurringDebitACHPaymentDataAttributes.md) |  | 
**relationships** | [**CreateACHPaymentExistingCounterpartyDataRelationships**](CreateACHPaymentExistingCounterpartyDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_debit_ach_payment_data import CreateRecurringDebitACHPaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringDebitACHPaymentData from a JSON string
create_recurring_debit_ach_payment_data_instance = CreateRecurringDebitACHPaymentData.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringDebitACHPaymentData.to_json())

# convert the object into a dict
create_recurring_debit_ach_payment_data_dict = create_recurring_debit_ach_payment_data_instance.to_dict()
# create an instance of CreateRecurringDebitACHPaymentData from a dict
create_recurring_debit_ach_payment_data_from_dict = CreateRecurringDebitACHPaymentData.from_dict(create_recurring_debit_ach_payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


