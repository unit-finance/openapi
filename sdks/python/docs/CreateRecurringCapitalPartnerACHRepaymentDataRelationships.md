# CreateRecurringCapitalPartnerACHRepaymentDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | 
**counterparty** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_capital_partner_ach_repayment_data_relationships import CreateRecurringCapitalPartnerACHRepaymentDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCapitalPartnerACHRepaymentDataRelationships from a JSON string
create_recurring_capital_partner_ach_repayment_data_relationships_instance = CreateRecurringCapitalPartnerACHRepaymentDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCapitalPartnerACHRepaymentDataRelationships.to_json())

# convert the object into a dict
create_recurring_capital_partner_ach_repayment_data_relationships_dict = create_recurring_capital_partner_ach_repayment_data_relationships_instance.to_dict()
# create an instance of CreateRecurringCapitalPartnerACHRepaymentDataRelationships from a dict
create_recurring_capital_partner_ach_repayment_data_relationships_from_dict = CreateRecurringCapitalPartnerACHRepaymentDataRelationships.from_dict(create_recurring_capital_partner_ach_repayment_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


