# RecurringCapitalPartnerACHRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_capital_partner_ach_repayment_relationships import RecurringCapitalPartnerACHRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCapitalPartnerACHRepaymentRelationships from a JSON string
recurring_capital_partner_ach_repayment_relationships_instance = RecurringCapitalPartnerACHRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(RecurringCapitalPartnerACHRepaymentRelationships.to_json())

# convert the object into a dict
recurring_capital_partner_ach_repayment_relationships_dict = recurring_capital_partner_ach_repayment_relationships_instance.to_dict()
# create an instance of RecurringCapitalPartnerACHRepaymentRelationships from a dict
recurring_capital_partner_ach_repayment_relationships_from_dict = RecurringCapitalPartnerACHRepaymentRelationships.from_dict(recurring_capital_partner_ach_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


