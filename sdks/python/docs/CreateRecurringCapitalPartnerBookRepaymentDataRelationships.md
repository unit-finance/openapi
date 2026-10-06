# CreateRecurringCapitalPartnerBookRepaymentDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | 
**counterparty_account** | [**Relationship**](Relationship.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_recurring_capital_partner_book_repayment_data_relationships import CreateRecurringCapitalPartnerBookRepaymentDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCapitalPartnerBookRepaymentDataRelationships from a JSON string
create_recurring_capital_partner_book_repayment_data_relationships_instance = CreateRecurringCapitalPartnerBookRepaymentDataRelationships.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCapitalPartnerBookRepaymentDataRelationships.to_json())

# convert the object into a dict
create_recurring_capital_partner_book_repayment_data_relationships_dict = create_recurring_capital_partner_book_repayment_data_relationships_instance.to_dict()
# create an instance of CreateRecurringCapitalPartnerBookRepaymentDataRelationships from a dict
create_recurring_capital_partner_book_repayment_data_relationships_from_dict = CreateRecurringCapitalPartnerBookRepaymentDataRelationships.from_dict(create_recurring_capital_partner_book_repayment_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


