# RecurringCapitalPartnerBookRepayment

`recurringCapitalPartnerBookRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RecurringCapitalPartnerBookRepaymentAttributes**](RecurringCapitalPartnerBookRepaymentAttributes.md) |  | 
**relationships** | [**RecurringCapitalPartnerBookRepaymentRelationships**](RecurringCapitalPartnerBookRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_capital_partner_book_repayment import RecurringCapitalPartnerBookRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCapitalPartnerBookRepayment from a JSON string
recurring_capital_partner_book_repayment_instance = RecurringCapitalPartnerBookRepayment.from_json(json)
# print the JSON string representation of the object
print(RecurringCapitalPartnerBookRepayment.to_json())

# convert the object into a dict
recurring_capital_partner_book_repayment_dict = recurring_capital_partner_book_repayment_instance.to_dict()
# create an instance of RecurringCapitalPartnerBookRepayment from a dict
recurring_capital_partner_book_repayment_from_dict = RecurringCapitalPartnerBookRepayment.from_dict(recurring_capital_partner_book_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


