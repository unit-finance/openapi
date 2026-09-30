# RecurringCapitalPartnerBookRepaymentRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_account** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty** | [**Relationship**](Relationship.md) |  | [optional] 
**counterparty_account** | [**Relationship**](Relationship.md) |  | [optional] 
**customer** | [**Relationship**](Relationship.md) |  | [optional] 
**org** | [**Relationship**](Relationship.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.recurring_capital_partner_book_repayment_relationships import RecurringCapitalPartnerBookRepaymentRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringCapitalPartnerBookRepaymentRelationships from a JSON string
recurring_capital_partner_book_repayment_relationships_instance = RecurringCapitalPartnerBookRepaymentRelationships.from_json(json)
# print the JSON string representation of the object
print(RecurringCapitalPartnerBookRepaymentRelationships.to_json())

# convert the object into a dict
recurring_capital_partner_book_repayment_relationships_dict = recurring_capital_partner_book_repayment_relationships_instance.to_dict()
# create an instance of RecurringCapitalPartnerBookRepaymentRelationships from a dict
recurring_capital_partner_book_repayment_relationships_from_dict = RecurringCapitalPartnerBookRepaymentRelationships.from_dict(recurring_capital_partner_book_repayment_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


