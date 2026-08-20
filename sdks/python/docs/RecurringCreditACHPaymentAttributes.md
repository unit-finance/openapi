# RecurringCreditACHPaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | 
**amount** | **int** | The amount (cents) of the payment. | 
**description** | **str** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | 
**addenda** | **str** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] 
**status** | **str** | Status of the recurring payment, one of: Active, Completed, Disabled, Deleted. | 
**number_of_payments** | **int** | Represents the number of payments that were created by this recurring payment. | 
**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. | 
**tags** | **Dict[str, object]** | See Tags. | 

## Example

```python
from unit_finance_sdk.models.recurring_credit_ach_payment_attributes import RecurringCreditACHPaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCreditACHPaymentAttributes from a JSON string
recurring_credit_ach_payment_attributes_instance = RecurringCreditACHPaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(RecurringCreditACHPaymentAttributes.to_json())

# convert the object into a dict
recurring_credit_ach_payment_attributes_dict = recurring_credit_ach_payment_attributes_instance.to_dict()
# create an instance of RecurringCreditACHPaymentAttributes from a dict
recurring_credit_ach_payment_attributes_from_dict = RecurringCreditACHPaymentAttributes.from_dict(recurring_credit_ach_payment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


