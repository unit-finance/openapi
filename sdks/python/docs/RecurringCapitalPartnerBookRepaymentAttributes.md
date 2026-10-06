# RecurringCapitalPartnerBookRepaymentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the resource was created. | 
**updated_at** | **datetime** | The date the resource was updated. | [optional] 
**schedule** | [**ScheduleType**](ScheduleType.md) | The schedule of the recurring payment. | 
**description** | **str** | Repayment description (maximum of 50 characters). this will show up on the statement of the counterparty. | 
**transaction_summary_override** | **str** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] 
**tags** | **Dict[str, object]** | See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 
**number_of_repayments** | **int** | Represents the number of repayments that were created by this recurring payment. | 
**status** | **str** | Status of the recurring repayment, one of: Active, Disabled. | 

## Example

```python
from unit_finance_sdk.models.recurring_capital_partner_book_repayment_attributes import RecurringCapitalPartnerBookRepaymentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCapitalPartnerBookRepaymentAttributes from a JSON string
recurring_capital_partner_book_repayment_attributes_instance = RecurringCapitalPartnerBookRepaymentAttributes.from_json(json)
# print the JSON string representation of the object
print(RecurringCapitalPartnerBookRepaymentAttributes.to_json())

# convert the object into a dict
recurring_capital_partner_book_repayment_attributes_dict = recurring_capital_partner_book_repayment_attributes_instance.to_dict()
# create an instance of RecurringCapitalPartnerBookRepaymentAttributes from a dict
recurring_capital_partner_book_repayment_attributes_from_dict = RecurringCapitalPartnerBookRepaymentAttributes.from_dict(recurring_capital_partner_book_repayment_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


