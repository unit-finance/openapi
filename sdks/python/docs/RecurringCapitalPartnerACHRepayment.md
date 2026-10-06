# RecurringCapitalPartnerACHRepayment

`recurringCapitalPartnerAchRepayment` is a JSON:API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**id** | **str** |  | 
**attributes** | [**RecurringACHRepaymentAttributes**](RecurringACHRepaymentAttributes.md) |  | 
**relationships** | [**RecurringCapitalPartnerACHRepaymentRelationships**](RecurringCapitalPartnerACHRepaymentRelationships.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_capital_partner_ach_repayment import RecurringCapitalPartnerACHRepayment

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCapitalPartnerACHRepayment from a JSON string
recurring_capital_partner_ach_repayment_instance = RecurringCapitalPartnerACHRepayment.from_json(json)
# print the JSON string representation of the object
print(RecurringCapitalPartnerACHRepayment.to_json())

# convert the object into a dict
recurring_capital_partner_ach_repayment_dict = recurring_capital_partner_ach_repayment_instance.to_dict()
# create an instance of RecurringCapitalPartnerACHRepayment from a dict
recurring_capital_partner_ach_repayment_from_dict = RecurringCapitalPartnerACHRepayment.from_dict(recurring_capital_partner_ach_repayment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


